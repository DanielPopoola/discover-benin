Design a full-page tourism website called "Discover Benin" for the 
Republic of Benin, West Africa. Produce the following pages as 
complete, production-ready designs:

1. Homepage
2. Attraction detail page
3. Hotels listing page
4. Travel guide page
5. Contact page

---

VISUAL IDENTITY

Aesthetic direction: warm editorial travel magazine. Think National 
Geographic meets West African textile craft. Refined, not rustic. 
Authoritative, not corporate.

Color palette:
- Primary: Terracotta #C4622D
- Dark: Forest green #2D5016
- Background: Warm cream #F5EFE0
- Accent: Antique gold #D4A827
- Text primary: Near-black #1A1A1A
- Text secondary: Warm brown #5C3A1E

Typography:
- Display / headings: Playfair Display (serif), italic for emphasis
- Body / UI: DM Sans, weight 300–500 only
- Labels / tags: DM Mono, uppercase, tracked

Texture and depth:
- Subtle dot-grid or diagonal line pattern overlays on dark sections
- Section backgrounds alternate between cream, white, and forest green
- Hero sections use layered image panels (2x2 grid of destination photos 
  on the right, text anchored left)
- Cards use 20px border radius, 1px warm border, soft shadow on hover

Motion intent (annotate in Figma or describe for v0/Lovable):
- Hero text fades up staggered on load
- Card hover lifts 6px with shadow deepening
- Nav becomes dark + blurred on scroll

---

LAYOUT SYSTEM

Grid: 12-column, max-width 1280px, 2rem gutters
Spacing scale: 4 / 8 / 16 / 24 / 32 / 48 / 64 / 80 / 128px
Border radius: 8px default, 16px cards, 100px pills/badges

Navigation (fixed, full-width):
- Logo left: "Discover" + "Benin" (Benin in gold)
- Links center-right: Attractions · Hotels · Restaurants · Travel 
  Guide · Contact
- Language toggle (EN / FR) as a small pill switcher
- "Plan Trip" CTA button in terracotta, right-most
- Transparent on hero, dark-glass on scroll

---

PAGE 1: HOMEPAGE

Hero section (100vh):
- Left 50%: headline stack + search bar + stats row
- Right 50%: 2x2 panel grid of destination photos with a dark overlay 
  gradient blending left
- Headline: "Discover the Beauty of Benin" in Playfair Display 56px, 
  white, with "Beauty of Benin" italicised
- Subheadline: 18px DM Sans light, rgba white 75%, max 480px wide
- Search bar: white pill, 520px wide, terracotta search button right
- Stats row below search: 3 items — "50+ Attractions", "200+ Hotels", 
  "12 Destinations" in white, number in Playfair 32px
- Animated scroll indicator at bottom center

Category bar (white background, 80px tall):
- 6 icon + label cards in a row: Attractions · Hotels · Restaurants · 
  Heritage · Travel Tips · Gallery
- Each card: 52px icon on a tinted rounded square, label in DM Sans 
  12px, hover lifts with terracotta border

Top Destinations section:
- Section label: small terracotta line + uppercase tag
- Section title: "Top Destinations in Benin" in Playfair 40px
- Card grid: asymmetric — first card spans 2 columns (featured), 
  remaining 4 cards single column
- Each card: full-bleed destination photo, badge top-left 
  (eg "UNESCO Reserve"), save heart top-right, location + name 
  overlaid bottom-left in white, rating + travel time in card body below

Map teaser section (forest green background):
- 2-column layout: left = text + feature list, right = Benin map 
  illustration with glowing location pins
- Pins animate pulse on load
- CTA button: "Open Full Map" in terracotta

Travel guide strip (cream background):
- 3-column card grid, each card: large emoji icon, serif title, 
  body text, terracotta tag link
- Topics: Culture · Languages · Currency · Food · Transport · Safety

Hotels section:
- 4-column card grid
- Each card: photo top, star rating overlay bottom-left, hotel name, 
  city, price per night, rating score
- Hover: image zooms slightly, card lifts

