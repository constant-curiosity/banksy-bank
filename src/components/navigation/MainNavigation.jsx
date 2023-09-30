import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { HeaderNavigation, AuthNavigation } from "../config/NavigationLinks";
import MobileNavigation from "./MobileNavigation";
import LoginButton from "../../auth0/LoginButton";
import SignUpButton from "../../auth0/SignUpButton";
import LogoutButton from "../../auth0/LogOutButton";

export default function MainNavigation() {
  const { isAuthenticated } = useAuth0();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let navLinks;
  if (isAuthenticated) {
    navLinks = AuthNavigation;
  } else {
    navLinks = HeaderNavigation;
  }
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
          {navLinks.map((link) => (
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
          {!isAuthenticated && (
            <>
              <SignUpButton />
              <LoginButton />
            </>
          )}
          {isAuthenticated && <LogoutButton />}
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
