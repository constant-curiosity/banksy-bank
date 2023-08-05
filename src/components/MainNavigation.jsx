import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileNavigation from "./MobileNavigation";
import { HeaderNavigation } from "../lib/NavigationLinks";

export default function MainNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-banksyBGHeader">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <NavLink
            to=".."
            className="font-Branda-yolq text-6xl text-white hover:text-banksyGray"
            aria-label="Banksy Bank Home"
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
                  ? "text-banksyRed font-semibold"
                  : "text-white hover:text-banksyGray"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <NavLink
            to="signup"
            className={({ isActive }) =>
              isActive
                ? "hidden lg:block lg:text-banksyRed lg:font-semibold"
                : "hidden md:block text-white hover:text-banksyGray"
            }
          >
            Sign Up <span aria-hidden="true">&rarr;</span>
          </NavLink>
          <NavLink
            to="login"
            className="rounded-md bg-banksyRed px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-banksyHoverRed"
          >
            Log in
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
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
