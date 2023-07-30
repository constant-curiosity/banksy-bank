import { FooterNavigation } from "../lib/NavigationLinks";
export default function Footer() {
  return (
    <footer className="bg-[#cccccc]">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-10 lg:px-8">
        <nav
          className="flex flex-row justify-center space-x-12"
          aria-label="Footer"
        >
          {FooterNavigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-[#B30000] hover:text-gray-900"
              >
                {item.name}
              </a>
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
