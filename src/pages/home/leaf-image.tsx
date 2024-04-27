import LeftLeaves from '@/assets/left_leaves.png';
import RightLeaves from '@/assets/right_leaves.png';
import LoadImage from '@/components/load-image/load-image';

export default function LeafImage(): JSX.Element {
  return (
    <>
      <LoadImage
        source={LeftLeaves}
        testId='left-leaves'
        alternative='left-leaves'
        classes='h-96 absolute left-0 top-20 z-[-1] w-[4.680625rem]'
        lazy
      />
      <LoadImage
        source={RightLeaves}
        testId='right-leaves'
        alternative='right-leaves'
        classes='h-96 absolute right-0 top-20 z-[-1] w-[4.680625rem]'
        lazy
      />
    </>
  );
}
