import { SectionContainer } from "@/presentation/components/layout/section-container";
import { HeadingText } from "@/presentation/components/typografy/heading";
import { Text } from "@/presentation/components/typografy/text";
import { useGallerySectionViewModel } from "@/viewmodels/useGallerySectionViewModel";
import { Flex } from "@chakra-ui/react";
import { VitralImages } from "./components/VitralImages";

export function GallerySection() {
  const { srcImagesArray, titleText, heroText, bibleVerseText } =
    useGallerySectionViewModel();

  return (
    <SectionContainer
      padding={"6rem 1rem"}
      display={"flex"}
      flexDirection={"column"}
      gap={16}
    >
      <Flex align="center" flexDirection="column" gap={2}>
        <HeadingText>{titleText}</HeadingText>
        <Text>{heroText}</Text>
      </Flex>
      <Flex gap={4} alignItems="stretch" height="auto">
        <VitralImages
          marginTop={16}
          flex="0.7"
          srcImages={srcImagesArray.splice(3, 2)}
          hideBelow={"md"}
        />
        <VitralImages
          minHeight="100%"
          flex="1"
          srcImages={srcImagesArray.splice(0, 3)}
          showLavanderBackground
        />
        <VitralImages
          marginTop={16}
          flex="0.7"
          srcImages={srcImagesArray}
          hideBelow={"md"}
        />
      </Flex>

      <Text textTransform={"uppercase"} fontWeight={"medium"}>
        {bibleVerseText}
      </Text>
    </SectionContainer>
  );
}
