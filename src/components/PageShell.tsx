import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

/** Standard wrapper for every inner page so layout stays consistent. */
const PageShell = ({ children }: { children: ReactNode }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
    <FloatingActions />
  </>
);

export default PageShell;
