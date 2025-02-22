import { AspectRatio, Box, Button, Image } from "@chakra-ui/react";
import { HeadingText } from "@/presentation/components/typografy/heading";
import { useIntroSectionViewModel } from "@/viewmodels/useIntroSectionViewModel";

export function IntroSection() {
  const { introText, openGmail } = useIntroSectionViewModel();

  return (
    <>
      <Box position="relative" height="100vh" width="100%">
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          background="linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))"
          zIndex="1"
        />

        <AspectRatio height="100vh" width="100%">
          <Image
            src="public/intro.jpg"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </AspectRatio>

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
            Confirmar presença
          </Button>
        </Box>
      </Box>
    </>
  );
}
