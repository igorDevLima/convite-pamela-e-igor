import { Container, Box, Spinner, IconButton, HStack } from "@chakra-ui/react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  MapProps,
} from "@vis.gl/react-google-maps";
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
    color={"primary"}
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
  const { mapActions, mapIsLoading, handleMapIsLoading } =
    useMapGoogleViewModel({
      position,
    });

  return (
    <Container>
      <Box width="100%" height="300px" position="relative">
        {mapIsLoading && <LoadingOverlay />}
        <APIProvider apiKey={apiKey}>
          <Map
            style={{ width: "100%", height: "100%" }}
            mapId={mapId}
            onTilesLoaded={() => handleMapIsLoading(false)}
            {...rest}
          >
            <AdvancedMarker position={position} />
          </Map>
        </APIProvider>
      </Box>
      <HStack align="flex-start" gap={8}>
        {mapActions.map(({ icon, label, onclick }) => {
          const Icon = icon;

          return (
            <MapControlButton label={label} icon={<Icon />} onClick={onclick} />
          );
        })}
      </HStack>
    </Container>
  );
}
