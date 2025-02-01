import { Button, HStack } from "@chakra-ui/react";
import {
  DEFAULT_CENTER,
  EMAIL_BODY,
  EMAIL_SUBJECT,
  EMAIL_TO,
  GOOGLE_MAP_ID,
  GOOGLE_MAPS_API_KEY,
  POSITION,
} from "./constants";
import { useOpenGmail } from "./hooks/useOpenGmail";
import { MapGoogle } from "./components/MapGoogle";

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

      <MapGoogle
        apiKey={GOOGLE_MAPS_API_KEY}
        mapId={GOOGLE_MAP_ID}
        defaultCenter={DEFAULT_CENTER}
        zoom={18.6}
        tilt={0}
        gestureHandling={"greedy"}
        renderingType="VECTOR"
        disableDefaultUI={true}
        position={POSITION}
      />
    </>
  );
}
