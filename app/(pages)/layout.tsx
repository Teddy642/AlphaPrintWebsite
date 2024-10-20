import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { ReactNode } from "react";
import Hero from "./Home/page";

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
