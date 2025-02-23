import { useFooterViewModel } from "@/viewmodels/useFooterViewModel";
import { Box, Flex, Link, Text, Icon, Image, BoxProps } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

interface FooterProps extends BoxProps {}

export function Footer({ ...rest }: FooterProps) {
  const { copyright, photographerData } = useFooterViewModel();

  return (
    <Box as="footer" background="primary" padding={4} {...rest}>
      <Flex
        maxW="1200px"
        mx="auto"
        justify="space-between"
        align="center"
        direction={{ base: "column", md: "row" }}
      >
        <Image src="public/logo.svg" filter={`invert(100%)`} />

        <Flex align="center">
          <Text color="white" mr={2}>
            Fotos por:
          </Text>
          <Link
            href={photographerData.url}
            target="_blank"
            color="white"
            fontWeight="bold"
            display="flex"
            alignItems="center"
            focusRing={'none'}
          >
            <Text as="span" mr={0.1}>
              {photographerData.name}
            </Text>
            <Icon as={FaInstagram} boxSize={5} />
          </Link>
        </Flex>
      </Flex>

      {/* Texto de direitos autorais */}
      <Text color="white" textAlign="center" mt={4}>
        {copyright}
      </Text>
    </Box>
  );
}
