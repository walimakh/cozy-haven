# Cozy Haven - Mobile Testing Guide

**Version:** 1.0
**Date:** November 10, 2025
**Epic:** M1 - Mobile Foundation & Responsive Setup
**Task:** TASK-M002

---

## Overview

This guide provides comprehensive instructions for testing the Cozy Haven mobile experience across devices, browsers, and screen sizes.

---

## Quick Start

### Test Current Site
```bash
# Start dev server
pnpm run dev

# Open in browser
http://localhost:5173

# Open DevTools mobile emulation
Chrome: Cmd+Opt+I, then Cmd+Shift+M (Mac) or Ctrl+Shift+M (Windows)
```

### Test Devices (Priority Order)
1. **iPhone SE** (375px) - Smallest modern iPhone ⭐
2. **iPhone 12/13/14** (390px) - Standard iPhone ⭐
3. **iPhone 14 Pro Max** (414px) - Largest iPhone
4. **Pixel 5** (393px) - Android reference
5. **Galaxy S20** (360px) - Common Android size

---

## Browser DevTools Setup

### Chrome DevTools (Recommended)

**Open DevTools:**
- Mac: `Cmd + Opt + I`
- Windows/Linux: `Ctrl + Shift + I` or `F12`

**Toggle Device Mode:**
- Mac: `Cmd + Shift + M`
- Windows/Linux: `Ctrl + Shift + M`

**Step-by-Step:**
1. Open DevTools (Cmd+Opt+I)
2. Click device toggle icon (top-left) or press Cmd+Shift+M
3. Select device from dropdown or enter custom dimensions
4. Refresh page to ensure proper rendering

**Recommended Settings:**
- ✅ Show device frame (for visual context)
- ✅ Show rulers (for measuring)
- ✅ Add device pixel ratio (for retina displays)
- ✅ Throttle network (test on 3G)

**Custom Device Setup:**
1. Click "Edit" in device dropdown
2. Add custom device:
   - Name: "iPhone SE"
   - Width: 375px
   - Height: 667px
   - DPR: 2
   - User Agent String: (iOS)

**Preset Devices (Already in Chrome):**
- iPhone SE (375 × 667)
- iPhone 12/13 Pro (390 × 844)
- iPhone 14 Pro Max (430 × 932)
- Pixel 5 (393 × 851)
- Samsung Galaxy S20 (360 × 800)

**Network Throttling:**
1. Click "Online" dropdown (top toolbar)
2. Select "Fast 3G" or "Slow 3G"
3. Test page load performance

**Touch Simulation:**
- DevTools automatically simulates touch events in device mode
- Click = tap
- Click + drag = swipe

**Screenshots:**
1. Open device mode
2. Click three-dot menu (top-right)
3. Select "Capture screenshot" or "Capture full size screenshot"

---

### Firefox DevTools

**Open Responsive Design Mode:**
- Mac: `Cmd + Opt + M`
- Windows/Linux: `Ctrl + Shift + M`

**Step-by-Step:**
1. Open Firefox
2. Press Cmd+Opt+M (Mac) or Ctrl+Shift+M (Windows)
3. Select device preset or enter custom size
4. Toggle touch simulation (hand icon)

**Features:**
- Rotate device (portrait/landscape)
- Touch simulation
- Network throttling
- Screenshot capture

---

### Safari DevTools (Mac Only)

**Enable Developer Menu:**
1. Safari > Preferences > Advanced
2. Check "Show Develop menu in menu bar"

**Responsive Design Mode:**
1. Develop > Enter Responsive Design Mode
2. Or press: `Cmd + Opt + R`

**Features:**
- iOS device presets (best for testing iOS)
- User agent switching
- Touch simulation

**iOS Simulator (Xcode Required):**
1. Open Xcode
2. Xcode > Open Developer Tool > Simulator
3. Choose iPhone model
4. Open Safari in simulator
5. Navigate to localhost:5173

**Best for:**
- Testing actual iOS Safari rendering
- Testing iOS-specific features (safe areas, gestures)
- Most accurate iOS testing without real device

---

## Target Devices & Resolutions

### Mobile Device Matrix

