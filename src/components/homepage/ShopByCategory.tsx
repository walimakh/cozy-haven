import { Link } from 'react-router-dom';
import { categories } from '../../data';
import { products } from '../../data/products';
import { Layers, Wind, Square, Box, Activity, Maximize2, Package } from '../common/icons';
import Card from '../common/Card';

export default function ShopByCategory() {
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> =
      {
        Layers,
        Wind,
        Square,
        Box,
        Activity,
        Maximize2,
      };
    return iconMap[iconName] || Package;
  };

  return (
    <section className="w-full py-8 md:py-16">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        {/* Section Title */}
        <div className="mb-8 md:mb-12 text-center">
          <h2
            className="mb-2 md:mb-3 font-bold text-h2-mobile md:text-[2.5rem]"
            style={{
              color: '#4A4543',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            Shop by Category
          </h2>
          <p
            className="text-sm md:text-lg"
            style={{
              color: 'rgba(74, 69, 67, 0.7)',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            Find exactly what you need for your perfect sleep
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => {
            const IconComponent = getIcon(category.icon);
            // Find first product in this category
            const firstProduct = products.find((p) => p.category === category.name);
            const linkTo = firstProduct ? `/product/${firstProduct.id}` : '/product';

            return (
              <Link key={category.id} to={linkTo}>
                <Card
                  className="group cursor-pointer text-center transition-all duration-200 hover:shadow-lg"
                >
                {/* Icon */}
                <div className="mb-3 md:mb-4 flex justify-center">
                  <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-sage/10 transition-colors duration-200 group-hover:bg-terracotta/10">
                    <IconComponent className="h-8 w-8 md:h-10 md:w-10 text-sage transition-colors duration-200 group-hover:text-terracotta" />
                  </div>
                </div>

                {/* Category Name */}
                <h3
                  className="mb-2 font-bold text-lg md:text-2xl"
                  style={{
                    color: '#4A4543',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  {category.name}
                </h3>

                {/* Description (Hidden on Mobile) */}
                <p
                  className="hidden md:block mb-3 text-sm"
                  style={{
                    color: 'rgba(74, 69, 67, 0.7)',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  {category.description}
                </p>

                {/* Product Count */}
                <p
                  className="font-semibold text-xs md:text-sm"
                  style={{
                    color: '#D4A59A',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  {category.productCount}{' '}
                  {category.productCount === 1 ? 'Product' : 'Products'}
                </p>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
