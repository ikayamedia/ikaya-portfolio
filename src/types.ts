export interface Project {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  description: string;
  category: 'brand' | 'digital' | 'direction' | 'all';
  categoryLabel: string;
  year: string;
  image: string;
  services: string[];
  overview: string;
  challenge: string;
  solution: string;
  accentColor: string;
  colors: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  items: string[];
}

export type Theme = 'light' | 'dark';
