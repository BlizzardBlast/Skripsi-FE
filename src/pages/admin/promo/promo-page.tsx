import MetaTag from '@/components/meta-tag/meta-tag';
import PromoPageContent from '@/pages/admin/promo/promo-page-content';

export default function PromoPage(): JSX.Element {
  return (
    <div className='flex min-h-[80vh] items-center justify-center py-5'>
      <MetaTag
        title='Kofebin | Promo'
        description='Manage Promo in Kofebin as an Administrator.'
      />
      <div className='min-h-[80vh] w-full px-20'>
        <h1 className='ms-0 scroll-m-20 text-center text-5xl font-bold tracking-tight md:ms-8 md:text-left'>
          Promo
        </h1>
        <PromoPageContent />
      </div>
    </div>
  );
}
