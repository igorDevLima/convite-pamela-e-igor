export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
export const GOOGLE_MAP_ID = import.meta.env.VITE_GOOGLE_MAP_ID;

export const DEFAULT_CENTER = {
  lat: parseFloat(import.meta.env.VITE_DEFAULT_CENTER_LAT),
  lng: parseFloat(import.meta.env.VITE_DEFAULT_CENTER_LNG),
};

export const POSITION = {
  lat: parseFloat(import.meta.env.VITE_POSITION_LAT),
  lng: parseFloat(import.meta.env.VITE_POSITION_LNG),
};