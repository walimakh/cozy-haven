import { ShieldCheck, Sustainable, Truck, Recycle } from '../common/icons';

export default function Sustainability() {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'OEKO-TEX Certified',
      description: 'Tested for harmful substances',
    },
    {
      icon: Sustainable, 
      title: 'Organic Materials',
      description: 'Sustainably sourced fabrics',
    },
    {
      icon: Truck,
      title: 'Carbon Neutral',
      description: 'Eco-friendly shipping',
    },
    {
      icon: Recycle,
      title: 'Recyclable Packaging',
      description: '100% plastic-free materials',
    },
  ];

  return (
    <section className="w-full bg-sage/5 py-16">
      <div className="mx-auto max-w-[1200px] px-8">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 
            className="mb-4 font-bold"
            style={{
              fontSize: '2.5rem',
              color: '#4A4543',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            Committed to a Better Planet
          </h2>
          <p 
            className="mx-auto leading-relaxed"
            style={{
              maxWidth: '700px',
              fontSize: '1.125rem',
              color: 'rgba(74, 69, 67, 0.8)',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            We believe luxury and sustainability go hand in hand. Every product
            we create is designed with both your comfort and the planet's
            well-being in mind.
          </p>
        </div>

        {/* Sustainability Badges */}
        <div className="grid grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-sage/10">
                  <IconComponent className="h-12 w-12 text-sage" />
                </div>

                {/* Badge Title */}
                <h3 
                  className="mb-2 font-bold"
                  style={{
                    fontSize: '1.125rem',
                    color: '#4A4543',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  {badge.title}
                </h3>

                {/* Badge Description */}
                <p 
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(74, 69, 67, 0.7)',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Statement */}
        <div className="mt-12 rounded-lg bg-sage/10 p-8 text-center">
          <p 
            className="leading-relaxed"
            style={{
              fontSize: '1rem',
              color: 'rgba(74, 69, 67, 0.8)',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            <span 
              className="font-semibold text-sage"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              Our Promise:
            </span>{' '}
            For every purchase, we plant a tree through our partnership with
            One Tree Planted. Together, we've planted over 50,000 trees and
            counting.
          </p>
        </div>
      </div>
    </section>
  );
}
