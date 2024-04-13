import Paragraph from '@/components/typography/paragraph.tsx';
import { Button } from '@/components/ui/button.tsx';
import wrapAsyncFunction from '@/utils/wrap-async-function.ts';
import { motion } from 'framer-motion';

type QuizStepThreeProps = {
  handleNextStep: (newAnswer: string) => Promise<void>;
};

export default function QuizStepThree({
  handleNextStep
}: Readonly<QuizStepThreeProps>): JSX.Element {
  return (
    <motion.div
      className={`min-h-[80vh] w-full bg-[url('@/assets/fyc3_bg.webp')] bg-cover bg-fixed bg-center bg-no-repeat text-white`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
      key={'quiz-three-motion-div'}
    >
      <div className='float-right flex w-full flex-col gap-10 p-20 md:w-2/5'>
        <h1 className='mb-4 scroll-m-20 text-5xl font-bold tracking-tight'>
          Mouthefeel
        </h1>
        <Paragraph className='text-xl'>
          Does the coffee have a light, delicate, tea-like mouthfeel or is it
          more of a rich, creamy, heavy cup? Again, more is not necessarily
          better.
        </Paragraph>
        <div className='flex gap-5'>
          <Button
            className='h-auto w-[10rem] text-wrap rounded-full bg-white text-primary-text-color hover:bg-quaternary-color hover:text-[#6B240C]'
            onClick={wrapAsyncFunction(async () => {
              await handleNextStep('Light');
            })}
          >
            I like a coffee that is light
          </Button>
          <Button
            className='h-auto w-[10rem] text-wrap rounded-full bg-white text-primary-text-color hover:bg-quaternary-color hover:text-[#6B240C]'
            onClick={wrapAsyncFunction(async () => {
              await handleNextStep('Heavy');
            })}
          >
            I like a coffee that is heavy
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
