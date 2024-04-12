import Paragraph from '@/components/typography/paragraph.tsx';

export default function BrewingSectionOne(): JSX.Element {
  return (
    <div
      className={`flex min-h-[70vh] w-full flex-col items-center justify-center text-pretty bg-[url('@/assets/brewing_page_bg.svg')] bg-cover bg-center bg-no-repeat py-5`}
    >
      <h1 className='mb-4 scroll-m-20 text-center text-5xl font-black tracking-tight'>
        Brewing
      </h1>
      <div className='w-8/12'>
        <Paragraph className='text-center text-2xl text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </Paragraph>
      </div>
    </div>
  );
}
