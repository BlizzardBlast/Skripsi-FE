export type GetUserDataResponse = {
  id: number;
  name: string;
  email: string;
  username: string;
  role: 'admin' | 'member';
  preferences: string;
};