| Device | Width | Height | DPR | Notes | Priority |
|--------|-------|--------|-----|-------|----------|
| **iPhone SE** | 375px | 667px | 2 | Smallest modern iPhone | ⭐ HIGH |
| **iPhone 12/13/14** | 390px | 844px | 3 | Standard iPhone size | ⭐ HIGH |
| **iPhone 14 Pro Max** | 430px | 932px | 3 | Largest iPhone | MEDIUM |
| **Pixel 5** | 393px | 851px | 2.75 | Android reference device | HIGH |
| **Galaxy S20** | 360px | 800px | 3 | Common Android size | MEDIUM |
| **Samsung Galaxy A51** | 412px | 914px | 2.625 | Popular mid-range | LOW |

### Breakpoint Testing Widths

Test at these specific widths:
- **360px** - Minimum Android width
- **375px** - iPhone SE (baseline)
- **390px** - Standard iPhone
- **414px** - iPhone Pro Max
- **767px** - Mobile breakpoint edge (just before tablet)
- **768px** - Desktop breakpoint (verify switch)

### Orientation Testing
- **Portrait** (default) - Primary orientation
- **Landscape** - Secondary (optional for MVP)

---

## Mobile Testing Checklist

### Visual & Layout Testing

#### Header
- [ ] Logo displays correctly and is sized appropriately
- [ ] Cart badge shows item count
- [ ] All icons are visible and properly sized
- [ ] Header height is appropriate (56-64px)
- [ ] No text overflow or wrapping issues
- [ ] Sticky positioning works (if applicable)

#### Navigation
- [ ] Hamburger menu icon is visible (when implemented)
- [ ] Navigation links are readable
- [ ] Spacing between elements is adequate
- [ ] No elements overlapping

#### Content
- [ ] All sections stack properly (single column)
- [ ] Images scale correctly and maintain aspect ratio
- [ ] No horizontal scrolling
- [ ] Text is readable (minimum 12px, prefer 14px+)
- [ ] Proper spacing between sections
- [ ] Cards display correctly
- [ ] Product grids adapt to mobile (1-2 columns)

#### Footer
- [ ] Footer sections are stacked or accordion
- [ ] Social icons are visible and tappable
- [ ] Newsletter signup works on mobile
- [ ] Payment icons display correctly
- [ ] Copyright text is readable

---

### Interaction Testing

#### Touch Targets
- [ ] All buttons are at least 44px × 44px
- [ ] Buttons have adequate spacing (8px minimum between)
- [ ] Links in navigation are easy to tap
- [ ] Form inputs are at least 44px tall
- [ ] Icon buttons are large enough to tap
- [ ] No accidental taps due to cramped spacing

#### Forms
- [ ] Input fields are full-width or appropriately sized
- [ ] Input height is adequate (48px preferred)
- [ ] Keyboard opens without issues
- [ ] Proper keyboard type (email, tel, number)
- [ ] Labels are visible and clear
- [ ] Error messages display properly
- [ ] Submit buttons are easy to tap

#### Links & Buttons
- [ ] All CTAs are tappable
- [ ] Buttons provide visual feedback on tap (active state)
- [ ] Links open correctly
- [ ] No hover effects on touch devices (should show active state)
- [ ] Product cards are tappable

#### Scrolling
- [ ] Page scrolls smoothly (60fps)
- [ ] No rubber-banding issues
- [ ] Horizontal carousels scroll smoothly (when implemented)
- [ ] Scroll position is maintained when navigating back

---

### Performance Testing

#### Page Load
- [ ] Initial page load < 3 seconds on Fast 3G
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.5s

#### Images
- [ ] Images load progressively (lazy loading)
- [ ] Appropriate image sizes served to mobile
- [ ] No layout shift during image load (CLS < 0.1)
- [ ] Images are compressed and optimized

#### Interactions
- [ ] Button taps feel responsive (<100ms)
- [ ] Page transitions are smooth
- [ ] Scrolling is smooth (60fps)
- [ ] Animations don't cause jank

#### Lighthouse Audit
- [ ] Performance score > 80
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90

**Run Lighthouse:**
1. Open Chrome DevTools
2. Click "Lighthouse" tab
3. Select "Mobile" device
4. Select categories (Performance, Accessibility, etc.)
5. Click "Generate report"

---

### Accessibility Testing

