"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !isOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setIsOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!isOpen || keyCode !== 27) return;
      setIsOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${isOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className={`absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="bg-gray-800 px-4 py-2">
          <li>
            <a
              href="#services"
              className="flex text-gray-300 hover:text-gray-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#companies"
              className="flex text-gray-300 hover:text-gray-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              Companies
            </a>
          </li>
          <li>
            <a
              href="#process"
              className="flex text-gray-300 hover:text-gray-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex text-gray-300 hover:text-gray-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
          {/* <li>
            <Link
              href="/signin"
              className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center"
              onClick={() => setIsOpen(false)}
            >
              Client Area
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
