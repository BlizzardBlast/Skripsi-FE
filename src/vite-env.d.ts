import 'vite/client';

interface ImportMetaEnv {
  readonly VITE_FETCH_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
