import Paragraph from '@/components/typography/paragraph.tsx';
import { Button } from '@/components/ui/button.tsx';
import LeafImage from '@/pages/home/leaf-image.tsx';
import { Link } from 'react-router-dom';

export default function Home(): JSX.Element {
  return (
    <div className='flex h-[70vh] flex-col items-center justify-center'>
      <LeafImage />
      <h1 className='mb-4 scroll-m-20 text-5xl font-black tracking-tight'>
        Discover Your Coffee Preference
      </h1>
      <div className='w-8/12'>
        <Paragraph className='text-center text-2xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </Paragraph>
      </div>
      <Button
        asChild
        className='mt-6 rounded-2xl bg-[#E48F45] px-5 py-6 text-xl font-extralight tracking-tight hover:bg-[#994D1C]'
      >
        <Link to='/find-your-coffee'>Discover Your Preference</Link>
      </Button>
    </div>
  );
}
