import FallbackImage from '@/assets/fallback-image.png';
import Spinner from '@/components/spinner/spinner';
import { cn } from '@/lib/utils.ts';
import { useEffect, useRef, useState } from 'react';

type LoadImageProps = {
  source: string;
  testId?: string;
  alternative: string;
  classes: string;
  lazy?: boolean;
  divClasses?: string;
  isLoading?: boolean;
  onClick?: () => void;
};

const LoadImage = ({
  source,
  testId,
  alternative,
  classes,
  lazy = false,
  divClasses = '',
  isLoading = false,
  onClick
}: LoadImageProps): JSX.Element => {
  const [hasError, setHasError] = useState(false);
  const handleError = (): void => {
    setHasError(true);
  };
  const imageElement = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setHasError(false);
  }, [source]);

  const loadingClass = cn(classes, 'bg-transparent');
  const imageClass = cn('h-auto', classes);
  const divClass = cn('w-full', divClasses);

  return (
    <div className={divClass} onClick={onClick} data-testid='img_div'>
      <div className={isLoading ? loadingClass : ''}>
        {isLoading ? (
          <div className='flex h-full w-full items-center justify-center border'>
            <Spinner />
          </div>
        ) : (
          <img
            ref={imageElement}
            src={hasError ? FallbackImage : source}
            alt={alternative}
            className={imageClass}
            loading={lazy ? 'lazy' : 'eager'}
            onError={handleError}
            data-testid={testId}
          />
        )}
      </div>
    </div>
  );
};

export default LoadImage;
