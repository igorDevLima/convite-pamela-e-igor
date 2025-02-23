import {
  AspectRatio,
  AspectRatioProps,
  Image,
  ImageProps,
} from "@chakra-ui/react";

export interface AspectRatioImageProps extends ImageProps {
  aspectRatio: AspectRatioProps;
}

export function AspectRatioImage({
  aspectRatio,
  ...rest
}: AspectRatioImageProps) {
  return (
    <AspectRatio {...aspectRatio}>
      <Image {...rest} />
    </AspectRatio>
  );
}
