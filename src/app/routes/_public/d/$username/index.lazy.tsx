import {
  ThemeProvider,
  ThemeSelector,
  useTheme,
} from "@/app/pages/_public/d/booking-page/CalenderTheme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Share2,
  Star,
  Users,
  Video,
} from "lucide-react";

function PublicProfilePage() {
  const { theme } = useTheme();
  return (
    <div
      className="min-h-screen"
      style={{
        background: `linear-gradient(to bottom right, ${theme.colors.primary.light}, #fce7f3, #fef3c7)`,
      }}
    >
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <StatsSection />
      <ContactSection />
      <FloatingBookingButton />
      <ThemeSelector />
    </div>
  );
}
export const Route = createLazyFileRoute("/_public/d/$username/")({
  component: () => (
    <ThemeProvider>
      <PublicProfilePage />
    </ThemeProvider>
  ),
});
const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative h-[80vh] min-h-[600px] overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom left, transparent, ${theme.colors.primary.base})`,
        }}
      />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Avatar className="h-40 w-40 ring-4 ring-white/50 shadow-2xl">
            <AvatarImage src="https://lh3.googleusercontent.com/a/ACg8ocLpP9AhvyMUjX7IbKMzKUqsWpDKGIfkvtFf69EVBSKqTTqdxSN9Ig=s576-c-no" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 space-y-4"
        >
          <h1 className="text-5xl font-bold">Dr. Sarah Johnson</h1>
          <p className="text-xl text-white/80">
            Professional Life Coach & Business Strategist
          </p>
          <p className="max-w-2xl mx-auto text-white/70">
            Helping professionals and entrepreneurs achieve their full potential
            through strategic coaching and personalized guidance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 mt-8"
        >
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Book a Session
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-black hover:bg-white/20"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share Profile
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

const ServicesSection = () => {
  const { theme } = useTheme();

  const services = [
    {
      id: "1-1-call",
      type: "1:1 Call",
      title: "Strategy Consultation",
      duration: "60 min",
      price: "$150",
      description: "Deep-dive strategy session for your business growth",
      icon: Video,
    },
    {
      id: "group-session",
      type: "Group Session",
      title: "Leadership Masterclass",
      duration: "90 min",
      price: "$75",
      description: "Interactive group session on leadership principles",
      icon: Users,
    },
    // Add more services
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const ServiceCard = ({ service, index, theme }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="absolute top-0 right-0 p-4">
        <service.icon
          className="h-6 w-6"
          style={{ color: theme.colors.primary.text }}
        />
      </div>

      <div className="space-y-4">
        <span
          className="inline-block px-3 py-1 rounded-full text-sm"
          style={{
            backgroundColor: `${theme.colors.primary.base}20`,
            color: theme.colors.primary.text,
          }}
        >
          {service.type}
        </span>
        <h3 className="text-xl font-semibold">{service.title}</h3>
        <p className="text-muted-foreground">{service.description}</p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {service.duration}
          </span>
          <span className="font-semibold text-foreground">{service.price}</span>
        </div>

        <Link
          to="/d/$username/$serviceId"
          params={{
            serviceId: service.id as string,
            username: "Ankit",
          }}
          className="inline-flex items-center hover:underline mt-4"
          style={{ color: theme.colors.primary.text }}
        >
          Book Now
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};
const TestimonialsSection = () => {
  const { theme } = useTheme();
  const testimonials = [
    {
      id: 1,
      name: "Michael Chen",
      role: "CEO, TechStart",
      image: "/testimonials/1.jpg",
      content:
        "Working with Dr. Sarah transformed our leadership approach. Her insights were invaluable.",
      rating: 5,
    },
    {
      id: 2,
      name: "Emma Thompson",
      role: "Founder, GrowthLabs",
      image: "/testimonials/2.jpg",
      content:
        "The strategic sessions helped me scale my business by 300% in just 6 months.",
      rating: 5,
    },
    // Add more testimonials
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20"
      style={{
        background: `linear-gradient(to bottom, white, ${theme.colors.primary.base}10)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const TestimonialCard = ({ testimonial, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
    >
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={testimonial.image} />
          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <p className="text-muted-foreground">{testimonial.content}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  const { theme } = useTheme();

  const stats = [
    { label: "Clients Served", value: "500+", icon: Users },
    { label: "Success Rate", value: "98%", icon: Star },
    { label: "Years Experience", value: "15+", icon: Calendar },
    { label: "Sessions Completed", value: "2,500+", icon: Video },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 text-white"
      style={{ backgroundColor: theme.colors.primary.hover }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-4 opacity-80" />
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const ContactSection = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPin
                  className="h-5 w-5"
                  style={{ color: theme.colors.primary.text }}
                />
                <p>123 Business Avenue, New York, NY 10001</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone
                  className="h-5 w-5"
                  style={{ color: theme.colors.primary.text }}
                />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail
                  className="h-5 w-5"
                  style={{ color: theme.colors.primary.text }}
                />
                <p>contact@sarahjohnson.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Email Address" type="email" />
              <Textarea placeholder="Your Message" className="min-h-[120px]" />
              <Button
                className="w-full"
                style={{
                  background: `linear-gradient(to right, ${theme.colors.primary.gradient.from}, ${theme.colors.primary.gradient.to})`,
                }}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const FloatingBookingButton = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        className="rounded-full shadow-lg"
        style={{
          background: `linear-gradient(to right, ${theme.colors.primary.gradient.from}, ${theme.colors.primary.gradient.to})`,
        }}
      >
        <Calendar className="mr-2 h-4 w-4" />
        Book a Session
      </Button>
    </motion.div>
  );
};
