import Spinner from '@/components/spinner/spinner';
import Paragraph from '@/components/typography/paragraph';
import { type Transaction } from '@/pages/transaction/columns';
import { DataTable } from '@/pages/transaction/data-table';
import { transactionDetailColumns } from '@/pages/transaction/transaction-detail/transaction-detail-columns';
import useFetchTransactionDetail from '@/pages/transaction/transaction-detail/useFetchTransactionDetail';
import { type LocationProps } from '@/types/location';
import capitalizeFirstLetter from '@/utils/capitalize-first-letter';
import ConvertToRupiah from '@/utils/convert-to-rupiah';
import formatDate from '@/utils/format-date';
import { type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function TransactionDetailContent(): ReactNode {
  const { isLoading, newData } = useFetchTransactionDetail();
  const location: LocationProps & {
    state: {
      transaction: Transaction;
    };
  } = useLocation();

  if (isLoading) {
    return <Spinner />;
  }

  if (newData.length === 0) {
    return (
      <Paragraph>
        There is no such transaction! Please return to{' '}
        <Link
          to={'/transaction-history'}
          className='text-primary-color underline'
        >
          transaction history page.
        </Link>
      </Paragraph>
    );
  }

  return (
    <div>
      <div className='flex w-full items-center justify-between'>
        <div>
          <strong>Date</strong>
          <Paragraph>
            {formatDate(location.state?.transaction?.created_at)}
          </Paragraph>
        </div>
        <div>
          <strong>Status</strong>
          <Paragraph>
            {capitalizeFirstLetter(location.state?.transaction?.confirmation)}
          </Paragraph>
        </div>
        <div>
          <strong>Total Price</strong>
          <Paragraph>
            {ConvertToRupiah(location.state?.transaction?.total_price)}
          </Paragraph>
        </div>
        {location.state?.transaction?.discount_amount > 0 && (
          <div>
            <strong>Discount</strong>
            <Paragraph>
              {ConvertToRupiah(location.state?.transaction?.discount_amount)}
            </Paragraph>
          </div>
        )}
      </div>
      <div>
        <DataTable columns={transactionDetailColumns} data={newData} />
      </div>
    </div>
  );
}
