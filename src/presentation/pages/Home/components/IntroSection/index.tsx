import { Button, HStack } from "@chakra-ui/react";
import { EMAIL_BODY, EMAIL_SUBJECT, EMAIL_TO } from "./constants";
import { useOpenGmail } from "./hooks/useOpenGmail";

export function IntroSection() {
  const { handleOpenGmail } = useOpenGmail({
    to: EMAIL_TO,
    subject: EMAIL_SUBJECT,
    body: EMAIL_BODY,
  });

  return (
    <>
      <HStack>
        <Button onClick={handleOpenGmail}>Confirmar presença</Button>
      </HStack>
    </>
  );
}
