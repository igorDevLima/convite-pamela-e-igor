import { LayoutProps } from "@/infra/types/components/layout";
import { Box, Grid } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function HomeLayout({ children, ...rest }: LayoutProps) {
  return (
    <Grid templateRows="auto 1fr auto" height="100vh" {...rest}>
      <Header />

      <Box as="main" padding={4}>
        {children}
      </Box>

      <Footer />
    </Grid>
  );
}
