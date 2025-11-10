# Cozy Haven - Mobile Design System

**Version:** 1.0
**Date:** November 10, 2025
**Status:** Active
**Epic:** M1 - Mobile Foundation & Responsive Setup

---

## Overview

This document defines the mobile-specific design system for Cozy Haven, extending the desktop design system with mobile-optimized tokens, utilities, and patterns.

---

## Mobile Specifications

### Target Viewports
| Device | Width | Usage |
|--------|-------|-------|
| iPhone SE | 375px | Smallest modern iPhone (baseline) |
| iPhone 12/13/14 | 390px | Standard iPhone size |
| iPhone 14 Pro Max | 414px | Largest iPhone |
| Android (Standard) | 360px | Most common Android width |
| **Mobile Breakpoint** | ≤ 767px | Mobile vs desktop split |

### Design Standards
- **Touch Targets:** 44px × 44px minimum (Apple HIG) / 48px × 48px optimal (Material Design)
- **Side Padding:** 16px (px-4) for all mobile views
- **Content Width:** Full width with side padding (no max-width on mobile)
- **Base Font Size:** 14px (mobile) vs 16px (desktop)
- **Spacing Grid:** 8px/16px/24px (smaller than desktop)

---

## Breakpoints (Mobile-First)

### Configured Breakpoints
```javascript
// tailwind.config.js
screens: {
  'sm': '640px',   // Small tablets and large phones (landscape)
  'md': '768px',   // Tablets and small desktops (DESKTOP BREAKPOINT)
  'lg': '1024px',  // Desktops
  'xl': '1280px',  // Large desktops
  '2xl': '1536px', // Extra large screens
}
```

### Usage Pattern (Mobile-First)
```jsx
// Base styles = mobile, add md: for desktop
<div className="
  px-4          // Mobile: 16px padding
  md:px-8       // Desktop: 32px padding

  grid-cols-1   // Mobile: single column
  md:grid-cols-3 // Desktop: 3 columns

  text-sm       // Mobile: 14px
  md:text-base  // Desktop: 16px
">
```

### Key Breakpoint: 768px
- **< 768px:** Mobile layout (single column, hamburger menu, vertical stacks)
- **≥ 768px:** Desktop layout (multi-column, horizontal nav, side-by-side)

---

## Mobile Typography

### Mobile Type Scale
```javascript
// Optimized for small screens (20-33% smaller than desktop)
'h1-mobile': '32px',  // vs 48px desktop
'h2-mobile': '24px',  // vs 36px desktop
'h3-mobile': '20px',  // vs 28px desktop
'h4-mobile': '18px',  // vs 22px desktop
'body-mobile': '14px', // vs 16px desktop
'small-mobile': '12px', // vs 14px desktop
```

### Usage
```jsx
// Method 1: Use mobile typography classes
<h1 className="text-h1-mobile md:text-h1">
  Comfort and Quality Sleep
</h1>

// Method 2: Use helper classes
<h1 className="text-mobile-h1 md:text-h1">
  Comfort and Quality Sleep
</h1>

// Method 3: Responsive text sizes
<p className="text-sm md:text-base">
  Body text that scales
</p>
```

### Mobile Typography Guidelines
- **Headlines:** Keep under 40 characters on mobile
- **Body Text:** 45-60 characters per line for readability
- **Line Height:** Slightly tighter on mobile (1.4-1.5 vs 1.6)
- **Font Weight:** Use 400-600 range (avoid too thin or too heavy on small screens)

---

## Touch Targets

### Minimum Touch Target Sizes

**Apple Human Interface Guidelines:**
- Minimum: **44px × 44px**
- Recommended: **48px × 48px** or larger

**Material Design:**
- Minimum: **48dp × 48dp** (48px × 48px)

**Cozy Haven Standard:**
- Minimum: **44px × 44px** (use `touch-target` class)
- Optimal: **48px × 48px** (use `touch-target-optimal` class)

### Tailwind Utilities
```javascript
// Configuration
height: {
  'touch-min': '44px',       // Minimum touch target
  'touch-optimal': '48px',   // Optimal touch target
},
minHeight: {
  'touch': '44px',           // min-h-touch
  'touch-optimal': '48px',   // min-h-touch-optimal
},
minWidth: {
  'touch': '44px',           // min-w-touch
  'touch-optimal': '48px',   // min-w-touch-optimal
},
```

### Usage Examples
```jsx
// Mobile button - optimal touch target
<button className="btn-primary touch-target-optimal">
  Add to Cart
</button>

// Minimum touch target
<button className="min-h-touch min-w-touch px-4">
  Close
</button>

// Mobile-specific full-width button
<button className="btn-mobile-full">
  Proceed to Checkout
</button>
```

