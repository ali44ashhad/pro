import {
  BookOpen,
  DollarSign,
  PieChart,
  ShieldCheck,
  FileText,
  Cpu,
  TrendingUp,
  Building2,
  Home,
  HeartPulse,
  Tag,
  ShoppingCart,
  Cog,
  Briefcase,
  Gift,
  LifeBuoy,
  Wrench,
  Cloud,
  Banknote,
  Scale,
  Users,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  // QuickBooks services
  lifebuoy: LifeBuoy,
  wrench: Wrench,
  building: Building2,
  cloud: Cloud,
  banknotes: Banknote,
  book: BookOpen,
  scale: Scale,
  document: FileText,
  users: Users,
  chart: BarChart3,
  // legacy / generic service keys
  dollar: DollarSign,
  pie: PieChart,
  shield: ShieldCheck,
  file: FileText,
  cpu: Cpu,
  trending: TrendingUp,
  // industries
  home: Home,
  heart: HeartPulse,
  tag: Tag,
  cart: ShoppingCart,
  cog: Cog,
  briefcase: Briefcase,
  gift: Gift,
};

interface IconProps {
  name: string;
  className?: string;
}

/** Renders a lucide icon by its data key. Falls back to a neutral icon. */
const Icon = ({ name, className }: IconProps) => {
  const Cmp = map[name] ?? FileText;
  return <Cmp className={className} />;
};

export default Icon;
