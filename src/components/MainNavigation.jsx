import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileNavigation from "./MobileNavigation";
import { HeaderNavigation } from "../lib/NavigationLinks";

export default function MainNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#333333]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink
            to=".."
            className="font-Branda-yolq text-4xl text-[#FFFFFF] hover:text-[#808080]"
          >
            <span>Banksy Bank</span>
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {HeaderNavigation.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                isActive
                  ? "text-[#B30000] font-semibold"
                  : "text-[#FFFFFF] hover:text-[#808080]"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <NavLink
            to=".."
            className="rounded-md bg-[#B30000] px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-[#FF6666] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Log in
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <MobileNavigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
//Is everything in the className needed (line 42)? Can we simplify it?
