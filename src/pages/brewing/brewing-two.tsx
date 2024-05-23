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
import { carouselResource } from '@/pages/brewing/carousel-resources';

export default function BrewingSectionTwo(): JSX.Element {
  return (
    <div className='flex min-h-[70vh] flex-col items-center justify-around bg-secondary-color p-5 md:flex-row'>
      <Carousel className='w-[80%] sm:w-[90%]'>
        <CarouselContent>
          {carouselResource.map((brewingTechnique) => (
            <CarouselItem key={brewingTechnique.heading}>
              <div className='flex min-h-[70vh] flex-col items-center justify-around bg-secondary-color p-5 md:flex-row'>
                <div className='flex flex-1 items-center justify-center ps-3 pt-5 md:pt-0'>
                  <LoadImage
                    source={brewingTechnique.image}
                    alternative={brewingTechnique.heading}
                    lazy
                    classes='w-[30rem] h-[15.8406785299rem] rounded-3xl'
                    divClasses='flex justify-center items-center'
                  />
                </div>
                <div className='flex flex-1 items-center justify-center text-white'>
                  <article className='flex min-h-52 w-[80%] flex-col items-center justify-center text-pretty rounded-3xl px-7 text-center md:min-h-80'>
                    <HeadingOne className='text-center'>
                      {brewingTechnique.heading}
                    </HeadingOne>
                    <Paragraph className='mt-5 text-2xl'>
                      {brewingTechnique.paragraph}
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
