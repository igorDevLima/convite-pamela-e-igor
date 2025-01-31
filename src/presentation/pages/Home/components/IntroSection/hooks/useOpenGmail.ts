interface UseOpenGmailProps {
  to: string;
  subject: string;
  body: string;
}

export function useOpenGmail({ to, subject, body }: UseOpenGmailProps) {
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  function handleOpenGmail() {
    window.open(gmailLink, "_blank");
  }

  return { handleOpenGmail };
}
