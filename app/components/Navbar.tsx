"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Packages", href: "#packages" },
    { name: "Funding", href: "#funding" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-48 h-12">
          <Image
            src="/assets/ConsultingUpscaleLogo.png"
            alt="Consulting Upscale Logo"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

          />
        </Link>

        {/* 5 Anchor Links (Desktop) */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-gray-600 hover:text-black transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* External Page Button */}
      <div>
        <Link
          href="/book"
          style={{ backgroundColor: "rgb(212, 175, 55)" }}
          className="hover:opacity-90 text-black px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-sm"
        >
          Book Consultation
        </Link>
      </div>

    </nav >
  );
};

export default Navbar;
