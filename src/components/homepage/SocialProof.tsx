import { reviews } from '../../data';
import { Star, ShieldCheck } from '../common/icons';

export default function SocialProof() {
  // Get featured reviews (top 3 most helpful)
  const featuredReviews = [...reviews]
    .sort((a, b) => b.helpfulCount - a.helpfulCount)
    .slice(0, 3);

  // Calculate overall average rating
  const avgRating = 4.8; // Mock overall rating

  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating
                ? 'fill-terracotta text-terracotta'
                : 'text-charcoal/20'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="w-full py-16">
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
            Join 10,000+ Happy Sleepers
          </h2>
          <div className="mb-2 flex items-center justify-center gap-2">
            <StarRating rating={5} />
            <span 
              className="font-semibold"
              style={{
                fontSize: '1.125rem',
                color: '#4A4543',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              {avgRating} out of 5
            </span>
          </div>
          <p 
            style={{
              fontSize: '1rem',
              color: 'rgba(74, 69, 67, 0.7)',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            Based on 2,847 verified reviews
          </p>
        </div>

        {/* Instagram-style Photo Grid */}
        <div className="mb-12 grid grid-cols-6 gap-3">
          {[
            'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&q=80',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80',
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80',
            'https://images.unsplash.com/photo-1616137422495-8e91f8f6e5b9?w=400&q=80',
            'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80',
            'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80',
          ].map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg transition-transform duration-200 hover:scale-105"
            >
              <img
                src={image}
                alt={`Customer bedroom ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Featured Reviews */}
        <div className="grid grid-cols-3 gap-6">
          {featuredReviews.map((review) => (
            <div
              key={review.id}
              className="rounded-lg border border-charcoal/10 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              {/* Rating */}
              <div className="mb-3">
                <StarRating rating={review.rating} />
              </div>

              {/* Review Title */}
              <h4 
                className="mb-2 font-bold"
                style={{
                  fontSize: '1rem',
                  color: '#4A4543',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              >
                "{review.title}"
              </h4>

              {/* Review Text */}
              <p 
                className="mb-4 leading-relaxed"
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(74, 69, 67, 0.7)',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              >
                {review.comment}
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between border-t border-charcoal/10 pt-4">
                <div>
                  <p 
                    className="font-semibold"
                    style={{
                      fontSize: '0.875rem',
                      color: '#4A4543',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}
                  >
                    {review.reviewerName}
                  </p>
                  <p 
                    style={{
                      fontSize: '0.75rem',
                      color: 'rgba(74, 69, 67, 0.6)',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}
                  >
                    {new Date(review.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                {review.isVerifiedPurchase && (
                  <div className="flex items-center gap-1 text-sage">
                    <ShieldCheck className="h-4 w-4" />
                    <span 
                      className="font-medium"
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'system-ui, -apple-system, sans-serif'
                      }}
                    >
                      Verified
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
