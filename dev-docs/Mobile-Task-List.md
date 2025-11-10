# Cozy Haven - Mobile Development Task List

**Mobile Specifications:**
- **Target Viewport Widths:** 375px (iPhone SE), 390px (iPhone 12/13/14), 414px (iPhone Pro Max), 360px (Android)
- **Primary Breakpoint:** 768px and below
- **Touch Target Minimum:** 44px × 44px (Apple HIG) / 48px × 48px (Material Design)
- **Content Max-Width:** Full width with 16px side padding (px-4)
- **Design Approach:** Mobile-first, touch-optimized

---

## Epic M1: Mobile Foundation & Responsive Setup

### TASK-M001: Mobile Breakpoint Configuration
**Priority:** High
**Story Points:** 3

**Description:**
Configure Tailwind for mobile-first responsive design and update design system for mobile specifications.

**Subtasks:**
- [ ] TASK-M001-A: Add mobile breakpoints to Tailwind config (sm: 640px, md: 768px)
- [ ] TASK-M001-B: Create mobile-specific spacing utilities (16px side padding)
- [ ] TASK-M001-C: Define mobile touch target sizes (min 44px)
- [ ] TASK-M001-D: Configure mobile typography scale (smaller base sizes)
- [ ] TASK-M001-E: Create mobile utility classes (hide-on-mobile, show-on-mobile)
- [ ] TASK-M001-F: Update design system documentation for mobile

**Acceptance Criteria:**
- Mobile breakpoints configured correctly
- Touch targets meet accessibility standards
- Typography scales appropriately on mobile

---

### TASK-M002: Mobile Testing Setup
**Priority:** High
**Story Points:** 2

**Description:**
Set up mobile testing environment and responsive design tools.

**Subtasks:**
- [ ] TASK-M002-A: Configure browser DevTools for mobile emulation
- [ ] TASK-M002-B: Create testing checklist for target devices
- [ ] TASK-M002-C: Set up viewport meta tag for mobile optimization
- [ ] TASK-M002-D: Document mobile testing workflow
- [ ] TASK-M002-E: Create mobile screenshot strategy

**Acceptance Criteria:**
- Can test on all target mobile widths
- Viewport renders correctly on mobile browsers
- Mobile testing process documented

---

## Epic M2: Mobile Navigation & Layout

### TASK-M003: Mobile Header with Hamburger Menu
**Priority:** High
**Story Points:** 5

**Description:**
Adapt desktop header for mobile with hamburger menu, simplified layout, and mobile-optimized navigation.

**Mobile Header Layout:**
```
┌─────────────────────────────────────────────┐
│ [☰]      Cozy Haven        [🔍] [♡] [🛒] │
│ Left                        Right Icons    │
└─────────────────────────────────────────────┘
```
- Hamburger menu (☰): Top-left corner
- Logo: Centered or slightly left of center
- Action icons: Top-right (search, wishlist, cart with badge)

**Subtasks:**
- [ ] TASK-M003-A: Create hamburger menu icon (toggle button, positioned top-left)
- [ ] TASK-M003-B: Build slide-out navigation drawer/overlay (slides from left)
- [ ] TASK-M003-C: Add mobile logo (centered, smaller size than desktop)
- [ ] TASK-M003-D: Create mobile action icons (search, wishlist, cart - positioned top-right)

- [ ] TASK-M003-E: Implement menu open/close animations (slide from left)
- [ ] TASK-M003-F: Add overlay backdrop when menu is open
- [ ] TASK-M003-G: Add close button (X) inside drawer
- [ ] TASK-M003-H: Style navigation links for touch (larger tap targets)
- [ ] TASK-M003-I: Remove hover states, add active/tap states
- [ ] TASK-M003-J: Hide top contact bar on mobile or simplify
- [ ] TASK-M003-K: Make cart badge visible and touch-friendly
- [ ] TASK-M003-L: Test menu on all mobile widths

**Acceptance Criteria:**
- Hamburger menu icon is positioned in top-left corner
- Hamburger menu opens/closes smoothly
- Navigation drawer slides in from left side
- Navigation drawer is touch-friendly (full-height overlay)
- All links are easily tappable (44px min)
- Action icons (search, wishlist, cart) are positioned top-right
- Logo is centered between hamburger and action icons
- Menu works on all mobile devices (375px-414px)

---

### TASK-M004: Mobile Footer Optimization
**Priority:** Medium
**Story Points:** 3

**Description:**
Adapt footer for mobile with collapsible sections and stacked layout.

