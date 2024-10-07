import DiscoverOurMenu from "./custom_components/discover-menu/DiscoverOurMenu";
import HeroSection from "./custom_components/hero_section/HeroSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-8">
      <HeroSection />
      <DiscoverOurMenu />
    </main>
  );
}
