import { landingPageData } from "@/app/__mock_data__/landing-page";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="container mx-auto px-4 py-16   border-t">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold text-primary"
          >
            {landingPageData.footer.logo}
          </motion.div>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
            {landingPageData.footer.description}
          </p>
          <div className="flex space-x-4">
            {landingPageData.footer.socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent flex items-center justify-center text-xl transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Links Columns */}
        {landingPageData.footer.columns.map((column, columnIndex) => (
          <motion.div
            key={columnIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: columnIndex * 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg text-foreground">
              {column.title}
            </h3>
            <ul className="space-y-3">
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    to={"/" + link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground"
      >
        {landingPageData.footer.copyright}
      </motion.div>
    </footer>
  );
}

export default Footer;
