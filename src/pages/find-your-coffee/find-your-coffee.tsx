import MetaTag from '@/components/meta-tag/meta-tag.tsx';
import QuizStepper from '@/pages/find-your-coffee/quiz-stepper.tsx';

export default function FindYourCoffeePage(): JSX.Element {
  return (
    <div className='flex min-h-[80vh] items-center justify-center'>
      <MetaTag
        title='Kofebin | Find Your Coffee'
        description='Find your personalized coffee beans now!'
      />
      <QuizStepper />
    </div>
  );
}
