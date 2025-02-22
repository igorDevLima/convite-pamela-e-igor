import { Heading, HeadingProps } from "@chakra-ui/react";

interface HeadingTextProps extends HeadingProps {}

export function HeadingText({ ...rest }: HeadingTextProps) {
  return <Heading {...rest} />;
}
