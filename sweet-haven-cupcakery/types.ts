export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Classic' | 'Seasonal' | 'Dozen Boxes' | 'Mini Bites';
  image: string;
  isNew?: boolean;
  isSeasonal?: boolean;
}

export interface FlavorCardProps {
  name: string;
  tagline: string;
  description: string;
  price: string;
  image: string;
  badges?: string[];
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  rating: number;
}