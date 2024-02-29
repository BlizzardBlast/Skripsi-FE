import LeftLeaves from '@/assets/left_leaves.webp';
import RightLeaves from '@/assets/right_leaves.webp';
import LoadImage from '@/components/loadImage/loadImage.tsx';

export default function LeafImage(): JSX.Element {
  return (
    <>
      <LoadImage
        source={LeftLeaves}
        alternative='left-leaves'
        classes='h-60 absolute left-0 top-20'
        lazy
      />
      <LoadImage
        source={RightLeaves}
        alternative='left-leaves'
        classes='h-60 absolute right-0 top-20'
        lazy
      />
    </>
  );
}
