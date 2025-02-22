export const getGoogleMapsApiKey = () =>
  import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const getGoogleMapId = () => import.meta.env.VITE_GOOGLE_MAP_ID;

export const getMapDefaultCenter = () => {
  return {
    lat: parseFloat(import.meta.env.VITE_DEFAULT_CENTER_LAT),
    lng: parseFloat(import.meta.env.VITE_DEFAULT_CENTER_LNG),
  };
};

export const getMapPosition = () => {
  return {
    lat: parseFloat(import.meta.env.VITE_POSITION_LAT),
    lng: parseFloat(import.meta.env.VITE_POSITION_LNG),
  };
};
