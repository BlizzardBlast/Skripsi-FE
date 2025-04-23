import NewPasswordForm from '@/pages/new-password/new-password-form';
import MetaTag from '../../components/meta-tag/meta-tag';
export default function NewPasswordPage(): JSX.Element {
  return (
    <div className='flex min-h-[80vh] flex-col flex-wrap items-center justify-center py-5 md:flex-row'>
      <MetaTag
        title='Kofebin | New Password'
        description='Create your new password in Kofebin'
      />
      <NewPasswordForm />
    </div>
  );
}
