import CherryHarvest from '@/assets/cherryharvest.svg';
import LoadImage from '@/components/load-image/load-image';
import HeadingOne from '@/components/typography/headingOne.tsx';
import Paragraph from '@/components/typography/paragraph.tsx';
import { motion } from 'framer-motion';

export default function HomeThree(): JSX.Element {
  return (
    <div className='flex min-h-[70vh] flex-col items-center justify-around bg-primary-color py-10 md:flex-row'>
      <motion.div
        className='flex flex-[6] items-center justify-center'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <article className='flex min-h-80 w-[80%] flex-col items-center justify-center text-pretty rounded-3xl px-7 text-center text-white'>
          <HeadingOne className='text-center'>
            Coffee beans from all over the world
          </HeadingOne>
          <Paragraph className='mt-5 text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut nostrud exercitation
          </Paragraph>
        </article>
      </motion.div>
      <motion.div
        className='flex flex-[4] items-center justify-center ps-3'
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <LoadImage
          source={CherryHarvest}
          alternative='Coffee_Harvest'
          lazy
          classes='h-80 w-80'
          divClasses='flex justify-center items-center'
        />
      </motion.div>
    </div>
  );
}
