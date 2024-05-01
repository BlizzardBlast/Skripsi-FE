import ChoiceButton from '@/pages/find-your-coffee/components/choice-button';
import MotionHeading from '@/pages/find-your-coffee/components/motion-heading';
import { motion } from 'framer-motion';

type QuizStepThreeProps = {
  handleNextStep: (newAnswer: string) => Promise<void>;
};

export default function QuizStepThree({
  handleNextStep
}: Readonly<QuizStepThreeProps>): JSX.Element {
  return (
    <div
      className={`min-h-[80vh] w-full bg-[url('@/assets/fyc1_bg.svg')] bg-cover bg-fixed bg-center bg-no-repeat text-white`}
    >
      <div className='float-right flex w-full flex-col gap-10 bg-black bg-opacity-30 p-20 backdrop-blur-sm md:w-2/5'>
        <MotionHeading title='Aftertaste' />
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
          generally it is split into Arabica, Robusta, and Bourbon
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
          className='flex flex-wrap gap-5'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.5
          }}
        >
          <ChoiceButton
            handleNextStep={handleNextStep}
            value='complex'
            text='Complex'
          />
          <ChoiceButton
            handleNextStep={handleNextStep}
            value='lingering'
            text='Lingering'
          />
          <ChoiceButton
            handleNextStep={handleNextStep}
            value='short'
            text='Short'
          />
        </motion.div>
      </div>
    </div>
  );
}
