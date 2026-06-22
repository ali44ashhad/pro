import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Calculator, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, site } from "@/config/site";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const solidNav = scrolled || !isHomePage;

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solidNav
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between h-16 sm:h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Calculator className="w-5 h-5 text-primary-foreground" />
          </div>
          <span
            className={`font-display text-xl sm:text-2xl font-bold transition-colors duration-300 ${
              solidNav ? "text-foreground" : "text-background"
            }`}
          >
            {site.name}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm font-body font-medium transition-colors duration-300 ${
                solidNav
                  ? isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                  : isActive(item.href)
                    ? "text-background"
                    : "text-background/80 hover:text-background"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href={site.phoneHref}>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 gap-2">
              <Phone className="w-4 h-4" />
              {site.phoneDisplay}
            </Button>
          </a>
        </div>

        <button
          className={`lg:hidden p-2 ${solidNav ? "text-foreground" : "text-background"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-background border-b border-border"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-3">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm font-body font-medium py-2 ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a href={site.phoneHref} onClick={() => setMobileOpen(false)}>
                <Button className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full gap-2">
                  <Phone className="w-4 h-4" />
                  {site.phoneDisplay}
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
