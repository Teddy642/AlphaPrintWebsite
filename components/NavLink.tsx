"use client";


import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC , ReactNode } from "react";

interface NavLinkProps {
  children: ReactNode;
  href: string;
  home?: boolean;
}

const NavLink: FC<NavLinkProps> = ({ href, children, home }) => {
  const pathname = usePathname();
  const link = href.split("?")[0];

  let path;
  let active;

  if (pathname.startsWith(`/`)) {
    path = pathname.substring(pathname.length + 1);
    if (path.length === 0) path = "/";
  } else path = pathname;

  if (home) active = path === link;
  else active = path.startsWith(link);

  return (
    <div
      className={`rounded-lg ${
        active &&
        " dark:bg-gray-500/20 lg:bg-inherit dark:lg:bg-inherit"
      }`}
    >
      <Button
        href={href}
        as={Link}
        prefetch
        size="sm"
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          active ? "text-yellow-300 font-bold" : "text-black"
        } w-full`}
      >
        <p className="text-sm lg:text-base text-start lg:text-center w-full px-3">
          {children}
        </p>
      </Button>
    </div>
  );
};

export default NavLink;
