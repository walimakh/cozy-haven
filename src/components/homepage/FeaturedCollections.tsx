import { collections } from '../../data';
import Button from '../common/Button';

export default function FeaturedCollections() {
  return (
    <section 
      style={{
        width: '100%',
        backgroundColor: '#F5F0E8',
        paddingTop: '64px',
        paddingBottom: '64px'
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: '1200px',
          paddingLeft: '32px',
          paddingRight: '32px'
        }}
      >
        {/* Section Title */}
        <div 
          style={{
            marginBottom: '48px',
            textAlign: 'center'
          }}
        >
          <h2 
            style={{
              fontSize: '40px',
              color: '#4A4543',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              marginBottom: '12px',
              display: 'block'
            }}
          >
            Featured Collections
          </h2>
          <p 
            style={{
              fontSize: '18px',
              color: 'rgba(74, 69, 67, 0.7)',
              fontFamily: 'Arial, sans-serif',
              display: 'block'
            }}
          >
            Curated sets for every style and season
          </p>
        </div>

        {/* Collection Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px'
          }}
        >
          {collections.map((collection) => (
            <div
              key={collection.id}
              style={{
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: '12px',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              {/* Collection Image */}
              <div 
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '320px'
                }}
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover'
                  }}
                />
                {/* Overlay */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to top, rgba(74, 69, 67, 0.8), rgba(74, 69, 67, 0.3), transparent)'
                  }}
                />
              </div>

              {/* Collection Info */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '24px',
                  color: '#ffffff'
                }}
              >
                <h3 
                  style={{
                    fontSize: '28px',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    display: 'block'
                  }}
                >
                  {collection.name}
                </h3>
                <p 
                  style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontFamily: 'Arial, sans-serif',
                    marginBottom: '16px',
                    display: 'block',
                    lineHeight: '1.5'
                  }}
                >
                  {collection.shortDescription}
                </p>
                <Button variant="primary" size="medium">
                  Explore Collection
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
