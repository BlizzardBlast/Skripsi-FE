import { Button } from '@/components/ui/button';
import wrapAsyncFunction from '@/utils/wrap-async-function';

type CloseButtonProps = {
  handleNextStep: (newAnswer: string) => Promise<void>;
  value: string;
  text: string;
};

export default function ChoiceButton({
  handleNextStep,
  value,
  text
}: Readonly<CloseButtonProps>): JSX.Element {
  return (
    <Button
      className='h-auto w-[5rem] text-wrap rounded-full bg-white text-primary-text-color drop-shadow-lg hover:bg-quaternary-color hover:text-[#6B240C]'
      onClick={wrapAsyncFunction(async () => {
        await handleNextStep(value);
      })}
    >
      {text}
    </Button>
  );
}