#### Touch Accessibility
- [ ] All interactive elements meet 44px × 44px minimum
- [ ] Adequate spacing between tap targets (8px+)
- [ ] Touch targets don't overlap

#### Visual Accessibility
- [ ] Text meets minimum size requirements (12px+)
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Focus indicators are visible
- [ ] Error states are clearly indicated

#### Screen Reader Testing
**iOS VoiceOver:**
1. Settings > Accessibility > VoiceOver > On
2. Or triple-click side button (if enabled)
3. Swipe to navigate elements
4. Double-tap to activate

**Android TalkBack:**
1. Settings > Accessibility > TalkBack > On
2. Swipe to navigate
3. Double-tap to activate

**Checklist:**
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Buttons have descriptive text or aria-labels
- [ ] Headings are in logical order (h1, h2, h3)
- [ ] Links have descriptive text (not "click here")

#### Keyboard Navigation (External Keyboard)
- [ ] Can tab through all interactive elements
- [ ] Focus order is logical
- [ ] Can activate buttons with Enter/Space
- [ ] Can escape modals with Escape key

#### Zoom Testing
- [ ] Site works at 200% zoom
- [ ] No horizontal scrolling at 200% zoom
- [ ] Text remains readable when zoomed
- [ ] No overlapping elements when zoomed

---

### Browser Compatibility

#### iOS Safari (Latest 2 Versions)
- [ ] Page renders correctly
- [ ] Touch interactions work
- [ ] Forms work properly
- [ ] Viewport meta tag is respected
- [ ] Safe area insets work (notch/home indicator)

#### Chrome Mobile (Latest)
- [ ] Page renders correctly
- [ ] Touch interactions work
- [ ] Performance is good

#### Firefox Mobile (Latest)
- [ ] Page renders correctly
- [ ] Touch interactions work

#### Samsung Internet (Latest)
- [ ] Page renders correctly (important for Android)
- [ ] Touch interactions work

---

## Mobile Testing Workflow

### Daily Development Testing

**Quick Check (5 minutes):**
1. Start dev server: `pnpm run dev`
2. Open Chrome DevTools device mode
3. Select iPhone SE (375px)
4. Navigate through homepage
5. Check for layout issues

**Comprehensive Check (15 minutes):**
1. Test on 3 device sizes: 375px, 390px, 414px
2. Navigate all pages (Home, Product, Cart)
3. Test all interactive elements
4. Check touch target sizes
5. Verify no horizontal scroll

### Pre-Commit Testing

Before committing mobile changes:
1. Test on iPhone SE (375px) - smallest device
2. Test on iPhone 14 Pro Max (414px) - largest device
3. Test at breakpoint edge (767px) - mobile/desktop switch
4. Run Lighthouse audit (Performance > 80)
5. Check for console errors
6. Take screenshots for documentation

### Pre-Deploy Testing

Before deploying to production:
1. Test on all 5 target devices (DevTools)
2. Test on real device (iPhone or Android)
3. Run full accessibility audit
4. Run Lighthouse on all pages
5. Test on slow 3G network
6. Verify analytics tracking works
7. Check error handling

---

## Testing Tools & Commands

### Development Server
```bash
# Start dev server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

### Browser URLs
```
Development: http://localhost:5173
Preview: http://localhost:4173 (after build)
```

### Lighthouse CLI (Optional)
```bash
# Install
npm install -g lighthouse

# Run audit
lighthouse http://localhost:5173 --view --preset=desktop
lighthouse http://localhost:5173 --view --preset=mobile --throttling.cpuSlowdownMultiplier=4
```

### Screenshot Tool (Optional)
```bash
# Install
npm install -g capture-website-cli

# Capture mobile screenshot
capture-website http://localhost:5173 --width=375 --height=667 --output=mobile-screenshot.png
```

---

## Common Mobile Issues & Fixes

### Issue: Horizontal Scroll
**Symptoms:** Can scroll left/right on mobile
**Causes:**
- Element width exceeds viewport
- Fixed width elements (width: 1200px)
- Negative margins extending beyond viewport
- Images without max-width

**Fixes:**
```css
/* Add to problematic element */
.element {
  max-width: 100%;
  overflow-x: hidden;
}

