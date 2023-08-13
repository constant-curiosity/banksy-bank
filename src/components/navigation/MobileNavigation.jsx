import { NavLink } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { HeaderNavigation } from "../config/NavigationLinks";
export default function MobileNavigation({
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      initialFocus
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-banksyBGHeader px-6 py-6 sm:max-w-sm">
        <div className="flex items-center gap-x-6">
          <NavLink
            to=".."
            className="font-Branda-yolq text-4xl text-white hover:text-banksyGray"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Banksy Bank</span>
          </NavLink>
          <NavLink
            to="signup"
            className="ml-auto rounded-md bg-banksyRed px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-banksyHoverRed "
            onClick={() => setMobileMenuOpen(false)}
          >
            Sign up
          </NavLink>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="text-white h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-banksyRed">
            <div className="space-y-2 py-6">
              {HeaderNavigation.map((link) => (
                <NavLink
                  onClick={() => setMobileMenuOpen(false)}
                  key={link.name}
                  to={link.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="py-6">
              <NavLink
                to="login"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:text-banksyGray"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </NavLink>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
