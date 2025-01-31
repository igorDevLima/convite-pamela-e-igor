/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAIL_TO: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
