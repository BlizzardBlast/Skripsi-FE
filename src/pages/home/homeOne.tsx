import Paragraph from '@/components/typography/paragraph.tsx';
import { Button } from '@/components/ui/button.tsx';
import LeafImage from '@/pages/home/leaf-image.tsx';
import { Link } from 'react-router-dom';
export default function HomeOne(): JSX.Element {
  return (
    <div className='flex min-h-[70vh] flex-col items-center justify-center py-5'>
      <LeafImage />
      <h1 className='mb-4 scroll-m-20 text-center text-5xl font-black tracking-tight'>
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
        className='mt-6 rounded-2xl bg-primary-color px-5 py-6 text-xl font-extralight tracking-tight hover:bg-secondary-color'
      >
        <Link to='/find-your-coffee' aria-label='Discover Your Preference'>
          Discover Your Preference
        </Link>
      </Button>
    </div>
  );
}
