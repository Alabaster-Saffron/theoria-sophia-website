"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <footer id="contact" className="bg-taupe/30">
      {/* Contact Section */}
      <div className="section-padding max-w-4xl mx-auto text-center">
        <div className="relative w-72 h-56 md:w-96 md:h-72 mx-auto mb-10 overflow-hidden rounded-2xl border border-gold/20 shadow-lg">
          <Image
            src="/images/contact-image.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 288px, 384px"
          />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-4">
          Get in Touch
        </h2>
        <div className="gold-divider" />
        <p className="font-sans text-brown-light text-sm tracking-wide mt-6 mb-12 max-w-md mx-auto">
          We would love to hear from you. Reach out and let us know how we can
          support your journey.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="bg-transparent border-b border-taupe-dark/40 py-3 px-1 font-sans text-sm text-brown placeholder:text-taupe-dark/60 focus:border-gold focus:outline-none transition-colors duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-transparent border-b border-taupe-dark/40 py-3 px-1 font-sans text-sm text-brown placeholder:text-taupe-dark/60 focus:border-gold focus:outline-none transition-colors duration-300"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="bg-transparent border-b border-taupe-dark/40 py-3 px-1 font-sans text-sm text-brown placeholder:text-taupe-dark/60 focus:border-gold focus:outline-none transition-colors duration-300 resize-none"
          />
          <button
            type="submit"
            className="mt-4 self-center px-10 py-3 border border-gold text-gold font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:bg-gold hover:text-white"
          >
            {submitted ? "Sent with Love" : "Send"}
          </button>
        </form>
      </div>

      {/* Bottom Bar */}
      <div className="bg-charcoal/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logotheoria.png"
              alt="Theoria Sophia"
              width={28}
              height={28}
              className="opacity-60"
            />
            <span className="font-serif text-sm text-brown-light tracking-wide">
              Theoria Sophia
            </span>
          </div>

          <nav className="flex gap-6 text-xs font-sans tracking-wide text-brown-light">
            <Link
              href="/"
              className="hover:text-gold transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/offerings"
              className="hover:text-gold transition-colors duration-300"
            >
              Offerings
            </Link>
            <Link
              href="/ancient-herstory"
              className="hover:text-gold transition-colors duration-300"
            >
              Ancient Herstory
            </Link>
          </nav>

          <p className="font-sans text-xs text-taupe-dark">
            &copy; {new Date().getFullYear()} Theoria Sophia. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
