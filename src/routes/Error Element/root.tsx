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
};

export default function RootErrorElement(): JSX.Element {
  const error = useRouteError();
  const err = error as RouteErrorType;

  if (err.status === 404) {
    return (
      <div className='flex h-screen w-screen flex-col items-center justify-center text-primary-text-color'>
        <h1 className='mb-10 scroll-m-20 text-9xl font-extrabold text-primary-text-color'>
          404
        </h1>
        <span className='text-primary-text-color'>{err.error.message}</span>
      </div>
    );
  }

  return <div>{err.error.message}</div>;
}
