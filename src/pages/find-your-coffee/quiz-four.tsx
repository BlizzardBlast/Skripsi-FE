import Paragraph from '@/components/typography/paragraph.tsx';
import { Button } from '@/components/ui/button.tsx';
import { motion } from 'framer-motion';

type QuizStepFourProps = {
  handleNextStep: (newAnswer: string) => void;
};

export default function QuizStepFour({
  handleNextStep
}: Readonly<QuizStepFourProps>): JSX.Element {
  return (
    <motion.div
      className={`min-h-[80vh] w-full bg-[url('@/assets/fyc4_bg.webp')] bg-cover bg-fixed bg-center bg-no-repeat text-primary-text-color`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
      key={'quiz-four-motion-div'}
    >
      <div className='float-right flex w-full flex-col gap-10 p-20 md:w-2/5'>
        <h1 className='mb-4 scroll-m-20 text-5xl font-bold tracking-tight'>
          Sweetness
        </h1>
        <Paragraph className='text-xl'>
          Before you said oh sweetness came on how much you add sugar. Coffee
          naturally has its own sugar. However the longer you roasted that
          natural sugar will turn into bold (bitter) flavor
        </Paragraph>
        <div className='flex gap-5'>
          <Button
            className='h-auto w-[10rem] text-wrap rounded-full bg-white text-primary-text-color hover:bg-quaternary-color hover:text-[#6B240C]'
            onClick={() => {
              handleNextStep('Sweet');
            }}
          >
            I like sweet coffee
          </Button>
          <Button
            className='h-auto w-[10rem] text-wrap rounded-full bg-white text-primary-text-color hover:bg-quaternary-color hover:text-[#6B240C]'
            onClick={() => {
              handleNextStep('Bitter');
            }}
          >
            I like bitter coffee
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
