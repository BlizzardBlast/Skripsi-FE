import MetaTag from '@/components/meta-tag/meta-tag';
import ModifyProductContent from '@/pages/admin/modify-product/modify-product-content';

export default function ModifyProductPage(): JSX.Element {
  return (
    <div className='flex min-h-[80vh] items-center justify-center py-5'>
      <MetaTag
        title='Kofebin | Modify Product'
        description='Modify product in Kofebin as an Administrator.'
      />
      <div className='min-h-[80vh] w-full px-20'>
        <h1 className='ms-0 scroll-m-20 text-center text-5xl font-bold tracking-tight md:ms-8 md:text-left'>
          Modify Product
        </h1>
        <ModifyProductContent />
      </div>
    </div>
  );
}
