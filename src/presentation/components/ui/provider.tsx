"use client";

import {
  ChakraProvider,
  ChakraProviderProps,
} from "@chakra-ui/react";

interface ProviderProps extends ChakraProviderProps {}

export function Provider({ children, value }: ProviderProps) {
  return <ChakraProvider value={value}>{children}</ChakraProvider>;
}
