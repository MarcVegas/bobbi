export type MenuCategory = 'matcha' | 'coffee' | 'all';

export type MenuBadge = 'best-seller' | 'new' | 'popular' | null;

export interface PriceOption {
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  subcategory: string;
  subcategoryLabel: string;
  prices: PriceOption[];
  badge?: MenuBadge;
  featured?: boolean;
  sortOrder?: number;
  imagePath?: string;
  price?: number;
}

export interface MenuData {
  items: MenuItem[];
}
