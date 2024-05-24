import MetaTag from '@/components/meta-tag/meta-tag';
import TransactionDetailContent from '@/pages/transaction/transaction-detail/transaction-detail-content';

export default function TransactionDetailPage(): JSX.Element {
  return (
    <div className='flex min-h-[80vh] items-center justify-center py-5'>
      <MetaTag
        title='Kofebin | Transaction Detail'
        description='View your transaction detail at Kofebin'
      />
      <div className='min-h-[80vh] w-full px-10 sm:px-20'>
        <h1 className='mb-4 scroll-m-20 text-center text-5xl font-bold tracking-tight sm:text-left'>
          Transaction Detail
        </h1>
        <TransactionDetailContent />
      </div>
    </div>
  );
}