**Subtasks:**
- [ ] TASK-M004-A: Convert 4-column layout to single column (stacked)
- [ ] TASK-M004-B: Create collapsible/accordion sections for link columns
- [ ] TASK-M004-C: Keep newsletter signup visible and simplified
- [ ] TASK-M004-D: Stack social media icons (centered)
- [ ] TASK-M004-E: Stack payment icons (centered, 2 rows)
- [ ] TASK-M004-F: Adjust padding and spacing for mobile
- [ ] TASK-M004-G: Optimize copyright text (smaller font)

**Acceptance Criteria:**
- Footer sections are collapsible on mobile
- Newsletter signup is easy to use on mobile
- All icons are touch-friendly
- Footer doesn't overwhelm mobile screen

---

### TASK-M005: Mobile Layout Wrapper
**Priority:** High
**Story Points:** 2

**Description:**
Update Layout component for mobile responsiveness and proper spacing.

**Subtasks:**
- [ ] TASK-M005-A: Add mobile padding (px-4 for 16px sides)
- [ ] TASK-M005-B: Remove desktop max-width on mobile (full width)
- [ ] TASK-M005-C: Adjust vertical spacing between sections for mobile
- [ ] TASK-M005-D: Ensure header and footer work on mobile
- [ ] TASK-M005-E: Test layout on all mobile widths

**Acceptance Criteria:**
- Layout renders correctly on mobile
- Proper padding on all sides
- No horizontal scroll issues

---

## Epic M3: Mobile Homepage

### TASK-M006: Mobile Hero Section
**Priority:** High
**Story Points:** 3

**Description:**
Optimize hero section for mobile with vertical layout and mobile-optimized imagery.

**Subtasks:**
- [ ] TASK-M006-A: Reduce hero height for mobile (400px → 500px)
- [ ] TASK-M006-B: Adjust headline size for mobile (32px instead of 48px)
- [ ] TASK-M006-C: Reduce subheadline size (16px instead of 20px)
- [ ] TASK-M006-D: Stack CTA buttons vertically
- [ ] TASK-M006-E: Make buttons full-width or larger on mobile
- [ ] TASK-M006-F: Adjust text padding and positioning
- [ ] TASK-M006-G: Optimize background image for mobile (mobile-specific image crop)
- [ ] TASK-M006-H: Ensure text readability on mobile

**Acceptance Criteria:**
- Hero section fits mobile screens without awkward scrolling
- Text is readable on small screens
- CTAs are easily tappable

---

### TASK-M007: Mobile Featured Collections
**Priority:** High
**Story Points:** 3

**Description:**
Convert 3-column collections grid to mobile-friendly layout.

**Subtasks:**
- [ ] TASK-M007-A: Convert 3-column grid to single column (stacked)
- [ ] TASK-M007-B: Adjust collection card height for mobile (300px)
- [ ] TASK-M007-C: Make collection images touch-friendly (full-width cards)
- [ ] TASK-M007-D: Adjust text sizes for mobile
- [ ] TASK-M007-E: Optimize "Shop Now" button for touch (larger)
- [ ] TASK-M007-F: Add spacing between stacked cards (gap-4)
- [ ] TASK-M007-G: Consider horizontal scroll carousel as alternative (optional)

**Acceptance Criteria:**
- Collections display clearly on mobile
- Cards are easy to tap
- Images load efficiently

---

### TASK-M008: Mobile Shop by Category
**Priority:** High
**Story Points:** 3

**Description:**
Adapt category grid for mobile with 2-column layout or list view.

**Subtasks:**
- [ ] TASK-M008-A: Convert 3-column grid to 2-column grid on mobile
- [ ] TASK-M008-B: Adjust category card size (smaller icons, compact layout)
- [ ] TASK-M008-C: Make category cards touch-friendly
- [ ] TASK-M008-D: Adjust icon sizes for mobile (48px)
- [ ] TASK-M008-E: Reduce text sizes appropriately
- [ ] TASK-M008-F: Add proper gap between cards (gap-3)
- [ ] TASK-M008-G: Test tap targets on all mobile widths

**Acceptance Criteria:**
- Categories display in clean 2-column grid
- All cards are easily tappable
- Icons and text are clearly visible

---

### TASK-M009: Mobile Material Education
**Priority:** Medium
**Story Points:** 2

**Description:**
Convert material education section for mobile single-column layout.

**Subtasks:**
- [ ] TASK-M009-A: Convert 3-column layout to single column (stacked)
- [ ] TASK-M009-B: Adjust material card layout for mobile
- [ ] TASK-M009-C: Optimize texture images for mobile (full-width)
- [ ] TASK-M009-D: Adjust benefits list for mobile (smaller text)
- [ ] TASK-M009-E: Add spacing between cards
- [ ] TASK-M009-F: Consider accordion or collapsible benefits (optional)