/* Check for these patterns */
width: 1200px;  /* ❌ Bad on mobile */
width: 100%;    /* ✅ Good */
max-w-[1200px]  /* ❌ Bad if no width: 100% */
w-full max-w-[1200px]  /* ✅ Good */
```

### Issue: Text Too Small
**Symptoms:** Text is hard to read on mobile
**Causes:**
- Font size < 12px
- No responsive typography
- Desktop sizes used on mobile

**Fixes:**
```jsx
// Use responsive text sizes
<p className="text-sm md:text-base">  {/* 14px mobile, 16px desktop */}

// Use mobile typography scale
<h1 className="text-h1-mobile md:text-h1">

// Minimum body text
font-size: 14px;  /* Minimum for body text */
```

### Issue: Buttons Too Small to Tap
**Symptoms:** Hard to tap buttons, miss-taps
**Causes:**
- Touch target < 44px × 44px
- Buttons too close together

**Fixes:**
```jsx
// Add touch target classes
<button className="min-h-touch-optimal min-w-touch-optimal">

// Add spacing between buttons
<div className="flex gap-4">  {/* 16px gap */}

// Full-width mobile buttons
<button className="w-full md:w-auto h-12">
```

### Issue: Layout Breaks at Certain Widths
**Symptoms:** Elements overlap or break at specific widths
**Causes:**
- Not testing all device sizes
- Fixed widths instead of percentages
- Missing responsive classes

**Fixes:**
```jsx
// Test these critical widths
// 360px, 375px, 390px, 414px, 767px, 768px

// Use responsive utilities
<div className="
  w-full px-4           // Mobile: full width
  md:max-w-[1200px]     // Desktop: constrained
  md:mx-auto            // Desktop: centered
">
```

### Issue: Forms Not Working on Mobile
**Symptoms:** Keyboard doesn't open, wrong keyboard type
**Causes:**
- Missing input types
- Input too small
- Viewport zoom disabled

**Fixes:**
```jsx
// Use proper input types
<input type="email" />    // Email keyboard
<input type="tel" />      // Phone keyboard
<input type="number" />   // Number keyboard

// Adequate height
<input className="h-12" />  // 48px height

// Allow zoom (check meta tag)
<meta name="viewport" content="width=device-width, initial-scale=1.0">
// Don't use: user-scalable=no
```

### Issue: Images Not Loading or Too Large
**Symptoms:** Slow loading, large file sizes
**Causes:**
- Desktop-sized images served to mobile
- No lazy loading
- No image optimization

**Fixes:**
```jsx
// Responsive images
<img
  src="image-mobile.jpg"
  srcset="
    image-mobile.jpg 400w,
    image-tablet.jpg 800w,
    image-desktop.jpg 1200w
  "
  sizes="(max-width: 767px) 100vw, 50vw"
  loading="lazy"
  alt="Product"
/>

// Optimize images
// Use WebP format
// Compress images (TinyPNG, ImageOptim)
// Lazy load below fold
```

---

## Testing Schedule

### During Development (Per Component)
- Test on 375px (iPhone SE) after each significant change
- Test on 390px (standard iPhone) before completing component
- Check touch targets meet 44px minimum

### Daily (End of Day)
- Quick test all pages on 3 device sizes
- Check for console errors
- Verify latest changes work on mobile

### Weekly
- Full device matrix test (all 5 devices)
- Lighthouse audit on all pages
- Accessibility audit
- Performance check on 3G

### Before Deploy
- Full testing checklist (all items above)
- Real device testing (at least 1 iPhone, 1 Android)
- Screenshot all pages for documentation
- Final Lighthouse audit

---

## Real Device Testing

### iOS Device Testing (iPhone)

**Local Network Testing:**
1. Ensure iPhone and computer on same Wi-Fi
2. Find computer's IP address:
   ```bash
   # Mac
   ipconfig getifaddr en0

   # Should show something like: 192.168.1.100
   ```
3. Start dev server: `pnpm run dev --host`
4. On iPhone, open Safari
5. Navigate to: `http://192.168.1.100:5173`

**USB Testing (Xcode):**
1. Connect iPhone via USB
2. Enable Web Inspector on iPhone:
   - Settings > Safari > Advanced > Web Inspector: ON
3. Open Safari on Mac
4. Develop > [Your iPhone] > localhost

