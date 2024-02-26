import { useEffect, type ReactElement } from 'react';
import Routes from './routes/routes.tsx';

function App(): ReactElement {
  useEffect(() => {
    if (window.top !== null && window.self !== window.top) {
      window.top.location.href = window.self.location.href;
    }
  }, []);
  return <Routes />;
}

export default App;
