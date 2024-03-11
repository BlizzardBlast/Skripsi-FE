import { type ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

type MetaTagProps = {
  title: string;
  description: string;
  name: string;
  type: string;
};

export default function MetaTag({
  title,
  description,
  name,
  type
}: Readonly<MetaTagProps>): ReactNode {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />

      {/* Facebook tags */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />

      {/* Twitter tags */}
      <meta name='twitter:creator' content={name} />
      <meta name='twitter:card' content={type} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
    </Helmet>
  );
}
