import CoffeeLady from '@/assets/ladywithacupofcoffee.svg';
import DrinkLady from '@/assets/ladywithadrink.svg';
import LoadImage from '@/components/load-image/load-image';
import HeadingOne from '@/components/typography/headingOne.tsx';
import Paragraph from '@/components/typography/paragraph.tsx';
import {
  leftComponentVariants,
  rightComponentVariants
} from '@/pages/home/variants.ts';
import { motion } from 'framer-motion';

export default function HomeTwo(): JSX.Element {
  return (
    <motion.div
      className="flex min-h-[70vh] flex-col items-center justify-around gap-10 bg-[url('@/assets/coffee_beans_bg.svg')] bg-cover bg-center bg-no-repeat py-10 md:flex-row"
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        className='flex flex-[4] items-center justify-center ps-3'
        variants={leftComponentVariants}
      >
        <LoadImage
          source={CoffeeLady}
          alternative='Coffee_Lady'
          lazy
          classes='h-80 w-[9.49375rem]'
          divClasses='flex justify-center items-center'
        />
        <LoadImage
          source={DrinkLady}
          alternative='Coffee_Lady'
          lazy
          classes='h-80 w-[10.21875rem]'
          divClasses='flex justify-center items-center'
        />
      </motion.div>
      <motion.div
        className='flex flex-[6] items-center justify-center'
        variants={rightComponentVariants}
      >
        <article className='flex min-h-80 w-[80%] flex-col items-center justify-center text-pretty rounded-3xl bg-tertiary-color px-7 text-center'>
          <HeadingOne className='text-center'>
            Spice up your coffee break
          </HeadingOne>
          <Paragraph className='mt-5 text-2xl'>
            Maximize your coffee break for stress relief and energy during work.
            Kofebin invites you to explore world-class coffees—no cheap sachets
            or sugar galore franchise coffee shop, just pure enjoyment.
          </Paragraph>
        </article>
      </motion.div>
    </motion.div>
  );
}
