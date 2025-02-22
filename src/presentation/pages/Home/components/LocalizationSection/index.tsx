import { useLocalizationSectionViewModel } from "@/viewmodels/useLocalizationViewModel";
import { MapGoogle } from "./components/MapGoogle";

export function LocalizationSection() {
  const { mapGoogleProps } = useLocalizationSectionViewModel();

  return (
    <>
      <MapGoogle
        {...mapGoogleProps()}
        zoom={18.6}
        tilt={0}
        gestureHandling={"greedy"}
        renderingType="VECTOR"
        disableDefaultUI={true}
      />
    </>
  );
}
