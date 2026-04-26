"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type SimpleLink = { href: string; label: string };
type DropdownLink = {
  label: string;
  href: string;
  children: SimpleLink[];
};
type NavItem = SimpleLink | DropdownLink;

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "Feminine Healing Arts",
    href: "/feminine-healing-arts",
    children: [
      {
        href: "/feminine-healing-arts/healing-body-dysmorphia",
        label: "Healing Body Dysmorphia",
      },
      {
        href: "/feminine-healing-arts/healing-body-dysmorphia/course",
        label: "Log into content page for Healing Body Dysmorphia Course",
      },
      { href: "/ancient-herstory", label: "Ancient Herstory" },
      {
        href: "/feminine-healing-arts",
        label: "Entering into the Bridal Chamber",
      },
      {
        href: "/feminine-healing-arts",
        label: "Preparing the Body for Conception",
      },
    ],
  },
  { href: "/d/return-to-the-garden", label: "Return to the Garden" },
];

function isDropdown(item: NavItem): item is DropdownLink {
  return "children" in item;
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenMobileSub(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-light/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logotheoria.png"
            alt="Theoria Sophia"
            width={44}
            height={44}
            className="transition-transform duration-500 group-hover:rotate-12"
          />
          <span className="font-serif text-xl md:text-2xl font-light tracking-wide text-charcoal hidden sm:block">
            Theoria Sophia
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (isDropdown(link)) {
              const isOpen = openDropdown === link.label;
              const isActive =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`font-serif text-lg tracking-wide transition-colors duration-300 hover:text-gold flex items-center gap-1 ${
                      isActive ? "text-gold" : "text-brown"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                  >
                    {link.label}
                    <span
                      className={`text-xs transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      &#9662;
                    </span>
                  </Link>

                  {/* Dropdown panel */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-300 ${
                      isOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="bg-cream-light/98 backdrop-blur-md shadow-lg border border-taupe/20 min-w-[280px] py-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href + child.label}
                          href={child.href}
                          className={`block px-6 py-3 font-serif text-base tracking-wide transition-colors duration-200 hover:bg-cream hover:text-gold ${
                            pathname === child.href ? "text-gold" : "text-brown"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-serif text-lg tracking-wide transition-colors duration-300 hover:text-gold ${
                  pathname === link.href ? "text-gold" : "text-brown"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="ml-4 px-6 py-2 border border-gold text-gold font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:bg-gold hover:text-white"
          >
            Connect
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-charcoal transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-charcoal transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-charcoal transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-cream-light/98 backdrop-blur-md px-6 pb-6 pt-2 flex flex-col gap-2">
          {navLinks.map((link) => {
            if (isDropdown(link)) {
              const subOpen = openMobileSub === link.label;
              return (
                <div key={link.label} className="border-b border-cream-dark">
                  <button
                    onClick={() =>
                      setOpenMobileSub(subOpen ? null : link.label)
                    }
                    className="w-full flex items-center justify-between py-3 font-serif text-xl tracking-wide text-brown"
                    aria-expanded={subOpen}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`text-sm transition-transform duration-300 ${
                        subOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      &#9662;
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      subOpen ? "max-h-96 pb-3" : "max-h-0"
                    }`}
                  >
                    <Link
                      href={link.href}
                      className="block py-2 pl-4 font-serif text-base text-gold/90"
                    >
                      View all
                    </Link>
                    {link.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        className={`block py-2 pl-4 font-serif text-base ${
                          pathname === child.href
                            ? "text-gold"
                            : "text-brown-light"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-serif text-xl tracking-wide py-3 border-b border-cream-dark transition-colors duration-300 ${
                  pathname === link.href ? "text-gold" : "text-brown"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="mt-4 px-6 py-3 border border-gold text-gold font-sans text-sm tracking-widest uppercase text-center transition-all duration-300 hover:bg-gold hover:text-white"
          >
            Connect
          </Link>
        </nav>
      </div>
    </header>
  );
}
