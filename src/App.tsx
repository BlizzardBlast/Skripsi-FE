import Routes from '@/routes/routes.tsx';
import { useEffect, type ReactElement } from 'react';

function App(): ReactElement {
  useEffect(() => {
    if (window.top !== null && window.self !== window.top) {
      window.top.location.href = window.self.location.href;
    }
  }, []);
  return <Routes />;
}

export default App;
