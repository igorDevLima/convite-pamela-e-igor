import {
  Text as TextComponent,
  TextProps as TextComponentProps,
} from "@chakra-ui/react";

interface TextProps extends TextComponentProps {}

export function Text({ fontWeight = "thin", ...rest }: TextProps) {
  return (
    <TextComponent fontFamily={"body"} fontWeight={fontWeight} {...rest} />
  );
}
