# Cozy Haven - Desktop Development Task List

**Desktop Specifications:**
- **Viewport Width:** Designed for 1920px displays
- **Content Max-Width:** 1200px (centered)
- **Breakpoints:** 1920px (large), 1440px (standard), 1200px (minimum)
- All content containers use `max-w-[1200px] mx-auto` for consistent centering

---

## Epic 1: Project Setup & Configuration

### TASK-001: Initialize Project
**Priority:** High
**Story Points:** 3

**Description:**
Set up the initial project structure with React/Next.js and configure essential tools.

**Subtasks:**
- [ ] TASK-001-A: Create React/Next.js project with TypeScript
- [ ] TASK-001-B: Configure ESLint and Prettier
- [ ] TASK-001-C: Set up Git repository and .gitignore
- [ ] TASK-001-D: Install and configure Tailwind CSS
- [ ] TASK-001-E: Set up project folder structure (components, pages, styles, utils, data)
- [ ] TASK-001-F: Configure environment variables template

**Acceptance Criteria:**
- Project builds successfully
- Tailwind CSS is functional
- Folder structure follows best practices

---

### TASK-002: Design System Setup
**Priority:** High
**Story Points:** 5

**Description:**
Implement the Cozy Haven design system including colors, typography, and spacing.

**Subtasks:**
- [ ] TASK-002-A: Configure Tailwind with custom color palette
  - Warm Cream: `#F5F0E8`
  - Soft Terracotta: `#D4A59A`
  - Sage Green: `#A8B5A0`
  - Warm Charcoal: `#4A4543`
  - Deep Brown: `#3D3935`
- [ ] TASK-002-B: Import and configure Montserrat font (Google Fonts)
- [ ] TASK-002-C: Set up typography scale (H1-H4, body, small, tiny)
- [ ] TASK-002-D: Configure spacing system (8px grid)
- [ ] TASK-002-E: Define border radius variables (8px, 12px, 6px)
- [ ] TASK-002-F: Set up shadow utilities
- [ ] TASK-002-G: Create design tokens file/configuration

**Acceptance Criteria:**
- All brand colors are available as Tailwind classes
- Typography scales are consistent across the app
- Design system is documented

---

## Epic 2: Core Components Library

### TASK-003: Button Component
**Priority:** High
**Story Points:** 3

**Description:**
Create reusable button component with all variants and states.

**Subtasks:**
- [ ] TASK-003-A: Create Button component structure
- [ ] TASK-003-B: Implement Primary variant (terracotta background, white text)
- [ ] TASK-003-C: Implement Secondary variant (outline terracotta)
- [ ] TASK-003-D: Implement Ghost variant (no border, terracotta text)
- [ ] TASK-003-E: Add size variants (large: 48px, medium: 40px, small: 32px)
- [ ] TASK-003-F: Add disabled state styling
- [ ] TASK-003-G: Add hover and focus states
- [ ] TASK-003-H: Add icon support (left/right positioning)
- [ ] TASK-003-I: Create component documentation/Storybook

**Acceptance Criteria:**
- All button variants render correctly
- Hover states work smoothly
- Component is accessible (keyboard navigation, ARIA labels)

---

### TASK-004: Input Field Components
**Priority:** High
**Story Points:** 3

**Description:**
Create form input components with proper states and validation styles.

**Subtasks:**
- [ ] TASK-004-A: Create base Input component
- [ ] TASK-004-B: Add border and focus states (terracotta on focus)
- [ ] TASK-004-C: Implement error state with red border
- [ ] TASK-004-D: Implement success state with sage green border
- [ ] TASK-004-E: Add label and helper text support
- [ ] TASK-004-F: Create Select/Dropdown component
- [ ] TASK-004-G: Create Quantity Selector component (minus/plus buttons)
- [ ] TASK-004-H: Add proper accessibility attributes

**Acceptance Criteria:**
- Input fields have clear focus states
- Error/success states display correctly
- Components are keyboard accessible

---

### TASK-005: Card Component
**Priority:** Medium
**Story Points:** 2

**Description:**
Create card component with hover effects and variants.

**Subtasks:**
- [ ] TASK-005-A: Create base Card component structure
- [ ] TASK-005-B: Add subtle shadow styling
- [ ] TASK-005-C: Implement hover lift effect with increased shadow
- [ ] TASK-005-D: Add 12px rounded corners
- [ ] TASK-005-E: Create ProductCard variant (image, title, price)
- [ ] TASK-005-F: Create CategoryCard variant (icon, title, count)
- [ ] TASK-005-G: Create CollectionCard variant

**Acceptance Criteria:**
- Cards have smooth hover transitions
- All variants are reusable
- White background with proper spacing

---

### TASK-006: Badge Component
**Priority:** Low
**Story Points:** 1

**Description:**
Create badge/pill component for labels and tags.

**Subtasks:**
- [ ] TASK-006-A: Create Badge component with pill shape
- [ ] TASK-006-B: Add color variants (Sage: sustainable, Terracotta: new, Charcoal: bestseller)
- [ ] TASK-006-C: Add size variants (small, medium)
- [ ] TASK-006-D: Ensure text contrast for accessibility

**Acceptance Criteria:**
- Badges render with correct colors
- Text is readable on all background colors

---

### TASK-007: Icon System
**Priority:** Medium
**Story Points:** 2

**Description:**
Set up icon library and create icon component wrapper.

