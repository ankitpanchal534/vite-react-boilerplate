import { landingPageData } from "@/app/__mock_data__/landing-page";
import { Link } from "@tanstack/react-router";
import { motion } from 'framer-motion';

function PrimaryLogo() {
    const {logo} = landingPageData.navigation;
    return <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-2xl font-bold text-primary cursor-pointer"
  >
    <Link to="/">{logo}</Link>
  </motion.div>
}

export default PrimaryLogo;