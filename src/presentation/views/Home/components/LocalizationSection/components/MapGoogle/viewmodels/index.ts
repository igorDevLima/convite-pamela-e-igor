import { useClipboard } from "@chakra-ui/react";
import { getGoogleLocationUrl, getWazeUrl } from "../models";
import { MapPosition } from "../types";

export const useMapGoogleViewModel = ({ position }: MapPosition) => {
  const googleLocationUrl = getGoogleLocationUrl({ position });
  const wazeUrl = getWazeUrl({ position });

  const { copy, copied } = useClipboard({ value: googleLocationUrl });

  const handleCopyToClipboard = () => copy;

  const handleOpenGoogleMap = () => window.open(googleLocationUrl);

  const handleOpenWaze = () => window.open(wazeUrl);

  return {
    handleCopyToClipboard,
    isCopiedToClipboard: copied,
    handleOpenGoogleMap,
    handleOpenWaze,
  };
};
