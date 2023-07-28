// export default function MainNavigation() {
//   return (
//     <div className="mt-6 flex justify-center">
//       <h1
//         className={"text-blue-600 italic text-opacity-70 place-content-center"}
//       >
//         Hello
//       </h1>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", current: false }, // Set current to false for all links initially
  { name: "Crypto", href: "/crypto", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export default function Example() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Update the 'current' property based on the current route
  const updateCurrentLink = () => {
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: item.href === location.pathname,
    }));
    return updatedNavigation;
  };

  return (
    <Disclosure as="nav" className="bg-blue-800 shadow-2xl">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setOpen(!open)}
                >
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block flex-grow">
                  <div className="flex justify-end space-x-4">
                    {updateCurrentLink().map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`${
                          item.current
                            ? "bg-blue-900 text-white ring ring-blue-300"
                            : "text-blue-200 hover:bg-blue-900 hover:text-white"
                        } relative rounded-md px-4 py-2 text-base font-medium`}
                        onClick={() => setOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel
            as="div"
            className={`sm:hidden ${open ? "block" : "hidden"}`}
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {updateCurrentLink().map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    item.current
                      ? "bg-blue-900 text-white ring ring-blue-300"
                      : "text-blue-200 hover:bg-blue-900 hover:text-white"
                  } relative rounded-md px-4 py-2 text-base font-medium`}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
