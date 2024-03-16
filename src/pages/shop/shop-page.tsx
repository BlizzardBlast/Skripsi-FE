import MetaTag from '@/components/metaTag/metaTag.tsx';

export default function Shop(): JSX.Element {
  return (
    <div className='flex min-h-[80vh] items-center justify-center py-5'>
      <MetaTag
        title='Kofebin | Shop'
        description='Purchase your preferred coffee beans now!'
      />
    </div>
  );
}
