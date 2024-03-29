import MetaTag from '@/components/meta-tag/meta-tag';
import HomeThree from '@/pages/home/home-three';
import HomeOne from '@/pages/home/home-one';
import HomeTwo from '@/pages/home/home-two';

export default function Home(): JSX.Element {
  return (
    <>
      <MetaTag
        title='Kofebin | Home Page'
        description='The home page for Kofebin.'
      />
      <HomeOne />
      <HomeTwo />
      <HomeThree />
    </>
  );
}
