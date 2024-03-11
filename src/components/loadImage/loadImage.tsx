import FallbackImage from '@/assets/fallback-image.png';
import { cn } from '@/lib/utils.ts';
import { useEffect, useRef, useState } from 'react';

type LoadImageProps = {
  source: string;
  alternative: string;
  classes: string;
  lazy?: boolean;
  divClasses?: string;
};

const LoadImage = ({
  source,
  alternative,
  classes,
  lazy = false,
  divClasses = ''
}: LoadImageProps): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const handleError = (): void => {
    setHasError(true);
  };
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
  const divClass = cn('w-full', divClasses);

  return (
    <div className={divClass}>
      <div className={loading ? loadingClass : ''}>
        <img
          ref={imageElement}
          src={hasError ? FallbackImage : source}
          alt={alternative}
          className={imageClass}
          loading={lazy ? 'lazy' : 'eager'}
          onError={handleError}
          role='presentation'
        />
      </div>
    </div>
  );
};

export default LoadImage;