**Subtasks:**
- [ ] TASK-007-A: Install icon library (Heroicons/Lucide/Feather)
- [ ] TASK-007-B: Create Icon wrapper component
- [ ] TASK-007-C: Define commonly used icons (cart, heart, user, search, menu, etc.)
- [ ] TASK-007-D: Set default size (20-24px) and stroke width (2px)
- [ ] TASK-007-E: Add color prop support (terracotta, charcoal)

**Acceptance Criteria:**
- Icons are consistent in size and stroke
- Icon component is easy to use throughout the app

---

## Epic 3: Layout Components

### TASK-008: Header/Navigation Component
**Priority:** High
**Story Points:** 5

**Description:**
Create main navigation header with logo, menu, search, and cart.

**Subtasks:**
- [ ] TASK-008-A: Create Header component structure
- [ ] TASK-008-B: Add logo placeholder (left side)
- [ ] TASK-008-C: Create navigation menu (Shop, Collections, Materials, About, Contact)
- [ ] TASK-008-D: Add search icon/bar
- [ ] TASK-008-E: Add user account icon
- [ ] TASK-008-F: Add cart icon with item count badge
- [ ] TASK-008-G: Style with proper spacing and alignment
- [ ] TASK-008-H: Add hover states for menu items
- [ ] TASK-008-I: Make header sticky on scroll (optional)

**Acceptance Criteria:**
- Header is responsive to desktop widths
- All navigation items are clickable
- Cart badge shows item count correctly

---

### TASK-009: Footer Component
**Priority:** Medium
**Story Points:** 3

**Description:**
Create footer with links, newsletter signup, and social media.

**Subtasks:**
- [ ] TASK-009-A: Create Footer component structure (multi-column layout)
- [ ] TASK-009-B: Add logo and brand description
- [ ] TASK-009-C: Create "Shop" links column (categories)
- [ ] TASK-009-D: Create "Customer Service" links column (Returns, Shipping, Size Guide, FAQ)
- [ ] TASK-009-E: Create "About" links column (About Us, Contact, Sustainability)
- [ ] TASK-009-F: Add newsletter signup section with email input
- [ ] TASK-009-G: Add social media icons (Instagram, Facebook, Pinterest)
- [ ] TASK-009-H: Add payment method icons (Visa, Mastercard, Amex, PayPal, Apple Pay)
- [ ] TASK-009-I: Add copyright text
- [ ] TASK-009-J: Style with warm cream background

**Acceptance Criteria:**
- Footer has organized column layout
- Newsletter form is functional (UI only, mock submission)
- All links are styled consistently

---

### TASK-010: Layout Wrapper Component
**Priority:** High
**Story Points:** 2

**Description:**
Create main layout wrapper that includes header and footer.

**Subtasks:**
- [ ] TASK-010-A: Create Layout component
- [ ] TASK-010-B: Include Header component
- [ ] TASK-010-C: Add main content area with proper spacing
- [ ] TASK-010-D: Include Footer component
- [ ] TASK-010-E: Set maximum width constraints (1200px+)
- [ ] TASK-010-F: Add proper vertical spacing between sections

**Acceptance Criteria:**
- Layout wraps all pages consistently
- Content is centered with proper max-width
- Header and footer are present on all pages

---

## Epic 4: Mock Data Setup

### TASK-011: Create Mock Data Files
**Priority:** High
**Story Points:** 3

**Description:**
Create comprehensive mock data for products, collections, and categories.

**Subtasks:**
- [ ] TASK-011-A: Create `data/products.ts` with at least 20 product objects
  - Include: id, name, price, images[], description, material, threadCount, sizes[], colors[], rating, reviewCount, specifications, care instructions
- [ ] TASK-011-B: Create `data/collections.ts` (Linen Luxe, Cloud Cotton, Seasonal Favorites)
- [ ] TASK-011-C: Create `data/categories.ts` (Sheets, Duvets, Pillows, Toppers, Blankets, Curtains)
- [ ] TASK-011-D: Create `data/reviews.ts` with sample customer reviews
- [ ] TASK-011-E: Create `data/materials.ts` (Egyptian Cotton, Linen, Bamboo info)
- [ ] TASK-011-F: Create TypeScript interfaces/types for all data structures
- [ ] TASK-011-G: Add realistic product images (use Unsplash URLs)

**Acceptance Criteria:**
- All mock data files are properly typed
- Data includes realistic content (no lorem ipsum)
- Images are high-quality and relevant

---

## Epic 5: Homepage - Desktop

### TASK-012: Hero Section
**Priority:** High
**Story Points:** 3

**Description:**
Create homepage hero section with headline, subheadline, and CTAs.

**Subtasks:**
- [ ] TASK-012-A: Create HeroSection component
- [ ] TASK-012-B: Add full-width background image (airy bedroom scene)
- [ ] TASK-012-C: Add headline: "Comfort and Quality Sleep"
- [ ] TASK-012-D: Add subheadline: "Premium bedding essentials for your perfect sleeping experience"
- [ ] TASK-012-E: Add "Shop Collections" primary CTA button
- [ ] TASK-012-F: Add "Explore Materials" secondary CTA button
- [ ] TASK-012-G: Add overlay/gradient for text readability
- [ ] TASK-012-H: Style with proper spacing and alignment
- [ ] TASK-012-I: Ensure text is readable over image

