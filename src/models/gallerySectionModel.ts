export const getSrcImages = () => {
  return Array(7)
    .fill(null)
    .map((_, index) => `public/gallery-${index + 1}.jpg`);
};

export const getTitleText = () => "Titulo aqui";

export const getHeroText = () =>
  "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";

export const getBibleVerse = () => "Mateus 19:6";
