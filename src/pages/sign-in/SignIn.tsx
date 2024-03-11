import BaristaGirlMakingCoffee from '@/assets/baristagirlmakingcoffee.svg';
import LoadImage from '@/components/loadImage/loadImage.tsx';
import SignInForm from '@/pages/sign-in/sign-in-form.tsx';

export default function SignInPage(): JSX.Element {
  return (
    <div className='flex min-h-[80vh] items-center justify-center py-5'>
      <div className='flex flex-1 items-center justify-center'>
        <SignInForm />
      </div>
      <div className='relative flex flex-1 items-center justify-center'>
        <LoadImage
          source={BaristaGirlMakingCoffee}
          alternative='barista-image'
          classes='w-[35vw] h-[35.5vw]'
          divClasses='flex items-center justify-center'
        />
      </div>
    </div>
  );
}
