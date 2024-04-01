import FrenchPressImage from '@/assets/french_press_image.svg';
import DripImage from '@/assets/drip_image.svg';
import SiphonImage from '@/assets/siphone_image.svg';
import LoadImage from '@/components/load-image/load-image.tsx';
import HeadingTwo from '@/components/typography/headingTwo.tsx';
import Paragraph from '@/components/typography/paragraph.tsx';

export default function BrewingSectionThree(): JSX.Element {
  return (
    <div className='flex min-h-[70vh] flex-col flex-wrap items-center justify-center gap-10 py-16 md:flex-row'>
      <div className='flex h-64 w-[90vw] flex-wrap rounded-3xl bg-[#BD7150] p-10 md:w-[40vw]'>
        <LoadImage
          source={FrenchPressImage}
          alternative='French Press Image'
          lazy
          classes='w-[30rem] h-44'
          divClasses='flex flex-1 justify-center items-center'
        />
        <div className='flex flex-[4] flex-col items-center justify-center text-center'>
          <HeadingTwo>French Press</HeadingTwo>
          <Paragraph className='mt-5 text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Paragraph>
        </div>
      </div>

      <div className='flex h-64 w-[90vw] flex-wrap rounded-3xl bg-[#994D1C] p-10 md:w-[40vw]'>
        <LoadImage
          source={DripImage}
          alternative='Drip Image'
          lazy
          classes='w-[30rem] h-44'
          divClasses='flex flex-1 justify-center items-center'
        />
        <div className='flex flex-[4] flex-col items-center justify-center text-center'>
          <HeadingTwo>Drip</HeadingTwo>
          <Paragraph className='mt-5 text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Paragraph>
        </div>
      </div>

      <div className='flex h-64 w-[90vw] flex-wrap rounded-3xl bg-[#A56A44] p-10 md:w-[40vw]'>
        <LoadImage
          source={SiphonImage}
          alternative='Siphon Image'
          lazy
          classes='w-[30rem] h-44'
          divClasses='flex flex-1 justify-center items-center'
        />
        <div className='flex flex-[4] flex-col items-center justify-center text-center'>
          <HeadingTwo>Siphon</HeadingTwo>
          <Paragraph className='mt-5 text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