**Acceptance Criteria:**
- Hero section is full-width and visually appealing
- CTAs are prominently displayed
- Text has good contrast against background

---

### TASK-013: Featured Collections Section
**Priority:** High
**Story Points:** 3

**Description:**
Create featured collections section with 3 collection cards.

**Subtasks:**
- [ ] TASK-013-A: Create FeaturedCollections component
- [ ] TASK-013-B: Create CollectionCard component (image, title, description, CTA)
- [ ] TASK-013-C: Add section title "Featured Collections"
- [ ] TASK-013-D: Display 3 collections (Linen Luxe, Cloud Cotton, Seasonal Favorites)
- [ ] TASK-013-E: Use mock data from `data/collections.ts`
- [ ] TASK-013-F: Add "Shop Now" link to each card
- [ ] TASK-013-G: Style cards with hover effects
- [ ] TASK-013-H: Use 3-column grid layout

**Acceptance Criteria:**
- Collections display in 3-column grid
- Cards have smooth hover animations
- Data is pulled from mock files

---

### TASK-014: Shop by Category Section
**Priority:** High
**Story Points:** 3

**Description:**
Create category navigation section with icon-based category cards.

**Subtasks:**
- [ ] TASK-014-A: Create CategoryGrid component
- [ ] TASK-014-B: Create CategoryCard component (icon, name, item count)
- [ ] TASK-014-C: Add section title "Shop by Category"
- [ ] TASK-014-D: Display 6-8 categories from mock data
- [ ] TASK-014-E: Add relevant icons for each category
- [ ] TASK-014-F: Show item count for each category
- [ ] TASK-014-G: Style in responsive grid (3-4 columns)
- [ ] TASK-014-H: Add hover effects

**Acceptance Criteria:**
- Categories display in clean grid layout
- Icons are consistent and relevant
- Item counts are displayed correctly

---

### TASK-015: Material Education Section
**Priority:** Medium
**Story Points:** 3

**Description:**
Create educational section about bedding materials.

**Subtasks:**
- [ ] TASK-015-A: Create MaterialEducation component
- [ ] TASK-015-B: Add section title "Why Choose Quality Materials?"
- [ ] TASK-015-C: Create MaterialCard component (icon, material name, benefits, texture image)
- [ ] TASK-015-D: Display 3 materials (Egyptian Cotton, Linen, Bamboo)
- [ ] TASK-015-E: Use mock data from `data/materials.ts`
- [ ] TASK-015-F: Style in 3-column layout
- [ ] TASK-015-G: Add close-up texture images
- [ ] TASK-015-H: List key benefits for each material

**Acceptance Criteria:**
- Materials are displayed in 3-column layout
- Content is educational and informative
- Images show fabric texture clearly

---

### TASK-016: Social Proof Section
**Priority:** Medium
**Story Points:** 2

**Description:**
Create customer reviews and bedroom photos section.

**Subtasks:**
- [ ] TASK-016-A: Create SocialProof component
- [ ] TASK-016-B: Add headline "Join 10,000+ Happy Sleepers"
- [ ] TASK-016-C: Create Instagram-style grid of customer bedroom photos
- [ ] TASK-016-D: Add star ratings display
- [ ] TASK-016-E: Show 2-3 review snippets from mock data
- [ ] TASK-016-F: Style with proper spacing and grid layout
- [ ] TASK-016-G: Add subtle animations on scroll (optional)

**Acceptance Criteria:**
- Section displays customer photos in grid
- Review snippets are readable and well-formatted
- Overall design builds trust

---

### TASK-017: Sustainability Section
**Priority:** Low
**Story Points:** 2

**Description:**
Create sustainability badges and statement section.

**Subtasks:**
- [ ] TASK-017-A: Create Sustainability component
- [ ] TASK-017-B: Add OEKO-TEX certified badge/icon
- [ ] TASK-017-C: Add Organic cotton badge
- [ ] TASK-017-D: Add Carbon neutral shipping badge
- [ ] TASK-017-E: Add brief sustainability statement text
- [ ] TASK-017-F: Style badges in horizontal row
- [ ] TASK-017-G: Use sage green accents

**Acceptance Criteria:**
- Badges are clearly visible
- Statement text is concise and impactful
- Section uses brand colors

---

### TASK-018: Newsletter Signup Section
**Priority:** Medium
**Story Points:** 2

**Description:**
Create newsletter subscription section with email input.

**Subtasks:**
- [ ] TASK-018-A: Create Newsletter component
- [ ] TASK-018-B: Add headline "Get Sleep Tips & Exclusive Offers"
- [ ] TASK-018-C: Add subtext "10% off your first order"
- [ ] TASK-018-D: Create email input field
- [ ] TASK-018-E: Add "Subscribe" button
- [ ] TASK-018-F: Add form validation (basic email format)
- [ ] TASK-018-G: Mock submission with success message
- [ ] TASK-018-H: Style with terracotta CTA button

**Acceptance Criteria:**
- Email input validates format
- Success message displays on submission
- Form is visually appealing

---

### TASK-019: Homepage Integration
**Priority:** High
**Story Points:** 2

**Description:**
Integrate all homepage sections into final homepage.

**Subtasks:**
- [ ] TASK-019-A: Create `pages/index.tsx` or homepage component
- [ ] TASK-019-B: Import and arrange all homepage sections in correct order
- [ ] TASK-019-C: Add proper vertical spacing between sections (40-60px)
- [ ] TASK-019-D: Wrap with Layout component
- [ ] TASK-019-E: Test all section rendering
- [ ] TASK-019-F: Verify spacing consistency
- [ ] TASK-019-G: Check overall page flow and visual hierarchy