**Acceptance Criteria:**
- Materials display clearly on mobile
- Images are appropriately sized
- Content is easy to read

---

### TASK-M010: Mobile Social Proof
**Priority:** Medium
**Story Points:** 2

**Description:**
Optimize social proof section for mobile with adjusted grid and reviews.

**Subtasks:**
- [ ] TASK-M010-A: Convert 6-column photo grid to 3-column grid on mobile
- [ ] TASK-M010-B: Adjust photo sizes for mobile
- [ ] TASK-M010-C: Convert 3 reviews to carousel or show 1-2 reviews
- [ ] TASK-M010-D: Adjust review card layout for mobile
- [ ] TASK-M010-E: Optimize star ratings for mobile visibility
- [ ] TASK-M010-F: Adjust text sizes for mobile

**Acceptance Criteria:**
- Photo grid displays nicely on mobile
- Reviews are readable
- Section doesn't feel cramped

---

### TASK-M011: Mobile Sustainability Section
**Priority:** Low
**Story Points:** 2

**Description:**
Adapt sustainability badges for mobile 2-column grid.

**Subtasks:**
- [ ] TASK-M011-A: Convert 4-column grid to 2-column grid on mobile
- [ ] TASK-M011-B: Adjust badge icon sizes
- [ ] TASK-M011-C: Reduce badge text size
- [ ] TASK-M011-D: Adjust spacing and padding
- [ ] TASK-M011-E: Ensure statement text is readable

**Acceptance Criteria:**
- Badges display clearly on mobile
- Text is readable
- Layout is balanced

---

### TASK-M012: Mobile Homepage Integration
**Priority:** High
**Story Points:** 2

**Description:**
Integrate all mobile homepage sections and ensure proper flow.

**Subtasks:**
- [ ] TASK-M012-A: Verify all sections render correctly on mobile
- [ ] TASK-M012-B: Adjust vertical spacing between sections for mobile
- [ ] TASK-M012-C: Test scroll behavior on mobile
- [ ] TASK-M012-D: Check overall page performance on mobile
- [ ] TASK-M012-E: Verify touch interactions work throughout
- [ ] TASK-M012-F: Test on multiple mobile widths (375px, 390px, 414px)

**Acceptance Criteria:**
- All homepage sections work on mobile
- Spacing is consistent
- No layout issues or horizontal scroll

---

## Epic M4: Mobile Product Page

### TASK-M013: Mobile Product Gallery
**Priority:** High
**Story Points:** 5

**Description:**
Create mobile-optimized product gallery with swipeable images.

**Subtasks:**
- [ ] TASK-M013-A: Convert gallery to full-width mobile view
- [ ] TASK-M013-B: Implement swipeable/touch gallery (horizontal swipe)
- [ ] TASK-M013-C: Add dot indicators for image position
- [ ] TASK-M013-D: Move thumbnails below main image or remove on mobile
- [ ] TASK-M013-E: Add image counter (1/5, 2/5, etc.)
- [ ] TASK-M013-F: Remove hover zoom, consider tap-to-zoom modal
- [ ] TASK-M013-G: Optimize image sizes for mobile (smaller file sizes)
- [ ] TASK-M013-H: Add touch gesture support (pinch to zoom - optional)

**Acceptance Criteria:**
- Gallery is swipeable with touch
- Image indicators show current position
- Images load quickly on mobile
- Gallery is full-width and visually appealing

---

### TASK-M014: Mobile Product Info Layout
**Priority:** High
**Story Points:** 4

**Description:**
Convert two-column product layout to mobile single-column with proper information hierarchy.

**Subtasks:**
- [ ] TASK-M014-A: Stack gallery and info vertically (gallery first)
- [ ] TASK-M014-B: Adjust product name size for mobile (24px)
- [ ] TASK-M014-C: Optimize price display for mobile (prominent)
- [ ] TASK-M014-D: Adjust star rating size
- [ ] TASK-M014-E: Optimize description for mobile (potentially truncate with "Read more")
- [ ] TASK-M014-F: Add proper padding and spacing
- [ ] TASK-M014-G: Ensure all text is readable

**Acceptance Criteria:**
- Product info displays clearly on mobile
- Information hierarchy is clear
- Text is easily readable

---

### TASK-M015: Mobile Size & Color Selectors
**Priority:** High
**Story Points:** 3

**Description:**
Optimize size and color selectors for touch interaction on mobile.

**Subtasks:**
- [ ] TASK-M015-A: Increase size button tap targets (min 44px height)
- [ ] TASK-M015-B: Adjust size selector layout for mobile (2 columns or list)
- [ ] TASK-M015-C: Increase color swatch size for touch (48px)
- [ ] TASK-M015-D: Adjust color selector spacing
- [ ] TASK-M015-E: Make selected states more visible on mobile
- [ ] TASK-M015-F: Optimize labels and text for mobile
- [ ] TASK-M015-G: Test touch interactions on all selectors

