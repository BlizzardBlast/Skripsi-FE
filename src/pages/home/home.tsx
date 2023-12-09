import HeadingOne from '@/components/typography/headingOne.tsx';
import Paragraph from '@/components/typography/paragraph.tsx';
import { Button } from '@/components/ui/button.tsx';
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
        <Paragraph>Count is: {count}</Paragraph>
      </Button>
    </div>
  );
}