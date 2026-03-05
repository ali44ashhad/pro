import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const accepted = sessionStorage.getItem("cm-disclaimer-accepted");
    if (!accepted) setIsOpen(true);
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("cm-disclaimer-accepted", "true");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />
          <motion.div
            className="relative max-w-2xl w-full bg-card border border-border rounded-lg p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-7 h-7 text-primary" />
              <h2 className="heading-section text-gradient-gold">Disclaimer</h2>
            </div>
            <div className="space-y-4 text-muted-foreground text-body-lg mb-8">
              <p>
                The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner.
              </p>
              <p>
                By accessing this website, www.casematters.in, you acknowledge and confirm that you are seeking information relating to Case Matters of your own accord and that there has been no form of solicitation, advertisement or inducement by Case Matters or its members.
              </p>
              <p>
                The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice.
              </p>
              <p>
                Case Matters shall not be liable for consequences of any action taken by relying on the material/information provided on this website. The contents of this website are the intellectual property of Case Matters.
              </p>
            </div>
            <Button
              variant="gold"
              size="lg"
              className="w-full text-base"
              onClick={handleAccept}
            >
              I ACCEPT THE ABOVE
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerModal;
