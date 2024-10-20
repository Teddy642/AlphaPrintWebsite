"use client";


import { Button } from "@nextui-org/react";
import { useEffect } from "react";
import {
  MdMenu,

} from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import NavLink from "./NavLink";

import { usePathname } from "next/navigation";

import { IoMdClose } from "react-icons/io";
import { useStateStore } from "@/lib/zustand";


export const MobileHeader = () => {
  
  const { viewSideBar, setViewSideBar } = useStateStore();
 
  const pathname = usePathname();

  useEffect(() => {
    if (viewSideBar) {
      document.body.style.overflowY = "hidden";
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
    }
    return () => {
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, [viewSideBar]);

  useEffect(() => {
    setViewSideBar(false);
  }, [pathname, setViewSideBar]);

  return (
    <AnimatePresence>
      {viewSideBar ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-screen h-screen z-40 bg-black/40"
            onClick={() => setViewSideBar(false)}
          >
            <button
              type="button"
              onClick={() => setViewSideBar(false)}
              className="p-1 rounded-lg bg-black dark:bg-white m-2"
            >
              <IoMdClose className="fill-white dark:fill-black" size={25} />
            </button>
          </motion.div>
          <motion.aside
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 288 }}
            exit={{ opacity: 0, width: 0 }}
            className="w-52 h-screen rounded-l-xl p-2 bg-white flex flex-col items-center fixed z-50 top-0 right-0 bottom-0"
          >
            <nav className="w-full flex flex-col ">
             
              <NavLink href="/" home>
                Home
              </NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/contacts">Contacts</NavLink>
            </nav>
            
            
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export const SideBarBtn = () => {
  const { setViewSideBar } = useStateStore();

  return (
    <Button
      type="button"
      size="sm"
      isIconOnly
      onClick={() => setViewSideBar(true)}
     
      className={`lg:hidden bg-black dark:bg-white/80 `}
    >
      <MdMenu size={23} className="fill-white dark:fill-black" />
    </Button>
  );
};