**Acceptance Criteria:**
- All sections display in correct order
- Spacing is consistent throughout
- Page loads without errors

---

## Epic 6: Product Page - Desktop

### TASK-020: Product Image Gallery
**Priority:** High
**Story Points:** 5

**Description:**
Create product image gallery with main image and thumbnail navigation.

**Subtasks:**
- [ ] TASK-020-A: Create ProductGallery component
- [ ] TASK-020-B: Create large main image display area
- [ ] TASK-020-C: Create thumbnail strip below (4-5 thumbnails)
- [ ] TASK-020-D: Implement click to change main image
- [ ] TASK-020-E: Add active thumbnail indicator
- [ ] TASK-020-F: Add image zoom on hover (optional)
- [ ] TASK-020-G: Style with proper aspect ratios
- [ ] TASK-020-H: Add smooth transition between images

**Acceptance Criteria:**
- Clicking thumbnail updates main image
- Active thumbnail is highlighted
- Images are high-quality and properly sized

---

### TASK-021: Product Information Panel
**Priority:** High
**Story Points:** 5

**Description:**
Create product details panel with name, price, rating, and description.

**Subtasks:**
- [ ] TASK-021-A: Create ProductInfo component
- [ ] TASK-021-B: Display product name as H1
- [ ] TASK-021-C: Display price (format currency)
- [ ] TASK-021-D: Add star rating display component
- [ ] TASK-021-E: Show review count with link to reviews section
- [ ] TASK-021-F: Display product description (2-3 sentences)
- [ ] TASK-021-G: Style with proper typography hierarchy
- [ ] TASK-021-H: Pull data from mock product data

**Acceptance Criteria:**
- Product info displays correctly
- Star rating shows accurate rating
- Price is formatted as currency

---

### TASK-022: Size Selector Component
**Priority:** High
**Story Points:** 3

**Description:**
Create size selection UI with radio buttons or dropdown.

**Subtasks:**
- [ ] TASK-022-A: Create SizeSelector component
- [ ] TASK-022-B: Add label "Select Size"
- [ ] TASK-022-C: Display size options (Twin, Full, Queen, King, California King)
- [ ] TASK-022-D: Implement radio button or button group selection
- [ ] TASK-022-E: Add visual selected state
- [ ] TASK-022-F: Update price when size changes (if applicable)
- [ ] TASK-022-G: Add "Size Guide" link/tooltip
- [ ] TASK-022-H: Style with brand colors

**Acceptance Criteria:**
- Only one size can be selected at a time
- Selected size is clearly indicated
- Size guide link is visible

---

### TASK-023: Color Selector Component
**Priority:** High
**Story Points:** 3

**Description:**
Create color selection UI with visual swatches.

**Subtasks:**
- [ ] TASK-023-A: Create ColorSelector component
- [ ] TASK-023-B: Add label "Select Color"
- [ ] TASK-023-C: Display color options as circular swatches
- [ ] TASK-023-D: Show actual product colors (White, Ivory, Sage, Stone Gray, Terracotta)
- [ ] TASK-023-E: Add border to selected swatch
- [ ] TASK-023-F: Display color name on hover or selection
- [ ] TASK-023-G: Style swatches as circles (40-48px diameter)
- [ ] TASK-023-H: Add smooth hover effects

**Acceptance Criteria:**
- Color swatches show actual colors
- Selected color is highlighted
- Color name displays when selected

---

### TASK-024: Quantity Selector Component
**Priority:** Medium
**Story Points:** 2

**Description:**
Create quantity input with increment/decrement buttons.

**Subtasks:**
- [ ] TASK-024-A: Create QuantitySelector component (if not done in TASK-004-G)
- [ ] TASK-024-B: Add minus button
- [ ] TASK-024-C: Add number input/display
- [ ] TASK-024-D: Add plus button
- [ ] TASK-024-E: Set default quantity to 1
- [ ] TASK-024-F: Set minimum quantity to 1
- [ ] TASK-024-G: Add maximum quantity limit (optional, e.g., 10)
- [ ] TASK-024-H: Style buttons with brand colors
- [ ] TASK-024-I: Add disabled state when at min/max

**Acceptance Criteria:**
- Quantity can be increased/decreased
- Minimum quantity is 1
- Buttons disable appropriately

---

### TASK-025: Add to Cart & Wishlist Buttons
**Priority:** High
**Story Points:** 2

**Description:**
Create action buttons for adding to cart and wishlist.

**Subtasks:**
- [ ] TASK-025-A: Add "Add to Cart" primary button (large, terracotta)
- [ ] TASK-025-B: Add "Add to Wishlist" secondary button (outline, heart icon)
- [ ] TASK-025-C: Implement click handlers (mock functionality)
- [ ] TASK-025-D: Show success feedback when item added to cart
- [ ] TASK-025-E: Add validation (must select size before adding)
- [ ] TASK-025-F: Show error message if validation fails
- [ ] TASK-025-G: Style buttons with proper spacing

**Acceptance Criteria:**
- Add to Cart validates size selection
- Success message appears on add
- Wishlist button has heart icon

---

### TASK-026: Product Specifications Accordion
**Priority:** Medium
**Story Points:** 3

