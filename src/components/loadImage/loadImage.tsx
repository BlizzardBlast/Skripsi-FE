import { useState } from 'react';

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

  const handleImageLoad = (): void => {
    setLoading(false);
  };

  const loadingClass = `animate-pulse bg-gray-300 ${classes}`;
  const imageClass = `${classes} h-auto`;

  return (
    <div className='w-full'>
      <div className={loading ? loadingClass : ''}>
        <img
          src={source}
          alt={alternative}
          onLoad={handleImageLoad}
          className={imageClass}
          style={{ display: loading ? 'none' : 'block' }}
          loading={lazy ? 'lazy' : 'eager'}
        />
      </div>
    </div>
  );
};

export default LoadImage;
