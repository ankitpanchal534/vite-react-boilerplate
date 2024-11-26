import {
  BarChart,
  Calendar,
  Home,
  MessageCircleIcon,
  User,
} from "lucide-react";
import { FcServices } from "react-icons/fc";
import { GrDocumentPerformance } from "react-icons/gr";

export const navigationItems = [
  { title: "Home", icon: Home, url: "/home" },
  { title: "Bookings", icon: Calendar, url: "/bookings" },
  { title: "Priority DM", icon: MessageCircleIcon, url: "/dm" },
  { title: "Forms", icon: GrDocumentPerformance, url: "/forms" },
  { title: "Analytics", icon: BarChart, url: "/analytics" },
  { title: "Calendar", icon: Calendar, url: "/calendar" },
  { title: "Services", icon: FcServices, url: "/services" },
  { title: "Profile", icon: User, url: "/my-profile" },
];