**Acceptance Criteria:**
- Selectors are easy to tap on mobile
- Selected states are clearly visible
- Layout works on all mobile widths

---

### TASK-M016: Mobile Quantity & Add to Cart
**Priority:** High
**Story Points:** 3

**Description:**
Create mobile-optimized quantity selector and sticky add to cart bar.

**Subtasks:**
- [ ] TASK-M016-A: Increase quantity selector button size (48px)
- [ ] TASK-M016-B: Create sticky bottom bar with Add to Cart button
- [ ] TASK-M016-C: Make "Add to Cart" button full-width or prominent
- [ ] TASK-M016-D: Add wishlist button (heart icon only, floating or in sticky bar)
- [ ] TASK-M016-E: Show price in sticky bar
- [ ] TASK-M016-F: Add smooth scroll-to-show animation for sticky bar
- [ ] TASK-M016-G: Ensure sticky bar doesn't block content
- [ ] TASK-M016-H: Add success modal/toast for mobile (not full page)

**Acceptance Criteria:**
- Sticky add to cart bar appears on scroll
- Add to cart button is easy to tap
- Success feedback is clear
- Wishlist button is accessible

---

### TASK-M017: Mobile Product Accordions
**Priority:** Medium
**Story Points:** 2

**Description:**
Ensure accordions work well on mobile with proper touch interaction.

**Subtasks:**
- [ ] TASK-M017-A: Increase accordion header tap targets (min 48px)
- [ ] TASK-M017-B: Adjust accordion content padding for mobile
- [ ] TASK-M017-C: Optimize text sizes for mobile
- [ ] TASK-M017-D: Ensure chevron icons are visible and tappable
- [ ] TASK-M017-E: Test expand/collapse on mobile devices
- [ ] TASK-M017-F: Consider starting with first accordion open

**Acceptance Criteria:**
- Accordions are easy to tap and expand
- Content is readable on mobile
- Smooth animations work on mobile

---

### TASK-M018: Mobile Material Details
**Priority:** Low
**Story Points:** 2

**Description:**
Optimize material details section for mobile layout.

**Subtasks:**
- [ ] TASK-M018-A: Adjust layout for mobile (single column)
- [ ] TASK-M018-B: Optimize benefit icons and text
- [ ] TASK-M018-C: Adjust spacing and padding
- [ ] TASK-M018-D: Make tooltips work on touch (tap instead of hover)

**Acceptance Criteria:**
- Material details display clearly on mobile
- Benefits are easy to read
- Touch interactions work

---

### TASK-M019: Mobile Complete the Set
**Priority:** Medium
**Story Points:** 3

**Description:**
Create horizontal scrolling carousel for "Complete the Set" on mobile.

**Subtasks:**
- [ ] TASK-M019-A: Convert grid to horizontal scroll (overflow-x-auto)
- [ ] TASK-M019-B: Adjust product card sizes for mobile (240px width)
- [ ] TASK-M019-C: Add snap points for smooth scrolling (snap-x)
- [ ] TASK-M019-D: Make "Add to Cart" buttons touch-friendly
- [ ] TASK-M019-E: Add scroll indicators or arrows (optional)
- [ ] TASK-M019-F: Optimize card layout for mobile view
- [ ] TASK-M019-G: Test swipe gestures on mobile

**Acceptance Criteria:**
- Products scroll horizontally with touch
- Cards are appropriately sized
- Snap scrolling works smoothly

---

### TASK-M020: Mobile Reviews Section
**Priority:** High
**Story Points:** 4

**Description:**
Optimize reviews section for mobile with simplified filters and layout.

**Subtasks:**
- [ ] TASK-M020-A: Adjust rating breakdown for mobile (stacked layout)
- [ ] TASK-M020-B: Convert filter/sort to mobile dropdown or bottom sheet
- [ ] TASK-M020-C: Optimize review cards for mobile (single column)
- [ ] TASK-M020-D: Adjust review text layout for mobile
- [ ] TASK-M020-E: Make helpful/not helpful buttons touch-friendly
- [ ] TASK-M020-F: Optimize "Load More" button for mobile
- [ ] TASK-M020-G: Adjust spacing between reviews
- [ ] TASK-M020-H: Consider showing fewer reviews initially on mobile

**Acceptance Criteria:**
- Reviews display clearly on mobile
- Filters and sorting work on mobile
- Review cards are easy to read

---

### TASK-M021: Mobile Related Products
**Priority:** Medium
**Story Points:** 2

**Description:**
Create horizontal scrolling carousel for related products on mobile.

