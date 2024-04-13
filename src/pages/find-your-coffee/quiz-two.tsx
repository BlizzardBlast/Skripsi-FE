import Paragraph from '@/components/typography/paragraph.tsx';
import { Button } from '@/components/ui/button.tsx';
import { motion } from 'framer-motion';

type QuizStepTwoProps = {
  handleNextStep: (newAnswer: string) => void;
};

export default function QuizStepTwo({
  handleNextStep
}: Readonly<QuizStepTwoProps>): JSX.Element {
  return (
    <motion.div
      className={`min-h-[80vh] w-full bg-[url('@/assets/fyc2_bg.webp')] bg-cover bg-fixed bg-center bg-no-repeat text-white`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
      key={'quiz-two-motion-div'}
    >
      <div className='flex w-full flex-col gap-10 p-20 md:w-2/5'>
        <h1 className='mb-4 scroll-m-20 text-5xl font-bold tracking-tight'>
          Acidity
        </h1>
        <Paragraph className='text-xl'>
          Acidity is one of the factor in the coffee Generally the higher the
          coffee is planted
        </Paragraph>
        <Paragraph className='text-xl'>
          Arabica tends to have a higher caffeine content and has a more bold or
          bitter flavor
        </Paragraph>
        <Paragraph className='text-xl'>
          Robutsta on the other hand tends to have a more acidic flavor because
          it is usually harvested in higher altitute
        </Paragraph>
        <Paragraph className='text-xl'>
          So, which one would you prefer?
        </Paragraph>
        <div className='flex gap-5'>
          <Button
            className='w-[10rem] text-wrap rounded-full bg-white text-primary-text-color hover:bg-quaternary-color hover:text-[#6B240C]'
            onClick={() => {
              handleNextStep('Bold');
            }}
          >
            I like my coffee to be bolder
          </Button>
          <Button
            className='w-[10rem] text-wrap rounded-full bg-white text-primary-text-color hover:bg-quaternary-color hover:text-[#6B240C]'
            onClick={() => {
              handleNextStep('Sour');
            }}
          >
            I like my coffee to be more sour
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
