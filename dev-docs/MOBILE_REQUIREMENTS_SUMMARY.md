# Cozy Haven - Mobile Requirements Summary

**Created:** November 10, 2025
**Status:** Planning Phase
**Target:** Standard mobile screen sizes (375px - 414px)

---

## Executive Summary

This document outlines the mobile development requirements for the Cozy Haven e-commerce website. The mobile version will adapt the existing desktop implementation (78% complete) for mobile browsers with touch-first interactions, responsive layouts, and mobile-optimized user experience.

---

## Mobile Specifications

### Target Devices & Viewports
| Device | Width | Notes |
|--------|-------|-------|
| iPhone SE | 375px | Smallest modern iPhone |
| iPhone 12/13/14 | 390px | Standard iPhone size |
| iPhone 14 Pro Max | 414px | Largest iPhone |
| Android (Standard) | 360px | Most common Android width |
| Breakpoint Threshold | ≤ 768px | Mobile vs desktop split |

### Design Standards
- **Touch Targets:** 44px × 44px minimum (Apple HIG) / 48px × 48px recommended (Material)
- **Side Padding:** 16px (px-4) consistent throughout
- **Content Width:** Full-width with side padding (no max-width on mobile)
- **Typography:** Scaled down from desktop (base: 14-16px)
- **Spacing:** 8px/16px/24px grid (smaller than desktop)

---

## Mobile Development Scope

### Total Work Required
- **7 Epics** (M1 through M7)
- **37 Tasks** (TASK-M001 through TASK-M037)
- **105 Story Points** (estimated 3-4 weeks of focused work)

### Priority Distribution
- **High Priority:** 23 tasks (62%) - Must have
- **Medium Priority:** 12 tasks (32%) - Should have
- **Low Priority:** 2 tasks (6%) - Nice to have

---

## Epic Breakdown

### Epic M1: Mobile Foundation & Responsive Setup (5 points)
**Goal:** Configure mobile breakpoints, testing environment, and responsive design foundation

**Key Tasks:**
- TASK-M001: Mobile breakpoint configuration (Tailwind)
- TASK-M002: Mobile testing setup

**Deliverables:**
- Mobile-first Tailwind configuration
- Touch target size standards
- Mobile testing workflow

---

### Epic M2: Mobile Navigation & Layout (13 points)
**Goal:** Create mobile-optimized header, footer, and layout components

**Key Tasks:**
- TASK-M003: Mobile header with hamburger menu ⭐ (5 points)
- TASK-M004: Mobile footer optimization (3 points)
- TASK-M005: Mobile layout wrapper (2 points)

**Key Features:**
- Hamburger menu with slide-out drawer
- Simplified header with mobile action icons
- Collapsible footer sections
- Touch-optimized navigation

---

### Epic M3: Mobile Homepage (20 points)
**Goal:** Adapt all homepage sections for mobile single-column layout

**Key Tasks:**
- TASK-M006: Mobile hero section (3 points)
- TASK-M007: Mobile featured collections (3 points)
- TASK-M008: Mobile shop by category (3 points)
- TASK-M009: Mobile material education (2 points)
- TASK-M010: Mobile social proof (2 points)
- TASK-M011: Mobile sustainability (2 points)
- TASK-M012: Mobile homepage integration (2 points)

**Key Adaptations:**
- Hero: Vertical layout, stacked CTAs
- Collections: Single column or horizontal scroll
- Categories: 2-column grid
- All sections: Mobile-optimized images and text

---

### Epic M4: Mobile Product Page (31 points) ⭐ LARGEST EPIC
**Goal:** Create fully mobile-optimized product page with swipeable gallery and sticky CTA

**Key Tasks:**
- TASK-M013: Mobile product gallery (swipeable) ⭐ (5 points)
- TASK-M014: Mobile product info layout (4 points)
- TASK-M015: Mobile size & color selectors (3 points)
- TASK-M016: Mobile quantity & sticky add to cart ⭐ (3 points)
- TASK-M017: Mobile product accordions (2 points)
- TASK-M018: Mobile material details (2 points)
- TASK-M019: Mobile complete the set (carousel) (3 points)
- TASK-M020: Mobile reviews section (4 points)
- TASK-M021: Mobile related products (carousel) (2 points)
- TASK-M022: Mobile product page integration (3 points)

