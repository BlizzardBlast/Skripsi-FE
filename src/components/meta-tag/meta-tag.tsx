import { type ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

type ImageType = {
  href: string;
  type: string;
};

type MetaTagProps = {
  title: string;
  description: string;
  images?: ImageType[];
};

export default function MetaTag({
  title,
  description,
  images
}: Readonly<MetaTagProps>): ReactNode {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />

      {/* Facebook tags */}
      <meta property='og:type' content={'website'} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />

      {/* Twitter tags */}
      <meta name='twitter:creator' content={'Frey Darmasurya'} />
      <meta name='twitter:card' content={'website'} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />

      {images?.map((img) => (
        <link
          rel='preload'
          fetchPriority='high'
          as='image'
          href={img.href}
          type={img.type}
          key={img.href}
        />
      ))}
    </Helmet>
  );
}
