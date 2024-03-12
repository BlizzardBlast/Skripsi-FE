import { useRouteError } from 'react-router-dom';

type RouteErrorType = {
  data: unknown;
  error: {
    message: string;
    stack: string;
  };
  internal: boolean;
  status: number;
  statusText: string;
  message?: string;
};

export default function RootErrorElement(): JSX.Element {
  const error = useRouteError();
  const err = error as RouteErrorType;

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center text-primary-text-color'>
      <h1 className='mb-10 scroll-m-20 text-9xl font-extrabold text-primary-text-color'>
        {err?.status === 404 ? 404 : 'Unknown Error'}
      </h1>
      <span className='text-primary-text-color'>
        {err?.error?.message ?? err?.message ?? 'Unknown Error'}
      </span>
    </div>
  );
}
