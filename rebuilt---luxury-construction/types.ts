export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  duration: string;
  image: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}