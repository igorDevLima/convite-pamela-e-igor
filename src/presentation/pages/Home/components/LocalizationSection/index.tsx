import {
  DEFAULT_CENTER,
  GOOGLE_MAP_ID,
  GOOGLE_MAPS_API_KEY,
  POSITION,
} from "./constants";
import { MapGoogle } from "./components/MapGoogle";

export function LocalizationSection() {
  return (
    <>
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
