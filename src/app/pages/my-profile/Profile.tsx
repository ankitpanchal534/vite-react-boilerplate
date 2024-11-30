import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResponsivePanel } from "@/components/ui/responsive-panel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Calendar,
  Camera,
  Clock,
  ExternalLink,
  Globe,
  Instagram,
  Linkedin,
  Palette,
  Plus,
  Share2,
  Star,
} from "lucide-react";
import { useState } from "react";
function Profile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [showThemeCustomizer, setShowThemeCustomizer] = useState(false);
  //   const [selectedTheme, setSelectedTheme] = useState({
  //     primary: "#0066FF",
  //     background: "#FFFFFF",
  //     text: "#1A1A1A",
  //   });

  const profileStats = [
    // { label: "Profile Views", value: "2.4K", icon: Eye },
    { label: "Rating", value: "4.9", icon: Star },
    { label: "Member Since", value: "Jan 2024", icon: Calendar },
    { label: "Response Time", value: "< 1hr", icon: Clock },
  ];

  const socialPlatforms = [
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

  const themePresets = [
    { name: "Ocean Blue", primary: "#0066FF", accent: "#E6F0FF" },
    { name: "Forest Green", primary: "#00875A", accent: "#E6F6F0" },
    { name: "Royal Purple", primary: "#9333EA", accent: "#F3E8FF" },
    { name: "Sunset Orange", primary: "#F97316", accent: "#FFF1E7" },
    { name: "Cherry Red", primary: "#DC2626", accent: "#FEE2E2" },
    { name: "Midnight", primary: "#312E81", accent: "#E0E7FF" },
  ];

  return (
    <div className="p-0 ">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent"
        >
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="relative p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative group">
                <Avatar className="h-24 w-24 sm:h-32 sm:w-32 ring-4 ring-white shadow-xl">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback className="bg-primary/10">AP</AvatarFallback>
                </Avatar>
                <button className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <Camera className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Ankit Panchal
                </h1>
                <p className="text-lg text-muted-foreground">
                  Professional Developer & Tech Consultant
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <Link
                    to="/d/$username"
                    params={{
                      username: "Ankit",
                    }}
                    target="_blank"
                  >
                    <Button variant="outline" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Public Profile
                    </Button>
                  </Link>
                  <Button variant="outline" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {profileStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 hidden lg:block">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full max-w-md mx-auto">
            <TabsTrigger value="profile" className="flex-1">
              Profile
            </TabsTrigger>
            <TabsTrigger value="account" className="flex-1">
              Account
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="profile"
            className=" mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Profile Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 border shadow-sm"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Profile Information</h3>
                  <Button>Save Changes</Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="First Name" placeholder="John" />
                  <Input label="Last Name" placeholder="Doe" />
                  <Input
                    label="Display Name"
                    placeholder="How you want to be known"
                  />
                  <Input
                    label="Professional Title"
                    placeholder="e.g. Senior Developer"
                  />
                </div>

                <Textarea
                  label="Short Bio"
                  placeholder="Write a brief introduction (150 characters)"
                  maxLength={150}
                />

                <Textarea
                  label="About Me"
                  placeholder="Tell your story in detail..."
                  className="min-h-[200px]"
                />

                <div className="space-y-4">
                  <h4 className="font-medium">Expertise Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Node.js"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      <Plus className="w-4 h-4 mr-1" /> Add Skill
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links - Enhanced UI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl border shadow-sm overflow-hidden"
            >
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Social Links</h3>
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Custom Link
                  </Button>
                </div>

                <div className="space-y-4">
                  {socialPlatforms.map((platform) => (
                    <div
                      key={platform.name}
                      className="group relative rounded-lg border p-4 transition-all hover:shadow-md"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
                      <div className="relative flex items-center gap-4">
                        <div
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: `${platform.color}15` }}
                        >
                          <platform.icon
                            className="w-5 h-5"
                            style={{ color: platform.color }}
                          />
                        </div>
                        <div className="flex-1 space-y-1">
                          <label className="text-sm font-medium text-muted-foreground">
                            {platform.name}
                          </label>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">
                              {platform.prefix}
                            </span>
                            <input
                              className="flex-1 bg-transparent text-sm outline-none"
                              placeholder="username"
                            />
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Verify
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Theme Customization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 border shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  <h3 className="text-lg font-semibold">Theme Customization</h3>
                </div>
                <Button onClick={() => setShowThemeCustomizer(true)}>
                  Customize Theme
                </Button>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Theme Customization - Enhanced UI */}
      <ResponsivePanel
        open={showThemeCustomizer}
        onClose={() => setShowThemeCustomizer(false)}
        title="Customize Your Profile Theme"
        // className="max-w-2xl"
      >
        <div className="p-6 space-y-8">
          {/* Live Preview */}
          <div className="aspect-[16/9] rounded-xl border overflow-hidden bg-dot-pattern">
            <div className="w-full h-full p-6 bg-white/80 backdrop-blur-sm">
              <div className="max-w-md mx-auto space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10" />
                  <div className="space-y-2">
                    <div className="h-6 w-32 rounded bg-primary/10" />
                    <div className="h-4 w-24 rounded bg-primary/5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full rounded bg-primary/5" />
                  <div className="h-4 w-3/4 rounded bg-primary/5" />
                </div>
              </div>
            </div>
          </div>

          {/* Theme Presets */}
          <div className="space-y-4">
            <h4 className="font-medium">Theme Presets</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {themePresets.map((preset) => (
                <button
                  key={preset.name}
                  className="group relative aspect-video rounded-lg border p-4 hover:shadow-md transition-all overflow-hidden"
                  style={{ backgroundColor: preset.accent }}
                >
                  <div
                    className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full"
                    style={{ backgroundColor: preset.primary }}
                  />
                  <div className="relative">
                    <p className="text-sm font-medium">{preset.name}</p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs px-2 py-1 rounded-full bg-white/80">
                        Select
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Colors */}
          <div className="space-y-4">
            <h4 className="font-medium">Custom Colors</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Primary Color
                </label>
                <input type="color" className="w-full h-10 rounded-lg" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Background Color
                </label>
                <input type="color" className="w-full h-10 rounded-lg" />
              </div>
            </div>
          </div>

          {/* Font Selection */}
          <div className="space-y-4">
            <h4 className="font-medium">Typography</h4>
            <select className="w-full p-2 rounded-lg border">
              <option>Inter</option>
              <option>Roboto</option>
              <option>Open Sans</option>
            </select>
          </div>
        </div>
      </ResponsivePanel>
    </div>
  );
}

export default function ProfileComponent() {
  //   const [activeTab, setActiveTab] = useState("profile");
  //   const [showThemeCustomizer, setShowThemeCustomizer] = useState(false);
  //   const [selectedTheme, setSelectedTheme] = useState({
  //     primary: "#0066FF",
  //     background: "#FFFFFF",
  //     text: "#1A1A1A",
  //   });
  //   const [activeLayout, setActiveLayout] = useState("classic");

  // Layout Switcher Component
  //   const LayoutSwitcher = () => (
  //     <div className="fixed bottom-6 right-6 z-50">
  //       <motion.div
  //         className="bg-white rounded-full shadow-lg border p-2"
  //         whileHover={{ scale: 1.05 }}
  //       >
  //         <Button
  //           variant="ghost"
  //           size="icon"
  //           onClick={() =>
  //             setActiveLayout(activeLayout === "classic" ? "modern" : "classic")
  //           }
  //           className="rounded-full"
  //         >
  //           {activeLayout === "classic" ? (
  //             <LayoutGrid className="w-5 h-5" />
  //           ) : (
  //             <Layout className="w-5 h-5" />
  //           )}
  //         </Button>
  //       </motion.div>
  //     </div>
  //   );

  //   const ModernLayout = () => (
  //     <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-amber-50">
  //       <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
  //         {/* Hero Section */}
  //         <motion.div
  //           className="relative rounded-[2rem] overflow-hidden bg-white/80 backdrop-blur-xl border shadow-xl"
  //           initial={{ opacity: 0, y: 20 }}
  //           animate={{ opacity: 1, y: 0 }}
  //         >
  //           <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-pink-500/10 to-amber-500/10" />
  //           <div className="relative p-8 sm:p-10">
  //             <div className="flex flex-col items-center text-center space-y-6">
  //               <motion.div className="relative" whileHover={{ scale: 1.05 }}>
  //                 <Avatar className="h-32 w-32 ring-4 ring-white shadow-2xl">
  //                   <AvatarImage src="/placeholder-avatar.jpg" />
  //                   <AvatarFallback>AP</AvatarFallback>
  //                 </Avatar>
  //                 <div className="absolute -bottom-2 -right-2">
  //                   <Button
  //                     size="icon"
  //                     className="rounded-full h-10 w-10 shadow-lg"
  //                   >
  //                     <Camera className="w-5 h-5" />
  //                   </Button>
  //                 </div>
  //               </motion.div>

  //               <div className="space-y-2">
  //                 <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
  //                   Ankit Panchal
  //                 </h1>
  //                 <p className="text-lg text-muted-foreground">
  //                   Professional Developer & Tech Consultant
  //                 </p>
  //               </div>

  //               <div className="flex flex-wrap justify-center gap-3">
  //                 <Button className="rounded-full bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600">
  //                   <ExternalLink className="w-4 h-4 mr-2" />
  //                   View Profile
  //                 </Button>
  //                 <Button variant="outline" className="rounded-full">
  //                   <Share2 className="w-4 h-4 mr-2" />
  //                   Share
  //                 </Button>
  //               </div>
  //             </div>
  //           </div>
  //         </motion.div>

  //         {/* Stats Grid */}
  //         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
  //           {profileStats.map((stat, index) => (
  //             <motion.div
  //               key={stat.label}
  //               initial={{ opacity: 0, y: 20 }}
  //               animate={{ opacity: 1, y: 0 }}
  //               transition={{ delay: index * 0.1 }}
  //               className="bg-white/80 backdrop-blur-sm rounded-[1.5rem] p-6 border shadow-lg hover:shadow-xl transition-all"
  //             >
  //               <div className="flex items-center gap-4">
  //                 <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500/10 to-pink-500/10">
  //                   <stat.icon className="w-6 h-6 text-violet-600" />
  //                 </div>
  //                 <div>
  //                   <p className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
  //                     {stat.value}
  //                   </p>
  //                   <p className="text-sm text-muted-foreground">{stat.label}</p>
  //                 </div>
  //               </div>
  //             </motion.div>
  //           ))}
  //         </div>

  //         {/* Main Content */}
  //         <div className="mt-8">
  //           <Tabs
  //             defaultValue={activeTab}
  //             className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-6 border shadow-lg"
  //           >
  //             {/* Existing tabs content with updated styling */}
  //           </Tabs>
  //         </div>
  //       </div>
  //     </div>
  //   );

  return (
    <>
      {/* <LayoutSwitcher /> */}
      <Profile />
      {/* {activeLayout === "classic" ? (
        // Existing layout
        <Profile />
      ) : (
        // New layout
        <ModernLayout />
      )} */}
    </>
  );
}
