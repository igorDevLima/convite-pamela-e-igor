import { MapPosition } from "../types";

export const getGoogleLocationUrl = ({ position }: MapPosition) =>
  `https://www.google.com/maps?q=${position?.lat},${position?.lng}`;

export const getWazeUrl = ({ position }: MapPosition) =>
  `https://www.waze.com/ul?ll=${encodeURIComponent(
    `${position?.lat},${position?.lng}`
  )}&navigate=yes&zoom=17`;
