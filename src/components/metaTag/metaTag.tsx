import { type ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

type MetaTagProps = {
  title: string;
  description: string;
};

export default function MetaTag({
  title,
  description
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
    </Helmet>
  );
}
