import MetaTag from '@/components/meta-tag/meta-tag';
import ProfileForm from '@/pages/profile/profile-form';

export default function ProfilePage(): JSX.Element {
  return (
    <div className='flex min-h-[80vh] flex-col flex-wrap items-center justify-center py-5 md:flex-row'>
      <MetaTag
        title='Kofebin | Profile'
        description='Look at your profile in Kofebin'
      />
      <ProfileForm />
    </div>
  );
}
