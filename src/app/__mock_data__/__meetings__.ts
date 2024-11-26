import { Calendar, Clock, Users } from "lucide-react";
import { GrMoney } from "react-icons/gr";

export const __fake_meetings = [
  {
    label: "Total Bookings",
    value: "156",
    icon: Users,
    color: "bg-rose-50 ", // Light pastel rose - soft and calming
  },
  {
    label: "Upcoming",
    value: "28",
    icon: Calendar,
    color: "bg-lime-50 ", // Light pale lime - refreshing and soothing
  },
  {
    label: "This Week",
    value: "42",
    icon: Clock,
    color: "bg-cyan-50 ", // Light pale cyan - cool and serene
  },
  {
    label: "Revenue",
    value: "₹45,250",
    icon: GrMoney,
    color: "bg-purple-50 ", // Light coral - warm and inviting
  },
];
