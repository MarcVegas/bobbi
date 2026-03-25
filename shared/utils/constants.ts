export const THEME = {
  colors: {
    primary: '#5aa84a',
    secondary: '#7ec26e',
    accent: '#d4af37',
    black: '#1a1a1a',
    cream: '#faf8f5',
  },
  breakpoints: {
    mobile: 640,
    tablet: 768,
    desktop: 1024,
    wide: 1280,
  },
  spacing: {
    sectionPadding: {
      mobile: '4rem',
      desktop: '8rem',
    },
  },
  animation: {
    duration: {
      fast: 200,
      normal: 300,
      slow: 500,
    },
    easing: {
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },
} as const;

export const MENU_CONFIG = {
  categoriesPerRow: {
    mobile: 2,
    tablet: 4,
    desktop: 6,
  },
  bentoGrid: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    wide: 4,
  },
  cardStack: {
    maxVisible: 3,
    rotationDegrees: 2,
    offsetY: 12,
  },
} as const;

export const CAFE_INFO = {
  name: 'Bobbi Cafe',
  address: '123 Main Street, City, State 12345',
  phone: '+1 (555) 123-4567',
  email: 'hello@bobbicafe.com',
  hours: {
    weekday: 'Monday - Friday: 7:00 AM - 7:00 PM',
    weekend: 'Saturday - Sunday: 8:00 AM - 8:00 PM',
  },
  social: {
    instagram: 'https://instagram.com/bobbicafe',
    facebook: 'https://facebook.com/bobbicafe',
    twitter: 'https://twitter.com/bobbicafe',
  },
  delivery: {
    uberEats: '#',
    doorDash: '#',
    grubHub: '#',
  },
} as const;
