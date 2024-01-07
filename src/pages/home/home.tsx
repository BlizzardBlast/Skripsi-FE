import HeadingOne from '@/components/typography/headingOne.tsx';
import Paragraph from '@/components/typography/paragraph.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';

export default function Home(): JSX.Element {
  const [count, setCount] = useState(0);
  return (
    <div className='flex h-[50vh] flex-col items-center justify-center'>
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
