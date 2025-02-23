import { useClipboard } from "@chakra-ui/react";
import { getGoogleLocationUrl, getWazeUrl } from "../models";
import { MapPosition } from "../types";
import { FaCheck, FaCopy, FaGoogle, FaWaze } from "react-icons/fa6";
import { useState } from "react";

export const useMapGoogleViewModel = ({ position }: MapPosition) => {
  const [mapIsLoading, setMapIsLoading] = useState(true);

  const googleLocationUrl = getGoogleLocationUrl({ position });
  const wazeUrl = getWazeUrl({ position });

  const { copy, copied } = useClipboard({ value: googleLocationUrl });

  const handleOpenWaze = () => window.open(wazeUrl);

  const mapActions = [
    {
      icon: FaWaze,
      onclick: handleOpenWaze,
      label: "Open location with Waze",
    },
    {
      icon: FaGoogle,
      onclick: handleOpenWaze,
      label: "Abrir no Google Maps",
    },
    {
      icon: copied ? FaCheck : FaCopy,
      onclick: copy,
      label: "Copiar localização",
    },
  ];

  const handleMapIsLoading = (isLoading: boolean) => setMapIsLoading(isLoading);

  return {
    mapActions,
    mapIsLoading,
    handleMapIsLoading,
  };
};
