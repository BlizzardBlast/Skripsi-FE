import { useToast } from '@/components/ui/use-toast';
import imageCompression from 'browser-image-compression';
import { useCallback, useEffect, useState } from 'react';

type UseFileHandlerReturn = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  loading: boolean;
  image: string;
};

export default function useFileHandler(): UseFileHandlerReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [image, setImage] = useState<string>('');
  const { toast } = useToast();
  useEffect(() => {
    if (error !== '') {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error
      });
    }
  }, [error, toast]);
  const readFileAsDataURL = async (file: File | null): Promise<unknown> =>
    await new Promise((resolve, reject) => {
      if (file == null) {
        reject(new Error('File belum diupload atau file tidak valid.'));
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = () => {
        reject(
          new Error(`Kesalahan membaca file: ${reader.error?.message ?? ''}`)
        );
      };

      reader.readAsDataURL(file);
    });
  const handleFiles = useCallback(async (files: FileList) => {
    setLoading(true);

    const file = files[0];

    const allowedExtensions = [
      '.jpg',
      '.jpeg',
      '.png',
      '.gif',
      '.bmp',
      '.tiff',
      '.svg'
    ];

    if (file.size / 1024 / 1024 > 15) {
      setLoading(false);
      throw Error(
        'Ada kesalahan dalam mengunggah file, ukuran file lebih dari 15MB'
      );
    }

    const fileExtension = file.name.substring(file.name.lastIndexOf('.'));

    if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
      setLoading(false);
      throw Error(
        'Error: Invalid file format. Please upload JPG, JPEG, or PNG files.'
      );
    }

    if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
      setLoading(false);
      throw Error(
        'Error: Invalid file format. Please upload JPG, JPEG, PNG, DOC, DOCX, XLSX, XLS, or PDF files.'
      );
    }

    setError('');

    try {
      const options = {
        maxSizeMB: 0.9 * 0.7, // 0.7 karena nanti akan diubah ke base64 lagi, yang akan menaikkan ukurannya sekitar 33%.
        maxIteration: 30,
        fileType: 'image/jpeg'
      };
      const compressedFile = await imageCompression(file, options);
      const compressedBase64Image = (await readFileAsDataURL(
        compressedFile
      )) as string;

      setImage(compressedBase64Image);
    } catch (err) {
      const errors = err as Error;
      setError(errors.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e?.target?.files?.[0] != null) {
        try {
          await handleFiles(e.target.files);
        } catch (err) {
          const errors = err as Error;
          setError(errors.message);
        }
      }
    },
    [handleFiles]
  );

  return { handleChange, loading, image } as const;
}
