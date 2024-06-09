import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: 'Your OTP must be 6 characters.'
  })
});

type UseChangePasswordOtpReturnType = {
  form: ReturnType<typeof useForm<z.infer<typeof FormSchema>>>;
  onSubmit: (values: z.infer<typeof FormSchema>) => Promise<void>;
};

export default function useChangePasswordOtp(): UseChangePasswordOtpReturnType {
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: ''
    }
  });

  async function onSubmit(data: z.infer<typeof FormSchema>): Promise<void> {
    if (data.pin === '999999') {
      navigate('/change-password/new-password');
    } else {
      toast({
        variant: 'destructive',
        title: 'Invalid OTP',
        description: 'The OTP you entered is invalid. Please try again.'
      });
    }
  }

  return { form, onSubmit } as const;
}
