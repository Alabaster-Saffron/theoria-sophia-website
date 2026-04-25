"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/offerings", label: "Offerings" },
  { href: "/feminine-healing-arts", label: "Feminine Healing Arts" },
  { href: "/ancient-herstory", label: "Ancient Herstory" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-serif text-lg tracking-wide transition-colors duration-300 hover:text-gold ${
                pathname === link.href ? "text-gold" : "text-brown"
              }`}
            >
              {link.label}
            </Link>
          ))}
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
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-cream-light/98 backdrop-blur-md px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-serif text-xl tracking-wide py-2 border-b border-cream-dark transition-colors duration-300 ${
                pathname === link.href ? "text-gold" : "text-brown"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="mt-2 px-6 py-3 border border-gold text-gold font-sans text-sm tracking-widest uppercase text-center transition-all duration-300 hover:bg-gold hover:text-white"
          >
            Connect
          </Link>
        </nav>
      </div>
    </header>
  );
}