### Touch Target Spacing
- **Between Buttons:** Minimum 8px gap (prefer 12-16px)
- **Between Links:** Minimum 8px vertical spacing
- **Icon Buttons:** 48px × 48px (icon can be smaller inside)

---

## Mobile Spacing

### Mobile Spacing Scale
```javascript
spacing: {
  '2': '8px',    // Tight spacing
  '4': '16px',   // Standard mobile padding (side padding)
  '6': '24px',   // Section spacing
  '10': '40px',  // Large spacing
  '15': '60px',  // Extra large spacing

  // Mobile-specific
  'mobile-padding': '16px',  // Standard side padding
  'mobile-gap': '12px',      // Reduced gap for grids
}
```

### Mobile Padding Pattern
```jsx
// Standard mobile container
<div className="mobile-container">  {/* w-full px-4 */}
  {/* Content with 16px side padding */}
</div>

// Responsive padding
<div className="px-4 md:px-8">
  {/* 16px mobile, 32px desktop */}
</div>

// Section spacing
<section className="mobile-spacing">  {/* py-8 md:py-16 */}
  {/* 32px mobile, 64px desktop */}
</section>
```

### Mobile Spacing Guidelines
- **Side Padding:** Always 16px (px-4) on mobile
- **Section Vertical:** 32px-48px between sections (vs 64px desktop)
- **Card Padding:** 16px (p-4) on mobile vs 24px (p-6) desktop
- **Grid Gaps:** 12px (gap-3) on mobile vs 24px (gap-6) desktop

---

## Mobile Utility Classes

### Visibility Utilities

**Show/Hide Based on Device:**
```jsx
// Hide on mobile, show on desktop
<div className="hide-on-mobile">
  Desktop-only content
</div>

// Show on mobile, hide on desktop
<div className="show-on-mobile">
  Mobile-only content
</div>

// Hide on desktop
<div className="hide-on-desktop">
  Desktop-hidden content
</div>

// Show on desktop
<div className="show-on-desktop">
  Desktop-only content
</div>

// Tailwind native alternatives
<div className="hidden md:block">Desktop only</div>
<div className="block md:hidden">Mobile only</div>
```

### Mobile Layout Utilities

**Mobile Container:**
```jsx
<div className="mobile-container">
  {/* Full width with 16px side padding */}
</div>
```

**Mobile Grid:**
```jsx
// Single column grid
<div className="mobile-grid-1">
  {/* grid grid-cols-1 gap-4 */}
</div>

// Two column grid
<div className="mobile-grid-2">
  {/* grid grid-cols-2 gap-3 md:gap-6 */}
</div>
```

**Mobile Stack:**
```jsx
// Stack vertically on mobile, horizontal on desktop
<div className="mobile-stack">
  {/* flex-col on mobile, flex-row on desktop */}
</div>
```

### Mobile Scrolling (Carousels)

**Horizontal Scroll with Snap:**
```jsx
<div className="mobile-scroll">
  <div className="mobile-scroll-item">Item 1</div>
  <div className="mobile-scroll-item">Item 2</div>
  <div className="mobile-scroll-item">Item 3</div>
</div>
```

**Features:**
- Smooth scrolling on iOS (`-webkit-overflow-scrolling: touch`)
- Hidden scrollbars
- Snap points for smooth stops
- Touch-friendly swipe gestures

### Touch Feedback

**Active States:**
```jsx
// Scale down on tap
<button className="touch-feedback">
  {/* Scales to 95% when pressed */}
</button>

// Opacity feedback
<button className="touch-feedback-subtle">
  {/* Reduces opacity to 70% when pressed */}
</button>
```

**Note:** Hover effects are automatically disabled on touch devices via `@media (hover: none)`.

---

## Mobile Components

### Mobile-Specific Component Classes

**Mobile Button:**
```jsx
<button className="btn-mobile-full">
  {/* Full width + 48px height */}
</button>
```

**Mobile Card:**
```jsx
<div className="card-mobile">
  {/* Reduced shadow and padding (p-4) */}
</div>
```

**Mobile Input:**
```jsx
<input className="input-field min-h-touch-optimal" />
{/* 48px height for easy tapping */}
```

---

## Mobile Safe Areas (iOS)

### Safe Area Insets
For devices with notches or home indicators (iPhone X+):

```jsx
// Top safe area (notch)
<div className="mobile-safe-area-top">
  {/* Adds padding-top: env(safe-area-inset-top) */}
</div>

// Bottom safe area (home indicator)
<div className="mobile-safe-area-bottom">
  {/* Adds padding-bottom: env(safe-area-inset-bottom) */}
</div>
```

