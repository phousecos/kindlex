"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/KindleX-logo-160.png"
              alt="KindleX"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-white/80 hover:text-gold-400 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/#mission"
              className="text-white/80 hover:text-gold-400 transition-colors font-medium"
            >
              Mission
            </Link>
            <Link
              href="/#programs"
              className="text-white/80 hover:text-gold-400 transition-colors font-medium"
            >
              Programs
            </Link>
            <Link
              href="/#impact"
              className="text-white/80 hover:text-gold-400 transition-colors font-medium"
            >
              Impact
            </Link>
            <Link
              href="/get-involved"
              className="text-white/80 hover:text-gold-400 transition-colors font-medium"
            >
              Get Involved
            </Link>
            <Link
              href="/get-involved"
              className="btn-primary !py-2 !px-6 !text-base"
            >
              Donate
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-white/80 hover:text-gold-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#mission"
                className="text-white/80 hover:text-gold-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Mission
              </Link>
              <Link
                href="/#programs"
                className="text-white/80 hover:text-gold-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>
              <Link
                href="/#impact"
                className="text-white/80 hover:text-gold-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Impact
              </Link>
              <Link
                href="/get-involved"
                className="text-white/80 hover:text-gold-400 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Involved
              </Link>
              <Link
                href="/get-involved"
                className="btn-primary !py-2 !px-6 !text-base w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
