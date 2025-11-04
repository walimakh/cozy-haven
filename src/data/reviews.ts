import type { Review } from '../types/data';

// Customer Reviews for Cozy Haven Products

export const reviews: Review[] = [
  // Reviews for Egyptian Cotton Sateen Sheet Set (sheet-001)
  {
    id: 'review-001',
    productId: 'sheet-001',
    reviewerName: 'Sarah M.',
    rating: 5,
    title: 'Best sheets I\'ve ever owned',
    comment:
      'These sheets are absolutely incredible! The sateen finish is so smooth and luxurious. They feel like sleeping in a 5-star hotel every night. Worth every penny and they get softer with each wash.',
    date: '2025-10-15T08:30:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 124,
    size: 'Queen',
    color: 'White',
  },
  {
    id: 'review-002',
    productId: 'sheet-001',
    reviewerName: 'Michael Chen',
    rating: 5,
    title: 'Hotel quality at home',
    comment:
      'I travel a lot for work and always loved the sheets at luxury hotels. These are identical quality! The 600 thread count makes such a difference. They stay cool in summer and feel cozy in winter.',
    date: '2025-10-10T14:22:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 89,
    size: 'King',
    color: 'Ivory',
  },
  {
    id: 'review-003',
    productId: 'sheet-001',
    reviewerName: 'Emily R.',
    rating: 4,
    title: 'Beautiful but needs care',
    comment:
      'Gorgeous sheets with amazing quality. Only giving 4 stars because they do wrinkle more than my old percale sheets, but the softness makes up for it. Just take them out of the dryer right away.',
    date: '2025-10-05T19:45:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 67,
    size: 'Queen',
    color: 'Sage',
  },

  // Reviews for Linen Relaxed Sheet Set (sheet-002)
  {
    id: 'review-004',
    productId: 'sheet-002',
    reviewerName: 'Jessica L.',
    rating: 5,
    title: 'Linen lover\'s dream',
    comment:
      'I\'ve been buying linen sheets for years and these are hands down the best quality I\'ve found. Pre-washed so they\'re soft immediately. The natural texture is beautiful and they keep me so comfortable.',
    date: '2025-10-20T11:15:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 156,
    size: 'Queen',
    color: 'Terracotta',
  },
  {
    id: 'review-005',
    productId: 'sheet-002',
    reviewerName: 'David K.',
    rating: 5,
    title: 'Perfect for hot sleepers',
    comment:
      'I run hot at night and these linen sheets are a game changer. So breathable and cooling. The European quality really shows - thick but not heavy. Highly recommend for anyone who gets too warm.',
    date: '2025-10-18T16:30:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 98,
    size: 'King',
    color: 'Stone Gray',
  },

  // Reviews for Memory Foam Contour Pillow (pillow-001)
  {
    id: 'review-006',
    productId: 'pillow-001',
    reviewerName: 'Amanda P.',
    rating: 5,
    title: 'No more neck pain!',
    comment:
      'After years of waking up with neck pain, this pillow has been life-changing. The contour shape keeps my spine aligned and the cooling gel actually works. Best sleep investment I\'ve made.',
    date: '2025-10-22T09:00:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 203,
    size: 'Queen',
  },
  {
    id: 'review-007',
    productId: 'pillow-001',
    reviewerName: 'Robert T.',
    rating: 4,
    title: 'Great support, adjustment period',
    comment:
      'Excellent pillow with firm support. Took about a week to get used to the contour shape, but now I love it. The cooling feature works well. Wish it came in different firmness levels.',
    date: '2025-10-12T20:15:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 76,
    size: 'King',
  },

  // Reviews for All-Season Down Alternative Duvet (duvet-001)
  {
    id: 'review-008',
    productId: 'duvet-001',
    reviewerName: 'Lisa M.',
    rating: 5,
    title: 'Hypoallergenic and heavenly',
    comment:
      'I have allergies to real down, so this alternative is perfect. It\'s fluffy, warm but not too hot, and stays evenly distributed. The corner loops make it easy to attach to my duvet cover.',
    date: '2025-10-17T13:40:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 142,
    size: 'Queen',
  },
  {
    id: 'review-009',
    productId: 'duvet-001',
    reviewerName: 'James W.',
    rating: 5,
    title: 'True all-season comfort',
    comment:
      'Living in a climate with big temperature swings, this duvet really does work year-round. Not too hot in summer, warm enough in winter. Great quality construction and easy to care for.',
    date: '2025-10-08T10:25:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 91,
    size: 'King',
  },

  // Reviews for Lightweight Linen Duvet Cover (duvet-002)
  {
    id: 'review-010',
    productId: 'duvet-002',
    reviewerName: 'Rachel B.',
    rating: 5,
    title: 'Elevated my entire bedroom',
    comment:
      'This linen duvet cover is stunning! The sage color is exactly as pictured and the texture adds so much character to my bed. Stone-washed means no stiffness. Absolutely love it.',
    date: '2025-10-19T15:50:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 167,
    size: 'Queen',
    color: 'Sage',
  },

  // Reviews for Chunky Knit Throw Blanket (blanket-001)
  {
    id: 'review-011',
    productId: 'blanket-001',
    reviewerName: 'Olivia S.',
    rating: 5,
    title: 'Cozy and gorgeous',
    comment:
      'This throw is the perfect finishing touch to my bedroom. So cozy for movie nights and looks beautiful draped over the bed. Hand-knitted quality shows in every stitch.',
    date: '2025-10-21T12:30:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 189,
    color: 'Ivory',
  },
  {
    id: 'review-012',
    productId: 'blanket-001',
    reviewerName: 'Tom H.',
    rating: 5,
    title: 'Worth the investment',
    comment:
      'Yes, it\'s pricey for a throw, but the quality justifies it. Heavy, warm, and beautifully made. My wife loves it for reading in bed. The charcoal color matches our decor perfectly.',
    date: '2025-10-14T18:20:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 112,
    color: 'Charcoal',
  },

  // Reviews for Weighted Blanket (blanket-003)
  {
    id: 'review-013',
    productId: 'blanket-003',
    reviewerName: 'Nina P.',
    rating: 5,
    title: 'Helps me sleep through the night',
    comment:
      'Struggled with insomnia for years. This weighted blanket has made a noticeable difference. The gentle pressure is so calming. Started with the 15lb and it\'s perfect for my weight.',
    date: '2025-10-16T21:45:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 234,
    size: 'Queen',
  },

  // Reviews for Gel-Infused Memory Foam Topper (topper-001)
  {
    id: 'review-014',
    productId: 'topper-001',
    reviewerName: 'Mark D.',
    rating: 5,
    title: 'Saved me from buying a new mattress',
    comment:
      'My mattress was too firm and causing back pain. This topper completely transformed it. The memory foam is high quality and the cooling gel works great. Like sleeping on a cloud now.',
    date: '2025-10-11T09:30:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 178,
    size: 'King',
  },

  // Reviews for Organic Bamboo Cooling Sheet Set (sheet-003)
  {
    id: 'review-015',
    productId: 'sheet-003',
    reviewerName: 'Crystal J.',
    rating: 5,
    title: 'Cooler sleep guaranteed',
    comment:
      'These bamboo sheets are amazing for hot summer nights. Noticeably cooler than my cotton sheets. They\'re silky soft and the eco-friendly aspect is a bonus. Highly recommend!',
    date: '2025-10-13T14:15:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 145,
    size: 'Queen',
    color: 'White',
  },

  // Reviews for Silk Pillowcase Set (pillow-005)
  {
    id: 'review-016',
    productId: 'pillow-005',
    reviewerName: 'Sophia L.',
    rating: 5,
    title: 'My hair and skin thank me',
    comment:
      'Real silk makes such a difference! My hair is less tangled in the morning and my skin looks better. The quality is excellent - you can tell it\'s genuine mulberry silk. Worth the splurge.',
    date: '2025-10-09T11:00:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 267,
    size: 'Queen',
    color: 'Ivory',
  },
  {
    id: 'review-017',
    productId: 'pillow-005',
    reviewerName: 'Jennifer K.',
    rating: 5,
    title: 'Luxury every night',
    comment:
      'Bought these as a treat for myself and now I\'m hooked. The cooling properties are great for summer and they feel so luxurious. My bedhead has significantly improved too!',
    date: '2025-10-07T16:30:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 198,
    size: 'Queen',
    color: 'White',
  },

  // Reviews for Blackout Linen Curtains (curtain-001)
  {
    id: 'review-018',
    productId: 'curtain-001',
    reviewerName: 'Andrew F.',
    rating: 5,
    title: 'Perfect blackout + beautiful texture',
    comment:
      'These curtains block 100% of light as promised but still look elegant with the natural linen texture. Great for shift workers like me who need to sleep during the day. Quality is exceptional.',
    date: '2025-10-06T13:20:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 134,
    color: 'Charcoal',
  },

  // Reviews for Percale Crisp Sheet Set (sheet-004)
  {
    id: 'review-019',
    productId: 'sheet-004',
    reviewerName: 'Lauren W.',
    rating: 5,
    title: 'Crisp and cool perfection',
    comment:
      'If you like that fresh, crisp hotel feel, these are for you. The percale weave is cool and breathable. They don\'t wrinkle as much as I expected and the quality is outstanding.',
    date: '2025-10-04T10:45:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 87,
    size: 'Queen',
    color: 'White',
  },

  // Reviews for Luxury Goose Down Comforter (duvet-003)
  {
    id: 'review-020',
    productId: 'duvet-003',
    reviewerName: 'Victoria H.',
    rating: 5,
    title: 'The ultimate splurge',
    comment:
      'This is the most luxurious comforter I\'ve ever owned. The 800 fill power is incredibly warm but not heavy. Knowing it\'s ethically sourced makes me feel good about the investment. Pure luxury.',
    date: '2025-10-02T19:00:00Z',
    isVerifiedPurchase: true,
    helpfulCount: 156,
    size: 'King',
  },
];

// Helper functions
export const getReviewsByProductId = (productId: string): Review[] => {
  return reviews.filter((review) => review.productId === productId);
};

export const getAverageRating = (productId: string): number => {
  const productReviews = getReviewsByProductId(productId);
  if (productReviews.length === 0) return 0;

  const sum = productReviews.reduce((acc, review) => acc + review.rating, 0);
  return Number((sum / productReviews.length).toFixed(1));
};

export const getRatingBreakdown = (productId: string) => {
  const productReviews = getReviewsByProductId(productId);
  const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

  productReviews.forEach((review) => {
    breakdown[review.rating as keyof typeof breakdown]++;
  });

  return breakdown;
};

export const getVerifiedReviews = (productId: string): Review[] => {
  return reviews.filter(
    (review) => review.productId === productId && review.isVerifiedPurchase
  );
};

export const getMostHelpfulReviews = (productId: string, limit = 3): Review[] => {
  return getReviewsByProductId(productId)
    .sort((a, b) => b.helpfulCount - a.helpfulCount)
    .slice(0, limit);
};
