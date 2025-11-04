import { useState } from 'react';
import {
  Button,
  Input,
  QuantitySelector,
  Card,
  Badge,
  Icons,
} from '../components/common';

function DesignSystem() {
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-warm-cream p-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-15">
        <h1 className="text-h1 mb-4">Cozy Haven Design System</h1>
        <p className="text-body">
          A showcase of all reusable components built for the Cozy Haven
          e-commerce website.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-15">
        {/* Component Dimensions Section */}
        <section>
          <h2 className="text-h2 mb-6">Component Dimensions Reference</h2>
          <Card padding="large">
            <div className="space-y-6">
              <div>
                <h3 className="text-h3 mb-4">📐 For Figma Designers</h3>
                <p className="text-body mb-4">
                  All components follow exact pixel specifications for easy recreation in design tools.
                  See <code className="bg-gray-100 px-2 py-1 rounded text-small">dev-docs/COMPONENT_DIMENSIONS_SPEC.md</code> for complete reference.
                </p>
                <div className="bg-terracotta/10 p-4 rounded-lg border border-terracotta mb-4">
                  <p className="text-small font-semibold mb-2">Layout Context (1920px Viewport):</p>
                  <div className="grid grid-cols-2 gap-2 text-tiny font-mono">
                    <div>Viewport: <span className="font-bold">1920px</span></div>
                    <div>Container: <span className="font-bold">1200px</span> (centered)</div>
                    <div>Padding: <span className="font-bold">32px</span> (each side)</div>
                    <div>Usable Width: <span className="font-bold">1136px</span></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Buttons Dimensions */}
                <div className="bg-warm-cream p-4 rounded-lg">
                  <h4 className="text-h4 mb-3">Buttons</h4>
                  <div className="space-y-2 text-small">
                    <div className="flex justify-between">
                      <span className="text-warm-charcoal">Large:</span>
                      <span className="font-mono font-semibold">160-200px × 48px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-warm-charcoal">Medium:</span>
                      <span className="font-mono font-semibold">140-180px × 40px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-warm-charcoal">Small:</span>
                      <span className="font-mono font-semibold">100-140px × 32px</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-300 pt-2 mt-2">
                      <span className="text-warm-charcoal">Full Width:</span>
                      <span className="font-mono font-semibold">450px (Product)</span>
                    </div>
                  </div>
                </div>

                {/* Input Dimensions */}
                <div className="bg-warm-cream p-4 rounded-lg">
                  <h4 className="text-h4 mb-3">Input Fields</h4>
                  <div className="space-y-2 text-small">
                    <div className="flex justify-between">
                      <span className="text-warm-charcoal">Form Input:</span>
                      <span className="font-mono font-semibold">450px × 40px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-warm-charcoal">Newsletter:</span>
                      <span className="font-mono font-semibold">350px × 40px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-warm-charcoal">Padding:</span>
                      <span className="font-mono font-semibold">16px (H) × 8px (V)</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-300 pt-2 mt-2">
                      <span className="text-warm-charcoal">Border Radius:</span>
                      <span className="font-mono font-semibold">6px</span>
                    </div>
                  </div>
                </div>

                {/* Icon Dimensions */}
                <div className="bg-warm-cream p-4 rounded-lg">
                  <h4 className="text-h4 mb-3">Icons (Lucide)</h4>
                  <div className="space-y-2 text-small">
                    <div className="flex justify-between">
                      <span className="text-warm-charcoal">Default:</span>
                      <span className="font-mono font-semibold">24 × 24px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-warm-charcoal">Header Icons:</span>
                      <span className="font-mono font-semibold">22 × 22px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-warm-charcoal">Small Icons:</span>
                      <span className="font-mono font-semibold">16 × 16px</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-300 pt-2 mt-2">
                      <span className="text-warm-charcoal">Stroke Width:</span>
                      <span className="font-mono font-semibold">2px</span>
                    </div>
                  </div>
                </div>

                {/* Badge Dimensions */}
                <div className="bg-warm-cream p-4 rounded-lg">
                  <h4 className="text-h4 mb-3">Badges</h4>
                  <div className="space-y-2 text-small">
                    <div className="flex justify-between">
                      <span className="text-warm-charcoal">Small H Padding:</span>
                      <span className="font-mono font-semibold">8px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-warm-charcoal">Medium H Padding:</span>
                      <span className="font-mono font-semibold">12px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-warm-charcoal">V Padding:</span>
                      <span className="font-mono font-semibold">4px</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-300 pt-2 mt-2">
                      <span className="text-warm-charcoal">Border Radius:</span>
                      <span className="font-mono font-semibold">Full (pill)</span>
                    </div>
                  </div>
                </div>

                {/* Card Dimensions */}
                <div className="bg-warm-cream p-4 rounded-lg">
                  <h4 className="text-h4 mb-3">Cards</h4>
                  <div className="space-y-2 text-small">
                    <div className="flex justify-between">
                      <span className="text-warm-charcoal">Product (4-col):</span>
                      <span className="font-mono font-semibold">265px wide</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-warm-charcoal">Collection (3-col):</span>
                      <span className="font-mono font-semibold">360px wide</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-warm-charcoal">Padding:</span>
                      <span className="font-mono font-semibold">24px/16px</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-300 pt-2 mt-2">
                      <span className="text-warm-charcoal">Border Radius:</span>
                      <span className="font-mono font-semibold">12px</span>
                    </div>
                  </div>
                </div>

                {/* Layout Dimensions */}
                <div className="bg-warm-cream p-4 rounded-lg">
                  <h4 className="text-h4 mb-3">Page Layouts</h4>
                  <div className="space-y-2 text-small">
                    <div className="flex justify-between">
                      <span className="text-warm-charcoal">Product Gallery:</span>
                      <span className="font-mono font-semibold">650px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-warm-charcoal">Product Info:</span>
                      <span className="font-mono font-semibold">450px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-warm-charcoal">Cart Items:</span>
                      <span className="font-mono font-semibold">710px</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-300 pt-2 mt-2">
                      <span className="text-warm-charcoal">Order Summary:</span>
                      <span className="font-mono font-semibold">380px</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8px Grid System */}
              <div className="bg-soft-terracotta/10 p-6 rounded-lg border-2 border-soft-terracotta">
                <h4 className="text-h4 mb-3">8px Grid Spacing System</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-small">
                  <div>
                    <div className="font-semibold text-warm-charcoal">Micro</div>
                    <div className="font-mono text-soft-terracotta">8px</div>
                    <div className="text-tiny text-gray-600">gap-2</div>
                  </div>
                  <div>
                    <div className="font-semibold text-warm-charcoal">Small</div>
                    <div className="font-mono text-soft-terracotta">16px</div>
                    <div className="text-tiny text-gray-600">gap-4</div>
                  </div>
                  <div>
                    <div className="font-semibold text-warm-charcoal">Medium</div>
                    <div className="font-mono text-soft-terracotta">24px</div>
                    <div className="text-tiny text-gray-600">gap-6</div>
                  </div>
                  <div>
                    <div className="font-semibold text-warm-charcoal">Large</div>
                    <div className="font-mono text-soft-terracotta">40px</div>
                    <div className="text-tiny text-gray-600">gap-10</div>
                  </div>
                  <div>
                    <div className="font-semibold text-warm-charcoal">X-Large</div>
                    <div className="font-mono text-soft-terracotta">60px</div>
                    <div className="text-tiny text-gray-600">gap-15</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Buttons Section */}
        <section>
          <h2 className="text-h2 mb-6">Buttons</h2>

          <Card padding="large">
            <h3 className="text-h3 mb-6">Button Variants</h3>
            <div className="mb-4 p-3 bg-warm-cream rounded">
              <p className="text-small font-mono">
                📏 Dimensions: Large (160-200px × 48px) • Medium (140-180px × 40px) • Small (100-140px × 32px) • Border Radius: 8px
              </p>
            </div>

            <div className="space-y-6">
              {/* Primary Buttons */}
              <div>
                <h4 className="text-h4 mb-4">Primary</h4>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="large">
                    Large Primary
                  </Button>
                  <Button variant="primary" size="medium">
                    Medium Primary
                  </Button>
                  <Button variant="primary" size="small">
                    Small Primary
                  </Button>
                  <Button variant="primary" size="medium" disabled>
                    Disabled
                  </Button>
                </div>
              </div>

              {/* Secondary Buttons */}
              <div>
                <h4 className="text-h4 mb-4">Secondary</h4>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary" size="large">
                    Large Secondary
                  </Button>
                  <Button variant="secondary" size="medium">
                    Medium Secondary
                  </Button>
                  <Button variant="secondary" size="small">
                    Small Secondary
                  </Button>
                  <Button variant="secondary" size="medium" disabled>
                    Disabled
                  </Button>
                </div>
              </div>

              {/* Ghost Buttons */}
              <div>
                <h4 className="text-h4 mb-4">Ghost</h4>
                <div className="flex flex-wrap gap-4">
                  <Button variant="ghost" size="large">
                    Large Ghost
                  </Button>
                  <Button variant="ghost" size="medium">
                    Medium Ghost
                  </Button>
                  <Button variant="ghost" size="small">
                    Small Ghost
                  </Button>
                </div>
              </div>

              {/* Buttons with Icons */}
              <div>
                <h4 className="text-h4 mb-4">With Icons</h4>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="primary"
                    icon={<Icons.ShoppingCart size={20} />}
                    iconPosition="left"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="secondary"
                    icon={<Icons.Heart size={20} />}
                    iconPosition="left"
                  >
                    Add to Wishlist
                  </Button>
                  <Button
                    variant="primary"
                    icon={<Icons.ArrowRight size={20} />}
                    iconPosition="right"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Input Fields Section */}
        <section>
          <h2 className="text-h2 mb-6">Input Fields</h2>

          <Card padding="large">
            <div className="mb-4 p-3 bg-warm-cream rounded">
              <p className="text-small font-mono">
                📏 Dimensions: Form (450px × 40px) • Newsletter (350px × 40px) • Padding: 16px (H) × 8px (V) • Border Radius: 6px
              </p>
            </div>
            <div className="space-y-6 max-w-md">
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />

              <Input
                label="With Helper Text"
                type="text"
                placeholder="Enter text"
                helperText="This is a helpful message"
                fullWidth
              />

              <Input
                label="Error State"
                type="text"
                placeholder="Invalid input"
                state="error"
                helperText="This field has an error"
                fullWidth
              />

              <Input
                label="Success State"
                type="text"
                placeholder="Valid input"
                state="success"
                helperText="Looks good!"
                fullWidth
              />

              <Input
                label="Disabled Input"
                type="text"
                placeholder="Cannot edit"
                disabled
                fullWidth
              />
            </div>
          </Card>
        </section>

        {/* Quantity Selector Section */}
        <section>
          <h2 className="text-h2 mb-6">Quantity Selector</h2>

          <Card padding="large">
            <div className="mb-4 p-3 bg-warm-cream rounded">
              <p className="text-small font-mono">
                📏 Dimensions: 144px × 40px (Total) • Buttons: 40 × 40px • Input: 64px • Icons: 16 × 16px
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-small mb-2 text-warm-charcoal">
                  Current Quantity: {quantity}
                </p>
                <QuantitySelector
                  value={quantity}
                  onChange={setQuantity}
                  min={1}
                  max={10}
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Badges Section */}
        <section>
          <h2 className="text-h2 mb-6">Badges</h2>

          <Card padding="large">
            <div className="mb-4 p-3 bg-warm-cream rounded">
              <p className="text-small font-mono">
                📏 Dimensions: Auto × Auto • Small Padding: 8px × 4px • Medium: 12px × 4px • Font: 12px
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-h4 mb-4">Badge Variants</h4>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="sustainable">Sustainable</Badge>
                  <Badge variant="new">New Arrival</Badge>
                  <Badge variant="bestseller">Bestseller</Badge>
                  <Badge variant="default">Default</Badge>
                </div>
              </div>

              <div>
                <h4 className="text-h4 mb-4">Badge Sizes</h4>
                <div className="flex flex-wrap gap-4 items-center">
                  <Badge variant="new" size="small">
                    Small Badge
                  </Badge>
                  <Badge variant="new" size="medium">
                    Medium Badge
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Cards Section */}
        <section>
          <h2 className="text-h2 mb-6">Cards</h2>
          <div className="mb-4 p-3 bg-warm-cream rounded">
            <p className="text-small font-mono">
              📏 Dimensions: Product (265px × ~380px, 4-col) • Collection (360px × ~340px, 3-col) • Padding: 24px/16px • Radius: 12px
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="space-y-4">
                <div className="w-full h-48 bg-gray-200 rounded-image flex items-center justify-center">
                  <Icons.Package size={48} className="text-gray-400" />
                </div>
                <Badge variant="new">New</Badge>
                <h3 className="text-h3">Hoverable Card</h3>
                <p className="text-body">
                  This card has a hover effect. Try hovering over it!
                </p>
                <p className="text-h3 text-soft-terracotta">$149.00</p>
                <Button variant="primary" fullWidth>
                  Add to Cart
                </Button>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <div className="w-full h-48 bg-gray-200 rounded-image flex items-center justify-center">
                  <Icons.Heart size={48} className="text-gray-400" />
                </div>
                <Badge variant="bestseller">Bestseller</Badge>
                <h3 className="text-h3">Another Card</h3>
                <p className="text-body">
                  Cards provide elevation and structure to content.
                </p>
                <p className="text-h3 text-soft-terracotta">$89.00</p>
                <Button variant="secondary" fullWidth>
                  View Details
                </Button>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <div className="w-full h-48 bg-gray-200 rounded-image flex items-center justify-center">
                  <Icons.Sustainable size={48} className="text-gray-400" />
                </div>
                <Badge variant="sustainable">Eco-Friendly</Badge>
                <h3 className="text-h3">Third Card</h3>
                <p className="text-body">
                  Consistent spacing and shadows throughout.
                </p>
                <p className="text-h3 text-soft-terracotta">$199.00</p>
                <Button variant="primary" fullWidth>
                  Shop Now
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Icons Section */}
        <section>
          <h2 className="text-h2 mb-6">Icons</h2>

          <Card padding="large">
            <div className="mb-4 p-3 bg-warm-cream rounded">
              <p className="text-small font-mono">
                📏 Icon Sizes: 16px (Small) • 20px (Button) • 22px (Header) • 24px (Default) • 28px (Logo) • 32px (Large) • Stroke: 2px
              </p>
            </div>
            <h3 className="text-h3 mb-6">Common Icons (Lucide React)</h3>
            {/* Icon Size Demonstration */}
            <div className="mb-8 p-6 bg-sage-green/10 rounded-lg border-2 border-sage-green">
              <h4 className="text-h4 mb-4">Icon Size Scale</h4>
              <div className="flex items-end gap-6 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <Icons.Star size={16} className="text-soft-terracotta" />
                  <span className="text-tiny font-mono">16px</span>
                  <span className="text-tiny text-gray-600">Small</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icons.Star size={20} className="text-soft-terracotta" />
                  <span className="text-tiny font-mono">20px</span>
                  <span className="text-tiny text-gray-600">Button</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icons.Star size={22} className="text-soft-terracotta" />
                  <span className="text-tiny font-mono">22px</span>
                  <span className="text-tiny text-gray-600">Header</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icons.Star size={24} className="text-soft-terracotta" />
                  <span className="text-tiny font-mono">24px</span>
                  <span className="text-tiny text-gray-600">Default</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icons.Star size={28} className="text-soft-terracotta" />
                  <span className="text-tiny font-mono">28px</span>
                  <span className="text-tiny text-gray-600">Logo</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icons.Star size={32} className="text-soft-terracotta" />
                  <span className="text-tiny font-mono">32px</span>
                  <span className="text-tiny text-gray-600">Large</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-6 md:grid-cols-12 gap-6">
              <div className="flex flex-col items-center gap-2">
                <Icons.ShoppingCart className="text-soft-terracotta" />
                <span className="text-tiny">Cart</span>
                <span className="text-tiny font-mono text-gray-500">24px</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icons.Heart className="text-soft-terracotta" />
                <span className="text-tiny">Heart</span>
                <span className="text-tiny font-mono text-gray-500">24px</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icons.Search className="text-soft-terracotta" />
                <span className="text-tiny">Search</span>
                <span className="text-tiny font-mono text-gray-500">24px</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icons.User className="text-soft-terracotta" />
                <span className="text-tiny">User</span>
                <span className="text-tiny font-mono text-gray-500">24px</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icons.Menu className="text-soft-terracotta" />
                <span className="text-tiny">Menu</span>
                <span className="text-tiny font-mono text-gray-500">24px</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icons.Star className="text-soft-terracotta" />
                <span className="text-tiny">Star</span>
                <span className="text-tiny font-mono text-gray-500">24px</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icons.Truck className="text-soft-terracotta" />
                <span className="text-tiny">Truck</span>
                <span className="text-tiny font-mono text-gray-500">24px</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icons.Package className="text-soft-terracotta" />
                <span className="text-tiny">Package</span>
                <span className="text-tiny font-mono text-gray-500">24px</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icons.Sustainable className="text-sage-green" />
                <span className="text-tiny">Eco</span>
                <span className="text-tiny font-mono text-gray-500">24px</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icons.Secure className="text-warm-charcoal" />
                <span className="text-tiny">Secure</span>
                <span className="text-tiny font-mono text-gray-500">24px</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icons.Returns className="text-warm-charcoal" />
                <span className="text-tiny">Returns</span>
                <span className="text-tiny font-mono text-gray-500">24px</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icons.Check className="text-sage-green" />
                <span className="text-tiny">Check</span>
                <span className="text-tiny font-mono text-gray-500">24px</span>
              </div>
            </div>
          </Card>
        </section>

        {/* Typography Section */}
        <section>
          <h2 className="text-h2 mb-6">Typography</h2>

          <Card padding="large">
            <div className="space-y-6">
              <div>
                <h1 className="text-h1">Heading 1 - 48px</h1>
                <p className="text-small text-gray-600">
                  Font: Montserrat Light (300), Line Height: 1.2
                </p>
              </div>
              <div>
                <h2 className="text-h2">Heading 2 - 36px</h2>
                <p className="text-small text-gray-600">
                  Font: Montserrat Regular (400), Line Height: 1.3
                </p>
              </div>
              <div>
                <h3 className="text-h3">Heading 3 - 28px</h3>
                <p className="text-small text-gray-600">
                  Font: Montserrat Semi-Bold (600), Line Height: 1.4
                </p>
              </div>
              <div>
                <h4 className="text-h4">Heading 4 - 22px</h4>
                <p className="text-small text-gray-600">
                  Font: Montserrat Semi-Bold (600), Line Height: 1.5
                </p>
              </div>
              <div>
                <p className="text-body">
                  Body Text - 16px - This is the standard body text used
                  throughout the application. It has excellent readability with
                  a line height of 1.6.
                </p>
                <p className="text-small text-gray-600">
                  Font: Montserrat Regular (400), Line Height: 1.6
                </p>
              </div>
              <div>
                <p className="text-small">Small Text - 14px</p>
                <p className="text-small text-gray-600">
                  Font: Montserrat Regular (400), Line Height: 1.5
                </p>
              </div>
              <div>
                <p className="text-tiny">Tiny Text - 12px (Used in badges and labels)</p>
                <p className="text-small text-gray-600">
                  Font: Montserrat Regular (400), Line Height: 1.4
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Color Palette Section */}
        <section>
          <h2 className="text-h2 mb-6">Color Palette</h2>

          <Card padding="large">
            <div className="space-y-6">
              <div>
                <h3 className="text-h3 mb-4">Primary Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <div className="h-24 bg-warm-cream rounded-image border-2 border-gray-300"></div>
                    <p className="text-small mt-2 font-semibold">Warm Cream</p>
                    <p className="text-tiny text-gray-600">#F5F0E8</p>
                  </div>
                  <div>
                    <div className="h-24 bg-soft-white rounded-image border-2 border-gray-300"></div>
                    <p className="text-small mt-2 font-semibold">Soft White</p>
                    <p className="text-tiny text-gray-600">#FFFFFF</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-h3 mb-4">Secondary Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <div className="h-24 bg-soft-terracotta rounded-image"></div>
                    <p className="text-small mt-2 font-semibold">
                      Soft Terracotta
                    </p>
                    <p className="text-tiny text-gray-600">#D4A59A</p>
                  </div>
                  <div>
                    <div className="h-24 bg-sage-green rounded-image"></div>
                    <p className="text-small mt-2 font-semibold">Sage Green</p>
                    <p className="text-tiny text-gray-600">#A8B5A0</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-h3 mb-4">Dark Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <div className="h-24 bg-warm-charcoal rounded-image"></div>
                    <p className="text-small mt-2 font-semibold">
                      Warm Charcoal
                    </p>
                    <p className="text-tiny text-gray-600">#4A4543</p>
                  </div>
                  <div>
                    <div className="h-24 bg-deep-brown rounded-image"></div>
                    <p className="text-small mt-2 font-semibold">Deep Brown</p>
                    <p className="text-tiny text-gray-600">#3D3935</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center py-10">
          <p className="text-body text-warm-charcoal">
            Cozy Haven Design System - Complete with Dimensions ✓
          </p>
          <p className="text-small text-gray-600 mt-2">
            All components include exact pixel specifications for Figma recreation.
          </p>
          <p className="text-tiny text-gray-600 mt-2 font-mono">
            See dev-docs/COMPONENT_DIMENSIONS_SPEC.md for complete reference
          </p>
        </footer>
      </div>
    </div>
  );
}

export default DesignSystem;
