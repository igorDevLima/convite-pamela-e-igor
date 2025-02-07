import { Box, BoxProps, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface HeaderProps extends BoxProps {}

export function Header({ ...rest }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      as="header"
      padding={4}
      textAlign="center"
      position="fixed"
      width="100%"
      zIndex={9999}
      transition="background 0.3s ease"
      backgroundColor={isScrolled ? "{colors.background}" : "transparent"}
      {...rest}
    >
      <Image
        filter={`invert(${isScrolled ? "0%" : "100%"})`}
        src={"public/logo.svg"}
      />
    </Box>
  );
}
