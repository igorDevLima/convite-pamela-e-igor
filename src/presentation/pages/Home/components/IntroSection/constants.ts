export const EMAIL_TO = import.meta.env.VITE_EMAIL_TO;
export const EMAIL_SUBJECT =
  "Que alegria! Minha presença está confirmada! 🎉💍";
export const EMAIL_BODY = `Queridos Igor e Pâmela,
    
    É com imensa alegria que confirmo minha presença nesse dia tão especial! 💖✨
    
    Mal posso esperar para celebrar o amor de vocês no dia 30 de agosto e testemunhar esse lindo capítulo que se inicia. Tenho certeza de que será um momento inesquecível, cheio de amor, emoção e felicidade!
    
    Com carinho,
    [Seu Nome Aqui]`;

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
