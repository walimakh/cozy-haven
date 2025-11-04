import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section 
      style={{ 
        position: 'relative',
        width: '100%',
        height: '600px',
        overflow: 'hidden'
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1616594266537-c5b1cd7ba04b?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for text readability */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(74, 69, 67, 0.8), rgba(74, 69, 67, 0.4), transparent)'
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '32px',
          paddingRight: '32px'
        }}
      >
        <div style={{ maxWidth: '600px' }}>
          {/* Headline */}
          <h1 
            style={{ 
              fontSize: '48px',
              lineHeight: '1.1',
              marginBottom: '24px',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              color: '#ffffff',
              display: 'block',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Comfort and Quality Sleep
          </h1>

          {/* Subheadline */}
          <p 
            style={{ 
              fontSize: '20px',
              lineHeight: '1.6',
              marginBottom: '32px',
              opacity: 0.9,
              fontFamily: 'Arial, sans-serif',
              color: '#ffffff',
              display: 'block',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            Premium bedding essentials for your perfect sleeping experience.
            Transform your bedroom into a sanctuary of comfort.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <Button
              variant="primary"
              size="large"
              onClick={() => navigate('/product')}
            >
              Shop Collections
            </Button>
            <Button
              variant="secondary"
              size="large"
              onClick={() => navigate('/product')}
            >
              Explore Materials
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
