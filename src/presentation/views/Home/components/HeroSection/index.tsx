import { SectionContainer } from "@/presentation/components/layout/section-container";
import { SectionBackgroundImage } from "@/presentation/components/layout/section-image-background";
import { HeadingText } from "@/presentation/components/typografy/heading";
import { useHeroSectionViewModel } from "@/viewmodels/useHeroSectionViewModel";
import { Box } from "@chakra-ui/react";

export function HeroSection() {
  const { heroText } = useHeroSectionViewModel();

  return (
    <SectionContainer position={'relative'}>
      <SectionBackgroundImage src="public/hero-background.jpg"/>
    
      <Box
        position="absolute"
        top="5%"
        left={'0%'}
        padding={"6rem 1rem"}
        borderRadius="md"
        color="white"
        textAlign={"left"}
        width="100%"
        zIndex={9998}
        
      >
        <HeadingText size={"2xl"}>{heroText}</HeadingText>
      </Box>
    </SectionContainer>
  );
}
