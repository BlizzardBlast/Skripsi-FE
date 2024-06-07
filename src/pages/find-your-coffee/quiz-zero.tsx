import Paragraph from '@/components/typography/paragraph.tsx';
import { Button } from '@/components/ui/button.tsx';
import wrapAsyncFunction from '@/utils/wrap-async-function.ts';
import { motion } from 'framer-motion';

type QuizStepZeroProps = {
  handleNextStep: () => Promise<void>;
};

export default function QuizStepZero({
  handleNextStep
}: Readonly<QuizStepZeroProps>): JSX.Element {
  return (
    <div
      className={`min-h-[80vh] w-full bg-[url('@/assets/fyc_bg.webp')] bg-cover bg-fixed bg-center bg-no-repeat text-white`}
    >
      <motion.div
        className='flex w-full flex-col gap-10 p-20 md:w-2/5'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
          type: 'spring',
          bounce: 0.5
        }}
        key={'quiz-zero-motion-div'}
      >
        <h1 className='mb-4 scroll-m-20 text-5xl font-bold tracking-tight'>
          Coffee
        </h1>
        <Paragraph className='text-xl'>
          Discover the perfect coffee beans tailored to your taste. Answer a few
          simple questions, and we&apos;ll recommend the best coffee to match
          your preferences. Whether you prefer bold and robust or smooth and
          mellow, we&apos;ll find the ideal beans for you. Click
          &quot;Next&quot; to begin your personalized coffee journey.
        </Paragraph>
        <Button
          className='h-auto w-[5rem] rounded-full bg-white text-primary-text-color drop-shadow-lg hover:bg-quaternary-color hover:text-[#6B240C]'
          onClick={wrapAsyncFunction(handleNextStep)}
        >
          Next
        </Button>
      </motion.div>
    </div>
  );
}