**Subtasks:**
- [ ] TASK-M021-A: Convert grid to horizontal scroll
- [ ] TASK-M021-B: Adjust product card size for mobile (200px width)
- [ ] TASK-M021-C: Add snap scrolling
- [ ] TASK-M021-D: Optimize card content for mobile
- [ ] TASK-M021-E: Add scroll indicators (optional)

**Acceptance Criteria:**
- Related products scroll horizontally
- Cards display product info clearly
- Scrolling is smooth on mobile

---

### TASK-M022: Mobile Product Page Integration
**Priority:** High
**Story Points:** 3

**Description:**
Integrate all mobile product page components and ensure proper functionality.

**Subtasks:**
- [ ] TASK-M022-A: Verify all sections stack correctly on mobile
- [ ] TASK-M022-B: Test sticky add to cart bar behavior
- [ ] TASK-M022-C: Verify all touch interactions work
- [ ] TASK-M022-D: Test product selection and add to cart flow
- [ ] TASK-M022-E: Check image gallery swipe functionality
- [ ] TASK-M022-F: Test on multiple mobile widths
- [ ] TASK-M022-G: Verify page performance on mobile

**Acceptance Criteria:**
- All product page sections work on mobile
- Touch interactions are smooth
- Add to cart flow works correctly
- No layout issues

---

## Epic M5: Mobile Cart Page

### TASK-M023: Mobile Cart Items Layout
**Priority:** High
**Story Points:** 4

**Description:**
Optimize cart items for mobile with simplified layout and touch controls.

**Subtasks:**
- [ ] TASK-M023-A: Convert two-column layout to single column (stack everything)
- [ ] TASK-M023-B: Adjust cart item card layout for mobile
- [ ] TASK-M023-C: Reduce product image size for mobile (80px → 64px)
- [ ] TASK-M023-D: Stack product info vertically within card
- [ ] TASK-M023-E: Optimize quantity selector for mobile (larger buttons)
- [ ] TASK-M023-F: Make remove button more prominent and touch-friendly
- [ ] TASK-M023-G: Adjust text sizes for mobile
- [ ] TASK-M023-H: Add spacing between cart items
- [ ] TASK-M023-I: Consider swipe-to-delete gesture (optional)

**Acceptance Criteria:**
- Cart items display clearly on mobile
- All controls are easy to use with touch
- Layout is clean and not cramped

---

### TASK-M024: Mobile Order Summary
**Priority:** High
**Story Points:** 4

**Description:**
Create mobile-optimized order summary with sticky or collapsible layout.

**Subtasks:**
- [ ] TASK-M024-A: Convert sticky sidebar to bottom-fixed summary bar (collapsed)
- [ ] TASK-M024-B: Create expandable summary drawer (slide up from bottom)
- [ ] TASK-M024-C: Show total and item count in collapsed state
- [ ] TASK-M024-D: Show full pricing breakdown when expanded
- [ ] TASK-M024-E: Make checkout button prominent (full-width in drawer)
- [ ] TASK-M024-F: Optimize promo code input for mobile
- [ ] TASK-M024-G: Adjust trust badges layout for mobile (2 columns)
- [ ] TASK-M024-H: Stack payment icons appropriately
- [ ] TASK-M024-I: Add free shipping progress bar to collapsed state

**Acceptance Criteria:**
- Summary bar is easily accessible on mobile
- Expandable drawer works smoothly
- Checkout button is prominent
- All controls are touch-friendly

---

### TASK-M025: Mobile Cart Recommendations
**Priority:** Medium
**Story Points:** 2

**Description:**
Adapt cart recommendations for mobile horizontal scroll.

**Subtasks:**
- [ ] TASK-M025-A: Convert 4-column grid to horizontal scroll
- [ ] TASK-M025-B: Adjust product card size for mobile (180px width)
- [ ] TASK-M025-C: Add snap scrolling
- [ ] TASK-M025-D: Optimize quick add button for touch
- [ ] TASK-M025-E: Adjust benefits banner for mobile (stack or scroll)
- [ ] TASK-M025-F: Test swipe gestures

**Acceptance Criteria:**
- Recommendations scroll horizontally on mobile
- Cards are appropriately sized
- Quick add works on mobile

---

### TASK-M026: Mobile Empty Cart State
**Priority:** Medium
**Story Points:** 2

**Description:**
Optimize empty cart state for mobile layout.

**Subtasks:**
- [ ] TASK-M026-A: Adjust empty cart icon size for mobile
- [ ] TASK-M026-B: Optimize message text for mobile (smaller)
- [ ] TASK-M026-C: Make CTA button full-width or prominent
- [ ] TASK-M026-D: Convert bestseller grid to 2-column or horizontal scroll
- [ ] TASK-M026-E: Adjust card sizes for mobile
- [ ] TASK-M026-F: Add proper padding and spacing