**Use Cases:**
- Fixed headers (top)
- Sticky bottom bars (bottom)
- Full-screen overlays

---

## Mobile Navigation Patterns

### Hamburger Menu
```jsx
// Mobile header layout
<header className="flex items-center justify-between px-4 h-16">
  {/* Left: Hamburger */}
  <button className="touch-target-optimal">
    <MenuIcon />
  </button>

  {/* Center: Logo */}
  <div className="logo">Cozy Haven</div>

  {/* Right: Action icons */}
  <div className="flex gap-2">
    <button className="touch-target">
      <SearchIcon />
    </button>
    <button className="touch-target">
      <HeartIcon />
    </button>
    <button className="touch-target">
      <CartIcon />
    </button>
  </div>
</header>
```

### Slide-Out Drawer
```jsx
// Navigation drawer (slides from left)
<div className="
  fixed inset-y-0 left-0 w-[280px]
  bg-white shadow-dropdown
  transform transition-transform duration-300
  {isOpen ? 'translate-x-0' : '-translate-x-full'}
">
  {/* Nav content */}
</div>

// Backdrop overlay
{isOpen && (
  <div className="fixed inset-0 bg-black/50" onClick={closeMenu} />
)}
```

---

## Mobile Performance

### Image Optimization
```jsx
// Responsive images
<img
  src="/image-mobile.jpg"
  srcSet="
    /image-mobile.jpg 400w,
    /image-tablet.jpg 800w,
    /image-desktop.jpg 1200w
  "
  sizes="
    (max-width: 767px) 100vw,
    (max-width: 1023px) 50vw,
    33vw
  "
  loading="lazy"
  alt="Product"
/>
```

### Lazy Loading
```jsx
// Built-in lazy loading
<img src="/image.jpg" loading="lazy" alt="Product" />

// Intersection Observer for custom components
// (Implement as needed for carousels, etc.)
```

---

## Responsive Design Patterns

### Pattern 1: Single Column to Multi-Column
```jsx
<div className="
  grid
  grid-cols-1        // Mobile: 1 column
  md:grid-cols-2     // Tablet: 2 columns
  lg:grid-cols-3     // Desktop: 3 columns
  gap-4 md:gap-6
">
```

### Pattern 2: Stack to Side-by-Side
```jsx
<div className="
  flex flex-col      // Mobile: stack vertically
  md:flex-row        // Desktop: horizontal
  gap-4 md:gap-6
">
```

### Pattern 3: Full-Width to Constrained
```jsx
<div className="
  w-full px-4        // Mobile: full width with padding
  md:max-w-[1200px]  // Desktop: max width
  md:mx-auto         // Desktop: centered
">
```

### Pattern 4: Hidden to Visible
```jsx
// Mobile: hamburger menu, Desktop: full nav
<nav className="hidden md:flex">
  {/* Desktop navigation */}
</nav>
<button className="md:hidden" onClick={openMenu}>
  <MenuIcon />
</button>
```

---

## Mobile Testing

### Browser DevTools
**Chrome DevTools:**
1. F12 or Cmd+Opt+I
2. Click device toggle (Cmd+Shift+M)
3. Select device or enter custom dimensions
4. Test: 375px, 390px, 414px, 360px

**Safari DevTools (Mac):**
1. Enable Developer menu (Preferences > Advanced)
2. Develop > Enter Responsive Design Mode
3. Test iOS devices

### Recommended Test Devices
- iPhone SE (375px) - Smallest
- iPhone 12/13/14 (390px) - Standard
- iPhone 14 Pro Max (414px) - Largest
- Pixel 5 (393px) - Android
- Galaxy S20 (360px) - Android

### Testing Checklist
- [ ] All touch targets ≥ 44px
- [ ] No horizontal scroll
- [ ] Text is readable (not too small)
- [ ] Images load and scale properly
- [ ] Forms are easy to fill out
- [ ] Navigation works smoothly
- [ ] Gestures work (swipe, tap, scroll)
- [ ] Performance is good (< 3s load on 3G)

---

## Mobile Accessibility

### Touch Target Guidelines
- ✅ Minimum: 44px × 44px
- ✅ Optimal: 48px × 48px
- ✅ Spacing: 8px between targets

### Text Readability
- ✅ Minimum font size: 12px (prefer 14px+)
- ✅ Line height: 1.5-1.6 for body text
- ✅ Contrast ratio: WCAG AA (4.5:1 for text)

### Form Inputs
- ✅ Height: 48px minimum
- ✅ Labels: Clearly visible above input
- ✅ Error messages: Visible and descriptive
- ✅ Keyboard types: email, tel, number, etc.

