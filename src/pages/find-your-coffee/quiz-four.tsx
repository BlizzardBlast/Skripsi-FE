import ChoiceButton from '@/pages/find-your-coffee/components/choice-button';
import MotionHeading from '@/pages/find-your-coffee/components/motion-heading';
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
        <MotionHeading title={'Sweetness'} />
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
          Before you think that sweetness depends on how much sugar you add,
          it&apos;s important to know that coffee naturally contains its own
          sugars. However, the longer you roast the beans, the more these
          natural sugars transform into bold, bitter flavors.
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
          <ChoiceButton
            handleNextStep={handleNextStep}
            value='faint'
            text='Faint'
          />
          <ChoiceButton
            handleNextStep={handleNextStep}
            value='noticeable'
            text='Noticeable'
          />
          <ChoiceButton
            handleNextStep={handleNextStep}
            value='rich'
            text='Rich'
          />
        </motion.div>
      </div>
    </div>
  );
}