AI Travel Assistant section (dark forest green card, full width):
- Left: badge "AI-Powered", serif headline, description, text input + 
  "Generate" button in gold
- Right: 3 suggestion chips with icon, title, and sub-label
- Radial gold glow in top-right corner of the card

Events calendar strip:
- 4 cards in a row
- Each: colored header with emoji + date badge (white card, day number 
  large serif, month small caps), category tag, event name, location

Footer (near-black background):
- 4-column: brand + description left, 3 link columns right
- Bottom bar: copyright left, legal links right
- Warm 8% white border-top separating footer

---

PAGE 2: ATTRACTION DETAIL

Hero (65vh): full-bleed destination image, dark gradient overlay 
bottom-to-top, breadcrumb top-left, large title + meta row 
(region · rating · travel time · best season) anchored bottom-left

2-column body layout (70/30 split):
Left column:
- 3-photo gallery grid (first photo spans full width, two below side 
  by side)
- "About [Destination]" section with long-form description
- Travel tips as a styled unordered list
- Nearby hotels list (icon + name + distance)
- Nearby restaurants list

Right column (sticky sidebar):
- Quick facts card: category, region, best time, travel time, rating
- Map embed card with "Get Directions" button
- Weather card: dry season vs rainy season temps

---

PAGE 3: HOTELS LISTING

Page header: cream background, section label + title + filter bar
Filter bar: pill toggles for City · Star rating · Price range

4-column card grid:
- Each hotel card: photo, star rating overlay, hotel name bold, 
  city with pin icon, price per night, rating score
- Active filter state changes pill to terracotta filled

---

PAGE 4: TRAVEL GUIDE

Split hero: left forest green panel with serif headline and intro 
text, right cream panel with a stylised illustrated Benin map

6-section guide grid (2 columns x 3 rows):
Each section card: emoji icon large, serif title, body text paragraph, 
terracotta "Read more" link

Featured city strip: horizontal scroll row of 4 city cards 
(Cotonou · Porto-Novo · Ouidah · Abomey), each with photo, 
city name, and 1-line description

---

PAGE 5: CONTACT

2-column layout: left = contact details + social links, 
right = contact form card

Contact form card (white, 20px radius, subtle shadow):
- 2-column name + email row
- Subject field full width  
- Message textarea
- "Send Message" button full width in terracotta

Contact details left:
- 4 items with icon on tinted rounded square: Email · Phone · 
  Address · Hours
- Social links row: 4 icon buttons

---

COMPONENT SPECIFICATIONS

Buttons:
- Primary: terracotta fill, white text, 8px radius, 600 16px DM Sans
- Outline: terracotta border + text, transparent fill, same radius
- Ghost: no border, terracotta text on hover

Badges / tags:
- Destination badge: terracotta fill, white text, 100px radius, 
  DM Mono 11px uppercase
- Category tag: terracotta text, no fill, DM Mono 11px uppercase, 
  terracotta line left

Cards:
- Border: 1.5px solid rgba(92,58,30,0.15)
- Radius: 20px
- Hover shadow: 0 20px 60px rgba(0,0,0,0.12)
- Hover transform: translateY(-6px)

Form inputs:
- Border: 1.5px solid rgba(92,58,30,0.15)
- Radius: 10px
- Background: #FAF6EE (cream light)
- Focus: terracotta border, white background

---

RESPONSIVE BREAKPOINTS (annotate in designs)

Desktop: 1280px (primary design target)
Tablet: 768px — 2-column collapses to 1, hero panels stack
Mobile: 375px — single column, nav becomes hamburger, 
hero image panels hidden

---

TONE AND FEEL REFERENCES

The design should feel like:
- A well-funded destination marketing organization, not a startup
- Warm and welcoming, not corporate or cold
- Textured and editorial, not flat and minimal
- Confident use of serif typography for gravitas
- Photography-first layout — UI serves the imagery

It should NOT feel like:
- A generic travel aggregator (Booking.com aesthetic)
- A purple-gradient SaaS product
- A government tourism department circa 2012
- Over-animated or overly playful