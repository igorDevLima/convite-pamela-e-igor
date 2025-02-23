import {
  getCopyright,
  getPhotographerInstagramUrl,
  getPhotographerName,
} from "@/models/footerModel";

export const useFooterViewModel = () => {
  const photographerData = {
    name: getPhotographerName(),
    url: getPhotographerInstagramUrl(),
  };

  const copyright = getCopyright();

  return {
    photographerData,
    copyright,
  };
};
