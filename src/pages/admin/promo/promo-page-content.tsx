import Spinner from '@/components/spinner/spinner';
import Paragraph from '@/components/typography/paragraph';
import { Button } from '@/components/ui/button';
import { promoPageColumns } from '@/pages/admin/promo/columns';
import { DataTable } from '@/pages/admin/promo/data-table';
import useFetchPromo from '@/pages/admin/promo/useFetchPromo';
import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

export default function PromoPageContent(): ReactNode {
  const { isLoading, promo } = useFetchPromo();

  if (isLoading) {
    return (
      <div className='ms-0 mt-3 flex h-[24.4rem] justify-center sm:justify-normal md:ms-8'>
        <Spinner />
      </div>
    );
  }

  if (promo.length === 0) {
    return (
      <div className='min-h-[80vh] w-full items-center justify-center px-8 py-1'>
        <Paragraph>No promo found. Please add a promo.</Paragraph>
        <Button asChild>
          <Link to={'/add-promo'}>Add Promo</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className='container mx-auto py-5'>
      <DataTable columns={promoPageColumns} data={promo} />
    </div>
  );
}
