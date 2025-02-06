import { Box, BoxProps, Image } from "@chakra-ui/react";

interface HeaderProps extends BoxProps {}

export function Header({ ...rest }: HeaderProps) {
  return (
    <Box
      as="header"
      background="{colors.primary}"
      padding={4}
      textAlign="center"
      {...rest}
    >
      <Image src="../../../../../../public/logo.svg" />
      Header
    </Box>
  );
}
