export type MenuCategory =
  | 'matcha-drinks'
  | 'coffee'
  | 'pastries'
  | 'desserts'
  | 'seasonal'
  | 'all';

export type MenuBadge = 'best-seller' | 'new' | 'popular' | null;

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  imagePath: string;
  badge?: MenuBadge;
  price?: number;
  featured?: boolean;
  sortOrder?: number;
}

export interface MenuData {
  categories: {
    id: MenuCategory;
    name: string;
    icon?: string;
  }[];
  items: MenuItem[];
}
