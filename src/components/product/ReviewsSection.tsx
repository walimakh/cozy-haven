import { useState, useMemo } from 'react';
import { Star, ShieldCheck, ThumbsUp } from 'lucide-react';
import type { Review } from '../../types/data';

interface ReviewsSectionProps {
  reviews: Review[];
  averageRating: number;
  productId: string;
}

export default function ReviewsSection({
  reviews,
  averageRating,
}: ReviewsSectionProps) {
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'recent' | 'helpful'>('helpful');
  const [visibleReviews, setVisibleReviews] = useState(6);

  // Calculate rating breakdown
  const ratingBreakdown = useMemo(() => {
    const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach((review) => {
      breakdown[review.rating as keyof typeof breakdown]++;
    });
    return breakdown;
  }, [reviews]);

  // Filter and sort reviews
  const processedReviews = useMemo(() => {
    let filtered = reviews;

    // Filter by rating
    if (filterRating) {
      filtered = filtered.filter((review) => review.rating === filterRating);
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'helpful') {
        return b.helpfulCount - a.helpfulCount;
      } else {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return sorted;
  }, [reviews, filterRating, sortBy]);

  const displayedReviews = processedReviews.slice(0, visibleReviews);

  return (
    <section id="reviews" className="py-16 bg-cream">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="text-[32px] font-bold text-charcoal mb-8">
          Customer Reviews
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {/* Left: Rating Summary */}
          <div className="col-span-1 space-y-6">
            {/* Average Rating */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-center mb-4">
                <div className="text-[48px] font-bold text-charcoal">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.round(averageRating)
                          ? 'fill-terracotta text-terracotta'
                          : 'fill-none text-charcoal/20'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[14px] text-charcoal/60">
                  Based on {reviews.length} reviews
                </p>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => {
                  const count = ratingBreakdown[rating as keyof typeof ratingBreakdown];
                  const percentage = (count / reviews.length) * 100;

                  return (
                    <button
                      key={rating}
                      onClick={() =>
                        setFilterRating(filterRating === rating ? null : rating)
                      }
                      className={`w-full flex items-center gap-2 text-[12px] hover:bg-cream/50 p-1 rounded transition-colors ${
                        filterRating === rating ? 'bg-cream' : ''
                      }`}
                    >
                      <span className="w-8 text-charcoal">{rating} ★</span>
                      <div className="flex-1 h-2 bg-charcoal/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-terracotta transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="w-8 text-right text-charcoal/60">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter Controls */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-[14px] font-semibold text-charcoal mb-3">
                Sort By
              </h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'recent' | 'helpful')}
                className="w-full px-3 py-2 border-2 border-charcoal/20 rounded-lg text-[14px] focus:border-terracotta focus:outline-none"
              >
                <option value="helpful">Most Helpful</option>
                <option value="recent">Most Recent</option>
              </select>

              {filterRating && (
                <button
                  onClick={() => setFilterRating(null)}
                  className="mt-3 w-full text-[12px] text-terracotta hover:underline"
                >
                  Clear filter
                </button>
              )}
            </div>
          </div>

          {/* Right: Reviews List */}
          <div className="col-span-2 space-y-4">
            {displayedReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-xl shadow-sm space-y-3"
              >
                {/* Rating and Verified */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= review.rating
                            ? 'fill-terracotta text-terracotta'
                            : 'fill-none text-charcoal/20'
                        }`}
                      />
                    ))}
                  </div>
                  {review.isVerifiedPurchase && (
                    <div className="flex items-center gap-1 text-[12px] text-sage">
                      <ShieldCheck className="h-4 w-4" />
                      Verified Purchase
                    </div>
                  )}
                </div>

                {/* Review Title */}
                <h4 className="text-[16px] font-semibold text-charcoal">
                  {review.title}
                </h4>

                {/* Review Text */}
                <p className="text-[14px] text-charcoal/80 leading-relaxed">
                  {review.comment}
                </p>

                {/* Reviewer Info and Date */}
                <div className="flex items-center justify-between pt-3 border-t border-charcoal/10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-sage/20 rounded-full flex items-center justify-center">
                      <span className="text-[14px] font-semibold text-sage">
                        {review.reviewerName.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-[14px] font-medium text-charcoal">
                        {review.reviewerName}
                      </p>
                      <p className="text-[12px] text-charcoal/60">
                        {new Date(review.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Helpful Button */}
                  <button className="flex items-center gap-2 px-3 py-1 text-[12px] text-charcoal/70 hover:text-terracotta hover:bg-terracotta/5 rounded-lg transition-colors">
                    <ThumbsUp className="h-4 w-4" />
                    Helpful ({review.helpfulCount})
                  </button>
                </div>
              </div>
            ))}

            {/* Load More Button */}
            {processedReviews.length > visibleReviews && (
              <button
                onClick={() => setVisibleReviews((prev) => prev + 6)}
                className="w-full py-3 border-2 border-charcoal/20 rounded-lg text-[14px] font-semibold text-charcoal hover:border-terracotta hover:text-terracotta transition-colors"
              >
                Load More Reviews
              </button>
            )}

            {processedReviews.length === 0 && (
              <div className="text-center py-12 text-charcoal/60">
                <p>No reviews match the selected filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
