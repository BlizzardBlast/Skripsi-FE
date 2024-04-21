/* eslint-disable security/detect-object-injection */
import Spinner from '@/components/spinner/spinner.tsx';
import { useToast } from '@/components/ui/use-toast.ts';
import QuizStepFive from '@/pages/find-your-coffee/quiz-five.tsx';
import QuizStepFour from '@/pages/find-your-coffee/quiz-four.tsx';
import QuizStepOne from '@/pages/find-your-coffee/quiz-one.tsx';
import QuizStepThree from '@/pages/find-your-coffee/quiz-three.tsx';
import QuizStepTwo from '@/pages/find-your-coffee/quiz-two.tsx';
import QuizStepZero from '@/pages/find-your-coffee/quiz-zero.tsx';
import SetUserPreferences from '@/services/quiz/set-user-preferences';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MAX_STEP = 4;

export default function QuizStepper(): JSX.Element {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [answer, setAnswer] = useState(['']);
  const { toast } = useToast();

  const handleNextStep = async (): Promise<void> => {
    if (step < MAX_STEP) {
      setStep((prevStep) => prevStep + 1);
    } else {
      setIsLoading(true);
      try {
        await SetUserPreferences(answer);
        navigate('/find-your-coffee/result');
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        toast({
          variant: 'destructive',
          title: 'Something went wrong!',
          description: 'An unexpected error occurred. Please try again later.'
        });
        setIsLoading(false);
      }
    }
  };

  const handleNextStepWithAnswer = async (newAnswer: string): Promise<void> => {
    if (step < MAX_STEP) {
      setAnswer((prevAnswer) => {
        const tempAnswerArray = [...prevAnswer];
        tempAnswerArray[step - 1] = newAnswer;
        return tempAnswerArray;
      });
      setStep((prevStep) => prevStep + 1);
    } else {
      setIsLoading(true);
      try {
        const tempAnswerArray = [...answer];
        tempAnswerArray[step - 1] = newAnswer;
        setAnswer(tempAnswerArray);
        await SetUserPreferences(tempAnswerArray);
        navigate('/find-your-coffee/result');
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        toast({
          variant: 'destructive',
          title: 'Something went wrong!',
          description: 'An unexpected error occurred. Please try again later.'
        });
        setIsLoading(false);
      }
    }
  };

  const steps = [
    <QuizStepZero key={'quiz-zero'} handleNextStep={handleNextStep} />,
    <QuizStepOne key={'quiz-one'} handleNextStep={handleNextStepWithAnswer} />,
    <QuizStepTwo key={'quiz-two'} handleNextStep={handleNextStepWithAnswer} />,
    <QuizStepThree
      key={'quiz-three'}
      handleNextStep={handleNextStepWithAnswer}
    />,
    <QuizStepFour
      key={'quiz-four'}
      handleNextStep={handleNextStepWithAnswer}
    />,
    <QuizStepFive key={'quiz-five'} handleNextStep={handleNextStepWithAnswer} />
  ];

  if (isLoading) {
    return (
      <div>
        <Spinner className='border-black border-b-transparent' />
      </div>
    );
  }

  if (step >= 0 && step < steps.length) {
    return <AnimatePresence mode='wait'>{steps[step]}</AnimatePresence>;
  }

  throw new Error('Step not found');
}
