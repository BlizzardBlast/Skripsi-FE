import HeadingOne from '@/components/typography/headingOne';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Home(): JSX.Element {
  const [count, setCount] = useState(0);
  return (
    <div className='h-[50vh] flex justify-center items-center flex-col'>
      <HeadingOne>Ni Hao</HeadingOne>
      <br />
      <Button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Count is: {count}
      </Button>
    </div>
  );
}
