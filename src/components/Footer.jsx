import { FooterNavigation } from "../lib/NavigationLinks";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-[#cccccc]">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-10 lg:px-8">
        <nav
          className="flex flex-row justify-center space-x-12"
          aria-label="Footer"
        >
          {FooterNavigation.main.map((link) => (
            <div key={link.name} className="pb-6">
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#B30000] font-semibold"
                    : "text-[#FFFFFF] hover:text-[#808080]"
                }
              >
                {link.name}
              </NavLink>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-[#333333]">
          &copy; 2020 Make this DYNAMIC, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
//How to make the date dynamic so it updates itself yearly.
