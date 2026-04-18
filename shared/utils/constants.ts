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
  name: 'Bobbi Cafe - Matcha Slow Bar',
  address: 'GF Unit 2, Cristina Maglasang Bldg., Corner Osmeña and Arradaza St., Brgy District 10, Ormoc City, Philippines. (Landmark: Across Cristina Business Suite)',
  phone: '0924-103-8474',
  email: '',
  hours: {
    weekday: 'Monday - Sunday: 9:00 AM - 8:00 PM'
  },
  social: {
    //instagram: 'https://instagram.com/bobbicafe',
    facebook: 'https://www.facebook.com/profile.php?id=100075869505742',
    //twitter: 'https://twitter.com/bobbicafe',
  },
  delivery: {
    uberEats: '#',
    doorDash: '#',
    grubHub: '#',
  },
} as const;
