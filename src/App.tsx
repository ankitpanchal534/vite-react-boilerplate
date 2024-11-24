import { motion } from "framer-motion";
import { landingPageData } from "./app/__mock_data__/landing-page";
import Footer from "./app/pages/landing-page/Footer";
import FloatingHeader from "./app/pages/landing-page/Header";
import { Button } from "./components/ui/button";

export default function App() {
  const { hero, professionalTypes, steps, features } = landingPageData;
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <FloatingHeader />
      <section className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 pt-32 sm:pt-36 lg:pt-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent animate-gradient" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-6 sm:space-y-8 lg:space-y-10 relative"
        >
          <span className="px-3 py-1.5 sm:pr-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
            For Every Professional
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground max-w-4xl leading-tight">
            {hero.title}
            <span className="text-primary"> {hero.subTitle}</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed px-4">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              {hero.primaryCTA}
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full border-2"
            >
              {hero.secondaryCTA}
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Professional Categories */}
      <section className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-primary font-medium">
            For Every Professional
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-card-foreground px-4">
            Tailored For Your Profession
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {professionalTypes.map((prof, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group hover:bg-accent/5 p-6 sm:p-8 rounded-2xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-accent/10 group-hover:bg-accent flex items-center justify-center text-3xl sm:text-4xl transform group-hover:scale-110 transition-all duration-300">
                  {prof.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-card-foreground">
                  {prof.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {prof.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 bg-secondary/50 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center space-y-4 mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-primary font-medium">Powerful Features</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-card-foreground px-4">
            Everything You Need
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-card p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-primary text-2xl sm:text-3xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Three-Step Process */}
      <section className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center space-y-4 mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-primary font-medium">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-card-foreground px-4">
            How It Works
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group hover:bg-accent/5 p-6 sm:p-8 rounded-2xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-accent/10 group-hover:bg-accent flex items-center justify-center text-4xl sm:text-5xl transform group-hover:scale-110 transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-card-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16"
        >
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-card-foreground px-4">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Join thousands of professionals already growing their business
              with us
            </p>
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-10 py-4 sm:py-7 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              Start Your Journey
            </Button>
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