**Acceptance Criteria:**
- Empty cart state displays nicely on mobile
- CTA is easy to tap
- Bestsellers are visible and accessible

---

### TASK-M027: Mobile Cart Page Integration
**Priority:** High
**Story Points:** 3

**Description:**
Integrate all mobile cart components and ensure smooth functionality.

**Subtasks:**
- [ ] TASK-M027-A: Verify cart items and summary work together on mobile
- [ ] TASK-M027-B: Test expandable summary drawer behavior
- [ ] TASK-M027-C: Verify all cart operations work on mobile (add, remove, update)
- [ ] TASK-M027-D: Test checkout button and navigation
- [ ] TASK-M027-E: Check empty cart state rendering
- [ ] TASK-M027-F: Test on multiple mobile widths
- [ ] TASK-M027-G: Verify touch interactions throughout

**Acceptance Criteria:**
- Cart page works fully on mobile
- All touch interactions are smooth
- Cart operations work correctly
- No layout issues

---

## Epic M6: Mobile Forms & Interactions

### TASK-M028: Mobile Form Optimization
**Priority:** High
**Story Points:** 3

**Description:**
Optimize all forms for mobile input and touch interaction.

**Subtasks:**
- [ ] TASK-M028-A: Increase input field height for mobile (48px min)
- [ ] TASK-M028-B: Optimize input field width (full-width on mobile)
- [ ] TASK-M028-C: Adjust label and helper text sizes
- [ ] TASK-M028-D: Optimize error message display for mobile
- [ ] TASK-M028-E: Add proper input types (email, tel, number) for mobile keyboards
- [ ] TASK-M028-F: Ensure form validation works on mobile
- [ ] TASK-M028-G: Optimize newsletter signup forms for mobile
- [ ] TASK-M028-H: Test form submission on mobile

**Acceptance Criteria:**
- All forms are easy to use on mobile
- Input fields are appropriately sized
- Mobile keyboards show correct types
- Validation works smoothly

---

### TASK-M029: Mobile Button & CTA Optimization
**Priority:** High
**Story Points:** 2

**Description:**
Ensure all buttons and CTAs meet mobile touch requirements.

**Subtasks:**
- [ ] TASK-M029-A: Audit all buttons for 44px minimum height
- [ ] TASK-M029-B: Adjust button padding for mobile
- [ ] TASK-M029-C: Consider full-width buttons on mobile for primary CTAs
- [ ] TASK-M029-D: Remove hover states, add active/pressed states
- [ ] TASK-M029-E: Optimize button text sizes for mobile
- [ ] TASK-M029-F: Test all button interactions on mobile
- [ ] TASK-M029-G: Add proper touch feedback (scale, opacity)

**Acceptance Criteria:**
- All buttons meet minimum touch target size
- Touch feedback is clear
- Buttons work correctly on mobile

---

### TASK-M030: Mobile Search Functionality
**Priority:** Medium
**Story Points:** 3

**Description:**
Create mobile-optimized search experience.

**Subtasks:**
- [ ] TASK-M030-A: Create full-screen mobile search overlay/modal
- [ ] TASK-M030-B: Add search icon tap to open overlay
- [ ] TASK-M030-C: Create mobile search input (large, full-width)
- [ ] TASK-M030-D: Add close button (X) for search overlay
- [ ] TASK-M030-E: Optimize search results display for mobile
- [ ] TASK-M030-F: Add search suggestions/autocomplete (optional)
- [ ] TASK-M030-G: Test search functionality on mobile
- [ ] TASK-M030-H: Add proper keyboard handling (enter to search)

**Acceptance Criteria:**
- Search opens in full-screen overlay on mobile
- Search input is easy to use
- Results display clearly
- Close/exit is intuitive

---

## Epic M7: Mobile Polish & Performance

### TASK-M031: Mobile Touch Gesture Optimization
**Priority:** High
**Story Points:** 3

**Description:**
Optimize all touch gestures and interactions throughout the mobile site.

**Subtasks:**
- [ ] TASK-M031-A: Audit all swipeable elements (galleries, carousels)
- [ ] TASK-M031-B: Implement smooth scroll behavior
- [ ] TASK-M031-C: Add pull-to-refresh (optional)
- [ ] TASK-M031-D: Optimize scroll performance
- [ ] TASK-M031-E: Add momentum scrolling for carousels
- [ ] TASK-M031-F: Test gestures on actual mobile devices
- [ ] TASK-M031-G: Add haptic feedback for important actions (if supported)

