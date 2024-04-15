import MetaTag from '@/components/meta-tag/meta-tag.tsx';
import CoffeeRecommendationList from '@/pages/find-your-coffee-result/coffee-recommendation-list.tsx';

export default function FindYourCoffeeResultPage(): JSX.Element {
  return (
    <div className='flex min-h-[80vh] items-center justify-center'>
      <MetaTag
        title='Kofebin | Your Coffee Result'
        description='Here is your preferred coffee beans!'
      />
      <div
        className={`min-h-[80vh] w-full bg-quaternary-color text-primary-text-color`}
      >
        <div className='flex w-full flex-col gap-10 p-20'>
          <h1 className='mb-4 scroll-m-20 text-center text-5xl font-bold tracking-tight'>
            Your Coffee Recommendations
          </h1>
          <CoffeeRecommendationList />
        </div>
      </div>
    </div>
  );
}
