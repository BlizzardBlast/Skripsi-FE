import MetaTag from '@/components/meta-tag/meta-tag.tsx';
import Paragraph from '@/components/typography/paragraph.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useNavigate } from 'react-router-dom';

export default function FindYourCoffeeResultPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className='flex min-h-[80vh] items-center justify-center'>
      <MetaTag
        title='Kofebin | Your Coffee Result'
        description='Here is your preferred coffee beans!'
      />
      <div
        className={`min-h-[80vh] w-full bg-[url('@/assets/fyc_bg.svg')] bg-cover bg-center bg-no-repeat text-white`}
      >
        <div className='flex w-full flex-col gap-10 p-20 md:w-2/5'>
          <h1 className='mb-4 scroll-m-20 text-5xl font-bold tracking-tight'>
            Your Coffee Type is: MUEHEHEHEHE
          </h1>
          <Paragraph>Note: This page is not done yet.</Paragraph>
          <Button
            className='w-[15rem] rounded-full bg-white text-primary-text-color hover:bg-quaternary-color hover:text-[#6B240C]'
            onClick={() => {
              navigate('/');
            }}
          >
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
