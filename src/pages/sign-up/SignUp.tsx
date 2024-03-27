import BaristaGirlMakingCoffee from '@/assets/baristagirlmakingcoffee.svg';
import LoadImage from '@/components/loadImage/loadImage.tsx';
import MetaTag from '@/components/metaTag/metaTag.tsx';
import SignUpForm from '@/pages/sign-up/sing-up-form.tsx';

export default function SignUpPage(): JSX.Element {
  return (
    <div className='flex min-h-[80vh] flex-col flex-wrap items-center justify-center py-5 md:flex-row'>
      <MetaTag
        title='Kofebin | Sign Up'
        description='Sign Up in Kofebin now!'
      />
      <div className='flex flex-1 items-center justify-center'>
        <SignUpForm />
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
