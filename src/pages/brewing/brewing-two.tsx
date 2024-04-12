import CoffeeBeans from '@/assets/coffee_beans.svg';
import LoadImage from '@/components/load-image/load-image';
import HeadingOne from '@/components/typography/headingOne.tsx';
import Paragraph from '@/components/typography/paragraph.tsx';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel.tsx';

export default function BrewingSectionTwo(): JSX.Element {
  return (
    <div className='flex min-h-[70vh] flex-col items-center justify-around bg-secondary-color p-5 md:flex-row'>
      <Carousel className='w-[80%] sm:w-[90%]'>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className='flex min-h-[70vh] flex-col items-center justify-around bg-secondary-color p-5 md:flex-row'>
                <div className='flex flex-1 items-center justify-center ps-3 pt-5 md:pt-0'>
                  <LoadImage
                    source={CoffeeBeans}
                    alternative='Coffee_Beans'
                    lazy
                    classes='w-[30rem] h-[15.8406785299rem]'
                    divClasses='flex justify-center items-center'
                  />
                </div>
                <div className='flex flex-1 items-center justify-center text-white'>
                  <article className='flex min-h-52 w-[80%] flex-col items-center justify-center text-pretty rounded-3xl px-7 text-center md:min-h-80'>
                    <HeadingOne className='text-center'>Slow Roast</HeadingOne>
                    <Paragraph className='mt-5 text-2xl'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut nostrud exercitation
                    </Paragraph>
                  </article>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
