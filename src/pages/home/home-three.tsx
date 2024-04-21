import CherryHarvest from '@/assets/cherryharvest.svg';
import LoadImage from '@/components/load-image/load-image';
import HeadingOne from '@/components/typography/headingOne.tsx';
import Paragraph from '@/components/typography/paragraph.tsx';
import {
  leftComponentVariants,
  rightComponentVariants
} from '@/pages/home/variants.ts';
import { motion } from 'framer-motion';

export default function HomeThree(): JSX.Element {
  return (
    <motion.div
      className='flex min-h-[70vh] flex-col items-center justify-around bg-primary-color py-10 md:flex-row'
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        className='flex flex-[6] items-center justify-center'
        variants={leftComponentVariants}
      >
        <article className='flex min-h-80 w-[80%] flex-col items-center justify-center text-pretty rounded-3xl px-7 text-center text-white'>
          <HeadingOne className='text-center'>
            Coffee beans from all over the world
          </HeadingOne>
          <Paragraph className='mt-5 text-2xl'>
            Handpicked from the world&apos;s top coffee regions, our collection
            at Kofebin is dedicated to bringing you the finest brews available
            anywhere.
          </Paragraph>
        </article>
      </motion.div>
      <motion.div
        className='flex flex-[4] items-center justify-center ps-3'
        variants={rightComponentVariants}
      >
        <LoadImage
          source={CherryHarvest}
          alternative='Coffee_Harvest'
          lazy
          classes='h-80 w-80'
          divClasses='flex justify-center items-center'
        />
      </motion.div>
    </motion.div>
  );
}
