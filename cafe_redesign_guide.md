# Bean Haven Café — Website Design Replication Guide

A detailed instructional breakdown of every visual, layout, and component decision in this design, so you can faithfully recreate it (or adapt it) for your own project.

---

## 1. Brand Identity & Design Language

### Concept
This is a **premium-yet-approachable** café brand. The design sits between editorial magazine and modern e-commerce — bold headlines, warm photography, and a structured grid that feels confident without being stiff.

### Tone
- Warm, rich, slightly earthy
- Bold typography-first layout
- Product-centric with lifestyle storytelling

---

## 2. Color Palette

| Role | Color | Hex |
|---|---|---|
| Primary Background | Deep Forest Green | `#1A3A2A` |
| Accent / CTA | Golden Yellow | `#F5C518` |
| Surface / Cards | Warm Cream | `#F5EDD6` |
| Text on Dark | Pure White | `#FFFFFF` |
| Text on Light | Near Black | `#1A1A1A` |
| Muted Text | Medium Gray | `#6B6B6B` |
| Card Background | Off-white / Tan | `#F0E8D0` |

**CSS Variables to define:**
```css
:root {
  --color-primary: #1A3A2A;
  --color-accent: #F5C518;
  --color-cream: #F5EDD6;
  --color-surface: #F0E8D0;
  --color-text-dark: #1A1A1A;
  --color-text-muted: #6B6B6B;
  --color-white: #FFFFFF;
}
```

---

## 3. Typography

### Font Pairing
- **Headlines**: A heavy sans-serif, all-caps — use `Oswald`, `Barlow Condensed ExtraBold`, or `Anton`
- **Body / Sub-copy**: Clean, readable sans — use `DM Sans`, `Nunito`, or `Lato`
- **Accent labels** (e.g., "Arabica", "Robusta"): Small caps, muted, light weight

### Type Scale
```css
/* Display */
.hero-headline   { font-size: clamp(3rem, 7vw, 6rem); font-weight: 900; line-height: 1.0; text-transform: uppercase; }

/* Section titles */
.section-title   { font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 700; }

/* Body */
.body-text       { font-size: 0.9rem; line-height: 1.6; font-weight: 400; }

/* Labels */
.label-small     { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-muted); }
```

### Headline Treatment
The hero headline uses a **two-color word technique**:
- "BEST COFFEE" is underlined with a yellow wavy/brush stroke (SVG or `text-decoration` + custom underline)
- All other words are plain white

---

## 4. Layout & Grid

### Overall Structure
- Max content width: `1280px`, centered
- Base padding: `20px` horizontal on mobile, `60–80px` on desktop
- Sections stack vertically with generous vertical spacing (`80–120px` between sections)

### Navigation Bar
```
[Logo Left]     [Links Center]     [CTA Button Right]
```
- Background: Transparent over hero, white on scroll
- Nav links: Small, spaced, weight 500
- CTA: Yellow pill button (`border-radius: 50px`) with dark text

### Hero Section
```
[Left: Headline + description + bullet points + CTA]
[Right/Center: Large product photo (coffee cup) — absolutely positioned, overlapping]
```
- Background: Dark green (`--color-primary`)
- The coffee cup photo should overflow out of the section container or be z-indexed above it
- Three green checkmark bullet points with short feature descriptions

### Trust Bar (Logo Strip)
```
[Tagline Left] [Partner logos scrolling/static — center/right]
```
- Full-width yellow background (`--color-accent`)
- Logos in muted dark color, evenly spaced
- Simple `display: flex; justify-content: space-between; align-items: center;`

### About / Feature Split Section
```
[Left column: photos stacked/collaged]     [Right column: text + CTA]
```
- White or cream background
- Two overlapping or stacked photos on left (use `position: relative` + offset cards)
- Right column: headline, body text, `Explore Our Product` button (yellow outline style)

### Rotating Banner / Marquee Strip
```
[Icon + Text] [Icon + Text] — repeating, yellow background
```
- Second yellow strip mid-page
- Alternates between coffee cup icon + "Dive into Our Café" and beans icon + "Perk Up Your Café Experience"
- Can be implemented as CSS marquee or static flex row

### "Why We Are Different" Section
```
[2x2 icon grid — Left]     [Product photo — Center]     [2x2 icon grid — Right]
```
- Cream/off-white background
- Each quadrant: icon + bold title + short description
- Center: large coffee cup photo with subtle drop shadow

