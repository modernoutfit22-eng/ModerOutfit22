export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: number;
  previousPrice?: number;
  image: string;
  sizes: string[];
  featured?: boolean;
  isNew?: boolean;
}