### Screen Readers (Mobile)
- ✅ iOS VoiceOver
- ✅ Android TalkBack
- ✅ Proper ARIA labels
- ✅ Semantic HTML

### Zoom Support
- ✅ Allow zoom up to 200%
- ✅ No `user-scalable=no`
- ✅ Layouts adapt to zoom

---

## Common Mobile Patterns

### Pattern Library

**1. Sticky Bottom CTA**
```jsx
<div className="
  fixed bottom-0 left-0 right-0
  bg-white border-t border-cream
  p-4 mobile-safe-area-bottom
">
  <button className="btn-primary btn-mobile-full">
    Add to Cart - $89.99
  </button>
</div>
```

**2. Expandable Summary Drawer**
```jsx
<div className="
  fixed bottom-0 left-0 right-0
  bg-white rounded-t-xl shadow-dropdown
  transform transition-transform duration-300
  {isExpanded ? 'translate-y-0' : 'translate-y-[calc(100%-4rem)]'}
">
  {/* Collapsed: Shows total */}
  {/* Expanded: Shows full breakdown */}
</div>
```

**3. Full-Screen Overlay**
```jsx
<div className="
  fixed inset-0 z-50
  bg-white
  overflow-y-auto
">
  {/* Search, filters, etc. */}
</div>
```

**4. Horizontal Product Carousel**
```jsx
<div className="mobile-scroll flex gap-4 px-4 py-2">
  {products.map(product => (
    <div key={product.id} className="
      mobile-scroll-item
      flex-shrink-0 w-[180px]
    ">
      <ProductCard product={product} />
    </div>
  ))}
</div>
```

**5. Swipeable Image Gallery**
```jsx
<div className="relative">
  <div className="mobile-scroll flex">
    {images.map((img, i) => (
      <img
        key={i}
        src={img}
        className="mobile-scroll-item w-full flex-shrink-0"
        alt={`Product ${i + 1}`}
      />
    ))}
  </div>
  {/* Dot indicators */}
  <div className="flex gap-2 justify-center mt-2">
    {images.map((_, i) => (
      <div className={`w-2 h-2 rounded-full ${
        i === currentIndex ? 'bg-terracotta' : 'bg-gray-300'
      }`} />
    ))}
  </div>
</div>
```

---

## Quick Reference

### Mobile Breakpoints
- **< 640px:** Mobile (base styles)
- **640px - 767px:** Mobile landscape / Small tablets
- **≥ 768px:** Desktop (use md: prefix)

### Touch Targets
- **Minimum:** 44px × 44px (`touch-target`)
- **Optimal:** 48px × 48px (`touch-target-optimal`)

### Mobile Typography
- **H1:** 32px (`text-h1-mobile`)
- **H2:** 24px (`text-h2-mobile`)
- **Body:** 14px (`text-body-mobile`)

### Mobile Spacing
- **Side Padding:** 16px (`px-4` or `mobile-container`)
- **Section Spacing:** 32px (`py-8` or `mobile-spacing`)
- **Grid Gap:** 12px (`gap-3`)

### Common Classes
- `mobile-container` - Full width with 16px padding
- `mobile-scroll` - Horizontal scroll carousel
- `mobile-stack` - Vertical on mobile, horizontal on desktop
- `mobile-grid-1` - Single column grid
- `mobile-grid-2` - Two column grid
- `touch-feedback` - Scale on tap
- `hide-on-mobile` - Desktop only
- `show-on-mobile` - Mobile only

---

## Files Modified

### Configuration Files
- ✅ `tailwind.config.js` - Mobile breakpoints, touch targets, mobile typography
- ✅ `src/index.css` - Mobile utility classes, touch feedback, visibility utilities
- ✅ `index.html` - Viewport meta tag (already configured)

### Documentation
- ✅ `dev-docs/MOBILE_DESIGN_SYSTEM.md` - This document
- ✅ `dev-docs/Mobile-Task-List.md` - Full mobile task breakdown

---

## Next Steps

After completing mobile design system configuration:

1. **Epic M2:** Mobile Navigation & Layout
   - Build hamburger menu component
   - Create mobile header
   - Optimize footer for mobile
   - Create mobile layout wrapper

2. **Epic M3:** Mobile Homepage
   - Adapt hero section
   - Convert collections to single column
   - Create 2-column category grid
   - Optimize all homepage sections

3. **Testing:**
   - Test on real devices (iPhone, Android)
   - Verify touch targets meet standards
   - Check performance on mobile networks
   - Validate accessibility

---

**Epic M1 Status:** ✅ COMPLETED
**Next Epic:** M2 - Mobile Navigation & Layout
**Last Updated:** November 10, 2025
