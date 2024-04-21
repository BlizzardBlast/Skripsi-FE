import { Button } from '@/components/ui/button.tsx';
import wrapAsyncFunction from '@/utils/wrap-async-function.ts';
import { motion } from 'framer-motion';

type QuizStepOneProps = {
  handleNextStep: (newAnswer: string) => Promise<void>;
};

export default function QuizStepOne({
  handleNextStep
}: Readonly<QuizStepOneProps>): JSX.Element {
  return (
    <div
      className={`min-h-[80vh] w-full bg-[url('@/assets/fyc1_bg.svg')] bg-cover bg-fixed bg-center bg-no-repeat text-white`}
    >
      <div className='float-right flex w-full flex-col gap-10 bg-black bg-opacity-30 p-20 backdrop-blur-sm md:w-2/5'>
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
          Bean Type
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
          Generally, coffee beans can be separated into many types, but
          generally it is split into Arabica and Robusta
        </motion.p>
        <motion.p
          className='text-xl'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            type: 'spring',
            bounce: 0.5,
            delay: 0.2
          }}
        >
          Arabica tends to have a higher caffeine content and has a more bold or
          bitter flavor
        </motion.p>
        <motion.p
          className='text-xl'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            type: 'spring',
            bounce: 0.5,
            delay: 0.3
          }}
        >
          Robutsta on the other hand tends to have a more acidic flavor because
          it is usually harvested in higher altitute
        </motion.p>
        <motion.p
          className='text-xl'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            type: 'spring',
            bounce: 0.5,
            delay: 0.4
          }}
        >
          So, which one would you prefer?
        </motion.p>
        <motion.div
          className='flex gap-5'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.5
          }}
        >
          <Button
            className='h-auto w-[5rem] rounded-full bg-white text-primary-text-color drop-shadow-lg hover:bg-quaternary-color hover:text-[#6B240C]'
            onClick={wrapAsyncFunction(async () => {
              await handleNextStep('Arabica');
            })}
          >
            Arabica
          </Button>
          <Button
            className='h-auto w-[5rem] rounded-full bg-white text-primary-text-color drop-shadow-lg hover:bg-quaternary-color hover:text-[#6B240C]'
            onClick={wrapAsyncFunction(async () => {
              await handleNextStep('Robusta');
            })}
          >
            Robusta
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
