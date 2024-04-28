import useUserData from '@/components/header/useUserData.ts';
import { useToast } from '@/components/ui/use-toast.ts';
import profileValidationSchema from '@/pages/profile/profile-validation-schema';
import UpdateProfile from '@/services/profile/update-profile.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { type z } from 'zod';

type UseProfileFormUtilsReturnType = {
  isLoading: boolean;
  onSubmit: (values: z.infer<typeof profileValidationSchema>) => Promise<void>;
  form: ReturnType<typeof useForm<z.infer<typeof profileValidationSchema>>>;
  isPending: boolean;
};

export default function useProfileFormUtils(): UseProfileFormUtilsReturnType {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { user, isPending } = useUserData();
  const form = useForm<z.infer<typeof profileValidationSchema>>({
    resolver: zodResolver(profileValidationSchema),
    values: {
      email: user?.email ?? '',
      username: user?.username ?? '',
      name: 'Hmmm',
      // password: '*********',
      preferences: user?.preferences ?? ''
    }
  });
  async function onSubmit(
    values: z.infer<typeof profileValidationSchema>
  ): Promise<void> {
    setIsLoading(true);
    try {
      const profileData = {
        new_email: values.email,
        new_username: values.username,
        new_name: values.name
        // password: values.password,
        // preferences: values.preferences
      };
      await UpdateProfile({ values: profileData, id: user?.id as number });
      toast({
        title: 'You updated your profile!',
        description: 'Profile Data has been updated.'
      });
      navigate('/');
    } catch (error) {
      const err = error as Error;
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.'
      });
      console.error(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, onSubmit, form, isPending } as const;
}