### Android Device Testing

**Local Network Testing:**
1. Ensure Android and computer on same Wi-Fi
2. Start dev server: `pnpm run dev --host`
3. Find IP address (same as above)
4. On Android, open Chrome
5. Navigate to: `http://192.168.1.100:5173`

**USB Debugging:**
1. Enable Developer Options on Android
2. Enable USB Debugging
3. Connect via USB
4. Open Chrome on computer
5. Navigate to: `chrome://inspect#devices`
6. Click "Inspect" on your device

---

## Testing Documentation

### Screenshot Locations
Store mobile screenshots in:
```
dev-docs/screenshots/mobile/
├── homepage-375px.png
├── homepage-390px.png
├── homepage-414px.png
├── product-page-375px.png
├── cart-page-375px.png
└── ...
```

### Test Results Template
```markdown
## Mobile Test Results - [Date]

### Devices Tested
- [x] iPhone SE (375px)
- [x] iPhone 12/13/14 (390px)
- [ ] iPhone 14 Pro Max (414px)
- [x] Pixel 5 (393px)
- [ ] Galaxy S20 (360px)

### Pages Tested
- [x] Homepage
- [x] Product Page
- [x] Cart Page

### Issues Found
1. [Issue description]
   - Severity: High/Medium/Low
   - Device: iPhone SE
   - Fix: [Description]

### Lighthouse Scores
- Performance: 85/100
- Accessibility: 95/100
- Best Practices: 90/100
- SEO: 100/100

### Screenshots
- Attached: 6 screenshots
- Location: dev-docs/screenshots/mobile/
```

---

## Quick Reference

### Essential DevTools Shortcuts
- **Chrome Device Toggle:** Cmd+Shift+M (Mac), Ctrl+Shift+M (Win)
- **Reload Page:** Cmd+R (Mac), Ctrl+R (Win)
- **Hard Reload:** Cmd+Shift+R (Mac), Ctrl+Shift+R (Win)
- **Take Screenshot:** Cmd+Shift+P > "screenshot" (Mac/Win)

### Critical Test Widths
- 375px (iPhone SE) ⭐
- 390px (iPhone 12/13/14) ⭐
- 414px (iPhone Pro Max)
- 767px (Mobile breakpoint edge)
- 768px (Desktop breakpoint)

### Minimum Standards
- Touch targets: ≥ 44px × 44px
- Font size: ≥ 12px (prefer 14px+)
- Page load: < 3s on Fast 3G
- Lighthouse Performance: > 80

### Testing Commands
```bash
# Start dev server
pnpm run dev

# Start with network access
pnpm run dev --host

# Build and preview
pnpm run build && pnpm run preview
```

---

## Resources

### Online Testing Tools
- **BrowserStack:** browserstack.com (real devices, paid)
- **LambdaTest:** lambdatest.com (real devices, paid)
- **ResponsivelyApp:** responsively.app (free, multi-device preview)

### Image Optimization
- **TinyPNG:** tinypng.com (compress images)
- **Squoosh:** squoosh.app (Google's image optimizer)
- **ImageOptim:** imageoptim.com (Mac app)

### Performance Testing
- **WebPageTest:** webpagetest.org (detailed performance analysis)
- **Google PageSpeed Insights:** pagespeed.web.dev
- **Lighthouse CI:** github.com/GoogleChrome/lighthouse-ci

### Accessibility
- **WAVE:** wave.webaim.org (accessibility checker)
- **axe DevTools:** chrome extension
- **Color Contrast Checker:** webaim.org/resources/contrastchecker/

---

## Next Steps

After completing mobile testing setup:

1. **Test Current Site**
   - Open site in mobile view
   - Document current issues
   - Create issue list for Epic M2+

2. **Start Epic M2**
   - Mobile header with hamburger menu
   - Mobile footer optimization
   - Mobile layout wrapper

3. **Establish Testing Routine**
   - Test after each component
   - Daily quick checks
   - Weekly full audits

---

**Epic M1 Status:** ✅ COMPLETED (TASK-M001 + TASK-M002)
**Next Epic:** M2 - Mobile Navigation & Layout
**Testing Setup:** ✅ READY
**Last Updated:** November 10, 2025
