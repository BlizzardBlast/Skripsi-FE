import Paragraph from '@/components/typography/paragraph.tsx';
import { Button } from '@/components/ui/button.tsx';

type QuizStepZeroProps = {
  handleNextStep: () => void;
};

export default function QuizStepZero({
  handleNextStep
}: Readonly<QuizStepZeroProps>): JSX.Element {
  return (
    <div
      className={`min-h-[80vh] w-full bg-[url('@/assets/fyc_bg.svg')] bg-cover bg-center bg-no-repeat text-white`}
    >
      <div className='flex w-1/3 flex-col gap-10 p-20'>
        <h1 className='mb-4 scroll-m-20 text-5xl font-bold tracking-tight'>
          Coffee
        </h1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </Paragraph>
        <Button
          className='w-[5rem] rounded-full bg-white text-primary-text-color hover:bg-quaternary-color hover:text-[#6B240C]'
          onClick={handleNextStep}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
