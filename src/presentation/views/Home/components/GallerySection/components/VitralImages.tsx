import { AspectRatioImage } from "@/presentation/components/layout/aspect-ratio-image";
import { Flex, FlexProps } from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";

interface VitralImagesProps extends FlexProps {
  srcImages: string[];
  showLavanderBackground?: boolean;
}

export function VitralImages({
  srcImages,
  showLavanderBackground = false,
  ...rest
}: VitralImagesProps) {
  return (
    <Flex
      direction="column"
      align="center"
      position={"relative"}
      gap={4}
      width="100%"
      {...rest}
    >
      {srcImages.map((src, index) =>
        index === 0 ? (
          <Fragment>
            {showLavanderBackground && (
              <Flex
                justifyContent={"space-between"}
                position="absolute"
                top={0}
                zIndex={9998}
              >
                <AspectRatioImage
                  aspectRatio={{
                    width: "300px",
                    height: "300px",
                    rotate: "-25deg",
                  }}
                  src="public/lavender-gallery-background.png"
                />
                <AspectRatioImage
                  aspectRatio={{
                    width: "300px",
                    height: "300px",
                    rotate: "25deg",
                  }}
                  src="public/lavender-gallery-background.png"
                />
              </Flex>
            )}
            <AspectRatioImage
              key={index}
              aspectRatio={{ height: "300px", width: "100%" }}
              src={src}
              objectFit="cover"
              width="100%"
              height="300px"
              borderTopRadius="100%"
              zIndex={showLavanderBackground ? 9998 : undefined}
            />
          </Fragment>
        ) : null
      )}

      <Flex gap={4} width="100%" flex={1} justify="center">
        {srcImages.slice(1).map((src, index) => (
          <AspectRatioImage
            key={index + 1}
            aspectRatio={{ width: "100%", flex: 1 }}
            src={src}
            objectFit="cover"
            width="100%"
            flex="1"
          />
        ))}
      </Flex>
    </Flex>
  );
}
