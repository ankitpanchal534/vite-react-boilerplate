import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const Route = createLazyFileRoute("/_admin/services/add")({
  component: ServicesComponent,
});

function ServiceForm({ type }) {
  const forms = {
    "1-1-call": (
      <div className="space-y-4">
        <div>
          <Label>Title</Label>
          <Input placeholder="e.g. 30-min Consultation Call" />
        </div>
        <div>
          <Label>Duration (mins)</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              {[15, 30, 45, 60, 90].map((duration) => (
                <SelectItem key={duration} value={duration.toString()}>
                  {duration} minutes
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Amount (₹)</Label>
          <Input type="number" placeholder="0" />
        </div>
      </div>
    ),

    "priority-dm": (
      <div className="space-y-4">
        <div>
          <Label>Title</Label>
          <Input placeholder="e.g. VIP Direct Message Access" />
        </div>
        <div>
          <Label>Addtional Info</Label>
          <Input placeholder="e.g. anything you want to add" />
        </div>
        <div>
          <Label>Amount (₹)</Label>
          <Input type="number" placeholder="0" />
        </div>
      </div>
    ),

    webinar: (
      <div className="space-y-4">
        <div>
          <Label>Title</Label>
          <Input placeholder="e.g. Masterclass Workshop" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Duration (mins)</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                {[60, 90, 120, 180].map((duration) => (
                  <SelectItem key={duration} value={duration.toString()}>
                    {duration} minutes
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Session Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="one-time">One-time</SelectItem>
                <SelectItem value="recurring">Recurring</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label>Amount (₹)</Label>
          <Input type="number" placeholder="0" />
        </div>
        <div>
          <Label>Hosting Platform</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="zoom">Zoom</SelectItem>
              <SelectItem value="gmeet">Google Meet</SelectItem>
              <SelectItem value="teams">Microsoft Teams</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    ),

    "digital-product": (
      <div className="space-y-4">
        <div>
          <Label>Product Type</Label>
          <RadioGroup defaultValue="ebook" className="mt-2">
            <div className="grid gap-2">
              <div className="flex items-center space-x-2 rounded-lg border p-3 cursor-pointer hover:bg-accent">
                <RadioGroupItem value="ebook" id="ebook" />
                <Label htmlFor="ebook">E-book, notes, Guides, Resources</Label>
              </div>
              <div className="flex items-center space-x-2 rounded-lg border p-3 cursor-pointer hover:bg-accent">
                <RadioGroupItem value="exclusive" id="exclusive" />
                <Label htmlFor="exclusive">
                  Exclusive Content (Video answers)
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-lg border p-3 cursor-pointer hover:bg-accent">
                <RadioGroupItem value="course" id="course" />
                <Label htmlFor="course">Crash Course</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
        <div>
          <Label>Title</Label>
          <Input placeholder="e.g. Complete Guide to Success" />
        </div>
        <div>
          <Label>Amount (₹)</Label>
          <Input type="number" placeholder="0" />
        </div>
      </div>
    ),
  };

  return forms[type] || null;
}
function ServicesComponent() {
  const [selectedService, setSelectedService] = useState(null);
  const [showExamples, setShowExamples] = useState(true);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-foreground">
            Create New Service
          </h1>
        </motion.div>

        {/* Row 1: Service Types & Form */}
        <div className="space-y-8 grid grid-cols-1 lg:grid-cols-2 gap-4 items-start ">
          <div className="content-start ">
            <p className="text-muted-foreground mb-4">
              Select a service type to get started
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
              {serviceTypes.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${service.color} border ${service.borderColor} rounded-xl p-6 cursor-pointer transition-all
                  ${selectedService === service.id ? "ring-2 ring-primary" : ""}`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h2 className="text-xl font-semibold">{service.title}</h2>
                  <p className="text-muted-foreground mt-2">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {selectedService && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border rounded-xl p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">
                {serviceTypes.find((s) => s.id === selectedService)?.title}{" "}
                Configuration
              </h2>
              <ServiceForm type={selectedService} />
              <div className="mt-8 flex justify-end space-x-4">
                <Button variant="outline">Save Draft</Button>
                <Button>Create Service</Button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Row 2: Examples with Toggle */}
        {selectedService && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: showExamples ? 1 : 0,
              height: showExamples ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="border-t pt-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Popular Examples</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowExamples(!showExamples)}
                className="flex items-center gap-2"
              >
                {showExamples ? "Hide Examples" : "Show Examples"}
                {showExamples ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceExamples[selectedService]?.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-card border rounded-xl p-6 hover:border-primary transition-all"
                >
                  {example.highlight && (
                    <span className="absolute -top-3 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                      {example.highlight}
                    </span>
                  )}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {example.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {example.description}
                      </p>
                    </div>
                    <span className="text-lg font-bold">{example.price}</span>
                  </div>
                  <div className="mt-4 flex gap-4">
                    {example.duration && (
                      <span className="text-sm text-muted-foreground">
                        ⏱️ {example.duration}
                      </span>
                    )}
                    {example.platform && (
                      <span className="text-sm text-muted-foreground">
                        💻 {example.platform}
                      </span>
                    )}
                    {example.type && (
                      <span className="text-sm text-muted-foreground">
                        📚 {example.type}
                      </span>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    className="mt-4 w-full justify-start text-primary hover:text-primary hover:bg-primary/10"
                  >
                    Use this template →
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
const serviceExamples = {
  "1-1-call": [
    {
      title: "Career Consultation",
      duration: "30 mins",
      price: "₹1,500",
      highlight: "Most Popular",
      description: "One-on-one career guidance and resume review",
    },
    {
      title: "Therapy Session",
      duration: "45 mins",
      price: "₹2,000",
      description: "Personal counseling and mental wellness",
    },
    {
      title: "Technical Interview Prep",
      duration: "60 mins",
      price: "₹2,500",
      description: "Mock interviews and feedback sessions",
    },
    {
      title: "Fitness Consultation",
      duration: "45 mins",
      price: "₹1,200",
      highlight: "New",
      description: "Personalized workout and nutrition planning",
    },
    {
      title: "Business Strategy",
      duration: "60 mins",
      price: "₹3,000",
      highlight: "Premium",
      description: "Strategic business planning and growth consulting",
    },
  ],
  "priority-dm": [
    {
      title: "Weekly DM Access",
      price: "₹499",
      highlight: "Best Value",
      description: "Direct message support with 24hr response time",
    },
    {
      title: "VIP Monthly Support",
      price: "₹1,999",
      description: "Priority messaging with instant notifications",
    },
    {
      title: "Emergency Support",
      price: "₹2,999",
      highlight: "Premium",
      description: "24/7 priority access with 15-min response guarantee",
    },
    {
      title: "Student Support",
      price: "₹299",
      highlight: "Special",
      description: "Academic queries and guidance support",
    },
  ],
  webinar: [
    {
      title: "Digital Marketing Masterclass",
      duration: "120 mins",
      price: "₹999",
      platform: "Zoom",
      highlight: "Bestseller",
      description: "Learn SEO, SEM, and Social Media Marketing",
    },
    {
      title: "Financial Planning Workshop",
      duration: "90 mins",
      price: "₹799",
      platform: "Google Meet",
      description: "Investment strategies and portfolio management",
    },
    {
      title: "Tech Interview Bootcamp",
      duration: "180 mins",
      price: "₹1,499",
      platform: "Zoom",
      highlight: "High Demand",
      description: "Intensive coding interview preparation",
    },
    {
      title: "Content Creation Workshop",
      duration: "120 mins",
      price: "₹699",
      platform: "Microsoft Teams",
      description: "Master social media content creation",
    },
    {
      title: "Leadership Excellence",
      duration: "150 mins",
      price: "₹1,299",
      platform: "Zoom",
      highlight: "Executive",
      description: "Advanced leadership and management skills",
    },
  ],
  "digital-product": [
    {
      title: "Complete Web Development Guide",
      type: "E-book",
      price: "₹2,999",
      highlight: "Featured",
      description: "300+ pages of practical tutorials and projects",
    },
    {
      title: "Fitness Transformation Course",
      type: "Video Course",
      price: "₹1,499",
      description: "12-week program with meal plans",
    },
    {
      title: "Stock Market Mastery",
      type: "Course Bundle",
      price: "₹4,999",
      highlight: "Premium",
      description: "Complete trading and investment course with tools",
    },
    {
      title: "Digital Art Collection",
      type: "Resource Pack",
      price: "₹799",
      highlight: "New",
      description: "500+ premium design assets and templates",
    },
    {
      title: "Language Learning Pack",
      type: "Interactive Course",
      price: "₹1,999",
      description: "Self-paced language learning with audio guides",
    },
    {
      title: "Business Plan Templates",
      type: "Resource Bundle",
      price: "₹899",
      highlight: "Startup Special",
      description: "20+ customizable business plan templates",
    },
  ],
};
const serviceTypes = [
  {
    id: "1-1-call",
    title: "1:1 Call",
    description: "Conduct 1:1 video sessions",
    icon: "🎥",
    color: "bg-blue-50 hover:bg-blue-100",
    borderColor: "border-blue-200",
  },
  {
    id: "priority-dm",
    title: "Priority DM",
    description: "Setup your priority inbox",
    icon: "📨",
    color: "bg-purple-50 hover:bg-purple-100",
    borderColor: "border-purple-200",
  },
  {
    id: "webinar",
    title: "Webinar",
    description: "Host one time or recurring group sessions",
    icon: "👥",
    color: "bg-green-50 hover:bg-green-100",
    borderColor: "border-green-200",
  },
  {
    id: "digital-product",
    title: "Digital Product",
    description: "Sell digital products, courses, paid videos & more",
    icon: "📚",
    color: "bg-orange-50 hover:bg-orange-100",
    borderColor: "border-orange-200",
  },
];
