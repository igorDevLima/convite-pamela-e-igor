import { useLocalizationSectionViewModel } from "@/viewmodels/useLocalizationViewModel";
import { MapGoogle } from "./components/MapGoogle";
import { SectionContainer } from "@/presentation/components/layout/section-container";

export function LocalizationSection() {
  const { mapGoogleProps } = useLocalizationSectionViewModel();

  return (
    <SectionContainer>
      <MapGoogle
        {...mapGoogleProps()}
        zoom={18.6}
        tilt={0}
        gestureHandling={"greedy"}
        renderingType="VECTOR"
        disableDefaultUI={true}
      />
    </SectionContainer>
  );
}
