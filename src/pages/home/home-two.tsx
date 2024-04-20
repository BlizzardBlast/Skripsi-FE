import CoffeeLady from '@/assets/ladywithacupofcoffee.svg';
import DrinkLady from '@/assets/ladywithadrink.svg';
import LoadImage from '@/components/load-image/load-image';
import HeadingOne from '@/components/typography/headingOne.tsx';
import Paragraph from '@/components/typography/paragraph.tsx';
import { motion } from 'framer-motion';

export default function HomeTwo(): JSX.Element {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-around gap-10 bg-[url('@/assets/coffee_beans_bg.svg')] bg-cover bg-center bg-no-repeat py-10 md:flex-row">
      <motion.div
        className='flex flex-[4] items-center justify-center ps-3'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
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
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <article className='flex min-h-80 w-[80%] flex-col items-center justify-center text-pretty rounded-3xl bg-tertiary-color px-7 text-center'>
          <HeadingOne className='text-center'>
            Spice up your coffee break
          </HeadingOne>
          <Paragraph className='mt-5 text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt minim veniam, quis nostrud exercitation
          </Paragraph>
        </article>
      </motion.div>
    </div>
  );
}
