"use client";

import {
  ChakraProvider,
  ChakraProviderProps,
  defaultSystem,
} from "@chakra-ui/react";

export function Provider({ children, value }: ChakraProviderProps) {
  return (
    <ChakraProvider value={value ?? defaultSystem}>{children}</ChakraProvider>
  );
}