**Key Features:**
- Swipeable image gallery with dot indicators
- Sticky bottom add to cart bar
- Touch-optimized selectors (size, color, quantity)
- Horizontal scroll carousels for cross-sells
- Mobile-optimized reviews with filters

---

### Epic M5: Mobile Cart Page (15 points)
**Goal:** Create mobile cart with collapsible summary and touch-optimized controls

**Key Tasks:**
- TASK-M023: Mobile cart items layout (4 points)
- TASK-M024: Mobile order summary (expandable drawer) ⭐ (4 points)
- TASK-M025: Mobile cart recommendations (carousel) (2 points)
- TASK-M026: Mobile empty cart state (2 points)
- TASK-M027: Mobile cart page integration (3 points)

**Key Features:**
- Single-column cart items
- Expandable summary drawer from bottom
- Sticky collapsed summary with total
- Swipe-to-delete (optional)
- Touch-optimized quantity controls

---

### Epic M6: Mobile Forms & Interactions (8 points)
**Goal:** Optimize all forms and interactive elements for touch

**Key Tasks:**
- TASK-M028: Mobile form optimization (3 points)
- TASK-M029: Mobile button & CTA optimization (2 points)
- TASK-M030: Mobile search functionality (3 points)

**Key Features:**
- 48px input fields (full-width)
- Mobile keyboard types (email, tel, number)
- Full-screen search overlay
- Touch-friendly buttons with feedback
- Form validation for mobile

---

### Epic M7: Mobile Polish & Performance (18 points)
**Goal:** Optimize performance, test on real devices, ensure accessibility

**Key Tasks:**
- TASK-M031: Touch gesture optimization (3 points)
- TASK-M032: Mobile image optimization ⭐ (3 points)
- TASK-M033: Mobile performance optimization ⭐ (4 points)
- TASK-M034: Mobile accessibility audit (3 points)
- TASK-M035: Mobile device testing ⭐ (4 points)
- TASK-M036: Mobile visual polish (3 points)
- TASK-M037: Mobile documentation & screenshots (2 points)

**Key Deliverables:**
- Lighthouse mobile score > 85
- Image lazy loading and optimization
- Testing on 5+ real devices
- WCAG AA compliance
- Screen reader compatibility
- Final mobile screenshots and documentation

---

## Mobile-Specific Components to Build

### New Mobile Components
1. **HamburgerMenu** - Icon button to toggle menu
2. **MobileNavDrawer** - Slide-out navigation panel
3. **SwipeableGallery** - Touch-enabled image carousel
4. **StickyAddToCart** - Bottom fixed add to cart bar
5. **ExpandableSummary** - Mobile cart summary drawer
6. **MobileSearchOverlay** - Full-screen search modal
7. **BottomSheet** - Generic mobile drawer component
8. **TouchFeedback** - Wrapper for touch state feedback

### Adapted Components (Add Mobile Variants)
- All existing components need mobile responsive variants
- Use Tailwind breakpoint classes (sm:, md:, lg:)
- Example: `className="grid grid-cols-1 md:grid-cols-3"`

---

## Technical Implementation Strategy

### Approach: Mobile-First Responsive
```typescript
// Add mobile styles first, then desktop overrides
<div className="
  px-4          // Mobile: 16px padding
  md:px-8       // Desktop: 32px padding

  grid-cols-1   // Mobile: single column
  md:grid-cols-3 // Desktop: 3 columns

  text-sm       // Mobile: 14px
  md:text-base  // Desktop: 16px
">
```

### Touch Event Handling
```typescript
// Example: Swipeable gallery
import { useSwipeable } from 'react-swipeable'

const handlers = useSwipeable({
  onSwipedLeft: () => nextImage(),
  onSwipedRight: () => prevImage(),
  trackMouse: false // Only touch, not mouse
})
```

### Mobile Detection (Optional)
```typescript
// Use CSS media queries primarily
// For JS detection:
const isMobile = window.innerWidth <= 768
```

---

## Recommended Sprint Plan

