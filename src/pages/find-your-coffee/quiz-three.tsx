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
      <div className='float-right flex min-h-[80vh] w-full flex-col gap-10 bg-black bg-opacity-30 p-20 backdrop-blur-sm md:w-2/5'>
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
          The aftertaste of coffee is a crucial aspect of its overall flavor
          profile, lingering on the palate long after the last sip. Different
          coffee beans contribute to a variety of aftertaste experiences.
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
          Arabica is known for its smooth, sweet, and nuanced flavors. Arabica
          beans often leave a lingering aftertaste that is complex and layered,
          with hints of fruits, flowers, and chocolate.
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
          Robutsta typically has a stronger, more intense flavor. The aftertaste
          of Robusta beans tends to be bold and slightly bitter, often with
          nutty or earthy undertones.
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
          Bourbon beans are prized for their rich and balanced flavor. The
          aftertaste is often sweet and lingering, with subtle notes of caramel
          and vanilla.
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
            delay: 0.5
          }}
        >
          So, which aftertaste do you prefer?
        </motion.p>
        <motion.div
          className='flex flex-wrap gap-5'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.6
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