**Description:**
Create expandable accordion for product specifications.

**Subtasks:**
- [ ] TASK-026-A: Create Accordion component (reusable)
- [ ] TASK-026-B: Create "Product Specifications" accordion item
- [ ] TASK-026-C: Display material, thread count, weave, what's included, dimensions
- [ ] TASK-026-D: Add expand/collapse functionality
- [ ] TASK-026-E: Add chevron icon indicator
- [ ] TASK-026-F: Use mock data from product object
- [ ] TASK-026-G: Style with proper spacing and typography
- [ ] TASK-026-H: Add smooth transition animation

**Acceptance Criteria:**
- Accordion expands/collapses on click
- Specifications are clearly formatted
- Smooth animation on expand/collapse

---

### TASK-027: Care Instructions Accordion
**Priority:** Medium
**Story Points:** 2

**Description:**
Create care instructions accordion with icons.

**Subtasks:**
- [ ] TASK-027-A: Create "Care Instructions" accordion item
- [ ] TASK-027-B: Add care instruction text (machine wash, tumble dry, etc.)
- [ ] TASK-027-C: Add visual care symbols/icons
- [ ] TASK-027-D: Style with proper formatting
- [ ] TASK-027-E: Use grid layout for icons and text

**Acceptance Criteria:**
- Care instructions are clear and readable
- Care symbols are visible
- Content is well-organized

---

### TASK-028: Shipping & Returns Accordion
**Priority:** Medium
**Story Points:** 2

**Description:**
Create shipping and returns information accordion.

**Subtasks:**
- [ ] TASK-028-A: Create "Shipping & Returns" accordion item
- [ ] TASK-028-B: Add free shipping threshold info
- [ ] TASK-028-C: Add 100-Night Sleep Trial message
- [ ] TASK-028-D: Add easy returns policy (100 days)
- [ ] TASK-028-E: Add shipping timeframe (2-3 business days)
- [ ] TASK-028-F: Style with icons and proper formatting

**Acceptance Criteria:**
- Shipping and return policies are clear
- Icons enhance readability
- Information is trustworthy

---

### TASK-029: Material Details Section
**Priority:** Low
**Story Points:** 2

**Description:**
Create material education section on product page.

**Subtasks:**
- [ ] TASK-029-A: Create MaterialDetails component
- [ ] TASK-029-B: Add "Why Egyptian Cotton?" headline (or relevant material)
- [ ] TASK-029-C: List material benefits (breathable, durable, soft, etc.)
- [ ] TASK-029-D: Add thread count explanation tooltip
- [ ] TASK-029-E: Style with sage green accents
- [ ] TASK-029-F: Use icons for benefits

**Acceptance Criteria:**
- Material benefits are clearly listed
- Tooltip provides helpful information
- Design is educational

---

### TASK-030: Complete the Set Section
**Priority:** Medium
**Story Points:** 3

**Description:**
Create horizontal scrolling section with related/matching products.

**Subtasks:**
- [ ] TASK-030-A: Create CompleteTheSet component
- [ ] TASK-030-B: Add section title "Complete the Set"
- [ ] TASK-030-C: Create horizontal scroll container
- [ ] TASK-030-D: Display matching products (duvet, pillows, throw blanket)
- [ ] TASK-030-E: Add quick "Add to Cart" buttons on each item
- [ ] TASK-030-F: Style product cards consistently
- [ ] TASK-030-G: Add scroll arrows (optional)
- [ ] TASK-030-H: Pull related products from mock data

**Acceptance Criteria:**
- Related products scroll horizontally
- Quick add to cart buttons work
- Products are relevant matches

---

### TASK-031: Reviews Section
**Priority:** High
**Story Points:** 5

**Description:**
Create comprehensive product reviews section with filtering and sorting.

**Subtasks:**
- [ ] TASK-031-A: Create ReviewsSection component
- [ ] TASK-031-B: Display average rating with star breakdown graph
- [ ] TASK-031-C: Add filter by rating (5 stars, 4 stars, etc.)
- [ ] TASK-031-D: Add sort dropdown (Most Recent, Most Helpful)
- [ ] TASK-031-E: Create ReviewCard component
  - Star rating
  - Reviewer name + verified purchase badge
  - Date
  - Review text
  - Helpful/Not Helpful buttons
- [ ] TASK-031-F: Display list of reviews from mock data
- [ ] TASK-031-G: Add pagination or "Load More" button
- [ ] TASK-031-H: Style with proper spacing and readability

**Acceptance Criteria:**
- Reviews display with all required information
- Filtering and sorting work correctly
- Verified purchase badges show appropriately

---

### TASK-032: Related Products Carousel
**Priority:** Medium
**Story Points:** 3

**Description:**
Create "You Might Also Like" product carousel.

**Subtasks:**
- [ ] TASK-032-A: Create RelatedProducts component
- [ ] TASK-032-B: Add section title "You Might Also Like"
- [ ] TASK-032-C: Display 4-6 product cards
- [ ] TASK-032-D: Use ProductCard component
- [ ] TASK-032-E: Add carousel/slider functionality (optional)
- [ ] TASK-032-F: Pull related products from mock data
- [ ] TASK-032-G: Style in horizontal grid layout
- [ ] TASK-032-H: Add navigation arrows if carousel

**Acceptance Criteria:**
- Related products are relevant
- Product cards are consistent with site design
- Layout is clean and organized

