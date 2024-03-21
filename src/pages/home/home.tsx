import MetaTag from '@/components/metaTag/metaTag';
import HomeThree from '@/pages/home/HomeThree.tsx';
import HomeOne from '@/pages/home/homeOne.tsx';
import HomeTwo from '@/pages/home/homeTwo.tsx';
import { VITE_FETCH_URL } from '@/utils/urls.ts';

export default function Home(): JSX.Element {
  console.log(VITE_FETCH_URL);
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
