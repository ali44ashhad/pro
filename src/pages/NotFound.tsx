import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Seo title="Page Not Found" noindex />
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-foreground px-4">
        <div className="text-center max-w-lg">
          <p className="font-display text-7xl sm:text-8xl font-bold text-primary mb-4">404</p>
          <h1 className="font-display text-2xl font-bold text-background mb-3">This page wandered off</h1>
          <p className="text-background/70 mb-8">
            The page you're looking for doesn't exist or may have moved. Let's get you back on track.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full gap-2">
                <Home className="w-4 h-4" />
                Back to home
              </Button>
            </Link>
            <Link to="/search">
              <Button
                variant="outline"
                className="bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground rounded-full gap-2"
              >
                <Search className="w-4 h-4" />
                Search the site
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
