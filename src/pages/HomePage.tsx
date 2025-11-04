import Layout from '../components/layout/Layout';
import { useCart } from '../context/CartContext';
import HeroSection from '../components/homepage/HeroSection';
import FeaturedCollections from '../components/homepage/FeaturedCollections';
import ShopByCategory from '../components/homepage/ShopByCategory';
import MaterialEducation from '../components/homepage/MaterialEducation';
import SocialProof from '../components/homepage/SocialProof';
import Sustainability from '../components/homepage/Sustainability';

function HomePage() {
  const { itemCount } = useCart();

  return (
    <Layout cartItemCount={itemCount}>
      {/* Hero Section - Full Width */}
      <HeroSection />

      {/* Featured Collections Section */}
      <FeaturedCollections />

      {/* Shop by Category Section */}
      <ShopByCategory />

      {/* Material Education Section */}
      <MaterialEducation />

      {/* Social Proof Section */}
      <SocialProof />

      {/* Sustainability Section */}
      <Sustainability />

      {/* Newsletter already in Footer */}
    </Layout>
  );
}

export default HomePage;
