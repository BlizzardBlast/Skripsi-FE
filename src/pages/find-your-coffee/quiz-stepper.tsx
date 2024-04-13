/* eslint-disable security/detect-object-injection */
import QuizStepFive from '@/pages/find-your-coffee/quiz-five.tsx';
import QuizStepFour from '@/pages/find-your-coffee/quiz-four.tsx';
import QuizStepOne from '@/pages/find-your-coffee/quiz-one.tsx';
import QuizStepThree from '@/pages/find-your-coffee/quiz-three.tsx';
import QuizStepTwo from '@/pages/find-your-coffee/quiz-two.tsx';
import QuizStepZero from '@/pages/find-your-coffee/quiz-zero.tsx';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MAX_STEP = 4;

export default function QuizStepper(): JSX.Element {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [, setAnswer] = useState(['']);

  const handleNextStep = (): void => {
    if (step < MAX_STEP) {
      setStep((prevStep) => prevStep + 1);
    } else {
      navigate('/find-your-coffee/result');
    }
  };

  const handleNextStepWithAnswer = (newAnswer: string): void => {
    if (step < MAX_STEP) {
      setAnswer((prevAnswer) => {
        const tempAnswerArray = [...prevAnswer];
        tempAnswerArray[step - 1] = newAnswer;
        return tempAnswerArray;
      });
      setStep((prevStep) => prevStep + 1);
    } else {
      navigate('/find-your-coffee/result');
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

  if (step >= 0 && step < steps.length) {
    return (
      <AnimatePresence mode='wait' initial={false}>
        {steps[step]}
      </AnimatePresence>
    );
  }

  throw new Error('Step not found');
}
