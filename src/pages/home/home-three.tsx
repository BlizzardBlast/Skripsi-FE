import CherryHarvest from '@/assets/cherryharvest.svg';
import LoadImage from '@/components/load-image/load-image';
import HeadingOne from '@/components/typography/headingOne.tsx';
import Paragraph from '@/components/typography/paragraph.tsx';

export default function HomeThree(): JSX.Element {
  return (
    <div className='flex min-h-[70vh] flex-col items-center justify-around bg-primary-color py-10 md:flex-row'>
      <div className='flex flex-[6] items-center justify-center'>
        <article className='flex min-h-80 w-[80%] flex-col items-center justify-center text-pretty rounded-3xl px-7 text-center text-white'>
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
