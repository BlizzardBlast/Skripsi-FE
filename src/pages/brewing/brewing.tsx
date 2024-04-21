import MetaTag from '@/components/meta-tag/meta-tag';
import BrewingSectionOne from '@/pages/brewing/brewing-one.tsx';
import BrewingSectionThree from '@/pages/brewing/brewing-three.tsx';
import BrewingSectionTwo from '@/pages/brewing/brewing-two.tsx';

export default function BrewingPage(): JSX.Element {
  const preloadedImage = [
    { href: '/src/assets/brewing_page_bg.webp', type: 'image/webp' }
  ];

  return (
    <>
      <MetaTag
        title='Kofebin | Brewing'
        description='How to brew by Kofebin'
        images={preloadedImage}
      />
      <BrewingSectionOne />
      <BrewingSectionTwo />
      <BrewingSectionThree />
    </>
  );
}
