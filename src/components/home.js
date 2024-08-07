import Category from './category';
import HeroSection from './hero-section';
import MainSection from './main';
import Navigation from './navigation';

export default function HomeComp() {
  return (
    <div className="text-3xl">
      <Navigation />
      <HeroSection />
      <Category />
      <MainSection />
    </div>
  );
}
