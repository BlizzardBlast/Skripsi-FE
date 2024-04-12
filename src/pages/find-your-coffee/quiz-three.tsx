import Paragraph from '@/components/typography/paragraph.tsx';
import { Button } from '@/components/ui/button.tsx';
import { motion } from 'framer-motion';

type QuizStepThreeProps = {
  handleNextStep: (newAnswer: string) => void;
};

export default function QuizStepThree({
  handleNextStep
}: Readonly<QuizStepThreeProps>): JSX.Element {
  return (
    <motion.div
      className={`min-h-[80vh] w-full bg-[url('@/assets/fyc1_bg.svg')] bg-cover bg-center bg-no-repeat text-white`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
      key={'quiz-three-motion-div'}
    >
      <div className='float-right flex w-full flex-col gap-10 p-20 md:w-2/5'>
        <h1 className='mb-4 scroll-m-20 text-5xl font-bold tracking-tight'>
          Bean Type
        </h1>
        <Paragraph>
          Generally, coffee beans can be separated into many types, but
          generally it is split into Arabica and Robusta
        </Paragraph>
        <Paragraph>
          Arabica tends to have a higher caffeine content and has a more bold or
          bitter flavor
        </Paragraph>
        <Paragraph>
          Robutsta on the other hand tends to have a more acidic flavor because
          it is usually harvested in higher altitute
        </Paragraph>
        <Paragraph>So, which one would you prefer?</Paragraph>
        <div className='flex gap-5'>
          <Button
            className='w-[5rem] rounded-full bg-white text-primary-text-color hover:bg-quaternary-color hover:text-[#6B240C]'
            onClick={() => {
              handleNextStep('Arabica');
            }}
          >
            Arabica
          </Button>
          <Button
            className='w-[5rem] rounded-full bg-white text-primary-text-color hover:bg-quaternary-color hover:text-[#6B240C]'
            onClick={() => {
              handleNextStep('Robusta');
            }}
          >
            Robusta
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
