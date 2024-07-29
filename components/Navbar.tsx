"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import {
  Icon24Hours,
  IconDevices2,
  IconHome,
  IconMessage,
  IconPackage,
  IconServicemark,
  IconUser,
  IconUsersGroup,
} from "@tabler/icons-react";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Portfolio",
      link: "/",
      icon: (
        <IconPackage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <NavContent />
    </div>
  );
}
const NavContent = () => {
  return (
    <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
  );
};
