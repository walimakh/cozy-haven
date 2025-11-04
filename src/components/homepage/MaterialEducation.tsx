import { materials } from '../../data';
import Card from '../common/Card';
import { Check, Sustainable } from '../common/icons';

export default function MaterialEducation() {
  return (
    <section className="w-full bg-cream py-16">
      <div className="mx-auto max-w-[1200px] px-8">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 
            className="mb-3 font-bold"
            style={{
              fontSize: '2.5rem',
              color: '#4A4543',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            Why Choose Quality Materials?
          </h2>
          <p 
            style={{
              fontSize: '1.125rem',
              color: 'rgba(74, 69, 67, 0.7)',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            Understanding the fabrics that transform your sleep experience
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-3 gap-8">
          {materials.map((material) => (
            <Card key={material.id} className="group overflow-hidden">
              {/* Material Image */}
              <div className="relative mb-6 h-[240px] overflow-hidden rounded-lg">
                <img
                  src={material.textureImage}
                  alt={`${material.name} texture`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Material Name */}
              <h3 
                className="mb-3 font-bold"
                style={{
                  fontSize: '1.75rem',
                  color: '#4A4543',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              >
                {material.name}
              </h3>

              {/* Description */}
              <p 
                className="mb-6 leading-relaxed"
                style={{
                  fontSize: '1rem',
                  color: 'rgba(74, 69, 67, 0.8)',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              >
                {material.description}
              </p>

              {/* Key Benefits */}
              <div className="mb-4">
                <h4 
                  className="mb-3 font-semibold"
                  style={{
                    fontSize: '1rem',
                    color: '#4A4543',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  Key Benefits:
                </h4>
                <ul className="space-y-2">
                  {material.benefits.slice(0, 3).map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2"
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(74, 69, 67, 0.7)',
                        fontFamily: 'system-ui, -apple-system, sans-serif'
                      }}
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage" />
                      <span>{benefit.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sustainability Badge */}
              {material.sustainability && (
                <div className="mt-4 flex items-center gap-2 rounded-full bg-sage/10 px-4 py-2">
                  <Sustainable className="h-4 w-4 text-sage" />
                  <span 
                    className="font-medium text-sage"
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}
                  >
                    Sustainably Sourced
                  </span>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
