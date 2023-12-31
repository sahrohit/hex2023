export interface SponsorItem {
  icon: string;
  title: string;
  url: string;
}

export interface FeatureItem {
  description: string;
  image: any;
  title: string;
  href: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface ShowcaseSite {
  title: string;
  image: ImageMetadata;
  url: string;
}

export interface EventRegistration {
  name: string;
  description: string;
  href: string;
}
