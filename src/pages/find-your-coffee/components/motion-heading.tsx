import { motion } from 'framer-motion';

type MotionHeadingProps = {
  title: string;
};

export default function MotionHeading({
  title
}: Readonly<MotionHeadingProps>): JSX.Element {
  return (
    <motion.h1
      className='mb-4 scroll-m-20 text-5xl font-bold tracking-tight'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
        type: 'spring',
        bounce: 0.5
      }}
    >
      {title}
    </motion.h1>
  );
}
