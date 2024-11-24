import { landingPageData } from "@/app/__mock_data__/landing-page";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

function AppLogo({ className, link }: { className?: string; link?: string }) {
  const { logo } = landingPageData.navigation;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "text-2xl font-bold text-primary cursor-pointer",
        className
      )}
    >
      <Link to={link ?? "/"}>{logo}</Link>
    </motion.div>
  );
}

export default AppLogo;
