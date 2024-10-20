import Footer from "@/components/Footer";

import { ReactNode } from "react";

import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";

interface props {
  children: ReactNode;
}

function WebsiteLayout({ children }: props) {
  return (
    <div>
      <Navbar />
      <Hero/>
      {children}
      <Footer/>
    </div>
  );
}

export default WebsiteLayout;
