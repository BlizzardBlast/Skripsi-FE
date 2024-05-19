import MetaTag from '@/components/meta-tag/meta-tag';
import AddProductForm from '@/pages/admin/promo/add-promo/add-promo-form';
import { type ReactNode } from 'react';

export default function AddProductPage(): ReactNode {
  return (
    <div className='flex min-h-[80vh] items-center justify-center py-5'>
      <MetaTag
        title='Kofebin | Add Promo'
        description='Add promo in Kofebin as an Administrator.'
      />
      <div className='min-h-[80vh] w-full px-20'>
        <h1 className='ms-0 scroll-m-20 text-center text-5xl font-bold tracking-tight md:ms-8 md:text-left'>
          Add Promo
        </h1>
        <AddProductForm />
      </div>
    </div>
  );
}
