/* eslint-disable security/detect-object-injection */
import QuizStepOne from '@/pages/find-your-coffee/quiz-one.tsx';
import QuizStepTwo from '@/pages/find-your-coffee/quiz-two.tsx';
import QuizStepZero from '@/pages/find-your-coffee/quiz-zero.tsx';
import { useState } from 'react';

const MAX_STEP = 5;

export default function QuizStepper(): JSX.Element {
  const [step, setStep] = useState(0);
  const [, setAnswer] = useState(['']);

  const handleNextStep = (): void => {
    if (step < MAX_STEP) {
      setStep((prevStep) => prevStep + 1);
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
    }
  };

  const steps = [
    <QuizStepZero key={'quiz-zero'} handleNextStep={handleNextStep} />,
    <QuizStepOne key={'quiz-one'} handleNextStep={handleNextStepWithAnswer} />,
    <QuizStepTwo key={'quiz-two'} handleNextStep={handleNextStepWithAnswer} />
  ];

  if (step >= 0 && step < steps.length) {
    return steps[step];
  }

  throw new Error('Step not found');
}
