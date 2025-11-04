# Cozy Haven - Component Dimensions Specification

**For Figma Design Reference**
**Last Updated:** November 4, 2025

This document provides exact dimensions (width × height) for all UI components to ensure accurate recreation in Figma or other design tools.

---

## Layout Context

**IMPORTANT: All components are designed within this layout structure:**

| Property | Value | Notes |
|----------|-------|-------|
| **Viewport Width** | 1920px | Design viewport (desktop) |
| **Content Container** | 1200px | Max-width, centered |
| **Left/Right Margin** | 360px each | (1920 - 1200) / 2 |
| **Horizontal Padding** | 32px | Inside the 1200px container |
| **Usable Content Width** | 1136px | 1200px - (32px × 2) |

**Figma Frame Setup:**
```
Desktop Frame: 1920px wide
└── Content Container: 1200px wide (centered)
    └── Padding: 32px left/right
        └── Usable Area: 1136px
```

**All component widths below are calculated within the 1136px usable content area.**

---

## Table of Contents

1. [Buttons](#buttons)
2. [Input Fields](#input-fields)
3. [Badges](#badges)
4. [Icons](#icons)
5. [Cards](#cards)
6. [Selectors](#selectors)
7. [Layout Components](#layout-components)
8. [Interactive Elements](#interactive-elements)
9. [Spacing Reference](#spacing-reference)

---

## Buttons

### Button Dimensions by Size

**Within 1136px usable content width**

| Size Variant | Width (Typical) | Height | Horizontal Padding | Font Size | Border Radius |
|--------------|-----------------|--------|-------------------|-----------|---------------|
| **Large** | 160-200px | **48px** | 24px (left/right) | 16px | 8px |
| **Medium** | 140-180px | **40px** | 20px (left/right) | 16px | 8px |
| **Small** | 100-140px | **32px** | 16px (left/right) | 14px | 8px |
| **Full Width (Product)** | **450px** | Varies | Same as above | Same as above | 8px |
| **Full Width (Cart)** | **730px** | Varies | Same as above | Same as above | 8px |

**Common Button Widths (Actual Usage):**
- "Shop Collections": ~180px
- "Add to Cart": ~150px
- "Shop Now": ~130px
- "Continue Shopping": ~200px
- Product page "Add to Cart" (full-width): **450px** (product info panel width)
- Cart page "Proceed to Checkout" (full-width): **380px** (order summary width)

### Button Variants

| Variant | Background | Text Color | Border | Notes |
|---------|------------|------------|--------|-------|
| **Primary** | #D4A59A (Terracotta) | #FFFFFF (White) | None | Hover: 90% opacity |
| **Secondary** | Transparent | #D4A59A (Terracotta) | 2px solid #D4A59A | Hover: fills background |
| **Ghost** | Transparent | #D4A59A (Terracotta) | None | Hover: underline |

### Button States

| State | Effect | Ring Size | Ring Color |
|-------|--------|-----------|------------|
| **Default** | - | - | - |
| **Hover** | Opacity 90% (primary), Fill BG (secondary) | - | - |
| **Focus** | Ring visible | 2px | #D4A59A (Terracotta) |
| **Disabled** | Opacity 50% | - | - |

### Button with Icon

| Configuration | Icon Size | Icon Spacing | Total Gap |
|---------------|-----------|--------------|-----------|
| **Icon Left** | 20px × 20px | 8px (gap-2) | 8px from text |
| **Icon Right** | 20px × 20px | 8px (gap-2) | 8px from text |

### Figma Component Setup

```
Button Component Set:
├── Large
│   ├── Primary (Width: Auto, Height: 48px)
│   ├── Secondary (Width: Auto, Height: 48px)
│   └── Ghost (Width: Auto, Height: 48px)
├── Medium
│   ├── Primary (Width: Auto, Height: 40px)
│   ├── Secondary (Width: Auto, Height: 40px)
│   └── Ghost (Width: Auto, Height: 40px)
└── Small
    ├── Primary (Width: Auto, Height: 32px)
    ├── Secondary (Width: Auto, Height: 32px)
    └── Ghost (Width: Auto, Height: 32px)
```

---

## Input Fields

### Standard Input Dimensions

**Within 1136px usable content width**

| Property | Value | Notes |
|----------|-------|-------|
| **Width (Form)** | **450px** | Product page forms, standard forms |
| **Width (Newsletter)** | **350px** | Footer newsletter, email inputs |
| **Width (Search)** | **280px** | Header search (if implemented) |
| **Width (Full)** | **730px** | Full-width in cart summary, wide forms |
| **Height** | **40px** | Consistent with medium button |
| **Horizontal Padding** | 16px (left/right) | Internal spacing |
| **Vertical Padding** | 8px (top/bottom) | Internal spacing |
| **Border Width** | 1px | All states |
| **Border Radius** | 6px | Rounded corners |
| **Font Size** | 16px | Body text size |

### Input States

| State | Border Color | Ring | Shadow |
|-------|--------------|------|--------|
| **Default** | #E5E7EB (Gray) | None | None |
| **Focus** | #D4A59A (Terracotta) | 1px | Elevated shadow |
| **Error** | #EF4444 (Red) | 1px red | None |
| **Success** | #A8B5A0 (Sage Green) | 1px sage | None |
| **Disabled** | #E5E7EB (Gray) | None | None (50% opacity) |

### Input with Label

| Element | Font Size | Spacing | Color |
|---------|-----------|---------|-------|
| **Label** | 14px | 8px below label | #4A4543 (Charcoal) |
| **Input** | 16px | - | #3D3935 (Deep Brown) |
| **Helper Text** | 14px | 8px above helper | #6B7280 (Gray) or state color |

### Figma Dimensions

```
Input Field Component:
- Frame: Auto × 40px
- Border: 1px
- Padding: 16px (horizontal), 8px (vertical)
- Border Radius: 6px
```

---

## Badges

### Badge Dimensions

| Size | Width | Height | Horizontal Padding | Vertical Padding | Font Size |
|------|-------|--------|-------------------|------------------|-----------|
| **Small** | Auto | Auto | 8px | 4px | 12px |
| **Medium** | Auto | Auto | 12px | 4px | 12px |

### Badge Variants

| Variant | Background | Text Color | Border Radius |
|---------|------------|------------|---------------|
| **Sustainable** | #A8B5A0 (Sage) | #FFFFFF (White) | Full (pill) |
| **New** | #D4A59A (Terracotta) | #FFFFFF (White) | Full (pill) |
| **Bestseller** | #4A4543 (Charcoal) | #FFFFFF (White) | Full (pill) |
| **Default** | #E5E7EB (Gray) | #4A4543 (Charcoal) | Full (pill) |

### Typical Badge Dimensions

| Badge Type | Approximate Width | Height | Notes |
|------------|------------------|--------|-------|
| "Sustainable" | ~90px | ~20px | Medium size |
| "New" | ~50px | ~20px | Medium size |
| "Bestseller" | ~85px | ~20px | Medium size |

### Figma Component Setup

```
Badge Component Set:
├── Small
│   ├── Sustainable (Auto × Auto, min-height: 16px)
│   ├── New (Auto × Auto, min-height: 16px)
│   ├── Bestseller (Auto × Auto, min-height: 16px)
│   └── Default (Auto × Auto, min-height: 16px)
└── Medium
    ├── Sustainable (Auto × Auto, min-height: 20px)
    ├── New (Auto × Auto, min-height: 20px)
    ├── Bestseller (Auto × Auto, min-height: 20px)
    └── Default (Auto × Auto, min-height: 20px)
```

---

## Icons

### Lucide Icon Specifications

| Usage Context | Width | Height | Stroke Width | Notes |
|---------------|-------|--------|--------------|-------|
| **Default** | 24px | 24px | 2px | Standard size |
| **Header Navigation Icons** | 22px | 22px | 2px | Search, User, Heart, Cart |
| **Header Logo Icon** | 28px | 28px | 2px | Home icon |
| **Cart Badge Icon** | 22px | 22px | 2px | Shopping cart |
| **Size Selector Icon** | 16px | 16px | 2px | Info icon (i) |
| **Color Selector Check** | 24px | 24px | 2px | Check icon |
| **Quantity Selector Icons** | 16px | 16px | 2px | Minus/Plus icons |
| **Category Icons** | 32px | 32px | 2px | Large category cards |
| **Button Icons** | 20px | 20px | 2px | Icons in buttons |
| **Small Icons** | 16px | 16px | 2px | Accordion, info, etc. |

### Icon Grid System

All icons use the **Lucide React** library with consistent sizing:

```
Icon Sizing Scale:
- Extra Small: 16px × 16px (stroke: 2px)
- Small: 20px × 20px (stroke: 2px)
- Medium: 24px × 24px (stroke: 2px) ← Default
- Large: 28px × 28px (stroke: 2px)
- Extra Large: 32px × 32px (stroke: 2px)
```

### Common Icons Used

| Icon Name | Lucide Component | Default Size | Usage |
|-----------|------------------|--------------|-------|
| Home | `Home` | 28px | Logo |
| Search | `Search` | 22px | Header search |
| User | `User` | 22px | Account |
| Heart | `Heart` | 22px | Wishlist |
| Shopping Cart | `ShoppingCart` | 22px | Cart |
| Info | `Info` | 16px | Size guide |
| Check | `Check` | 24px | Selected state |
| Minus | `Minus` | 16px | Quantity decrease |
| Plus | `Plus` | 16px | Quantity increase |
| ChevronDown | `ChevronDown` | 20px | Accordions |
| Star | `Star` | 16px-20px | Ratings |
| ShieldCheck | `ShieldCheck` | 20px | Verified badge |

### Figma Icon Setup

```
Create Icon Components:
1. Import Lucide icon SVGs or use Iconify plugin
2. Set frame size: 24px × 24px (default)
3. Set stroke width: 2px
4. Create variants for each size (16, 20, 24, 28, 32)
5. Use auto-layout with padding: 0
```

---

## Cards

### Card Base Dimensions

**Within 1136px usable content width**

| Property | Value | Notes |
|----------|-------|-------|
| **Width** | See card types below | Context-dependent |
| **Internal Padding** | 24px (all sides) | Standard for most cards |
| **Border Radius** | 12px | Rounded corners |
| **Shadow (Default)** | 0 2px 8px rgba(61,57,53,0.06) | Elevated shadow |
| **Shadow (Hover)** | 0 4px 12px rgba(61,57,53,0.08) | Card-hover shadow |
| **Background** | #FFFFFF (White) | Always white |

### Card Types and Dimensions

#### Product Card (Homepage/Category Grid)
| Property | Value | Notes |
|----------|-------|-------|
| **Width** | **265px** | In 4-column grid (1136px - 72px gaps) / 4 |
| **Height** | ~380px | Auto (content-based) |
| **Image Width** | 265px | Full card width |
| **Image Height** | ~200px | 4:3 aspect ratio |
| **Content Padding** | 16px | All sides |
| **Gap between elements** | 8px | Title to price, etc. |

**4-Column Grid Calculation:**
- Usable width: 1136px
- Gaps (3 × 24px): 72px
- Card width: (1136 - 72) / 4 = **266px** (rounded to 265px)

#### Category Card
| Property | Value | Notes |
|----------|-------|-------|
| **Width** | **265px** | In 4-column grid |
| **Height** | ~180px | Auto (content-based) |
| **Icon Size** | 32px × 32px | Lucide icon |
| **Icon Circle** | 64px × 64px | Background circle |
| **Padding** | 16px | All sides |
| **Gap** | 8px | Icon to text |

#### Collection Card (3-Column Grid)
| Property | Value | Notes |
|----------|-------|-------|
| **Width** | **360px** | In 3-column grid (1136px - 48px gaps) / 3 |
| **Height** | ~340px | Auto (content-based) |
| **Image Width** | 360px | Full card width |
| **Image Height** | ~200px | 16:9 aspect ratio |
| **Content Padding** | 24px | All sides |
| **Gap** | 16px | Between content elements |

**3-Column Grid Calculation:**
- Usable width: 1136px
- Gaps (2 × 24px): 48px
- Card width: (1136 - 48) / 3 = **362px** (rounded to 360px)

### Hover Transform
- **Lift Effect:** -4px (translate-y-1)
- **Transition Duration:** 300ms
- **Easing:** ease

---

## Selectors

### Size Selector

**On Product Page (within 450px product info panel)**

| Element | Width | Height | Other Dimensions |
|---------|-------|--------|------------------|
| **Container** | **450px** | Auto | Product info panel width |
| **Label** | Auto | Auto | Font: 16px, Semibold |
| **Size Button** | **140px** | **48px** | In 3-column grid: (450 - 24px gaps) / 3 |
| **Button Grid** | 3 columns | Auto | Gap: 12px between buttons |
| **Border Width** | 2px | - | All states |
| **Border Radius** | 8px | - | Rounded corners |

**Button Width Calculation:**
- Container: 450px
- Gaps (2 × 12px): 24px
- Button width: (450 - 24) / 3 = **142px** (rounded to 140px)

#### Size Button States
| State | Border Color | Background | Text Color |
|-------|--------------|------------|------------|
| **Default** | #4A454320 (Charcoal 20%) | White | #4A4543 |
| **Selected** | #D4A59A (Terracotta) | #D4A59A0D (5% opacity) | #D4A59A |
| **Hover** | #A8B5A0 (Sage) | #A8B5A00D (5% opacity) | #4A4543 |

### Color Selector

**On Product Page (within 450px product info panel)**

| Element | Width | Height | Other Dimensions |
|---------|-------|--------|------------------|
| **Container** | **450px** | Auto | Product info panel width |
| **Label** | Auto | Auto | Font: 16px, Semibold |
| **Color Swatch** | **48px** | **48px** | Circular (fixed size) |
| **Swatch Border** | 2px | - | All states |
| **Check Icon** | 24px | 24px | When selected |
| **Swatches Gap** | 12px | - | Between swatches |
| **Typical Row** | 5-6 swatches | - | Wraps to next line if more |

**Swatches Layout:**
- Each swatch: 48px × 48px
- Gap: 12px
- 6 swatches fit in 450px: (48 × 6) + (12 × 5) = **348px**

#### Color Swatch States
| State | Border | Scale | Shadow |
|-------|--------|-------|--------|
| **Default** | 2px #4A454333 (Charcoal 20%) | 1.0 | None |
| **Selected** | 2px #D4A59A (Terracotta) | 1.1 (10% larger) | Medium |
| **Hover** | 2px #A8B5A0 (Sage) | 1.05 (5% larger) | None |

### Quantity Selector

**On Product Page and Cart**

| Element | Width | Height | Other Dimensions |
|---------|-------|--------|------------------|
| **Container** | **144px** | **40px** | Inline-flex (40 + 64 + 40) |
| **Button (Minus/Plus)** | **40px** | **40px** | Square buttons |
| **Input Field** | **64px** | **40px** | Center-aligned text |
| **Icon Size** | 16px | 16px | Minus/Plus icons |
| **Border Width** | 1px | - | Gray border |
| **Border Radius** | 6px | - | Input radius |

**Total Width Calculation:**
- Left button: 40px
- Input field: 64px
- Right button: 40px
- **Total: 144px**

---

## Layout Components

### Header

| Element | Width | Height | Other Dimensions |
|---------|-------|--------|------------------|
| **Header Container** | 100% viewport | 80px | Fixed height |
| **Content Max-Width** | 1200px | - | Centered |
| **Horizontal Padding** | 32px | - | Left/right |
| **Logo Container** | Auto | 28px | Icon + text |
| **Logo Icon** | 28px | 28px | Home icon |
| **Logo Text** | Auto | Auto | Font: 20px (1.25rem) |
| **Nav Link** | Auto | Auto | Font: 14px (0.875rem) |
| **Nav Link Spacing** | 32px | - | Gap between links |
| **Nav Underline** | 100% (of link) | 2px | On hover/active |
| **Icon Buttons** | 22px | 22px | Search, User, Heart, Cart |
| **Icon Spacing** | 24px | - | Gap between icons |
| **Cart Badge** | 20px | 20px | Circle |
| **Cart Badge Font** | 12px | - | Number inside |

### Footer

| Element | Width | Height | Other Dimensions |
|---------|-------|--------|------------------|
| **Footer Container** | 100% viewport | Auto | Min content height |
| **Content Max-Width** | 1200px | - | Centered |
| **Horizontal Padding** | 32px | - | Left/right |
| **Vertical Padding** | 40px | - | Top/bottom |
| **Column Width** | Flexible (25% each) | - | 4 columns |
| **Column Gap** | 40px | - | Between columns |
| **Link Line Height** | 32px | - | 2× font size |
| **Logo Height** | 28px | - | Same as header |

---

## Page Layouts

### Product Page Layout

**Two-Column Split (within 1136px usable width)**

| Section | Width | Height | Position |
|---------|-------|--------|----------|
| **Product Gallery** | **650px** | Auto (sticky) | Left column (57%) |
| **Product Info Panel** | **450px** | Auto (scrollable) | Right column (40%) |
| **Column Gap** | 36px | - | Between columns |

**Calculation:**
- Usable width: 1136px
- Gap: 36px
- Left (Gallery): 650px (57%)
- Right (Info): 450px (40%)
- Total: 650 + 36 + 450 = 1136px ✓

**Product Info Panel Breakdown (450px width):**

| Element | Width | Spacing |
|---------|-------|---------|
| **Product Name (H1)** | 450px | 0 |
| **Price** | Auto | 8px below name |
| **Rating** | Auto | 16px below price |
| **Description** | 450px | 24px below rating |
| **Size Selector** | 450px (3 buttons × 140px) | 24px below description |
| **Color Selector** | 450px | 24px below size |
| **Quantity Selector** | 144px | 24px below color |
| **Add to Cart Button** | 450px (full-width) | 24px below quantity |
| **Add to Wishlist Button** | 450px (full-width) | 16px below cart button |
| **Accordions (3)** | 450px each | 16px between each |

### Cart Page Layout

**Two-Column Split (within 1136px usable width)**

| Section | Width | Height | Position |
|---------|-------|--------|----------|
| **Cart Items List** | **710px** | Auto (scrollable) | Left column (62.5%) |
| **Order Summary** | **380px** | Auto (sticky) | Right column (33.5%) |
| **Column Gap** | 46px | - | Between columns |

**Calculation:**
- Usable width: 1136px
- Gap: 46px
- Left (Items): 710px (62.5%)
- Right (Summary): 380px (33.5%)
- Total: 710 + 46 + 380 = 1136px ✓

**Cart Item Row (within 710px):**

| Element | Width | Height | Position |
|---------|-------|--------|----------|
| **Thumbnail** | 80px | 80px | Left |
| **Product Info** | ~420px | Auto | Center (flex-grow) |
| **Quantity Selector** | 144px | 40px | Right-center |
| **Remove Button** | 32px | 32px | Far right |
| **Gaps** | 16px each | - | Between elements |

**Order Summary Panel (380px width):**

| Element | Width | Spacing |
|---------|-------|---------|
| **Summary Title** | 380px | 0 |
| **Promo Code Input** | 380px | 16px below title |
| **Subtotal Row** | 380px | 16px below input |
| **Shipping Row** | 380px | 16px below subtotal |
| **Tax Row** | 380px | 16px below shipping |
| **Total Row** | 380px | 16px below tax, bold |
| **Checkout Button** | 380px (full-width) | 24px below total |
| **Trust Badges** | 4 badges, ~85px each | 16px below button |
| **Payment Icons** | 5 icons, ~60px each | 16px below badges |

### Homepage Grid Layouts

**4-Column Product/Category Grid (within 1136px):**
- Columns: 4
- Card width: **265px** each
- Gap: 24px
- Total: (265 × 4) + (24 × 3) = 1060 + 72 = 1132px ≈ 1136px

**3-Column Collection Grid (within 1136px):**
- Columns: 3
- Card width: **360px** each
- Gap: 24px
- Total: (360 × 3) + (24 × 2) = 1080 + 48 = 1128px ≈ 1136px

---

## Interactive Elements

### Accordion

| Element | Width | Height | Other Dimensions |
|---------|-------|--------|------------------|
| **Accordion Item** | Full width | Auto | Collapsible |
| **Header** | Full width | 56px | Clickable area |
| **Header Padding** | 16px | - | Horizontal |
| **Icon** | 20px | 20px | ChevronDown |
| **Content Padding** | 16px | - | All sides |
| **Border Bottom** | 1px | - | Gray divider |

### Star Rating

| Element | Width | Height | Other Dimensions |
|---------|-------|--------|------------------|
| **Star Icon** | 16px | 16px | Small ratings |
| **Star Icon (Large)** | 20px | 20px | Featured ratings |
| **Star Spacing** | 2px | - | Gap between stars |
| **Star Color (Filled)** | #D4A59A | - | Terracotta |
| **Star Color (Empty)** | #E5E7EB | - | Gray |

### Cart Badge (Header)

| Property | Value | Notes |
|----------|-------|-------|
| **Width** | 20px | Circle |
| **Height** | 20px | Circle |
| **Font Size** | 12px | Number display |
| **Position** | Top: -8px, Right: -8px | Relative to cart icon |
| **Background** | #D4A59A (Terracotta) | - |
| **Text Color** | #FFFFFF (White) | - |

---

## Spacing Reference

### 8px Grid System

All spacing follows an 8px increment system:

| Name | Value | Tailwind Class | Usage |
|------|-------|----------------|-------|
| **Micro** | 8px | `space-2`, `p-2`, `m-2`, `gap-2` | Icon-to-text, tight elements |
| **Small** | 16px | `space-4`, `p-4`, `m-4`, `gap-4` | Between related items |
| **Medium** | 24px | `space-6`, `p-6`, `m-6`, `gap-6` | Between sections within cards |
| **Large** | 40px | `space-10`, `p-10`, `m-10`, `gap-10` | Between major sections |
| **X-Large** | 60px | `space-15`, `p-15`, `m-15`, `gap-15` | Page padding, hero spacing |

### Component Internal Spacing

| Component | Horizontal Padding | Vertical Padding | Gap Between Items |
|-----------|-------------------|------------------|-------------------|
| **Button Large** | 24px | Auto (height: 48px) | 8px (if icon) |
| **Button Medium** | 20px | Auto (height: 40px) | 8px (if icon) |
| **Button Small** | 16px | Auto (height: 32px) | 8px (if icon) |
| **Input Field** | 16px | 8px | - |
| **Card** | 24px | 24px | 16px |
| **Product Card** | 16px | 16px | 8px |
| **Badge** | 8-12px | 4px | - |
| **Header** | 32px | Auto (height: 80px) | 32px (nav), 24px (icons) |
| **Footer** | 32px | 40px | 40px (columns) |

---

## Border Radius Reference

| Element Type | Border Radius | Tailwind Class | Usage |
|--------------|---------------|----------------|-------|
| **Buttons** | 8px | `rounded-button` | All button variants |
| **Cards** | 12px | `rounded-card` | Product cards, info cards |
| **Input Fields** | 6px | `rounded-input` | Text inputs, selects |
| **Images** | 8px | `rounded-image` | Product images, thumbnails |
| **Badges** | Full (pill) | `rounded-full` | All badge variants |
| **Color Swatches** | Full (circle) | `rounded-full` | Color selector circles |

---

## Shadow Reference

### Shadow Specifications

| Shadow Name | CSS Value | Tailwind Class | Usage |
|-------------|-----------|----------------|-------|
| **Elevated** | `0 2px 8px rgba(61, 57, 53, 0.06)` | `shadow-elevated` | Default cards, inputs on focus |
| **Card Hover** | `0 4px 12px rgba(61, 57, 53, 0.08)` | `shadow-card-hover` | Cards on hover |
| **Dropdown** | `0 8px 24px rgba(61, 57, 53, 0.12)` | `shadow-dropdown` | Dropdown menus, modals |

---

## Figma Layer Structure Recommendations

### Component Organization

```
Cozy Haven Design System/
├── 🎨 Colors
│   ├── Primary (Warm Cream, Soft White)
│   ├── Secondary (Terracotta, Sage Green)
│   └── Dark (Charcoal, Deep Brown)
├── 📝 Typography
│   ├── H1 (48px, Light 300)
│   ├── H2 (36px, Regular 400)
│   ├── H3 (28px, SemiBold 600)
│   ├── H4 (22px, SemiBold 600)
│   ├── Body (16px, Regular 400)
│   ├── Small (14px, Regular 400)
│   └── Tiny (12px, Regular 400)
├── 🔘 Buttons
│   ├── Large (48px height)
│   ├── Medium (40px height)
│   └── Small (32px height)
├── 📝 Inputs
│   └── Input Field (40px height)
├── 🏷️ Badges
│   ├── Small (Auto × Auto)
│   └── Medium (Auto × Auto)
├── 🎯 Icons
│   ├── 16px (Extra Small)
│   ├── 20px (Small)
│   ├── 24px (Medium) ← Default
│   ├── 28px (Large)
│   └── 32px (Extra Large)
├── 🃏 Cards
│   ├── Product Card
│   ├── Category Card
│   └── Collection Card
├── 🎚️ Selectors
│   ├── Size Selector (48px button height)
│   ├── Color Selector (48px swatch)
│   └── Quantity Selector (40px height)
└── 📐 Layout
    ├── Header (1200px × 80px)
    └── Footer (1200px × Auto)
```

---

## Quick Reference Table - All Components

| Component | Width | Height | Padding H | Padding V | Border Radius | Notes |
|-----------|-------|--------|-----------|-----------|---------------|-------|
| **Button Large** | Auto | 48px | 24px | - | 8px | Font: 16px |
| **Button Medium** | Auto | 40px | 20px | - | 8px | Font: 16px |
| **Button Small** | Auto | 32px | 16px | - | 8px | Font: 14px |
| **Input** | 100% | 40px | 16px | 8px | 6px | Font: 16px |
| **Badge Small** | Auto | Auto | 8px | 4px | Full | Font: 12px |
| **Badge Medium** | Auto | Auto | 12px | 4px | Full | Font: 12px |
| **Icon Default** | 24px | 24px | - | - | - | Stroke: 2px |
| **Icon Small** | 16px | 16px | - | - | - | Stroke: 2px |
| **Icon Large** | 32px | 32px | - | - | - | Stroke: 2px |
| **Card** | Flexible | Auto | 24px | 24px | 12px | White BG |
| **Size Button** | Flex | 48px | 16px | - | 8px | Grid: 3 cols |
| **Color Swatch** | 48px | 48px | - | - | Full | Circle |
| **Quantity Selector** | Auto | 40px | - | - | 6px | Total width: ~136px |
| **Header** | 1200px | 80px | 32px | - | - | Sticky |
| **Footer** | 1200px | Auto | 32px | 40px | - | 4 columns |

---

## Measurement Units

All measurements in this document use **pixels (px)** as the primary unit.

- **Font sizes:** px
- **Spacing:** px (8px grid increments)
- **Border radius:** px
- **Icon sizes:** px × px
- **Component dimensions:** px

### Conversion to Other Units

If using rem-based design:
- Base font size: 16px = 1rem
- Example: 24px = 1.5rem

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Nov 4, 2025 | Initial component dimensions specification |

---

**End of Component Dimensions Specification**

This document should be used alongside `DESIGN_SYSTEM_REPORT.md` for complete design system implementation in Figma or other design tools.
