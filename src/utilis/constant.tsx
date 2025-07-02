import {
  AnalyticsIcon,
  BeawareByDesignIcon,
  CalendarIcon,
  CommunityIcon,
  HumanFirstIcon,
  OneIcon,
  PartnershipIcon,
  RoleCreationIcon,
  SimplicityIcon,
  SmartIcon,
  SpeedWithPurposeIcon,
  StructuredIcon,
  ThreeIcon,
  TwoIcon,
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
    bgClass: "bg-neutral-100",
    glowColor: "bg-orchid",

    icon: RoleCreationIcon,
  },
  {
    title: "Smart Collaboration",
    description:
      "Tulip's technology keeps your hiring team in sync with intelligent reminders, context-rich candidate views, and automated nudges.",
    bgClass: "bg-accent-green",

    icon: CommunityIcon,
  },
  {
    title: "Frictionless Scheduling",
    description:
      "Our system learns from your workflow to reduce bottlenecks and eliminate repetitive coordination.",
    bgClass: "bg-neutral-100",
    glowColor: "bg-orange",

    icon: CalendarIcon,
  },
  {
    title: "Structured, Bias-Aware Feedback",
    description:
      "Collect real-time input with smart scorecards that surface insights and reduce groupthink.",
    bgClass: "bg-neutral-100",
    glowColor: "bg-accent-red",
    icon: StructuredIcon,
  },
  {
    title: "Actionable Analytics",
    description:
      "Tulip surfaces key signals, not noise, so you can see what's working, spot bottlenecks, and improve continuously.",
    bgClass: "bg-neutral-100",
    glowColor: "bg-accent-blue",
    icon: AnalyticsIcon,
  },
  {
    title: "Smart Interviewing & Feedback",
    description:
      "Guide structured interviews with AI-built plans and capture consistent feedback through intelligent scorecards that surface key insights.",
    bgClass: "bg-neutral-100",
    glowColor: "bg-accent-tulip",
    icon: SmartIcon,
  },
];

export const STEPS = [
  {
    number: "1",
    title: "Create Roles with Clarity and Context",
    description:
      "Our AI-enhanced templates help define roles with real substance cutting down on revisions and rework later.",
    icon: OneIcon,
  },
  {
    number: "2",
    title: "Run Interviews That Flow Naturally",
    description:
      "Tulip builds structured interview plans and intelligently nudges your team to keep the process moving.",
    icon: TwoIcon,
  },
  {
    number: "3",
    title: "Make Decisions with Confidence",
    description:
      "Candidate feedback is organized, structured, and summarized so you can trust your signals, not your gut alone.",
    icon: ThreeIcon,
  },
];
export const FEATURES_FIRST_ROW = [
  {
    title: "Human-first",
    description:
      "We prioritize real people, not just data points, in every product decision.",
    icon: HumanFirstIcon,
  },
  {
    title: "Speed with purpose",
    description:
      "Tulip helps teams move quickly, while staying aligned and intentional.",
    icon: SpeedWithPurposeIcon,
  },
  {
    title: "Simplicity that scales",
    description:
      "We build tools that feel light and intuitive, even as your organization grows.",
    icon: SimplicityIcon,
  },
];
export const FEATURES_SECOND_ROW = [
  {
    title: "Bias-aware by design",
    description:
      "Structured, inclusive processes aren't a feature, they're our foundation.",
    icon: BeawareByDesignIcon,
  },
  {
    title: "Built in partnership",
    description:
      "We shape our roadmap through direct conversations with the teams who use Tulip every day.",
    icon: PartnershipIcon,
  },
];
