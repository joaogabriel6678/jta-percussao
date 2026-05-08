export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface Product {
  name: string;
  desc: string;
  badge: string;
  featured?: boolean;
  img: string;
}

export interface Accessory {
  cat: string;
  name: string;
  desc: string;
  img: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}
