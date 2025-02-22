export const getIntroText = (): string => {
  return "Bem-vindo ao nosso casamento!";
};

export const getIntroButtonText = (): string => "confirmar presença"

const getEmailTo = (): string => import.meta.env.VITE_MAIL_TO;

const getEmailSubject = (): string =>
  "Que alegria! Minha presença está confirmada! 🎉💍";

const getEmailBody = (): string => `Queridos Igor e Pâmela,
    
    É com imensa alegria que confirmo minha presença nesse dia tão especial! 💖✨
    
    Mal posso esperar para celebrar o amor de vocês no dia 30 de agosto e testemunhar esse lindo capítulo que se inicia. Tenho certeza de que será um momento inesquecível, cheio de amor, emoção e felicidade!
    
    Com carinho,
    [Seu Nome Aqui]`;

export const getEmailURL = (): string =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${getEmailTo()}&su=${encodeURIComponent(
    getEmailSubject()
  )}&body=${encodeURIComponent(getEmailBody())}`;
