import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Calendar,
  Camera,
  Clock,
  ExternalLink,
  Eye,
  Globe,
  Instagram,
  Linkedin,
  Share2,
  Star,
} from "lucide-react";

const profileStats = [
  { label: "Profile Views", value: "2.4K", icon: Eye },
  { label: "Rating", value: "4.9", icon: Star },
  { label: "Member Since", value: "Jan 2024", icon: Calendar },
  { label: "Response Time", value: "< 1hr", icon: Clock },
];
export const socialPlatforms = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    color: "#0077B5",
    placeholder: "linkedin.com/in/username",
    prefix: "linkedin.com/in/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    color: "#E4405F",
    placeholder: "instagram.com/username",
    prefix: "instagram.com/",
  },
  {
    name: "Website",
    icon: Globe,
    color: "#000000",
    placeholder: "yourwebsite.com",
    prefix: "https://",
  },
];

// const themePresets = [
//   { name: "Ocean Blue", primary: "#0066FF", accent: "#E6F0FF" },
//   { name: "Forest Green", primary: "#00875A", accent: "#E6F6F0" },
//   { name: "Royal Purple", primary: "#9333EA", accent: "#F3E8FF" },
//   { name: "Sunset Orange", primary: "#F97316", accent: "#FFF1E7" },
//   { name: "Cherry Red", primary: "#DC2626", accent: "#FEE2E2" },
//   { name: "Midnight", primary: "#312E81", accent: "#E0E7FF" },
// ];

const ModernLayout = () => (
  <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-amber-50">
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Hero Section */}
      <motion.div
        className="relative rounded-[2rem] overflow-hidden bg-white/80 backdrop-blur-xl border shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-pink-500/10 to-amber-500/10" />
        <div className="relative p-8 sm:p-10">
          <div className="flex flex-col items-center text-center space-y-6">
            <motion.div className="relative" whileHover={{ scale: 1.05 }}>
              <Avatar className="h-32 w-32 ring-4 ring-white shadow-2xl">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback>AP</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2">
                <Button
                  size="icon"
                  className="rounded-full h-10 w-10 shadow-lg"
                >
                  <Camera className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
                Ankit Panchal
              </h1>
              <p className="text-lg text-muted-foreground">
                Professional Developer & Tech Consultant
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Button className="rounded-full bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Profile
              </Button>
              <Button variant="outline" className="rounded-full">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {profileStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-[1.5rem] p-6 border shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500/10 to-pink-500/10">
                <stat.icon className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <p className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);
export const Route = createFileRoute("/_public/d/$username/")({
  component: ModernLayout,
});