### Stats Bar
```
[Number + Label]    [Number + Label]    [Map Illustration]
```
- Very large bold number (e.g. "48"), label beneath
- Icon + label for 120 Employees, 10 Years
- Right: USA map with location pin markers (use an SVG map or image)

### Products Grid — "Explore Recent Products"
```
[Card] [Card] [Card] [Card] — 4 columns on desktop
```
- Cream oval/circle background behind each product bag
- Product type label (e.g. "Arabica") in muted text above name
- Star rating (use ★ chars or SVG stars)
- Price in bold
- Arrow button on third card (featured / highlighted) with a dark circle button

---

## 5. Component Specifications

### CTA Button Variants
```css
/* Primary — Yellow */
.btn-primary {
  background: var(--color-accent);
  color: var(--color-text-dark);
  padding: 12px 28px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.85rem;
  border: none;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(245, 197, 24, 0.4);
}

/* Outline variant */
.btn-outline {
  background: transparent;
  border: 2px solid var(--color-accent);
  color: var(--color-accent);
  /* same padding/radius */
}
```

### Product Card
```css
.product-card {
  background: transparent;
  text-align: center;
  padding: 16px;
}
.product-card .bg-oval {
  background: var(--color-surface);
  border-radius: 50%;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}
.product-card img { height: 140px; object-fit: contain; }
.product-card .type-label { font-size: 0.7rem; color: var(--color-text-muted); margin-bottom: 4px; }
.product-card .name { font-weight: 700; font-size: 1rem; margin-bottom: 6px; }
.product-card .stars { color: var(--color-accent); font-size: 0.85rem; }
.product-card .price { font-weight: 800; font-size: 1rem; margin-top: 6px; }
```

### Checkmark Feature List (Hero)
```css
.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 12px;
  color: var(--color-white);
  font-size: 0.85rem;
}
.feature-list .check-icon {
  color: var(--color-accent);
  font-size: 1.1rem;
  margin-top: 1px;
  flex-shrink: 0;
}
```

---

## 6. Imagery Direction

- **Hero**: Full coffee drink (latte/caramel frappé style) in tall glass, shot against neutral, warm tones
- **About section**: Café interior shots or overhead bean/equipment shots, slightly warm-toned
- **Products**: Flat-lay or slight 3/4 angle of coffee bags on transparent/white background
- **Center feature**: Clean product cup shot on cream/beige background
- **Map**: Illustrated SVG USA map in warm tan/beige tones with yellow dot markers

**Photography tone**: Warm, slightly desaturated golds and browns. Avoid cool blues or stark whites.

---

## 7. Spacing System

Use a consistent 8px base grid:

```css
:root {
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 48px;
  --space-xl: 80px;
  --space-2xl: 120px;
}
```

---

## 8. Section-by-Section Build Order (Recommended)

1. **Set up CSS variables** (colors, fonts, spacing)
2. **Navigation** (logo, links, CTA button)
3. **Hero section** (dark green bg, headline, bullets, coffee image)
4. **Trust/logo bar** (yellow strip, partner names)
5. **About split** (photos + text)
6. **Marquee strip** (icons + text alternating on yellow)
7. **Why We're Different** (2x2 grids + center image)
8. **Stats bar** (big numbers + map)
9. **Products grid** (4-column cards)
10. **Footer** (links, social, copyright)

---

## 9. Animation / Motion Suggestions

- **Hero text**: Fade + slide up on load (`opacity: 0 → 1`, `translateY(20px) → 0`)
- **Product cards**: Subtle hover lift (`transform: translateY(-6px)`, `box-shadow` increase)
- **Logo strip**: Optional auto-scroll marquee using `@keyframes scroll`
- **CTA buttons**: Scale + shadow on hover
- **Stats numbers**: Animate count-up on scroll into view (use `IntersectionObserver`)

---

## 10. Responsive Breakpoints

```css
/* Mobile first */
@media (min-width: 640px)  { /* Tablet portrait */ }
@media (min-width: 768px)  { /* Tablet landscape */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Wide desktop */ }
```

On mobile:
- Hero: Stack vertically, coffee image above headline or as background
- Products: 2-column grid → 1 column on small mobile
- "Why Different" grid: single column
- Stats bar: Stack vertically

---

## 11. Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700;900&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
```

```css
body        { font-family: 'DM Sans', sans-serif; }
h1, h2, h3  { font-family: 'Oswald', sans-serif; }
```

---

*Use this guide as the specification doc when prompting Claude to build individual sections. Feed it one section at a time with the relevant color variables and component specs for best results.*