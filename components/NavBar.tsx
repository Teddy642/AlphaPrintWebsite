import Image from "next/image";
import NavLink from "./NavLink";
import { MobileHeader, SideBarBtn } from "./mobileHeader";

const Navbar = () => {
  return (
    <>


<nav className="sticky top-0 left-0 right-0 z-50  bg-white text-black shadow-xl">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 ">
              <Image
                src={"/logo2.png"}
                alt="logo"
                width={150}
                height={150}
                className="pt-3"
              />
            </div>

            

            <div className="hidden sm:block">
              <div className=" ml-10 flex space-x-4">
                <NavLink href="/" home>
                  Home
                </NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/services">Services</NavLink>
                <NavLink href="/projects">Projects</NavLink>
               
                <NavLink href="/pricing">Pricing</NavLink>
                <NavLink href="/contacts">Contacts</NavLink>
              </div>
            </div>
          </div>
          <div className="absolute right-4">
              <SideBarBtn />
            </div>
        </div>
      </div>
  
    </nav>
        <MobileHeader />
    
    </>
  );
};

export default Navbar;
