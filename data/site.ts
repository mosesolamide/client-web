import {
  BarChart3,
  Boxes,
  Handshake,
  Lightbulb,
  MapPinned,
  Megaphone,
  PackageCheck,
  SearchCheck,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export const site = {
  name: "TCMS Limited",
  legalName: "Trade and Consumer Marketing Services Limited",
  description:
    "Trade and consumer marketing solutions that help brands strengthen channels, connect with customers, and grow across Nigeria and Sub-Saharan Africa.",
  email: "info@tcmslimited.com",
  phonePrimary: "+234 805 328 2000",
  phoneSecondary: "+234 809 348 2000",
  phonePrimaryHref: "+2348053282000",
  phoneSecondaryHref: "+2348093482000",
  address: "No. 7 Adedotun Dina Street, Mende, Maryland, Lagos, Nigeria.",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our work", href: "/projects" },
  { label: "About", href: "/about-us" },
];

export const services = [
  {
    title: "Marketing consulting",
    short: "Clear market strategies built around your brand, customers, and growth objective.",
    description:
      "We help teams turn market opportunities into focused trade and consumer plans, aligning strategy, channels, activation, and measurement.",
    outcomes: ["Go-to-market planning", "Channel strategy", "Campaign direction"],
    icon: Lightbulb,
  },
  {
    title: "Trade marketing",
    short: "Stronger relationships and sharper execution across retail and trade channel.",
    description:
      "From trade promotions to in-market execution, we help brands to improve trade engagement, visibility and performance at point of purchase.",
    outcomes: ["Trade promotions", "Retail execution", "Channel engagement"],
    icon: Handshake,
  },
  {
    title: "Consumer activation",
    short: "Human experiences that connect brands with the consumer they want to connect with.",
    description:
      "We plan and deliver consumer experiences and initiatives designed to build awareness, encourage trial, and create impactful brand interactions.",
    outcomes: ["Brand activation", "Product experiences", "Consumer engagement"],
    icon: Megaphone,
  },
  {
    title: "Territory development",
    short: "Structured expansion into new territories, neighbourhoods, and trade channels.",
    description:
      "We support as they assess, penetrate, and develop territories with coordinated field teams and in market awareness execution.",
    outcomes: ["Territory mapping", "Route-to-market support", "Field coordination"],
    icon: MapPinned,
  },
  {
    title: "Distribution",
    short: "Coordinated Movement and market delivery that keeps campaigns on track at point of sales.",
    description:
      "Our distribution support connects campaign plans to practical market delivery, helping products to reach the right destination.",
    outcomes: ["Distribution management", "Activation", "Market delivery"],
    icon: PackageCheck,
  },
  {
    title: "Research & audit services",
    short: "Ground-level insight to understand markets, measure execution, And enable decision making.",
    description:
      "We combine market research, field engagement, and retains audits to give teams a clearer view of opportunities.",
    outcomes: ["Market research", "Retail audits", "Performance insight"],
    icon: SearchCheck,
  },
];

export const values = [
  {
    title: "Excellence",
    description: "We pursue high standards and deliver work designed to exceed expectations.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    description: " We use insightful thinking to create smarter, more effective solutions.",
    icon: Lightbulb,
  },
  {
    title: "Integrity",
    description: "We build trust through honesty, transparency, and accountability.",
    icon: Handshake,
  },
  {
    title: "Teamwork",
    description: "We believe meaningful results come through close, open collaboration.",
    icon: UsersRound,
  },
];

export const engagementTypes = [
  {
    number: "01",
    title: "Strategy to market",
    description:
      "Translate a growth objective into an executable trade and consumer plan, with roles, channels, and measures clearly defined.",
    icon: BarChart3,
  },
  {
    number: "02",
    title: "Activation at scale",
    description:
      "Coordinate field teams, consumer touchpoints, materials, and logistics for consistent delivery across locations.",
    icon: UsersRound,
  },
  {
    number: "03",
    title: "Market expansion",
    description:
      "Assess and develop territories with practical route-to-market support and local execution knowledge.",
    icon: MapPinned,
  },
  {
    number: "04",
    title: "Insight to improvement",
    description:
      "Use research and audits to understand what is happening in-market, then turn findings into focused action.",
    icon: Boxes,
  },
];
