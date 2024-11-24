import { landingPageData } from "@/app/__mock_data__/landing-page";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useRouter } from "@tanstack/react-router";
import AppLogo from "./layout/logo/AppLogo";

interface HeaderProps {
  headerClassName?: string;
  navClassName?: string;
  containerClassName?: string;
  logoClassName?: string;
  linkClassName?: string;
  buttonClassName?: string;
  linkContainerClassName?: string;
}

let initClasses = {
  headerClassName: "fixed top-2 sm:top-4 w-full z-50",
  navClassName:
    "w-full sm:w-3/4 max-w-4xl bg-background/80 backdrop-blur-lg border-b m-auto rounded-full",
  containerClassName: "container mx-auto px-6",
  logoClassName: "text-2xl font-bold text-primary cursor-pointer",
  linkClassName:
    "text-muted-foreground hover:text-foreground transition-colors",
  buttonClassName: "bg-primary text-primary-foreground",
};

function Header({
  headerClassName = "fixed top-2 sm:top-4 w-full z-50",
  navClassName = "w-full sm:w-3/4 max-w-3xl bg-background/80 backdrop-blur-lg border-b m-auto rounded-full",
  containerClassName = "container mx-auto px-6",
  logoClassName,
  linkClassName = "text-muted-foreground hover:text-foreground transition-colors",
  buttonClassName = "bg-primary text-primary-foreground",
  linkContainerClassName,
}: HeaderProps) {
  const { logo, links } = landingPageData.navigation;
  const router = useRouter();
  const pathName = router.latestLocation.pathname;
  return (
    <header className={cn(initClasses.headerClassName, headerClassName)}>
      <div className={cn(initClasses.navClassName, navClassName)}>
        <div className={cn(initClasses.containerClassName, containerClassName)}>
          <div className="flex items-center justify-between h-14 ">
            <AppLogo className={logoClassName} />
            <nav
              className={cn("hidden lg:flex space-x-8", linkContainerClassName)}
            >
              {links.map((link, index) => (
                <a
                  key={index}
                  href={`/${link.href}`}
                  className={cn(initClasses.linkClassName, linkClassName)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            {/* </div> */}
            <div className="flex items-center space-x-4">
              {pathName != "/login" && (
                <Link to="/login">
                  <Button
                    variant={pathName == "/sign-up" ? "default" : "ghost"}
                  >
                    Sign In
                  </Button>
                </Link>
              )}
              {pathName != "/sign-up" && (
                <Link to="/sign-up">
                  <Button
                    className={cn(initClasses.buttonClassName, buttonClassName)}
                  >
                    Sign Up
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
