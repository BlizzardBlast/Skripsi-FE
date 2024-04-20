import Paragraph from '@/components/typography/paragraph.tsx';
import { Button } from '@/components/ui/button.tsx';
import LeafImage from '@/pages/home/leaf-image.tsx';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HomeOne(): JSX.Element {
  return (
    <div className='flex min-h-[70vh] flex-col items-center justify-center py-5'>
      <LeafImage />
      <motion.h1
        className='mb-4 scroll-m-20 text-center text-5xl font-black tracking-tight'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        Discover Your Coffee Preference
      </motion.h1>
      <motion.div
        className='w-8/12'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <Paragraph className='text-center text-2xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </Paragraph>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
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
    </div>
  );
}
