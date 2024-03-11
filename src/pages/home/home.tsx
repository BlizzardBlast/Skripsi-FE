import MetaTag from '@/components/metaTag/metaTag';
import HomeThree from '@/pages/home/HomeThree.tsx';
import HomeOne from '@/pages/home/homeOne.tsx';
import HomeTwo from '@/pages/home/homeTwo.tsx';

export default function Home(): JSX.Element {
  return (
    <>
      <MetaTag
        title='Kofebin | Home Page'
        description='The home page for Kofebin.'
        name='Frey Darmasurya'
        type='website'
      />
      <HomeOne />
      <HomeTwo />
      <HomeThree />
    </>
  );
}
