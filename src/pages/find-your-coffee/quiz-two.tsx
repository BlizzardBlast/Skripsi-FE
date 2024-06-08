import ChoiceButton from '@/pages/find-your-coffee/components/choice-button';
import MotionHeading from '@/pages/find-your-coffee/components/motion-heading';
import { motion } from 'framer-motion';

type QuizStepTwoProps = {
  handleNextStep: (newAnswer: string) => Promise<void>;
};

export default function QuizStepTwo({
  handleNextStep
}: Readonly<QuizStepTwoProps>): JSX.Element {
  return (
    <div
      className={`min-h-[80vh] w-full bg-[url('@/assets/fyc3_bg.webp')] bg-cover bg-fixed bg-center bg-no-repeat text-white`}
    >
      <div className='float-right flex min-h-[80vh] w-full flex-col gap-10 bg-black bg-opacity-30 p-20 backdrop-blur-sm md:w-2/5'>
        <MotionHeading title='Flavor' />
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
          The flavor of coffee is intricately tied to where it is grown. For
          example, Sumatran coffee often has earthy, tobacco-like notes due to
          the region’s rich soil and nearby tobacco fields. Each region imparts
          its unique character to the beans, from the fruity notes of Ethiopian
          coffee to the chocolatey tones of Brazilian beans.
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
          What kind of coffee flavor are you looking for?
        </motion.p>
        <motion.div
          className='flex flex-wrap gap-5'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.3
          }}
        >
          <ChoiceButton
            handleNextStep={handleNextStep}
            value='earthy'
            text='Earthy'
          />
          <ChoiceButton
            handleNextStep={handleNextStep}
            value='chocolate'
            text='Chocolate'
          />
          <ChoiceButton
            handleNextStep={handleNextStep}
            value='fruit'
            text='Fruit'
          />
          <ChoiceButton
            handleNextStep={handleNextStep}
            value='nutty'
            text='Nutty'
          />
        </motion.div>
      </div>
    </div>
  );
}