---

### TASK-033: Product Page Integration
**Priority:** High
**Story Points:** 3

**Description:**
Integrate all product page components into final product page layout.

**Subtasks:**
- [ ] TASK-033-A: Create `pages/product/[id].tsx` or product page component
- [ ] TASK-033-B: Create two-column layout (60% gallery, 40% info)
- [ ] TASK-033-C: Place ProductGallery on left
- [ ] TASK-033-D: Place ProductInfo, selectors, and buttons on right
- [ ] TASK-033-E: Add accordions below product info
- [ ] TASK-033-F: Add Material Details section
- [ ] TASK-033-G: Add Complete the Set section
- [ ] TASK-033-H: Add Reviews section
- [ ] TASK-033-I: Add Related Products carousel
- [ ] TASK-033-J: Wrap with Layout component
- [ ] TASK-033-K: Fetch mock data based on product ID
- [ ] TASK-033-L: Verify all components render correctly

**Acceptance Criteria:**
- Two-column layout displays correctly
- All sections are present and functional
- Product data populates from mock files
- Page is fully scrollable

---

## Epic 7: Cart Page - Desktop

### TASK-034: Cart Items List
**Priority:** High
**Story Points:** 5

**Description:**
Create cart items list with product rows and controls.

**Subtasks:**
- [ ] TASK-034-A: Create CartPage component
- [ ] TASK-034-B: Add "Shopping Cart" H1 title
- [ ] TASK-034-C: Display item count (e.g., "3 items")
- [ ] TASK-034-D: Create CartItem component
  - Product thumbnail (80x80px, clickable)
  - Product name (linked)
  - Size and color display
  - SKU or item number
  - Price per item
  - Quantity selector
  - Subtotal (price × quantity)
  - Remove button (trash icon)
- [ ] TASK-034-E: Map through cart items from state/mock data
- [ ] TASK-034-F: Implement quantity change handler
- [ ] TASK-034-G: Implement remove item handler
- [ ] TASK-034-H: Add "Save for Later" option
- [ ] TASK-034-I: Style with proper spacing and alignment

**Acceptance Criteria:**
- Cart items display with all information
- Quantity can be updated
- Items can be removed
- Subtotal updates correctly

---

### TASK-035: Order Summary Panel
**Priority:** High
**Story Points:** 4

**Description:**
Create sticky order summary with pricing breakdown and checkout button.

**Subtasks:**
- [ ] TASK-035-A: Create OrderSummary component
- [ ] TASK-035-B: Add "Order Summary" title
- [ ] TASK-035-C: Display subtotal (sum of all items)
- [ ] TASK-035-D: Calculate and display shipping
  - "FREE" if order > $100
  - Otherwise "Calculated at checkout"
- [ ] TASK-035-E: Calculate estimated tax
- [ ] TASK-035-F: Display total (bold, large)
- [ ] TASK-035-G: Create promo code input field
- [ ] TASK-035-H: Add "Apply" button for promo code
- [ ] TASK-035-I: Mock promo code validation
- [ ] TASK-035-J: Make panel sticky on scroll
- [ ] TASK-035-K: Style with card background and spacing

**Acceptance Criteria:**
- Summary calculates totals correctly
- Free shipping threshold works
- Promo code field is functional (mock)
- Panel stays visible on scroll

---

### TASK-036: Trust Badges & Checkout Button
**Priority:** High
**Story Points:** 2

**Description:**
Add trust signals and checkout button to order summary.

**Subtasks:**
- [ ] TASK-036-A: Add trust badge icons to OrderSummary
  - Free Shipping over $100
  - 100-Night Trial
  - Easy Returns
  - Secure Checkout
- [ ] TASK-036-B: Create "Proceed to Checkout" button (large, terracotta)
- [ ] TASK-036-C: Add lock icon to checkout button
- [ ] TASK-036-D: Add payment method icons below
  - Visa, Mastercard, Amex, PayPal, Apple Pay
- [ ] TASK-036-E: Style badges with icons and minimal text
- [ ] TASK-036-F: Add click handler for checkout (mock navigation)

**Acceptance Criteria:**
- Trust badges are visible and clear
- Checkout button is prominent
- Payment icons display correctly

---

### TASK-037: Cart Recommendations
**Priority:** Medium
**Story Points:** 3

**Description:**
Create product recommendations section below cart.

**Subtasks:**
- [ ] TASK-037-A: Create CartRecommendations component
- [ ] TASK-037-B: Add section title "You Might Also Need"
- [ ] TASK-037-C: Display cross-sell products
  - Pillow protectors
  - Duvet clips
  - Mattress protector
  - Fabric refresher spray
- [ ] TASK-037-D: Create small product cards with images
- [ ] TASK-037-E: Add quick "Add to Cart" button on each
- [ ] TASK-037-F: Use grid layout (4 columns)
- [ ] TASK-037-G: Pull recommendations from mock data
- [ ] TASK-037-H: Style consistently with site design

**Acceptance Criteria:**
- Recommendations display in grid
- Products are relevant cross-sells
- Quick add buttons work

---

### TASK-038: Empty Cart State
**Priority:** Medium
**Story Points:** 2

**Description:**
Create empty cart state with illustration and CTA.

