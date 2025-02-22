import { Box, BoxProps } from "@chakra-ui/react";

interface SectionContainer extends BoxProps {}

export function SectionContainer({
  children,
  height = "100vh",
  width = "100%",
  position = "relative",
  ...props
}: SectionContainer) {
  return (
    <Box position={position} minHeight={height} width={width} {...props}>
      {children}
    </Box>
  );
}
