import type { Material } from '../types/data';

// Material Education Content for Cozy Haven

export const materials: Material[] = [
  {
    id: 'mat-001',
    name: 'Egyptian Cotton',
    slug: 'egyptian-cotton',
    description:
      'Renowned worldwide for its superior quality, Egyptian cotton is grown in the Nile River Valley where the unique climate produces extra-long staple fibers. These longer fibers create exceptionally soft, durable, and lustrous fabric that gets better with every wash. Our Egyptian cotton is certified by the Cotton Egypt Association, ensuring authenticity and quality.',
    benefits: [
      {
        title: 'Ultra Soft & Smooth',
        description:
          'Extra-long staple fibers create a luxuriously soft surface that feels gentle against your skin',
        icon: 'Feather',
      },
      {
        title: 'Exceptional Durability',
        description:
          'Longer fibers mean stronger threads that resist pilling, tearing, and fading for years',
        icon: 'Shield',
      },
      {
        title: 'Breathable Comfort',
        description:
          'Natural fibers allow air circulation, keeping you cool in summer and warm in winter',
        icon: 'Wind',
      },
      {
        title: 'Luxurious Sheen',
        description:
          'Natural luster gives sateen weaves a subtle, elegant glow without being shiny',
        icon: 'Sparkles',
      },
      {
        title: 'Moisture Wicking',
        description:
          'Absorbs moisture away from your body for a comfortable, dry sleep experience',
        icon: 'Droplet',
      },
    ],
    careInstructions: [
      'Machine wash in cold or warm water',
      'Use mild detergent without bleach',
      'Tumble dry on low heat',
      'Remove promptly to minimize wrinkles',
      'Iron on medium heat if desired',
      'Avoid fabric softeners (they reduce absorbency)',
    ],
    sustainability:
      'We source our Egyptian cotton from certified sustainable farms that use responsible water management and fair labor practices. Cotton is a renewable, biodegradable natural fiber.',
    textureImage: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
    heroImage: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200',
  },
  {
    id: 'mat-002',
    name: 'Linen',
    slug: 'linen',
    description:
      'Made from the flax plant, linen is one of the oldest textiles in the world and remains a favorite for its natural beauty and exceptional breathability. Our European linen is stonewashed for immediate softness and features the characteristic relaxed texture that makes each piece unique. Linen gets softer and more beautiful with age, becoming a treasured part of your home.',
    benefits: [
      {
        title: 'Temperature Regulating',
        description:
          'Hollow fibers allow maximum airflow, keeping you cool in summer and insulating in winter',
        icon: 'Thermometer',
      },
      {
        title: 'Naturally Hypoallergenic',
        description:
          'Resistant to bacteria and fungi, making it ideal for sensitive skin and allergies',
        icon: 'ShieldCheck',
      },
      {
        title: 'Incredibly Durable',
        description:
          'Linen is 30% stronger than cotton and can last for decades with proper care',
        icon: 'Award',
      },
      {
        title: 'Moisture Absorbent',
        description:
          'Absorbs up to 20% of its weight in moisture while still feeling dry to the touch',
        icon: 'Waves',
      },
      {
        title: 'Eco-Friendly',
        description:
          'Flax requires minimal water and pesticides, making it one of the most sustainable fabrics',
        icon: 'Leaf',
      },
      {
        title: 'Softens With Age',
        description:
          'Gets softer and more comfortable with every wash while maintaining its strength',
        icon: 'Heart',
      },
    ],
    careInstructions: [
      'Machine wash in cold or warm water',
      'Use gentle cycle with mild detergent',
      'Tumble dry on low or line dry',
      'Embrace the natural wrinkles for authentic look',
      'Iron while damp if you prefer a crisp finish',
      'Linen naturally softens with each wash',
    ],
    sustainability:
      'Linen is one of the most sustainable fabrics available. Flax plants require very little water, grow in poor soil, and every part of the plant is used. Our linen is OEKO-TEX certified and produced in Europe with strict environmental standards.',
    textureImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800',
    heroImage: 'https://images.unsplash.com/photo-1617364025481-dc6c7f08e4a0?w=1200',
  },
  {
    id: 'mat-003',
    name: 'Bamboo',
    slug: 'bamboo',
    description:
      'Bamboo viscose is a revolutionary eco-friendly fabric that combines sustainability with luxury. Made from fast-growing bamboo plants, this silky-soft material offers natural cooling properties and moisture-wicking abilities. Our bamboo fabric is processed using a closed-loop system that recycles water and solvents, minimizing environmental impact.',
    benefits: [
      {
        title: 'Naturally Cooling',
        description:
          'Temperature-regulating fibers keep you several degrees cooler than cotton',
        icon: 'Snowflake',
      },
      {
        title: 'Incredibly Soft',
        description:
          'Silky smooth texture that rivals luxury fabrics at a fraction of the cost',
        icon: 'SparklesIcon',
      },
      {
        title: 'Moisture Wicking',
        description:
          'Pulls moisture away from skin 3-4 times faster than cotton for dry comfort',
        icon: 'Droplets',
      },
      {
        title: 'Hypoallergenic',
        description:
          'Naturally antimicrobial and resistant to dust mites, mold, and bacteria',
        icon: 'ShieldCheck',
      },
      {
        title: 'Sustainable Growth',
        description:
          'Bamboo grows rapidly without pesticides, fertilizers, or irrigation',
        icon: 'Trees',
      },
      {
        title: 'Odor Resistant',
        description:
          'Natural antimicrobial properties keep bedding fresh between washes',
        icon: 'Wind',
      },
    ],
    careInstructions: [
      'Machine wash in cold water on gentle cycle',
      'Use mild, eco-friendly detergent',
      'Avoid fabric softeners (not needed)',
      'Tumble dry on low heat',
      'Remove promptly to prevent wrinkles',
      'Do not bleach',
    ],
    sustainability:
      'Bamboo is one of the fastest-growing plants on earth, reaching maturity in just 3-5 years. It requires no irrigation, pesticides, or fertilizers and regenerates from its root system after harvesting. Our bamboo is FSC-certified and processed using eco-friendly closed-loop manufacturing.',
    textureImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800',
    heroImage: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200',
  },
];

// Helper functions
export const getMaterialById = (id: string): Material | undefined => {
  return materials.find((material) => material.id === id);
};

export const getMaterialBySlug = (slug: string): Material | undefined => {
  return materials.find((material) => material.slug === slug);
};

export const getMaterialByName = (name: string): Material | undefined => {
  return materials.find((material) => material.name === name);
};

export const getAllMaterials = (): Material[] => {
  return materials;
};
