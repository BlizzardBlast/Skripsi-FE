import CoffeeLady from '@/assets/ladywithacupofcoffee.svg';
import DrinkLady from '@/assets/ladywithadrink.svg';
import LoadImage from '@/components/loadImage/loadImage.tsx';
import HeadingOne from '@/components/typography/headingOne.tsx';
import Paragraph from '@/components/typography/paragraph.tsx';

export default function HomeTwo(): JSX.Element {
  return (
    <div className="flex h-[70vh] items-center justify-around bg-[url('@/assets/coffee_beans_bg.svg')] bg-cover bg-center bg-no-repeat">
      <div className='flex flex-[4] items-center justify-center'>
        <LoadImage
          source={CoffeeLady}
          alternative='Coffee_Lady'
          lazy
          classes='h-80'
          divClasses='flex justify-center items-center'
        />
        <LoadImage
          source={DrinkLady}
          alternative='Coffee_Lady'
          lazy
          classes='h-80'
          divClasses='flex justify-center items-center'
        />
      </div>
      <div className='flex flex-[6] items-center justify-center'>
        <div className='flex h-80 w-[80%] flex-col items-center justify-center overflow-y-auto rounded-3xl bg-tertiary-color px-7 text-center'>
          <HeadingOne className='text-center'>
            Spice up your coffee break
          </HeadingOne>
          <Paragraph className='mt-5 text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt minim veniam, quis nostrud exercitation
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
