import { useState } from "react";
import {
  Container,
  Box,
  Spinner,
  IconButton,
  useClipboard,
  HStack,
} from "@chakra-ui/react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  MapProps,
  AdvancedMarkerProps,
} from "@vis.gl/react-google-maps";
import { FaWaze, FaGoogle, FaCopy, FaCheck } from "react-icons/fa6";

interface MapGoogleProps
  extends MapProps,
    Pick<AdvancedMarkerProps, "position"> {
  apiKey: string;
}

const LoadingOverlay = () => (
  <Box
    position="absolute"
    top="0"
    left="0"
    width="100%"
    height="100%"
    display="flex"
    alignItems="center"
    justifyContent="center"
    backgroundColor="rgba(255, 255, 255, 0.7)"
    zIndex={1}
  >
    <Spinner size="xl" color="blue.500" />
  </Box>
);

const MapControlButton = ({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: JSX.Element;
  onClick: () => void;
}) => (
  <IconButton
    aria-label={label}
    rounded="full"
    variant="ghost"
    onClick={onClick}
  >
    {icon}
  </IconButton>
);

export function MapGoogle({
  apiKey,
  mapId = "DEMO_MAP_ID",
  position,
  ...rest
}: MapGoogleProps) {
  const [isLoading, setIsLoading] = useState(true);
  const googleLocationUrl = `https://www.google.com/maps?q=${position?.lat},${position?.lng}`;
  const { copy, copied } = useClipboard({ value: googleLocationUrl });

  return (
    <Container>
      <Box width="100%" height="300px" position="relative">
        {isLoading && <LoadingOverlay />}
        <APIProvider apiKey={apiKey}>
          <Map
            style={{ width: "100%", height: "100%" }}
            mapId={mapId}
            onTilesLoaded={() => setIsLoading(false)}
            {...rest}
          >
            <AdvancedMarker position={position} />
          </Map>
        </APIProvider>
      </Box>
      <HStack align="flex-start" gap={8}>
        <MapControlButton
          label="Open location with Waze"
          icon={<FaWaze />}
          onClick={() =>
            window.open(
              `https://www.waze.com/ul?ll=${encodeURIComponent(
                `${position?.lat},${position?.lng}`
              )}&navigate=yes&zoom=17`
            )
          }
        />
        <MapControlButton
          label="Abrir no Google Maps"
          icon={<FaGoogle />}
          onClick={() => window.open(googleLocationUrl)}
        />
        <MapControlButton
          label="Copiar localização"
          icon={copied ? <FaCheck /> : <FaCopy />}
          onClick={copy}
        />
      </HStack>
    </Container>
  );
}
