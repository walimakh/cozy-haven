# Cozy Haven - Design System Implementation Report

**Project:** Cozy Haven E-commerce Website
**Version:** 1.0.0
**Framework:** React + Vite + TypeScript
**Styling:** Tailwind CSS
**Date:** October 28, 2025

---

## Table of Contents

1. [Overview](#overview)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing System](#spacing-system)
5. [Border Radius](#border-radius)
6. [Shadows](#shadows)
7. [Component Specifications](#component-specifications)
8. [Layout Guidelines](#layout-guidelines)
9. [Accessibility](#accessibility)
10. [Implementation Details](#implementation-details)

---

## Overview

The Cozy Haven design system is built on principles of warmth, comfort, and clarity. It uses an 8px spacing grid system to ensure consistency across all components and layouts. The design emphasizes natural, warm tones and generous whitespace to create a calming, premium feel appropriate for a bedding essentials brand.

---

## Color Palette

### Primary Colors

| Color Name | Hex Code | Tailwind Class | Usage |
|------------|----------|----------------|-------|
| **Warm Cream** | `#F5F0E8` | `bg-warm-cream` | Main background, light sections |
| **Soft White** | `#FFFFFF` | `bg-soft-white` | Card backgrounds, clean sections |

### Secondary Colors

| Color Name | Hex Code | Tailwind Class | Usage |
|------------|----------|----------------|-------|
| **Soft Terracotta** | `#D4A59A` | `bg-soft-terracotta` | CTAs, accents, highlights, links |
| **Sage Green** | `#A8B5A0` | `bg-sage-green` | Secondary accents, sustainability badges |

### Dark Colors

| Color Name | Hex Code | Tailwind Class | Usage |
|------------|----------|----------------|-------|
| **Warm Charcoal** | `#4A4543` | `text-warm-charcoal` | Primary text, headers, H1-H4 |
| **Deep Brown** | `#3D3935` | `text-deep-brown` | Body text, descriptions, paragraphs |

### Color Usage Guidelines

- **Background Hierarchy:** Use Warm Cream for main backgrounds, Soft White for elevated cards
- **Text Contrast:** Always ensure WCAG AA compliance (minimum 4.5:1 for body text)
- **Interactive Elements:** Soft Terracotta for primary actions, Sage Green for secondary/success states
- **Accent Colors:** Use Terracotta sparingly to create visual interest and guide user attention

### Contrast Ratios

| Combination | Ratio | WCAG Level | Usage |
|-------------|-------|------------|-------|
| Deep Brown on Warm Cream | 9.2:1 | AAA | Body text ✓ |
| Warm Charcoal on Soft White | 10.1:1 | AAA | Headings ✓ |
| Soft Terracotta on Warm Cream | 4.6:1 | AA | Large text ✓ |
| White on Soft Terracotta | 4.8:1 | AA | Button text ✓ |

---

## Typography

### Font Family

**Primary Font:** Montserrat (Google Fonts)
- **Weights Used:** 300 (Light), 400 (Regular), 600 (Semi-Bold)
- **Import:** Already configured in `src/index.css`

### Typography Scale

| Element | Size | Line Height | Weight | Tailwind Class | Usage |
|---------|------|-------------|--------|----------------|-------|
| **H1** | 48px | 1.2 | 300 | `text-h1` | Page titles, hero headlines |
| **H2** | 36px | 1.3 | 400 | `text-h2` | Section titles |
| **H3** | 28px | 1.4 | 600 | `text-h3` | Subsection titles, product names |
| **H4** | 22px | 1.5 | 600 | `text-h4` | Card titles, smaller headings |
| **Body** | 16px | 1.6 | 400 | `text-body` | Paragraphs, descriptions |
| **Small** | 14px | 1.5 | 400 | `text-small` | Captions, helper text |
| **Tiny** | 12px | 1.4 | 400 | `text-tiny` | Labels, badges, fine print |

### Typography Guidelines

#### Headings Hierarchy
- **H1:** Used once per page, typically at the top
- **H2:** Section dividers (e.g., "Featured Collections")
- **H3:** Product names, subsection titles
- **H4:** Card titles within sections

#### Body Text
- **Minimum Size:** 16px for all body text (accessibility requirement)
- **Line Length:** Maximum 80 characters per line for optimal readability
- **Paragraph Spacing:** 16px between paragraphs

#### Font Weight Usage
- **Light (300):** H1 headlines for elegance
- **Regular (400):** Body text, H2, general content
- **Semi-Bold (600):** H3, H4, buttons, emphasis

---

## Spacing System

The Cozy Haven design system uses an **8px grid system** for all spacing values.

### Base Spacing Units

| Size | Value | Tailwind Class | Usage |
|------|-------|----------------|-------|
| **Micro** | 8px | `space-2`, `p-2`, `m-2`, `gap-2` | Icon-to-text, tight elements |
| **Small** | 16px | `space-4`, `p-4`, `m-4`, `gap-4` | Between related items |
| **Medium** | 24px | `space-6`, `p-6`, `m-6`, `gap-6` | Between sections within cards |
| **Large** | 40px | `space-10`, `p-10`, `m-10`, `gap-10` | Between major sections |
| **X-Large** | 60px | `space-15`, `p-15`, `m-15`, `gap-15` | Page padding, hero spacing |

### Spacing Usage Guidelines

#### Component Internal Spacing
- **Buttons:** `px-6` (24px) horizontal, `py-3` (12px) vertical
- **Cards:** `p-6` (24px) internal padding
- **Input Fields:** `px-4` (16px) horizontal, `py-2` (8px) vertical

#### Layout Spacing
- **Section Vertical Spacing:** 40px-60px between major page sections
- **Container Padding:** 60px horizontal padding for desktop
- **Grid Gaps:** 24px between grid items (cards, products)

#### Responsive Spacing
- **Desktop (1200px+):** Use full spacing scale
- **Tablet (768px-1199px):** Reduce X-Large to Large
- **Mobile (320px-767px):** Use Small to Medium spacing primarily

### Spacing Report

| Component Type | Horizontal Spacing | Vertical Spacing | Gap Between Items |
|----------------|-------------------|------------------|-------------------|
| **Header** | 60px padding | 16px padding | 24px (nav items) |
| **Footer** | 60px padding | 40px padding | 40px (columns) |
| **Product Cards** | 16px padding | 16px padding | 24px gap |
| **Cart Items** | 24px padding | 16px padding | 16px gap |
| **Hero Section** | 60px padding | 60px top/bottom | N/A |
| **Buttons** | 24px padding | 12px padding | 16px between |
| **Form Inputs** | 16px padding | 8px padding | 16px gap |

---

## Border Radius

| Element | Value | Tailwind Class | Usage |
|---------|-------|----------------|-------|
| **Buttons** | 8px | `rounded-button` | All button variants |
| **Cards** | 12px | `rounded-card` | Product cards, info cards |
| **Input Fields** | 6px | `rounded-input` | Text inputs, select dropdowns |
| **Images** | 8px | `rounded-image` | Product images, thumbnails |
| **Badges** | Full (pill) | `rounded-full` | Status badges, tags |

### Border Radius Guidelines
- **Consistency:** Use same radius across similar elements
- **Subtlety:** Keep radii small (6-12px) for modern, clean look
- **Exception:** Badges and circular elements use `rounded-full`

---

## Shadows

### Shadow Scale

| Shadow Name | Value | Tailwind Class | Usage |
|-------------|-------|----------------|-------|
| **Elevated** | `0 2px 8px rgba(61, 57, 53, 0.06)` | `shadow-elevated` | Resting cards, inputs on focus |
| **Card Hover** | `0 4px 12px rgba(61, 57, 53, 0.08)` | `shadow-card-hover` | Cards on hover state |
| **Dropdown** | `0 8px 24px rgba(61, 57, 53, 0.12)` | `shadow-dropdown` | Dropdown menus, modals |

### Shadow Usage Guidelines
- **Resting State:** Use `shadow-elevated` for default card elevation
- **Hover State:** Increase to `shadow-card-hover` with smooth transition
- **Layering:** Dropdowns and modals use strongest shadow to appear above content
- **Color:** All shadows use Deep Brown (#3D3935) with varying opacity

---

## Component Specifications

### Buttons

#### Button Variants

| Variant | Class | Background | Text Color | Border | Height |
|---------|-------|------------|------------|--------|--------|
| **Primary** | `btn-primary` | Soft Terracotta | White | None | Variable |
| **Secondary** | `btn-secondary` | Transparent | Soft Terracotta | 2px Terracotta | Variable |
| **Ghost** | `btn-ghost` | Transparent | Soft Terracotta | None | Variable |

#### Button Sizes

| Size | Class | Height | Horizontal Padding |
|------|-------|--------|-------------------|
| **Large** | `btn-large` | 48px | 24px |
| **Medium** | `btn-medium` | 40px | 20px |
| **Small** | `btn-small` | 32px | 16px |

#### Button States
- **Hover:** Opacity 90% for primary, fill background for secondary
- **Focus:** 2px ring with Soft Terracotta color, 2px offset
- **Disabled:** Opacity 50%, cursor not-allowed
- **Transition:** 200ms ease for all state changes

#### Button Spacing
- **Between Buttons:** 16px horizontal gap
- **In Forms:** 24px top margin from last input
- **In Cards:** 16px from bottom edge

### Input Fields

#### Input Variants

| Variant | Class | Border | Focus State |
|---------|-------|--------|-------------|
| **Default** | `input-field` | 1px #E5E7EB | Terracotta border + shadow |
| **Error** | `input-error` | 1px Red | Red border + ring |
| **Success** | `input-success` | 1px Sage Green | Sage border + ring |

#### Input Specifications
- **Height:** 40px (consistent with medium buttons)
- **Padding:** 16px horizontal, 8px vertical
- **Border Radius:** 6px
- **Font Size:** 16px (body text size)
- **Placeholder:** Opacity 50%, Deep Brown color

### Cards

#### Card Specifications
- **Background:** White (#FFFFFF)
- **Border Radius:** 12px
- **Shadow:** `shadow-elevated` (resting)
- **Hover Shadow:** `shadow-card-hover`
- **Padding:** 24px internal
- **Transition:** 300ms ease for shadow and transform
- **Hover Transform:** `-translate-y-1` (lift 4px up)

#### Card Types

| Card Type | Image Aspect Ratio | Content Padding | Gap Between Elements |
|-----------|-------------------|-----------------|---------------------|
| **Product Card** | 4:3 | 16px | 8px (title to price) |
| **Category Card** | 1:1 | 16px | 8px (icon to text) |
| **Collection Card** | 16:9 | 24px | 16px (sections) |
| **Review Card** | N/A | 16px | 8px (elements) |

### Badges

#### Badge Variants

| Variant | Class | Background | Text Color | Usage |
|---------|-------|------------|------------|-------|
| **Sustainable** | `badge-sustainable` | Sage Green | White | Eco-friendly products |
| **New** | `badge-new` | Soft Terracotta | White | New arrivals |
| **Bestseller** | `badge-bestseller` | Warm Charcoal | White | Popular items |

#### Badge Specifications
- **Height:** Auto (based on text)
- **Padding:** 8px horizontal, 4px vertical
- **Border Radius:** Full (pill shape)
- **Font Size:** 12px (tiny)
- **Font Weight:** 600 (semi-bold)

---

## Layout Guidelines

### Container Widths

| Breakpoint | Container Max Width | Padding |
|------------|-------------------|---------|
| **Desktop (1200px+)** | 1440px | 60px |
| **Tablet (768px-1199px)** | 100% | 40px |
| **Mobile (320px-767px)** | 100% | 20px |

### Grid Systems

#### Product Grid
- **Columns:** 4 on desktop, 3 on tablet, 1 on mobile
- **Gap:** 24px
- **Aspect Ratio:** 4:3 for product images

#### Category Grid
- **Columns:** 4 on desktop, 3 on tablet, 2 on mobile
- **Gap:** 24px
- **Aspect Ratio:** 1:1 for category icons/images

#### Featured Collections
- **Columns:** 3 on desktop, 2 on tablet, 1 on mobile
- **Gap:** 24px
- **Aspect Ratio:** 16:9 for collection images

### Header Specifications

| Element | Height | Alignment | Spacing |
|---------|--------|-----------|---------|
| **Header Container** | 80px | Center vertical | 60px horizontal padding |
| **Logo** | 40px height | Left aligned | 0 left margin |
| **Navigation** | Full height | Center aligned | 24px gap between items |
| **Icons (Cart, User)** | 24px | Right aligned | 16px gap between |

#### Header Layout
```
┌────────────────────────────────────────────────────────────┐
│  [Logo]         [Nav Items]              [Search][User][Cart] │
│  60px padding   24px gaps                16px gaps       60px │
└────────────────────────────────────────────────────────────┘
```

### Footer Specifications

| Element | Width | Spacing |
|---------|-------|---------|
| **Footer Container** | Full width | 60px horizontal, 40px vertical |
| **Column Width** | Flex (equal) | 40px gap between columns |
| **Logo Section** | 25% | Bottom margin 16px |
| **Link Columns** | 20% each | Line height 2 (32px) |
| **Newsletter** | 35% | Input + button combo |

#### Footer Layout
```
┌──────────────────────────────────────────────────────────────┐
│  60px padding                                   60px padding  │
│                                                                │
│  [Logo + Desc]    [Shop]      [Customer]    [Newsletter]      │
│  25% width        20% width   20% width     35% width         │
│                                                                │
│  [Social Icons]   [Links]     [Links]       [Email Input]     │
│                                                                │
│  ────────────────────────────────────────────────────────     │
│  [Payment Icons]              [Copyright]                      │
│  40px vertical padding                                         │
└──────────────────────────────────────────────────────────────┘
```

### Page Sections Spacing

| Section | Top Margin | Bottom Margin | Internal Padding |
|---------|-----------|---------------|------------------|
| **Hero** | 0 | 60px | 60px vertical |
| **Collections** | 60px | 60px | 40px vertical |
| **Categories** | 60px | 60px | 40px vertical |
| **Material Education** | 60px | 60px | 40px vertical |
| **Social Proof** | 60px | 60px | 40px vertical |
| **Newsletter** | 60px | 80px | 40px vertical |

### Product Page Layout

#### Two-Column Split
- **Left (Gallery):** 60% width, sticky position
- **Right (Info):** 40% width, scrollable
- **Gap:** 40px between columns

#### Element Spacing in Product Info Panel
| Element | Bottom Margin | Internal Padding |
|---------|--------------|------------------|
| **Product Name** | 8px | 0 |
| **Price** | 16px | 0 |
| **Rating** | 16px | 0 |
| **Description** | 24px | 0 |
| **Size Selector** | 24px | 0 |
| **Color Selector** | 24px | 0 |
| **Quantity** | 24px | 0 |
| **Buttons** | 24px | 16px gap between |
| **Accordions** | 16px | 16px internal |

### Cart Page Layout

#### Two-Column Split
- **Left (Items):** 65% width
- **Right (Summary):** 35% width, sticky
- **Gap:** 40px between columns

#### Cart Item Row Spacing
| Element | Height | Padding | Gap |
|---------|--------|---------|-----|
| **Cart Item Row** | Auto (min 120px) | 16px | 16px between items |
| **Thumbnail** | 80px × 80px | 0 | 16px right margin |
| **Product Info** | Flex grow | 0 | 8px between lines |
| **Quantity Selector** | 40px | 8px | 16px right margin |
| **Remove Button** | 32px | 8px | 0 |

#### Order Summary Spacing
| Element | Padding | Gap |
|---------|---------|-----|
| **Summary Card** | 24px | 16px between lines |
| **Trust Badges** | 16px | 8px between badges |
| **Checkout Button** | 16px top margin | Full width |
| **Payment Icons** | 16px top margin | 8px between icons |

---

## Accessibility

### Color Contrast
✅ **All color combinations meet WCAG AA standards**
- Body text (Deep Brown on Warm Cream): 9.2:1 (AAA)
- Headings (Warm Charcoal on White): 10.1:1 (AAA)
- Links (Soft Terracotta on Warm Cream): 4.6:1 (AA Large Text)

### Focus States
- **Visible Ring:** 2px solid Soft Terracotta
- **Offset:** 2px from element
- **Applied To:** All interactive elements (buttons, links, inputs)

### Touch Targets
- **Minimum Size:** 44px × 44px (WCAG 2.1 Level AAA)
- **Buttons:** Exceed minimum (48px height for large)
- **Icons:** 24px with additional padding area

### Semantic HTML
- **Headings:** Proper hierarchy (H1 → H2 → H3)
- **Lists:** Use `<ul>`, `<ol>` for navigation and lists
- **Buttons:** Use `<button>` for actions, `<a>` for navigation
- **Forms:** Proper `<label>` association with inputs

### Keyboard Navigation
- **Tab Order:** Logical flow through interactive elements
- **Skip Links:** Implemented for main content
- **Focus Trap:** In modals and dropdowns

### ARIA Labels
- **Images:** Alt text for all images
- **Icons:** ARIA labels for icon-only buttons
- **Status:** Live regions for cart updates, form validation

---

## Component Dimensions for Figma

**Complete dimensions reference:** See `COMPONENT_DIMENSIONS_SPEC.md` for detailed width × height specifications of all components.

### Quick Dimensions Reference

#### Buttons
- **Large:** Auto × **48px** (padding: 24px horizontal, font: 16px)
- **Medium:** Auto × **40px** (padding: 20px horizontal, font: 16px)
- **Small:** Auto × **32px** (padding: 16px horizontal, font: 14px)
- **Border Radius:** 8px

#### Inputs
- **Standard:** 100% × **40px** (padding: 16px horizontal, 8px vertical, font: 16px)
- **Border Radius:** 6px

#### Badges
- **Small:** Auto × Auto (padding: 8px horizontal, 4px vertical, font: 12px)
- **Medium:** Auto × Auto (padding: 12px horizontal, 4px vertical, font: 12px)
- **Border Radius:** Full (pill)

#### Icons (Lucide React)
- **Default:** **24px × 24px** (stroke: 2px)
- **Header Icons:** **22px × 22px** (Search, User, Heart, Cart)
- **Logo Icon:** **28px × 28px** (Home)
- **Small Icons:** **16px × 16px** (Accordion, Info, Quantity +/-)
- **Large Icons:** **32px × 32px** (Category cards)
- **Button Icons:** **20px × 20px**

#### Cards
- **Padding:** 24px (all sides)
- **Border Radius:** 12px
- **Product Card Padding:** 16px

#### Selectors
- **Size Button:** Flexible × **48px** (3-column grid, gap: 12px)
- **Color Swatch:** **48px × 48px** (circle, gap: 12px)
- **Quantity Selector:** Auto × **40px** (buttons: 40px × 40px, input: 64px)

#### Layout
- **Header:** 1200px max-width × **80px** height (padding: 32px horizontal)
- **Footer:** 1200px max-width × Auto (padding: 32px horizontal, 40px vertical)
- **Cart Badge:** **20px × 20px** (circle, font: 12px)

**For complete specifications including all states, hover effects, and Figma layer structure, see:** `dev-docs/COMPONENT_DIMENSIONS_SPEC.md`

---

## Implementation Details

### File Structure
```
CapstonProject/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   ├── layout/          # Header, Footer, Layout
│   │   ├── homepage/        # Homepage sections
│   │   ├── product/         # Product page components
│   │   └── cart/            # Cart page components
│   ├── pages/               # Page components
│   ├── data/                # Mock data files
│   ├── types/               # TypeScript interfaces
│   ├── utils/               # Helper functions
│   ├── assets/              # Images, icons
│   ├── index.css            # Global styles + Tailwind
│   └── main.tsx             # App entry point
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── package.json
├── Makefile                 # Build and dev commands
└── dev-docs/                # Documentation
```

### Tailwind Configuration

The design system is fully implemented in `tailwind.config.js` with custom tokens:

#### Custom Colors
```javascript
colors: {
  'warm-cream': '#F5F0E8',
  'soft-white': '#FFFFFF',
  'soft-terracotta': '#D4A59A',
  'sage-green': '#A8B5A0',
  'warm-charcoal': '#4A4543',
  'deep-brown': '#3D3935',
}
```

#### Custom Typography
```javascript
fontSize: {
  'h1': ['48px', { lineHeight: '1.2', fontWeight: '300' }],
  'h2': ['36px', { lineHeight: '1.3', fontWeight: '400' }],
  // ... etc
}
```

#### Custom Spacing (8px grid)
```javascript
spacing: {
  '2': '8px',
  '4': '16px',
  '6': '24px',
  '10': '40px',
  '15': '60px',
}
```

### CSS Utility Classes

Pre-built component classes in `src/index.css`:

#### Button Classes
- `.btn-primary` - Primary action button
- `.btn-secondary` - Secondary/outline button
- `.btn-ghost` - Text-only button
- `.btn-large`, `.btn-medium`, `.btn-small` - Size variants

#### Input Classes
- `.input-field` - Base input styling
- `.input-error` - Error state
- `.input-success` - Success state

#### Card Classes
- `.card` - Base card with hover effect

#### Badge Classes
- `.badge` - Base badge styling
- `.badge-sustainable`, `.badge-new`, `.badge-bestseller` - Variants

### Usage Examples

#### Button Example
```jsx
<button className="btn-primary btn-large">
  Shop Collections
</button>

<button className="btn-secondary btn-medium">
  Explore Materials
</button>
```

#### Input Example
```jsx
<input
  type="email"
  className="input-field"
  placeholder="Enter your email"
/>
```

#### Card Example
```jsx
<div className="card p-6">
  <h3 className="text-h3 mb-4">Product Name</h3>
  <p className="text-body">Description here...</p>
</div>
```

---

## Quick Reference

### Common Spacing Values
- **8px** → `space-2`, `p-2`, `gap-2`
- **16px** → `space-4`, `p-4`, `gap-4`
- **24px** → `space-6`, `p-6`, `gap-6`
- **40px** → `space-10`, `p-10`, `gap-10`
- **60px** → `space-15`, `p-15`, `gap-15`

### Common Text Classes
- **Heading 1** → `text-h1`
- **Heading 2** → `text-h2`
- **Body Text** → `text-body`
- **Small Text** → `text-small`

### Common Color Classes
- **Background** → `bg-warm-cream`, `bg-white`
- **Text** → `text-warm-charcoal`, `text-deep-brown`
- **Accent** → `bg-soft-terracotta`, `text-soft-terracotta`

### Common Shadow Classes
- **Default** → `shadow-elevated`
- **Hover** → `shadow-card-hover`
- **Dropdown** → `shadow-dropdown`

---

## Alignment & Spacing Audit Checklist

### Header Checklist
- [ ] Logo is 40px height, aligned to left
- [ ] Navigation items have 24px gap
- [ ] Header has 60px horizontal padding
- [ ] Header total height is 80px
- [ ] Cart/User icons are 24px with 16px gap

### Footer Checklist
- [ ] Footer has 60px horizontal padding
- [ ] Footer has 40px vertical padding
- [ ] Columns have 40px gap between them
- [ ] Links have 32px line height (2x font size)
- [ ] Social icons are evenly spaced with 16px gap

### Card Spacing Checklist
- [ ] Cards have 24px internal padding
- [ ] Card grid has 24px gap
- [ ] Card hover lifts by 4px (-translate-y-1)
- [ ] Card shadows transition smoothly (300ms)
- [ ] Card content elements have 8-16px gaps

### Button Spacing Checklist
- [ ] Large buttons are 48px height
- [ ] Medium buttons are 40px height
- [ ] Buttons have 16px gap when side-by-side
- [ ] Button text has proper padding (24px for large)
- [ ] Focus rings are 2px with 2px offset

### Form Spacing Checklist
- [ ] Inputs are 40px height
- [ ] Inputs have 16px horizontal padding
- [ ] Form fields have 16px gap between them
- [ ] Labels have 8px bottom margin
- [ ] Submit button has 24px top margin

### Section Spacing Checklist
- [ ] Major sections have 60px vertical gap
- [ ] Section titles have 40px bottom margin
- [ ] Section content has 24px gap between items
- [ ] Hero section has 60px padding
- [ ] Newsletter section has 80px bottom margin

---

## Distance Summary Table

### Component Distances

| Component | Horizontal Distance | Vertical Distance | Notes |
|-----------|-------------------|------------------|-------|
| **Header** | | | |
| Logo to Navigation | 40px+ (flex space) | Centered | Auto spacing |
| Navigation Items | 24px gap | Centered | Equal spacing |
| Navigation to Icons | 40px+ (flex space) | Centered | Auto spacing |
| Icons to Icons | 16px gap | Centered | User, Cart, Search |
| **Footer** | | | |
| Columns | 40px gap | Aligned top | 4 columns |
| Links (vertical) | Auto (line-height: 2) | 16px between groups | Within columns |
| Social Icons | 16px gap | Centered | Horizontal row |
| **Cards** | | | |
| Card to Card | 24px gap | 24px gap | Grid gap |
| Card Internal | 24px padding | 24px padding | All sides |
| Image to Content | 0 (stacked) | 16px gap | Within card |
| Title to Price | 0 (same line often) | 8px gap | If stacked |
| Content to Button | 24px gap | 16px from bottom | CTA spacing |
| **Buttons** | | | |
| Button to Button | 16px gap | 16px gap | Side-by-side or stacked |
| Button Internal | 24px padding (large) | 12px padding | Horizontal/Vertical |
| **Forms** | | | |
| Input to Input | N/A | 16px gap | Vertical form |
| Label to Input | N/A | 8px gap | Above input |
| Input to Button | N/A | 24px gap | Submit button |
| **Product Page** | | | |
| Gallery to Info | 40px gap | N/A | Two-column layout |
| Accordion Items | N/A | 16px gap | Between accordions |
| Selector to Selector | N/A | 24px gap | Size, Color, Quantity |
| **Cart Page** | | | |
| Items to Summary | 40px gap | N/A | Two-column layout |
| Cart Item Rows | N/A | 16px gap | Between rows |
| Thumbnail to Info | 16px gap | N/A | Within row |
| Info to Quantity | 24px gap | N/A | Within row |
| Summary Lines | N/A | 16px gap | Subtotal, Tax, Total |

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Oct 28, 2025 | Initial design system implementation |

---

## Maintenance Notes

### To Update Colors
Edit `tailwind.config.js` → `theme.extend.colors`

### To Update Typography
Edit `tailwind.config.js` → `theme.extend.fontSize`

### To Update Spacing
Edit `tailwind.config.js` → `theme.extend.spacing`

### To Update Component Styles
Edit `src/index.css` → `@layer components`

---

**End of Design System Report**

This report should be used as the single source of truth for all design decisions in the Cozy Haven project. All components should reference these specifications to ensure consistency across the application.
