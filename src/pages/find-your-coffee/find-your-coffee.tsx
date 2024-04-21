import MetaTag from '@/components/meta-tag/meta-tag.tsx';
import QuizStepper from '@/pages/find-your-coffee/quiz-stepper.tsx';

export default function FindYourCoffeePage(): JSX.Element {
  const preloadedImage = [
    { href: '/src/assets/fyc_bg.webp', type: 'image/webp' },
    { href: '/src/assets/fyc1_bg.svg', type: 'image/svg+xml' },
    { href: '/src/assets/fyc2_bg.webp', type: 'image/webp' },
    { href: '/src/assets/fyc3_bg.webp', type: 'image/webp' },
    { href: '/src/assets/fyc4_bg.webp', type: 'image/webp' }
  ];

  return (
    <div className='flex min-h-[80vh] items-center justify-center'>
      <MetaTag
        title='Kofebin | Find Your Coffee'
        description='Find your personalized coffee beans now!'
        images={preloadedImage}
      />
      <QuizStepper />
    </div>
  );
}
