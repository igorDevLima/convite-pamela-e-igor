/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAIL_TO: string;
  readonly VITE_GOOGLE_MAP_ID: string;
  readonly VITE_GOOGLE_MAPS_API_KEY: string;
  readonly VITE_DEFAULT_CENTER_LAT: string;
  readonly VITE_DEFAULT_CENTER_LNG: string;
  readonly VITE_POSITION_LAT: string;
  readonly VITE_POSITION_LNG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
