import { Box, ImageProps } from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";
import { AspectRatioImage } from "./aspect-ratio-image";

interface SectionBackgroundImageProps extends Pick<ImageProps, "src"> {}

export function SectionBackgroundImage({ src }: SectionBackgroundImageProps) {
  return (
    <Fragment>
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        background="linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))"
        zIndex="1"
      />

      <AspectRatioImage
        aspectRatio={{ height: "100vh", width: "100%" }}
        src={src}
        objectFit="cover"
        width="100%"
        height="100%"
      />
    </Fragment>
  );
}
