---
name: Executive FinTech Identity
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001e2f'
  on-tertiary-container: '#008cc7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

The design system is engineered to project unwavering authority, precision, and institutional trust. It is tailored for high-stakes corporate banking environments where clarity and reliability are paramount. The aesthetic follows a **Corporate / Modern** philosophy, emphasizing structured information density without sacrificing visual elegance.

The visual narrative is built on the concept of "Digital Stability." This is achieved through a rigorous alignment to a geometric grid, a sophisticated and restrained color palette, and a focus on high-contrast legibility. The interface should feel expensive and secure, avoiding trendy flourishes in favor of timeless, functional excellence.

## Colors

The palette is anchored by "Deep Navy" and "Slate Gray," colors traditionally associated with financial stability and institutional strength.

- **Primary (Deep Navy):** Used for primary actions, navigation backgrounds, and high-level headers to establish the brand's core identity.
- **Secondary (Slate):** Utilized for supporting UI elements, secondary buttons, and icons to provide depth without competing with the primary navy.
- **Tertiary (Financial Blue):** A brighter blue reserved for success states, interactive links, and data visualization highlights.
- **Neutrals:** A range of crisp whites and slate grays are used to manage information hierarchy and white space.

**Dark Mode Implementation:**
In dark mode, the background shifts to a deep Slate-950 (#020617). Card surfaces and containers utilize Slate-900 (#0F172A). Borders should remain subtle, using Slate-800 to define structure without creating visual noise.

## Typography

The design system utilizes **Hanken Grotesk** across all touchpoints. Its sharp terminals and contemporary geometry provide a high-end, tech-forward feeling while remaining exceptionally legible for complex financial data.

- **Headlines:** Set with tight letter-spacing and semi-bold weights to command attention.
- **Body Text:** Standardized at 16px for optimal readability in data-heavy views.
- **Labels:** Small caps and increased tracking are used for metadata and category labels to distinguish them from actionable body text.
- **Numerical Data:** Tabular figures should be enabled to ensure columns of currency align perfectly in tables and statements.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop to maintain a controlled, professional presentation of data.

- **Grid:** A 12-column grid system with 24px gutters.
- **Rhythm:** An 8px linear scale governs all padding and margin decisions, ensuring mathematical harmony across the UI.
- **Responsiveness:**
  - **Desktop (1280px+):** Fixed centered container with 40px side margins.
  - **Tablet (768px - 1279px):** Fluid width with 32px margins; sidebar collapses into a hamburger menu or bottom bar.
  - **Mobile (Below 768px):** Single column reflow with 16px margins. Headlines scale down as defined in the typography tokens.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines** rather than aggressive shadows. This maintains a flat, architectural feel.

- **Level 0 (Background):** Slate-50 in light mode / Slate-950 in dark mode.
- **Level 1 (Cards/Surfaces):** White in light mode / Slate-900 in dark mode. These use a 1px border (Slate-200 / Slate-800) to define edges.
- **Level 2 (Popovers/Modals):** Subtle ambient shadows (0 10px 15px -3px rgba(0,0,0,0.1)) are introduced only for elements that physically sit above the primary interface.
- **Glassmorphism:** Use a 12px backdrop blur on navigation bars and sticky headers to provide a sense of modern depth without distracting from the content.

## Shapes

The design system uses a **Soft** shape language.

- **Standard Elements:** 0.25rem (4px) corner radius for buttons and input fields to maintain a crisp, professional edge.
- **Containers:** 0.5rem (8px) for cards and large surface areas to provide a subtle modern touch without feeling "bubbly."
- **Status Badges:** Completely square or very slightly rounded (2px) to signify "industrial" precision.

## Components

### Buttons
- **Primary:** Solid Deep Navy background, white text, 4px radius. High-contrast hover state (Slate-800).
- **Secondary:** Slate-200 background (Light) or Slate-800 (Dark), subtle 1px border.

### Card-Based Grids
Cards are the primary container for data. They must feature a 1px border and consistent 24px internal padding. Headers within cards should use the `label-sm` style for categorization.

### Vertical Timelines
Used for transaction history or audit trails. Lines should be 1px wide in Slate-300. Nodes (points) use the Primary color for completed actions and Neutral for pending ones.

### Professional Forms
Inputs use a "floating label" or a clearly defined top-aligned label using `label-md`. Focus states must be high-contrast, using a 2px offset ring in Financial Blue.

### Status Badges
Small, high-visibility indicators.
- **Success:** Deep Emerald text on light mint background.
- **Pending:** Slate-600 text on Slate-100 background.
- **Alert:** Crimson text on soft red background.
Badges should use `label-sm` typography with no icons to keep the interface clean.

### Data Tables
The backbone of the banking experience. Rows should feature subtle hover highlights and thin horizontal dividers only. Column headers use `label-sm` with a light gray background tint.