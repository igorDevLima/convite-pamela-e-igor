import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { IntroSection } from "./components/IntroSection";
import { LocalizationSection } from "./components/LocalizationSection";

function HomePage() {
  return (
    <>
      <IntroSection />
      <GallerySection />
      <HeroSection />
      <LocalizationSection />
    </>
  );
}

export default HomePage;
