import MetaTag from '@/components/meta-tag/meta-tag';
import TransactionHistoryContent from '@/pages/transaction/transaction-history-content';

export default function TransactionHistoryPage(): JSX.Element {
  return (
    <div className='flex min-h-[80vh] items-center justify-center py-5'>
      <MetaTag
        title='Kofebin | Transaction History'
        description='View your transaction history at Kofebin'
      />
      <div className='min-h-[80vh] w-full px-10 sm:px-20'>
        <h1 className='mb-4 scroll-m-20 text-center text-5xl font-bold tracking-tight sm:text-left'>
          Transaction History
        </h1>
        <TransactionHistoryContent />
      </div>
    </div>
  );
}
