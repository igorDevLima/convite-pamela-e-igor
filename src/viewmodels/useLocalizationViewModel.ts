import {
  getGoogleMapId,
  getGoogleMapsApiKey,
  getMapDefaultCenter,
  getMapPosition,
} from "@/models/localizationSectionModel";

export const useLocalizationSectionViewModel = () => {
  const googleMapsApiKey = getGoogleMapsApiKey();

  const googleMapId = getGoogleMapId();

  const defaultCenter = getMapDefaultCenter();

  const position = getMapPosition();

  const mapGoogleProps = () => {
    return {
      apiKey: googleMapsApiKey,
      mapId: googleMapId,
      defaultCenter: defaultCenter,
      position: position,
    };
  };

  return {
    mapGoogleProps,
  };
};
