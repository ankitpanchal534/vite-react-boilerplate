const navigationData = {
  logo: "Scheduly",
  links: [
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    // { label: "Resources", href: "#resources" }
  ],
} as const;

const heroData = {
  badge: "For Every Professional",
  title: "Your Time ",
  subTitle: "Your Way",
  description:
    "The ultimate scheduling platform for professionals across all industries",
  primaryCTA: "Get Started Free",
  secondaryCTA: "Watch Demo",
  socialProof: {
    title: "Trusted by leading companies worldwide",
    logos: ["/logo1.png", "/logo2.png", "/logo3.png", "/logo4.png"],
  },
} as const;

const professionalTypes = [
  {
    icon: "🔮",
    title: "Astrologers",
    description:
      "Schedule personal readings and consultations with automated booking",
  },
  {
    icon: "👩‍🏫",
    title: "Teachers",
    description:
      "Manage student appointments and parent-teacher meetings effortlessly",
  },
  {
    icon: "👥",
    title: "HR Professionals",
    description: "Streamline candidate interviews and team meetings",
  },
  {
    icon: "⭐",
    title: "Influencers",
    description: "Organize meet & greets and brand collaboration meetings",
  },
  {
    icon: "🎭",
    title: "Celebrities",
    description: "Handle media appearances and fan events professionally",
  },
  {
    icon: "💼",
    title: "Consultants",
    description: "Book client sessions and strategy meetings seamlessly",
  },
  {
    icon: "⚕️",
    title: "Healthcare Providers",
    description: "Manage patient appointments and consultations efficiently",
  },
  {
    icon: "💇",
    title: "Beauty Professionals",
    description: "Schedule salon appointments and beauty consultations",
  },
  {
    icon: "🏋️",
    title: "Fitness Trainers",
    description: "Organize personal training sessions and fitness classes",
  },
  {
    icon: "👨‍⚖️",
    title: "Lawyers",
    description: "Schedule client meetings and case consultations",
  },
  {
    icon: "🎨",
    title: "Artists",
    description: "Manage commission meetings and gallery showings",
  },
  {
    icon: "👨‍🏫",
    title: "Online Tutors",
    description:
      "Schedule and manage paid tutoring sessions with students worldwide",
  },
] as const;

const footerData = {
  logo: "Scheduly",
  description:
    "Empowering professionals to manage their time efficiently and grow their business.",
  socialLinks: [
    { icon: "🐦", href: "#twitter" },
    { icon: "📘", href: "#facebook" },
    { icon: "📸", href: "#instagram" },
    { icon: "💼", href: "#linkedin" },
  ],
  columns: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Integrations", href: "#integrations" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#blog" },
        { label: "Guides", href: "#guides" },
        { label: "Help Center", href: "#help" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Careers", href: "#careers" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ],
  copyright: "© 2024 Scheduly. All rights reserved.",
} as const;

const features = [
  {
    icon: "🎯",
    title: "Smart Scheduling",
    description:
      "AI-powered scheduling that learns your preferences and optimizes your calendar",
  },
  {
    icon: "🔒",
    title: "Secure Payments",
    description: "Integrated payment processing with multiple currency support",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    description: "Stay connected with native iOS and Android applications",
  },
  {
    icon: "🔄",
    title: "Calendar Sync",
    description:
      "Seamless integration with Google, Outlook, and Apple calendars",
  },
  {
    icon: "📊",
    title: "Analytics",
    description:
      "Track your growth with detailed booking and revenue analytics",
  },
  {
    icon: "🌐",
    title: "Custom Branding",
    description:
      "Personalize your booking page with your brand colors and logo",
  },
];

const steps = [
  {
    icon: "📅",
    title: "Create Your Profile",
    description:
      "Set up your professional profile with your services and availability in minutes",
  },
  {
    icon: "⚙️",
    title: "Customize Experience",
    description:
      "Tailor every aspect of your booking flow to match your unique needs",
  },
  {
    icon: "🚀",
    title: "Start Growing",
    description:
      "Share your booking link and watch your business grow automatically",
  },
];
export const landingPageData = {
  navigation: navigationData,
  hero: heroData,
  professionalTypes: professionalTypes,
  footer: footerData,
  features,
  steps,
} as const;
