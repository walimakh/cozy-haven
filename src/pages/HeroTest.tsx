import HeroSection from '../components/homepage/HeroSection';

export default function HeroTest() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold">Hero Section Test</h2>
        <p>This page is for testing the hero section layout without other components.</p>
      </div>
    </div>
  );
}