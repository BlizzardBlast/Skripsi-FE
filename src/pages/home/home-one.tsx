import Paragraph from '@/components/typography/paragraph.tsx';
import { Button } from '@/components/ui/button.tsx';
import LeafImage from '@/pages/home/leaf-image.tsx';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { homeOneComponentVariants } from '@/pages/home/variants.ts';

export default function HomeOne(): JSX.Element {
  return (
    <motion.div
      className='flex min-h-[70vh] flex-col items-center justify-center py-5'
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.5 }}
    >
      <LeafImage />
      <motion.h1
        className='mb-4 scroll-m-20 text-center text-5xl font-black tracking-tight'
        variants={homeOneComponentVariants()}
      >
        Discover Your Coffee Preference
      </motion.h1>
      <motion.div className='w-8/12' variants={homeOneComponentVariants(0.1)}>
        <Paragraph className='text-center text-2xl'>
          At Kofebin, we firmly believe in the uniqueness of individual coffee
          preferences. That&apos;s why we invite you to embark on a journey of
          discovery with us. The world of coffee is far richer and more diverse
          than you may imagine. Join us as we explore and uncover the perfect
          coffee tailored to your discerning palate.
        </Paragraph>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        variants={homeOneComponentVariants(0.2)}
      >
        <Button
          asChild
          className='mt-6 rounded-2xl bg-primary-color px-5 py-6 text-xl font-extralight tracking-tight hover:bg-secondary-color'
        >
          <Link to='/find-your-coffee' aria-label='Discover Your Preference'>
            Discover Your Preference
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