**Subtasks:**
- [ ] TASK-038-A: Create EmptyCart component
- [ ] TASK-038-B: Add illustration or icon (empty shopping bag)
- [ ] TASK-038-C: Add message "Your cart is dreaming of cozy bedding"
- [ ] TASK-038-D: Add "Start Shopping" CTA button
- [ ] TASK-038-E: Display suggested categories or bestsellers
- [ ] TASK-038-F: Style with centered layout
- [ ] TASK-038-G: Add conditional rendering in CartPage

**Acceptance Criteria:**
- Empty state shows when cart has no items
- Message is friendly and on-brand
- CTA leads to shopping

---

### TASK-039: Cart Page Integration & State Management
**Priority:** High
**Story Points:** 4

**Description:**
Integrate cart components and set up cart state management.

**Subtasks:**
- [ ] TASK-039-A: Create `pages/cart.tsx` or cart page component
- [ ] TASK-039-B: Create two-column layout (65% items, 35% summary)
- [ ] TASK-039-C: Set up cart context or state management
- [ ] TASK-039-D: Create mock cart data (3 items)
- [ ] TASK-039-E: Implement add to cart functionality
- [ ] TASK-039-F: Implement remove from cart functionality
- [ ] TASK-039-G: Implement update quantity functionality
- [ ] TASK-039-H: Add "Continue Shopping" link
- [ ] TASK-039-I: Wrap with Layout component
- [ ] TASK-039-J: Add conditional rendering for empty cart
- [ ] TASK-039-K: Test all cart operations

**Acceptance Criteria:**
- Cart page displays with proper layout
- Cart state updates correctly
- All cart operations work
- Empty cart shows appropriate state

---

## Epic 8: Global State & Routing

### TASK-040: Cart Context/State Management
**Priority:** High
**Story Points:** 5

**Description:**
Set up global cart state management using Context API or state management library.

**Subtasks:**
- [ ] TASK-040-A: Create CartContext or cart slice
- [ ] TASK-040-B: Define cart state structure (items array, total, count)
- [ ] TASK-040-C: Implement addToCart action
- [ ] TASK-040-D: Implement removeFromCart action
- [ ] TASK-040-E: Implement updateQuantity action
- [ ] TASK-040-F: Implement calculateTotal helper
- [ ] TASK-040-G: Implement calculateItemCount helper
- [ ] TASK-040-H: Create useCart hook for components
- [ ] TASK-040-I: Persist cart to localStorage
- [ ] TASK-040-J: Load cart from localStorage on app init

**Acceptance Criteria:**
- Cart state is globally accessible
- All cart actions work correctly
- Cart persists across page refreshes

---

### TASK-041: Wishlist State Management (Optional)
**Priority:** Low
**Story Points:** 3

**Description:**
Set up wishlist state management (optional feature).

**Subtasks:**
- [ ] TASK-041-A: Create WishlistContext or wishlist slice
- [ ] TASK-041-B: Implement addToWishlist action
- [ ] TASK-041-C: Implement removeFromWishlist action
- [ ] TASK-041-D: Create useWishlist hook
- [ ] TASK-041-E: Update header to show wishlist icon with count
- [ ] TASK-041-F: Persist wishlist to localStorage

**Acceptance Criteria:**
- Wishlist items can be added/removed
- Wishlist count shows in header
- Wishlist persists across sessions

---

### TASK-042: Routing Setup
**Priority:** High
**Story Points:** 2

**Description:**
Configure routing for all pages and navigation.

**Subtasks:**
- [ ] TASK-042-A: Set up React Router or Next.js routing
- [ ] TASK-042-B: Create routes for:
  - Homepage: `/`
  - Product page: `/product/:id`
  - Cart page: `/cart`
  - Category pages: `/category/:category` (optional)
  - Collections: `/collections/:collection` (optional)
- [ ] TASK-042-C: Update navigation links in Header
- [ ] TASK-042-D: Update CTAs throughout site
- [ ] TASK-042-E: Add 404 page (optional)
- [ ] TASK-042-F: Test all navigation flows

**Acceptance Criteria:**
- All pages are accessible via routes
- Navigation links work correctly
- URLs are clean and semantic

---

## Epic 9: Polish & Testing

### TASK-043: Responsive Desktop Testing
**Priority:** High
**Story Points:** 3

**Description:**
Test all pages at various desktop breakpoints and fix layout issues.

**Subtasks:**
- [ ] TASK-043-A: Test at 1920px width (large desktop)
- [ ] TASK-043-B: Test at 1440px width (standard desktop)
- [ ] TASK-043-C: Test at 1200px width (small desktop)
- [ ] TASK-043-D: Fix any overflow or alignment issues
- [ ] TASK-043-E: Verify images scale properly
- [ ] TASK-043-F: Check text readability at all sizes
- [ ] TASK-043-G: Test all interactive elements

**Acceptance Criteria:**
- Site looks good at all desktop widths
- No horizontal scroll issues
- Content is properly centered/contained

---

### TASK-044: Accessibility Audit
**Priority:** High
**Story Points:** 3

**Description:**
Audit and improve accessibility across all pages.

**Subtasks:**
- [ ] TASK-044-A: Add alt text to all images
- [ ] TASK-044-B: Verify color contrast (WCAG AA minimum)
- [ ] TASK-044-C: Test keyboard navigation on all interactive elements
- [ ] TASK-044-D: Add proper ARIA labels where needed
- [ ] TASK-044-E: Ensure focus states are visible
- [ ] TASK-044-F: Check semantic HTML structure
- [ ] TASK-044-G: Test with screen reader (optional but recommended)
- [ ] TASK-044-H: Fix any accessibility issues found

