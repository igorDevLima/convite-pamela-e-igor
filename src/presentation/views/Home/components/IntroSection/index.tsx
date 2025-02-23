import { Box, Button } from "@chakra-ui/react";
import { HeadingText } from "@/presentation/components/typografy/heading";
import { useIntroSectionViewModel } from "@/viewmodels/useIntroSectionViewModel";
import { SectionContainer } from "@/presentation/components/layout/section-container";
import { SectionBackgroundImage } from "@/presentation/components/layout/section-image-background";

export function IntroSection() {
  const { introText, introButtonText, openGmail } = useIntroSectionViewModel();

  return (
    <SectionContainer>
      <SectionBackgroundImage src="public/intro.jpg" />

      {/* Box com o texto sobre a imagem */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        padding="4"
        borderRadius="md"
        color="white"
        textAlign="center"
        width="80%"
        zIndex={9998}
      >
        <HeadingText size={"2xl"}>{introText}</HeadingText>

        <Button mt="4" onClick={openGmail} colorScheme="teal">
          {introButtonText}
        </Button>
      </Box>
    </SectionContainer>
  );
}
