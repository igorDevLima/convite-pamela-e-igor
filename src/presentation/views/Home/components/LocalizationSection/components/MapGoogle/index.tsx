import { useState } from "react";
import { Container, Box, Spinner, IconButton, HStack } from "@chakra-ui/react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  MapProps,
} from "@vis.gl/react-google-maps";
import { FaWaze, FaGoogle, FaCopy, FaCheck } from "react-icons/fa6";
import { MapPosition } from "./types";
import { useMapGoogleViewModel } from "./viewmodels";

interface MapGoogleProps extends MapProps, MapPosition {
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

  const {
    handleCopyToClipboard,
    isCopiedToClipboard,
    handleOpenGoogleMap,
    handleOpenWaze,
  } = useMapGoogleViewModel({
    position,
  });

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
          onClick={handleOpenWaze}
        />
        <MapControlButton
          label="Abrir no Google Maps"
          icon={<FaGoogle />}
          onClick={handleOpenGoogleMap}
        />
        <MapControlButton
          label="Copiar localização"
          icon={isCopiedToClipboard ? <FaCheck /> : <FaCopy />}
          onClick={handleCopyToClipboard}
        />
      </HStack>
    </Container>
  );
}
