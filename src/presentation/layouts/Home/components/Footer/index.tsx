import { Box, BoxProps } from "@chakra-ui/react";

interface FooterProps extends BoxProps {}

export function Footer({ ...rest }: FooterProps) {
  return (
    <Box
      as="footer"
      background="{colors.primary}"
      padding={4}
      textAlign="center"
      {...rest}
    >
      Footer
    </Box>
  );
}
