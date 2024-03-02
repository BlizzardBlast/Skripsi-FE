import { cn } from '@/lib/utils.ts';
import { useEffect, useRef, useState } from 'react';

type LoadImageProps = {
  source: string;
  alternative: string;
  classes: string;
  lazy?: boolean;
};

const LoadImage = ({
  source,
  alternative,
  classes,
  lazy = false
}: LoadImageProps): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const imageElement = useRef<HTMLImageElement>(null);

  const handleImageLoad = (): void => {
    setLoading(false);
  };

  useEffect(() => {
    const imageElementCurrent = imageElement.current;

    if (imageElementCurrent !== null && imageElementCurrent !== undefined) {
      imageElementCurrent.addEventListener('load', handleImageLoad);
      return () => {
        imageElementCurrent.removeEventListener('load', handleImageLoad);
      };
    }
  }, [imageElement]);

  const loadingClass = cn(classes, 'bg-transparent');
  const imageClass = cn('h-auto', classes);

  return (
    <div className='w-full'>
      <div className={loading ? loadingClass : ''}>
        <img
          ref={imageElement}
          src={source}
          alt={alternative}
          className={imageClass}
          loading={lazy ? 'lazy' : 'eager'}
        />
      </div>
    </div>
  );
};

export default LoadImage;
