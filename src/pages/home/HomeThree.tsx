import CherryHarvest from '@/assets/cherryharvest.svg';
import LoadImage from '@/components/loadImage/loadImage.tsx';
import HeadingOne from '@/components/typography/headingOne.tsx';
import Paragraph from '@/components/typography/paragraph.tsx';

export default function HomeTwo(): JSX.Element {
  return (
    <div className='flex min-h-[70vh] items-center justify-around bg-primary-color py-5'>
      <div className='flex flex-[6] items-center justify-center'>
        <article className='flex min-h-80 w-[80%] flex-col items-center justify-start text-pretty rounded-3xl px-7 text-center text-white sm:justify-center'>
          <HeadingOne className='text-center'>
            Coffee beans from all over the world
          </HeadingOne>
          <Paragraph className='mt-5 text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut nostrud exercitation
          </Paragraph>
        </article>
      </div>
      <div className='flex flex-[4] items-center justify-center ps-3'>
        <LoadImage
          source={CherryHarvest}
          alternative='Coffee_Harvest'
          lazy
          classes='h-80 w-80'
          divClasses='flex justify-center items-center'
        />
      </div>
    </div>
  );
}