### Sprint 1: Foundation & Navigation (1 week)
- **Epic M1:** Mobile Foundation (5 points)
- **Epic M2:** Mobile Navigation & Layout (13 points)
- **Total:** 18 points

**Goals:**
- Mobile breakpoints configured
- Hamburger menu working
- Mobile header and footer complete
- Layout wrapper responsive

**Deliverables:**
- Mobile-ready navigation system
- Responsive layout components
- Mobile testing environment

---

### Sprint 2: Mobile Homepage (1 week)
- **Epic M3:** Mobile Homepage (20 points)
- **Total:** 20 points

**Goals:**
- All homepage sections mobile-responsive
- Hero section optimized
- Collections and categories work on mobile
- Social proof and sustainability adapted

**Deliverables:**
- Fully responsive homepage
- All sections stack properly
- Touch interactions work

---

### Sprint 3: Mobile Product Page (1.5 weeks)
- **Epic M4:** Mobile Product Page (31 points)
- **Total:** 31 points

**Goals:**
- Swipeable product gallery
- Sticky add to cart bar
- Touch-optimized selectors
- Mobile reviews section
- Horizontal scroll carousels

**Deliverables:**
- Complete mobile product page
- Smooth touch interactions
- All selectors work on mobile

---

### Sprint 4: Mobile Cart & Forms (1 week)
- **Epic M5:** Mobile Cart Page (15 points)
- **Epic M6:** Mobile Forms & Interactions (8 points)
- **Total:** 23 points

**Goals:**
- Mobile cart with expandable summary
- Touch-optimized cart controls
- Mobile forms working
- Search overlay functional

**Deliverables:**
- Complete mobile cart page
- All forms mobile-friendly
- Search working on mobile

---

### Sprint 5: Polish & Testing (1 week)
- **Epic M7:** Mobile Polish & Performance (18 points)
- **Total:** 18 points

**Goals:**
- Performance optimization (Lighthouse > 85)
- Device testing (5+ devices)
- Accessibility audit (WCAG AA)
- Final polish and screenshots

**Deliverables:**
- Optimized mobile performance
- Testing documentation
- Mobile screenshots
- Production-ready mobile site

---

## Success Criteria

### Performance Targets
- ✅ Lighthouse Mobile Score: > 85
- ✅ First Contentful Paint: < 1.8s
- ✅ Largest Contentful Paint: < 2.5s
- ✅ Time to Interactive: < 3.5s

### Usability Targets
- ✅ All touch targets ≥ 44px (48px preferred)
- ✅ Zero horizontal scroll
- ✅ Smooth 60fps scrolling
- ✅ WCAG AA accessibility

### Device Coverage
- ✅ iOS Safari (latest 2 versions)
- ✅ Chrome Mobile (latest)
- ✅ Firefox Mobile (latest)
- ✅ Samsung Internet (latest)

### Testing Coverage
- ✅ Tested on iPhone SE (375px)
- ✅ Tested on iPhone 14 (390px)
- ✅ Tested on iPhone Pro Max (414px)
- ✅ Tested on Android (360px)
- ✅ Tested on iPad (tablet breakpoint)

---

## Key Mobile UX Patterns

### Navigation
- **Pattern:** Hamburger menu with slide-out drawer
- **Why:** Standard mobile pattern, saves screen space
- **Implementation:** Full-height overlay with backdrop

### Product Gallery
- **Pattern:** Swipeable full-width images with dots
- **Why:** Natural touch gesture, mobile-first
- **Implementation:** Horizontal scroll with snap points

### Add to Cart
- **Pattern:** Sticky bottom bar with button
- **Why:** Always accessible, doesn't block content
- **Implementation:** Fixed bottom, appears on scroll

### Cart Summary
- **Pattern:** Expandable drawer from bottom
- **Why:** Collapsed saves space, expandable shows details
- **Implementation:** Bottom sheet component

### Forms
- **Pattern:** Full-width stacked inputs
- **Why:** Easy to tap, natural flow on mobile
- **Implementation:** 48px height, proper keyboard types

### Product Carousels
- **Pattern:** Horizontal scroll with snap
- **Why:** Natural swipe gesture, saves vertical space
- **Implementation:** overflow-x-auto with snap-x

---

## Dependencies & Prerequisites