**Acceptance Criteria:**
- All images have alt text
- Color contrast passes WCAG AA
- Site is keyboard navigable
- Semantic HTML is used

---

### TASK-045: Performance Optimization
**Priority:** Medium
**Story Points:** 3

**Description:**
Optimize site performance and loading times.

**Subtasks:**
- [ ] TASK-045-A: Optimize images (compress, use proper formats)
- [ ] TASK-045-B: Implement lazy loading for images
- [ ] TASK-045-C: Check and reduce bundle size
- [ ] TASK-045-D: Add loading states for data fetching
- [ ] TASK-045-E: Optimize font loading
- [ ] TASK-045-F: Check for unnecessary re-renders
- [ ] TASK-045-G: Run Lighthouse audit
- [ ] TASK-045-H: Fix performance issues identified

**Acceptance Criteria:**
- Lighthouse score > 80 for performance
- Images load efficiently
- No layout shift on load

---

### TASK-046: Cross-Browser Testing
**Priority:** Medium
**Story Points:** 2

**Description:**
Test site across different browsers and fix compatibility issues.

**Subtasks:**
- [ ] TASK-046-A: Test in Chrome
- [ ] TASK-046-B: Test in Firefox
- [ ] TASK-046-C: Test in Safari
- [ ] TASK-046-D: Test in Edge
- [ ] TASK-046-E: Fix any browser-specific issues
- [ ] TASK-046-F: Verify CSS compatibility
- [ ] TASK-046-G: Check JavaScript functionality

**Acceptance Criteria:**
- Site works correctly in all major browsers
- No browser-specific bugs
- Consistent appearance across browsers

---

### TASK-047: Final Visual Polish
**Priority:** Medium
**Story Points:** 3

**Description:**
Final design review and polish of all pages.

**Subtasks:**
- [ ] TASK-047-A: Review spacing consistency (8px grid)
- [ ] TASK-047-B: Check typography consistency
- [ ] TASK-047-C: Verify color usage matches brand palette
- [ ] TASK-047-D: Polish hover and transition effects
- [ ] TASK-047-E: Check alignment and grid layouts
- [ ] TASK-047-F: Review all microcopy for tone of voice
- [ ] TASK-047-G: Verify all images are high-quality
- [ ] TASK-047-H: Final design QA

**Acceptance Criteria:**
- Design is consistent across all pages
- Brand identity is strong throughout
- No visual bugs or inconsistencies

---

### TASK-048: Documentation
**Priority:** Low
**Story Points:** 2

**Description:**
Create documentation for the project.

**Subtasks:**
- [ ] TASK-048-A: Create README.md with project overview
- [ ] TASK-048-B: Document how to run the project
- [ ] TASK-048-C: Document folder structure
- [ ] TASK-048-D: Document component usage
- [ ] TASK-048-E: Add comments to complex code
- [ ] TASK-048-F: Document mock data structure
- [ ] TASK-048-G: Create design system documentation

**Acceptance Criteria:**
- README provides clear project overview
- Setup instructions are easy to follow
- Code is well-commented

---

## Epic 10: Presentation Preparation

### TASK-049: Screenshot/Export Preparation
**Priority:** High
**Story Points:** 2

**Description:**
Prepare high-quality screenshots and exports for presentation.

**Subtasks:**
- [ ] TASK-049-A: Take high-resolution screenshots of all pages
- [ ] TASK-049-B: Create demo video/GIF of key interactions (optional)
- [ ] TASK-049-C: Export design assets if needed
- [ ] TASK-049-D: Prepare presentation materials
- [ ] TASK-049-E: Create project showcase page (optional)

**Acceptance Criteria:**
- Screenshots are high-quality and professional
- All pages are documented
- Materials ready for submission

---

### TASK-050: Final Testing & QA
**Priority:** High
**Story Points:** 3

**Description:**
Comprehensive final testing before submission.

**Subtasks:**
- [ ] TASK-050-A: Test all user flows (browsing, viewing product, adding to cart)
- [ ] TASK-050-B: Verify all links work
- [ ] TASK-050-C: Test all form submissions
- [ ] TASK-050-D: Check for console errors
- [ ] TASK-050-E: Verify mock data displays correctly
- [ ] TASK-050-F: Test add to cart from multiple locations
- [ ] TASK-050-G: Test cart operations thoroughly
- [ ] TASK-050-H: Final smoke test of entire application

**Acceptance Criteria:**
- All functionality works as expected
- No console errors
- Application is ready for submission

---

## Summary

**Total Epics:** 10
**Total Tasks:** 50
**Total Story Points:** 156

### Priority Breakdown:
- **High Priority:** 27 tasks
- **Medium Priority:** 17 tasks
- **Low Priority:** 6 tasks

### Recommended Sprint Breakdown:

**Sprint 1 (Epic 1-2):** Project Setup & Core Components
**Sprint 2 (Epic 3-4):** Layout & Mock Data
**Sprint 3 (Epic 5):** Homepage Development
**Sprint 4 (Epic 6):** Product Page Development
**Sprint 5 (Epic 7-8):** Cart Page & State Management
**Sprint 6 (Epic 9-10):** Polish, Testing & Presentation

---

*This task list is designed for desktop development only. Mobile tasks will be addressed in a separate task list.*