**Acceptance Criteria:**
- All touch gestures work smoothly
- Scrolling is performant
- Swipe interactions are intuitive

---

### TASK-M032: Mobile Image Optimization
**Priority:** High
**Story Points:** 3

**Description:**
Optimize all images for mobile devices with proper sizing and lazy loading.

**Subtasks:**
- [ ] TASK-M032-A: Implement responsive images with srcset
- [ ] TASK-M032-B: Create mobile-optimized image sizes
- [ ] TASK-M032-C: Implement lazy loading for images
- [ ] TASK-M032-D: Optimize hero and banner images for mobile
- [ ] TASK-M032-E: Add blur-up placeholder images
- [ ] TASK-M032-F: Test image loading performance on mobile
- [ ] TASK-M032-G: Optimize image formats (WebP with fallbacks)

**Acceptance Criteria:**
- Images load quickly on mobile
- Appropriate image sizes served to mobile
- Lazy loading works correctly
- No layout shift during image load

---

### TASK-M033: Mobile Performance Optimization
**Priority:** High
**Story Points:** 4

**Description:**
Optimize mobile site performance for fast loading and smooth interactions.

**Subtasks:**
- [ ] TASK-M033-A: Run Lighthouse audit for mobile
- [ ] TASK-M033-B: Optimize JavaScript bundle for mobile
- [ ] TASK-M033-C: Implement code splitting for mobile routes
- [ ] TASK-M033-D: Minimize CSS for mobile
- [ ] TASK-M033-E: Optimize font loading for mobile
- [ ] TASK-M033-F: Add loading states for mobile
- [ ] TASK-M033-G: Test on slow 3G connection
- [ ] TASK-M033-H: Optimize First Contentful Paint (FCP)
- [ ] TASK-M033-I: Optimize Largest Contentful Paint (LCP)
- [ ] TASK-M033-J: Reduce Cumulative Layout Shift (CLS)

**Acceptance Criteria:**
- Lighthouse mobile score > 80
- Page loads in < 3s on 3G
- No layout shifts
- Smooth 60fps scrolling

---

### TASK-M034: Mobile Accessibility Audit
**Priority:** High
**Story Points:** 3

**Description:**
Ensure mobile site meets accessibility standards with focus on touch and mobile screen readers.

**Subtasks:**
- [ ] TASK-M034-A: Audit mobile touch target sizes (min 44px)
- [ ] TASK-M034-B: Test with mobile screen readers (iOS VoiceOver, Android TalkBack)
- [ ] TASK-M034-C: Verify color contrast on mobile screens
- [ ] TASK-M034-D: Test keyboard navigation on mobile (external keyboard)
- [ ] TASK-M034-E: Add proper ARIA labels for mobile interactions
- [ ] TASK-M034-F: Test with mobile accessibility tools
- [ ] TASK-M034-G: Ensure focus indicators work on mobile
- [ ] TASK-M034-H: Verify zoom functionality (up to 200%)

**Acceptance Criteria:**
- All touch targets meet minimum size
- Screen readers work correctly
- Color contrast passes WCAG AA
- Site is fully accessible on mobile

---

### TASK-M035: Mobile Testing Across Devices
**Priority:** High
**Story Points:** 4

**Description:**
Comprehensive testing on real devices and mobile browsers.

**Subtasks:**
- [ ] TASK-M035-A: Test on iPhone SE (375px)
- [ ] TASK-M035-B: Test on iPhone 12/13/14 (390px)
- [ ] TASK-M035-C: Test on iPhone Pro Max (414px)
- [ ] TASK-M035-D: Test on Android devices (360px, 412px)
- [ ] TASK-M035-E: Test on Safari iOS
- [ ] TASK-M035-F: Test on Chrome Mobile
- [ ] TASK-M035-G: Test on Firefox Mobile
- [ ] TASK-M035-H: Test on Samsung Internet
- [ ] TASK-M035-I: Fix any device-specific issues
- [ ] TASK-M035-J: Create device testing matrix and document results

**Acceptance Criteria:**
- Site works on all target devices
- No browser-specific issues
- All features functional across devices

---

### TASK-M036: Mobile Visual Polish
**Priority:** Medium
**Story Points:** 3

**Description:**
Final visual polish and consistency check for mobile.

**Subtasks:**
- [ ] TASK-M036-A: Review spacing consistency on mobile (16px/24px base)
- [ ] TASK-M036-B: Check typography consistency on mobile
- [ ] TASK-M036-C: Verify touch states on all interactive elements
- [ ] TASK-M036-D: Polish transitions and animations for mobile
- [ ] TASK-M036-E: Review all mobile layouts for visual consistency
- [ ] TASK-M036-F: Check alignment and padding throughout
- [ ] TASK-M036-G: Verify brand identity on mobile
- [ ] TASK-M036-H: Final mobile QA pass

