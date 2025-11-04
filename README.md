# Cozy Haven - E-commerce Website

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/react-19.2.0-61dafb)
![TypeScript](https://img.shields.io/badge/typescript-5.9.3-3178c6)
![Vite](https://img.shields.io/badge/vite-7.1.12-646cff)
![Tailwind CSS](https://img.shields.io/badge/tailwind-4.1.16-38bdf8)

A premium bedding essentials e-commerce website built with React, TypeScript, Vite, and Tailwind CSS. Features a comprehensive design system, product catalog, shopping cart, and responsive layouts.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Commands](#available-commands)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Design System](#design-system)
- [Mock Data](#mock-data)
- [Development](#development)
- [Documentation](#documentation)

---

## 🎯 Overview

Cozy Haven is a modern e-commerce website designed for premium bedding products. The project emphasizes:

- **Warmth & Comfort** - Natural, warm tones and generous whitespace
- **Quality Design** - Comprehensive design system with 8px spacing grid
- **User Experience** - Intuitive navigation, smooth interactions, trust-building elements
- **Accessibility** - WCAG AA compliant, semantic HTML, keyboard navigation

**Desktop Specifications:**
- Viewport Width: Designed for 1920px displays
- Content Max-Width: 1200px (centered)
- Breakpoints: 1920px (large), 1440px (standard), 1200px (minimum)

---

## ✨ Features

### Implemented (78% Complete)
- ✅ Comprehensive design system (colors, typography, spacing, components)
- ✅ Core component library (buttons, inputs, cards, badges)
- ✅ Layout components (header, footer, navigation)
- ✅ Homepage with 6 sections (hero, collections, categories, materials, social proof, sustainability)
- ✅ Product page with gallery, selectors, reviews, recommendations
- ✅ Shopping cart with dynamic calculations, promo codes, recommendations
- ✅ Mock data (22 products, 3 collections, 6 categories, 20 reviews)
- ✅ React Router integration
- ✅ Cart state management with localStorage persistence

### In Progress
- ⏳ Global state management refinement
- ⏳ Polish & testing
- ⏳ Performance optimization

---

## 🛠 Tech Stack

### Core
- **React** 19.2.0 - UI library
- **TypeScript** 5.9.3 - Type safety
- **Vite** 7.1.12 - Build tool & dev server
- **React Router** 7.9.4 - Client-side routing

### Styling
- **Tailwind CSS** 4.1.16 - Utility-first CSS framework
- **PostCSS** 8.5.6 - CSS processing
- **Autoprefixer** 10.4.21 - CSS vendor prefixing

### Development Tools
- **ESLint** 9.38.0 - Linting
- **Prettier** 3.6.2 - Code formatting
- **pnpm** - Package manager

### Icons & Fonts
- **Lucide React** - Icon library (40+ icons)
- **Montserrat** - Google Font (weights: 300, 400, 600)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CapstonProject
   ```

2. **Install dependencies**
   ```bash
   make install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   make dev
   # or
   pnpm dev
   ```

4. **Open browser**
   ```
   http://localhost:5173
   ```

---

## 📝 Available Commands

The project uses a **Makefile** for common operations:

| Command | Description |
|---------|-------------|
| `make help` | Display all available commands |
| `make install` | Install project dependencies |
| `make dev` | Start development server (http://localhost:5173) |
| `make build` | Build for production |
| `make preview` | Preview production build |
| `make lint` | Run ESLint code checks |
| `make format` | Format code with Prettier |
| `make clean` | Remove node_modules and build artifacts |

**Alternative using pnpm directly:**
```bash
pnpm dev      # Start dev server
pnpm build    # Build production
pnpm preview  # Preview build
pnpm lint     # Run linter
```

---

## 📁 Project Structure

```
CapstonProject/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components (Button, Input, Card, Badge)
│   │   ├── layout/          # Header, Footer, Layout
│   │   ├── homepage/        # Homepage sections (Hero, Collections, etc.)
│   │   ├── product/         # Product page components (Gallery, Reviews, etc.)
│   │   └── cart/            # Cart page components
│   ├── pages/               # Page components (HomePage, ProductPage, CartPage)
│   ├── data/                # Mock data files (products, collections, reviews)
│   ├── types/               # TypeScript interfaces
│   ├── context/             # React Context (CartContext)
│   ├── utils/               # Helper functions
│   ├── assets/              # Images, icons
│   ├── index.css            # Global styles + Tailwind + custom components
│   ├── App.tsx              # Main app with routing
│   └── main.tsx             # App entry point
├── dev-docs/                # Documentation
│   ├── DESIGN_SYSTEM_REPORT.md   # Complete design system specs
│   ├── PROGRESS.md               # Development progress tracker
│   └── Desktop-Task-List.md      # Task breakdown
├── tailwind.config.js       # Tailwind configuration with design tokens
├── postcss.config.js        # PostCSS configuration
├── Makefile                 # Build and dev commands
├── .gitignore              # Git ignore rules
└── package.json            # Dependencies and scripts
```

---

## 🌐 Pages & Routes

### Public Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Main landing page with hero, collections, categories |
| `/product/:id` | ProductPage | Product details with gallery, reviews, add to cart |
| `/cart` | CartPage | Shopping cart with items, summary, checkout |

### Hidden Development Routes

These pages are **not linked in navigation** but accessible via direct URL:

| Route | Component | Purpose |
|-------|-----------|---------|
| `/design-spec` | DesignSystem | **Design System Showcase** - View all colors, typography, spacing, components, buttons, inputs, cards, and badges |
| `/data-test` | DataTest | **Data Test Page** - Verify mock data integration (products, collections, categories, reviews, materials) |

**How to access hidden pages:**
- Design System: `http://localhost:5173/design-spec`
- Data Test: `http://localhost:5173/data-test`

---

## 🎨 Design System

### Brand Colors

| Color Name | Hex Code | Tailwind Class | Usage |
|------------|----------|----------------|-------|
| Warm Cream | `#F5F0E8` | `bg-warm-cream` | Main background |
| Soft White | `#FFFFFF` | `bg-soft-white` | Card backgrounds |
| Soft Terracotta | `#D4A59A` | `bg-soft-terracotta` | CTAs, accents, links |
| Sage Green | `#A8B5A0` | `bg-sage-green` | Secondary accents |
| Warm Charcoal | `#4A4543` | `text-warm-charcoal` | Headings |
| Deep Brown | `#3D3935` | `text-deep-brown` | Body text |

### Typography Scale

- **H1**: 48px, Light (300)
- **H2**: 36px, Regular (400)
- **H3**: 28px, Semi-Bold (600)
- **H4**: 22px, Semi-Bold (600)
- **Body**: 16px, Regular (400)
- **Small**: 14px, Regular (400)
- **Tiny**: 12px, Regular (400)

### Spacing System (8px Grid)

- **Micro**: 8px (`space-2`, `p-2`, `gap-2`)
- **Small**: 16px (`space-4`, `p-4`, `gap-4`)
- **Medium**: 24px (`space-6`, `p-6`, `gap-6`)
- **Large**: 40px (`space-10`, `p-10`, `gap-10`)
- **X-Large**: 60px (`space-15`, `p-15`, `gap-15`)

### Component Classes

Pre-built CSS classes available in `src/index.css`:

```jsx
// Buttons
<button className="btn-primary btn-large">Primary Button</button>
<button className="btn-secondary btn-medium">Secondary Button</button>
<button className="btn-ghost btn-small">Ghost Button</button>

// Inputs
<input className="input-field" placeholder="Email" />

// Cards
<div className="card p-6">Card Content</div>

// Badges
<span className="badge badge-sustainable">Sustainable</span>
```

**Full Design System Documentation:** `dev-docs/DESIGN_SYSTEM_REPORT.md`

---

## 📦 Mock Data

The project includes comprehensive mock data:

- **22 Products** - Across 6 categories (Sheets, Duvets, Pillows, Toppers, Blankets, Curtains)
- **3 Collections** - Linen Luxe, Cloud Cotton, Seasonal Favorites
- **6 Categories** - With icons, descriptions, and product counts
- **20 Reviews** - Customer reviews with ratings and verified purchase badges
- **3 Materials** - Egyptian Cotton, Linen, Bamboo (with education content)

All data includes:
- TypeScript interfaces for type safety
- High-quality Unsplash images
- Realistic content (no lorem ipsum)
- Helper functions for filtering and searching

**Data Files Location:** `src/data/`

---

## 💻 Development

### Key Development Pages

Visit these pages during development:

1. **Design System** (`/design-spec`) - Test all design tokens and components
2. **Data Test** (`/data-test`) - Verify mock data loads correctly
3. **Homepage** (`/`) - Main landing page
4. **Product Page** (`/product/1`) - Any product by ID
5. **Cart Page** (`/cart`) - Shopping cart

### Cart Functionality

The shopping cart includes:
- Add/remove items
- Update quantities
- Dynamic pricing calculations
- Promo codes (try: `COZY10`, `WELCOME20`)
- Free shipping over $100
- Tax calculation (8%)
- localStorage persistence

### Current Progress

**Completed:** 39/50 tasks (78%)
**Story Points:** 120/156 (76.9%)

**Completed Epics:**
- ✅ Epic 1: Project Setup & Configuration
- ✅ Epic 2: Core Components Library
- ✅ Epic 3: Layout Components
- ✅ Epic 4: Mock Data Setup
- ✅ Epic 5: Homepage - Desktop
- ✅ Epic 6: Product Page - Desktop
- ✅ Epic 7: Cart Page - Desktop

**In Progress:**
- ⏳ Epic 8: Global State & Routing
- ⏳ Epic 9: Polish & Testing
- ⏳ Epic 10: Presentation Preparation

---

## 📚 Documentation

### Design & Development Docs

Located in `dev-docs/`:

1. **DESIGN_SYSTEM_REPORT.md** (40KB+)
   - Complete design specifications
   - Color palette, typography, spacing
   - Component specifications
   - Layout guidelines
   - Accessibility requirements

2. **COMPONENT_DIMENSIONS_SPEC.md** (NEW!)
   - Exact dimensions (width × height) for all components
   - Figma recreation reference
   - Icon sizes for all Lucide icons
   - Button, input, badge, card dimensions
   - Selector specifications (size, color, quantity)
   - Layout component measurements
   - Quick reference tables

3. **PROGRESS.md**
   - Development progress tracker
   - Task completion status
   - Recent accomplishments
   - Next steps

4. **Desktop-Task-List.md**
   - Complete task breakdown (50 tasks)
   - Epic organization
   - Story points and priorities
   - Acceptance criteria

### Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

### Accessibility

- WCAG AA compliant color contrast
- Semantic HTML structure
- Keyboard navigation support
- Focus states on all interactive elements
- ARIA labels where needed
- Screen reader compatible

---

## 🤝 Contributing

This is a capstone project. For development workflow:

1. Check `dev-docs/PROGRESS.md` for current status
2. Review `dev-docs/Desktop-Task-List.md` for pending tasks
3. Follow design system specifications in `dev-docs/DESIGN_SYSTEM_REPORT.md`
4. Use TypeScript for all new code
5. Run `make lint` and `make format` before committing

---

## 📄 License

This project is part of a UX capstone project.

---

## 🙏 Acknowledgments

- **Unsplash** - High-quality product images
- **Lucide Icons** - Beautiful icon set
- **Google Fonts** - Montserrat typeface
- **Tailwind CSS** - Utility-first CSS framework

---

**Last Updated:** November 4, 2025
**Version:** 1.0.0
**Status:** Active Development (78% Complete)
