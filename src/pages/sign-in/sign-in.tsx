import BaristaGirlMakingCoffee from '@/assets/baristagirlmakingcoffee.svg';
import LoadImage from '@/components/load-image/load-image';
import MetaTag from '@/components/meta-tag/meta-tag';
import SignInForm from '@/pages/sign-in/sign-in-form.tsx';

export default function SignInPage(): JSX.Element {
  return (
    <div className='flex min-h-[80vh] flex-col flex-wrap items-center justify-center py-5 md:flex-row'>
      <MetaTag
        title='Kofebin | Sign In'
        description='Sign In to Kofebin now!'
      />
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