**Acceptance Criteria:**
- Design is consistent across all mobile pages
- All transitions are smooth
- Brand identity is strong
- No visual bugs

---

### TASK-M037: Mobile Documentation & Screenshots
**Priority:** Medium
**Story Points:** 2

**Description:**
Document mobile implementation and capture screenshots for presentation.

**Subtasks:**
- [ ] TASK-M037-A: Take mobile screenshots of all pages (375px, 390px, 414px)
- [ ] TASK-M037-B: Create mobile demo video/GIF (optional)
- [ ] TASK-M037-C: Document mobile-specific features
- [ ] TASK-M037-D: Update README with mobile specifications
- [ ] TASK-M037-E: Document mobile testing results
- [ ] TASK-M037-F: Create mobile comparison (before/after)

**Acceptance Criteria:**
- Mobile screenshots captured for all pages
- Mobile features documented
- Testing results recorded

---

## Summary

**Total Mobile Epics:** 7
**Total Mobile Tasks:** 37 (TASK-M001 to TASK-M037)
**Total Story Points:** 105

### Priority Breakdown:
- **High Priority:** 23 tasks
- **Medium Priority:** 12 tasks
- **Low Priority:** 2 tasks

### Epic Breakdown by Story Points:
- **Epic M1:** Mobile Foundation (5 points)
- **Epic M2:** Mobile Navigation & Layout (13 points)
- **Epic M3:** Mobile Homepage (20 points)
- **Epic M4:** Mobile Product Page (31 points)
- **Epic M5:** Mobile Cart Page (15 points)
- **Epic M6:** Mobile Forms & Interactions (8 points)
- **Epic M7:** Mobile Polish & Performance (18 points)

### Recommended Sprint Breakdown:

**Sprint 1 (Epic M1-M2):** Foundation & Navigation (18 points)
- Mobile breakpoints and testing setup
- Mobile header with hamburger menu
- Mobile footer and layout

**Sprint 2 (Epic M3):** Mobile Homepage (20 points)
- Hero, collections, categories
- Material education, social proof
- Full homepage mobile integration

**Sprint 3 (Epic M4):** Mobile Product Page (31 points)
- Product gallery and info layout
- Selectors and add to cart
- Reviews and related products

**Sprint 4 (Epic M5-M6):** Mobile Cart & Forms (23 points)
- Cart items and order summary
- Cart recommendations and empty state
- Form optimization and search

**Sprint 5 (Epic M7):** Mobile Polish & Testing (18 points)
- Touch gestures and image optimization
- Performance and accessibility
- Device testing and final polish

---

## Key Mobile UX Principles

### Touch-First Design
- Minimum touch target: 44px × 44px (48px recommended)
- Adequate spacing between tappable elements (8px minimum)
- Clear visual feedback for touch interactions

### Mobile Navigation Patterns
- Hamburger menu for main navigation
- Bottom sticky bars for CTAs
- Horizontal scroll for content carousels
- Pull-to-refresh (optional)

### Mobile Layout Strategy
- Single column layouts (stacked content)
- Full-width elements with side padding (px-4)
- Reduced content hierarchy (fewer sections visible at once)
- Progressive disclosure (accordions, modals)

### Mobile Performance
- Image optimization critical (smaller sizes, lazy loading)
- Minimize JavaScript bundle
- Fast First Contentful Paint (< 1.8s)
- Smooth 60fps scrolling

### Mobile-Specific Components Needed
- Hamburger menu drawer
- Mobile product image carousel (swipeable)
- Sticky add to cart bar (product page)
- Mobile cart summary drawer
- Mobile search overlay
- Bottom sheet/drawer components
- Mobile-optimized modals

---

## Dependencies

### Required Before Starting
- ✅ Desktop version complete (for reference)
- ✅ Design system in place
- ✅ Component library built
- ✅ Mock data ready

### Technical Requirements
- Responsive design utilities (Tailwind breakpoints)
- Touch event handling
- Swipe gesture library (optional: use-gesture, react-swipeable)
- Mobile testing tools

---

## Success Metrics

### Performance Targets
- Lighthouse Mobile Score: > 85
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

### Usability Targets
- All touch targets ≥ 44px
- Zero horizontal scroll issues
- Smooth 60fps animations
- WCAG AA accessibility compliance

### Device Coverage
- iOS Safari (latest 2 versions)
- Chrome Mobile (latest)
- Firefox Mobile (latest)
- Samsung Internet (latest)

---

*This mobile task list complements the Desktop-Task-List.md and assumes desktop implementation is complete. Mobile development should leverage existing components and adapt them for mobile viewports.*
