import type { NavLink, NavbarCTA } from "../types/navbarData";

export const navbarLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Feature", href: "#feature" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Blog", href: "/blogs" },
  { name: "Employees", href: "#contact-us" },
];

export const navbarCTAs: NavbarCTA = {
  primary: { label: "Get Me Interview →", href: "/contact-us" },
  secondary: { label: "See Flashfire in Action →", href: "#demo" },
};
