import Paragraph from '@/components/typography/paragraph.tsx';

export default function BrewingSectionOne(): JSX.Element {
  return (
    <div
      className={`flex min-h-[70vh] w-full flex-col items-center justify-center text-pretty bg-[url('@/assets/brewing_page_bg.webp')] bg-cover bg-fixed bg-center bg-no-repeat py-5`}
    >
      <h1 className='mb-4 scroll-m-20 text-center text-5xl font-black tracking-tight'>
        Brewing
      </h1>
      <div className='w-8/12'>
        <Paragraph className='text-center text-2xl text-white'>
          Brewing is the cornerstone of coffee perfection. Explore the myriad
          methods available, each with its own unique flavor profile. Whether
          you prefer the rich depth of a French press or the clarity of a
          pour-over, mastering the art of brewing unlocks a world of coffee
          delights.
        </Paragraph>
      </div>
    </div>
  );
}
