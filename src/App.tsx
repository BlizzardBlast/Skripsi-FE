import Routes from '@/routes/routes.tsx';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useEffect, type ReactElement } from 'react';
import { HelmetProvider } from 'react-helmet-async';

function App(): ReactElement {
  const helmetContext = {};

  useEffect(() => {
    if (window.top !== null && window.self !== window.top) {
      window.top.location.href = window.self.location.href;
    }
  }, []);

  return (
    <HelmetProvider context={helmetContext}>
      <Routes />
      <SpeedInsights />
    </HelmetProvider>
  );
}

export default App;
