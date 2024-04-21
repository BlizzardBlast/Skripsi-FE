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
    <div
      className={`min-h-[80vh] w-full bg-[url('@/assets/fyc3_bg.webp')] bg-cover bg-fixed bg-center bg-no-repeat text-white`}
    >
      <div className='float-right flex min-h-[80vh] w-full flex-col gap-10 bg-black bg-opacity-30 p-20 backdrop-blur-sm md:w-2/5'>
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
          Mouthefeel
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
          Does the coffee have a light, delicate, tea-like mouthfeel or is it
          more of a rich, creamy, heavy cup? Again, more is not necessarily
          better.
        </motion.p>
        <motion.div
          className='flex gap-5'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.2
          }}
        >
          <Button
            className='h-auto w-[10rem] text-wrap rounded-full bg-white text-primary-text-color drop-shadow-lg hover:bg-quaternary-color hover:text-[#6B240C]'
            onClick={wrapAsyncFunction(async () => {
              await handleNextStep('Light');
            })}
          >
            I like a coffee that is light
          </Button>
          <Button
            className='h-auto w-[10rem] text-wrap rounded-full bg-white text-primary-text-color drop-shadow-lg hover:bg-quaternary-color hover:text-[#6B240C]'
            onClick={wrapAsyncFunction(async () => {
              await handleNextStep('Heavy');
            })}
          >
            I like a coffee that is heavy
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
