import MetaTag from '@/components/meta-tag/meta-tag';
import HomeThree from '@/pages/home/home-three';
import HomeOne from '@/pages/home/home-one';
import HomeTwo from '@/pages/home/home-two';

export default function Home(): JSX.Element {
  const preloadedImage = [
    { href: '/src/assets/coffee_beans_bg.svg', type: 'image/svg+xml' }
  ];

  return (
    <>
      <MetaTag
        title='Kofebin | Home Page'
        description='The home page for Kofebin.'
        images={preloadedImage}
      />
      <HomeOne />
      <HomeTwo />
      <HomeThree />
    </>
  );
}
