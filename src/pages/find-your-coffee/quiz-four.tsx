import { Button } from '@/components/ui/button.tsx';
import wrapAsyncFunction from '@/utils/wrap-async-function.ts';
import { motion } from 'framer-motion';

type QuizStepFourProps = {
  handleNextStep: (newAnswer: string) => Promise<void>;
};

export default function QuizStepFour({
  handleNextStep
}: Readonly<QuizStepFourProps>): JSX.Element {
  return (
    <div
      className={`min-h-[80vh] w-full bg-[url('@/assets/fyc4_bg.webp')] bg-cover bg-fixed bg-center bg-no-repeat text-primary-text-color`}
    >
      <div className='float-right flex min-h-[80vh] w-full flex-col gap-10 bg-white bg-opacity-30 p-20 backdrop-blur-sm md:w-2/5'>
        <motion.h1
          className='mb-4 scroll-m-20 text-5xl font-bold tracking-tight'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            type: 'spring',
            bounce: 0.5
          }}
        >
          Sweetness
        </motion.h1>
        <motion.p
          className='text-xl'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            type: 'spring',
            bounce: 0.5,
            delay: 0.1
          }}
        >
          Before you said oh sweetness came on how much you add sugar. Coffee
          naturally has its own sugar. However the longer you roasted that
          natural sugar will turn into bold (bitter) flavor
        </motion.p>
        <motion.div
          className='flex flex-wrap gap-5'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.2
          }}
        >
          <Button
            className='h-auto w-[5rem] text-wrap rounded-full bg-white text-primary-text-color drop-shadow-lg hover:bg-quaternary-color hover:text-[#6B240C]'
            onClick={wrapAsyncFunction(async () => {
              await handleNextStep('faint');
            })}
          >
            Faint
          </Button>
          <Button
            className='h-auto w-[5rem] text-wrap rounded-full bg-white text-primary-text-color drop-shadow-lg hover:bg-quaternary-color hover:text-[#6B240C]'
            onClick={wrapAsyncFunction(async () => {
              await handleNextStep('noticeable');
            })}
          >
            Noticeable
          </Button>
          <Button
            className='h-auto w-[5rem] text-wrap rounded-full bg-white text-primary-text-color drop-shadow-lg hover:bg-quaternary-color hover:text-[#6B240C]'
            onClick={wrapAsyncFunction(async () => {
              await handleNextStep('rich');
            })}
          >
            Rich
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
