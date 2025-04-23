import MetaTag from '@/components/meta-tag/meta-tag';
import ChangePasswordOtp from '@/pages/change-password/change-password-otp';

export default function ChangePasswordPage(): JSX.Element {
  return (
    <div className='flex min-h-[80vh] flex-col flex-wrap items-center justify-center py-5 md:flex-row'>
      <MetaTag
        title='Kofebin | Change Password'
        description='Change your account password in Kofebin'
      />
      <ChangePasswordOtp />
    </div>
  );
}
