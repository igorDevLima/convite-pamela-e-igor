import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { breakpoints } from "./breakpoints";
import { tokens } from "./tokens";
import { semanticTokens } from "./semanticTokens";
import { globalCss } from "./globalStyles";

const config = defineConfig({
  cssVarsRoot: ":where(:root, :host)",
  globalCss,
  theme: {
    breakpoints,
    tokens,
    semanticTokens,
  },
});

export const system = createSystem(defaultConfig, config);
