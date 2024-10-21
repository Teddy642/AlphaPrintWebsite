import Footer from "@/components/Footer";

import { ReactNode } from "react";


import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";

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
