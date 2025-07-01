import {
  AnalyticsIcon,
  CalendarIcon,
  CommunityIcon,
  RoleCreationIcon,
  SmartIcon,
  StructuredIcon,
} from "@/components/icons";

export const NAV_ITEMS = [
  { label: "About", href: "#" },
  { label: "Product", href: "#" },
  { label: "How It Works", href: "#" },
];

export const CAPABILITIES_FEATURES = [
  {
    title: "Role Creation with Context",
    description:
      "Use guided, AI-enhanced templates to define roles clearly and align teams from the start.",
    bg: "bg-light-gray",
    icon: RoleCreationIcon,
    circleclassName:
      "bg-orchid w-[186px] h-[186px] top-[-112px] left-[70%]  blur-[60px]",
  },
  {
    title: "Smart Collaboration",
    description:
      "Tulip's technology keeps your hiring team in sync with intelligent reminders, context-rich candidate views, and automated nudges.",
    bg: "bg-accent-green",
    icon: CommunityIcon,
  },
  {
    title: "Frictionless Scheduling",
    description:
      "Our system learns from your workflow to reduce bottlenecks and eliminate repetitive coordination.",
    bg: "bg-light-gray",
    icon: CalendarIcon,
  },
  {
    title: "Structured, Bias-Aware Feedback",
    description:
      "Collect real-time input with smart scorecards that surface insights and reduce groupthink.",
    bg: "bg-light-gray",
    icon: StructuredIcon,
  },
  {
    title: "Actionable Analytics",
    description:
      "Tulip surfaces key signals, not noise, so you can see what's working, spot bottlenecks, and improve continuously.",
    bg: "bg-light-gray",
    icon: AnalyticsIcon,
  },
  {
    title: "Smart Interviewing & Feedback",
    description:
      "Guide structured interviews with AI-built plans and capture consistent feedback through intelligent scorecards that surface key insights.",
    bg: "bg-light-gray",
    icon: SmartIcon,
  },
];
