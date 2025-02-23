import { getHeroText } from "@/models/heroSectionModel";

export const useHeroSectionViewModel = () => {
  const heroText = getHeroText();

  return { heroText };
};
