import DiscoverOurMenu from "./custom_components/discover-menu/DiscoverOurMenu";
import FreshlySqueezedSection from "./custom_components/freshly-squeezed/FreshlySqueezedSection";
import HeroSection from "./custom_components/hero_section/HeroSection";
import NewsAndBlogsSection from "./custom_components/news-and-blogs/NewsAndBlogsSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-8">
      <HeroSection />
      <DiscoverOurMenu />
      <FreshlySqueezedSection />
      <NewsAndBlogsSection />
    </main>
  );
}