### Must Complete Before Mobile Development
1. ✅ Desktop version complete (for reference and code reuse)
2. ✅ Design system established
3. ✅ Component library built
4. ✅ Mock data ready

### Optional But Helpful
- Desktop Epic 8 complete (Global State) - Makes cart/wishlist work globally
- Desktop Epic 9 complete (Polish & Testing) - Ensures quality baseline

---

## Estimated Timeline

### Focused Full-Time Development
- **Sprint 1-2:** 2 weeks (Foundation + Homepage)
- **Sprint 3:** 1.5 weeks (Product Page)
- **Sprint 4:** 1 week (Cart + Forms)
- **Sprint 5:** 1 week (Polish + Testing)
- **Total:** ~5.5 weeks full-time

### Part-Time Development
- **Estimated:** 8-10 weeks (20 hours/week)

### Aggressive Timeline
- **Minimum:** 3-4 weeks (cutting optional features)

---

## Risk Assessment

### High Risk Areas
1. **Touch Gesture Implementation** - May need additional library
2. **Performance on Low-End Devices** - Requires careful optimization
3. **Image Loading** - Large product images on mobile networks
4. **Device Testing** - Need access to multiple real devices

### Mitigation Strategies
1. Use proven touch libraries (react-swipeable, use-gesture)
2. Implement lazy loading, image optimization early
3. Use responsive images (srcset) from the start
4. Use browser DevTools + BrowserStack for device testing

---

## Next Steps

### Immediate Actions
1. **Review this requirements document** with team/stakeholders
2. **Set up mobile testing environment** (browser DevTools, real devices)
3. **Start with Epic M1** (Foundation & breakpoints)
4. **Create branch for mobile development** (e.g., `feature/mobile-responsive`)

### Quick Win - Start Here
**TASK-M001: Mobile Breakpoint Configuration** (3 points)
- Update Tailwind config for mobile breakpoints
- Add mobile utility classes
- Test responsive helpers
- **Time:** 2-3 hours
- **Impact:** Unlocks all mobile development

---

## Questions to Answer Before Starting

1. **Do we need tablet (768px-1024px) as separate breakpoint?**
   - Suggested: Yes, use desktop layout for tablets

2. **Do we support landscape orientation on mobile?**
   - Suggested: Yes, but portrait is priority

3. **Do we need offline support/PWA features?**
   - Suggested: No for MVP, add later if needed

4. **What's the minimum iOS/Android version to support?**
   - Suggested: iOS 14+, Android 9+

5. **Do we need native app feel (pull-to-refresh, etc.)?**
   - Suggested: Optional enhancements, not required for MVP

---

## Resources Needed

### Design Resources
- Mobile mockups/wireframes (if available)
- Mobile-specific image assets (smaller sizes)
- Touch state designs

### Development Resources
- Browser DevTools for mobile emulation
- Real devices for testing (ideally 3-5 devices)
- BrowserStack or similar (optional)

### Testing Resources
- Mobile testing checklist
- Lighthouse CI for performance tracking
- Real users for usability testing (optional)

---

## Documentation References

- **Main Task List:** `dev-docs/Mobile-Task-List.md`
- **Desktop Task List:** `dev-docs/Desktop-Task-List.md` (reference)
- **Progress Tracker:** `dev-docs/PROGRESS.md` (will update for mobile)
- **Design System:** `dev-docs/DESIGN_SYSTEM_REPORT.md`

---

## Conclusion

The mobile development for Cozy Haven is a **105-story-point effort** (approximately 3-5 weeks of focused work) that will adapt the existing desktop implementation for mobile browsers with touch-first interactions.

**Key Success Factors:**
1. Start with solid foundation (Epic M1)
2. Build mobile navigation early (Epic M2)
3. Work epic-by-epic (don't jump around)
4. Test on real devices throughout
5. Prioritize performance from day one

**Ready to Start?**
Begin with **Epic M1: Mobile Foundation & Responsive Setup** to configure breakpoints and testing environment.

---

**Next Step:** Review this document and confirm approach before starting Epic M1.

**Questions?** Refer to `Mobile-Task-List.md` for detailed task breakdowns.

---

*Created: November 10, 2025*
*Version: 1.0*
*Status: Ready for Development*
