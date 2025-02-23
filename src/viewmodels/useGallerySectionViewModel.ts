import {
  getBibleVerse,
  getHeroText,
  getSrcImages,
  getTitleText,
} from "@/models/gallerySectionModel";

export const useGallerySectionViewModel = () => {
  const srcImagesArray = getSrcImages();
  const titleText = getTitleText();
  const heroText = getHeroText();
  const bibleVerseText = getBibleVerse();

  return {
    srcImagesArray,
    heroText,
    titleText,
    bibleVerseText
  };
};
