"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* About */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-warmOrange-500 rounded-lg flex items-center justify-center">
                <span className="text-navy-950 font-display font-bold text-xl">
                  K
                </span>
              </div>
              <span className="font-display font-bold text-2xl">
                Kindle<span className="text-gold-400">X</span>
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed max-w-md mb-6">
              KindleX sparks opportunity and illuminates pathways for rising
              tech leaders. Our mission is to empower women, underserved youth,
              and justice-impacted communities to shine in IT and AI.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Programs
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/lumynr"
                  className="text-white/70 hover:text-gold-400 transition-colors"
                >
                  Lumynr
                </Link>
              </li>
              <li>
                <Link
                  href="/genairate"
                  className="text-white/70 hover:text-gold-400 transition-colors"
                >
                  GenAIrate
                </Link>
              </li>
              <li>
                <Link
                  href="/mentorship"
                  className="text-white/70 hover:text-gold-400 transition-colors"
                >
                  Mentorship
                </Link>
              </li>
              <li>
                <Link
                  href="/stories"
                  className="text-white/70 hover:text-gold-400 transition-colors"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Get Involved
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/partner"
                  className="text-white/70 hover:text-gold-400 transition-colors"
                >
                  Partner
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="text-white/70 hover:text-gold-400 transition-colors"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/volunteer"
                  className="text-white/70 hover:text-gold-400 transition-colors"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="text-white/70 hover:text-gold-400 transition-colors"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2 text-white/70">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:hello@kindlex.org"
                className="hover:text-gold-400 transition-colors"
              >
                hello@kindlex.org
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-white/50">
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/accessibility"
                className="hover:text-white transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} KindleX. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-white/50 hover:text-gold-400 transition-colors text-sm group"
            >
              Back to top
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
