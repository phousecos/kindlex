"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Lumynr gave me the confidence and guidance I needed to step into an IT leadership role. I finally feel like I belong in tech.",
    author: "Lumynr Alumna",
    program: "Lumynr",
    color: "gold",
  },
  {
    quote:
      "GenAIrate taught me real AI skills and opened doors I never thought possible. Now I'm pursuing a tech career I love.",
    author: "GenAIrate Participant",
    program: "GenAIrate",
    color: "navy",
  },
  {
    quote:
      "Mentoring through KindleX has been a truly rewarding experience. Seeing these young leaders grow is inspiring.",
    author: "Program Mentor",
    program: "Mentor",
    color: "warmOrange",
  },
];

export default function Testimonials() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-warmOrange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Stories of Brilliance
            <br />
            <span className="bg-gradient-to-r from-gold-400 to-warmOrange-400 bg-clip-text text-transparent">
              Taking Flight
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Hear from the incredible individuals whose lives have been
            transformed through KindleX programs.
          </p>
        </div>

        {/* Reveal Button */}
        <div className="text-center mb-12">
          <button
            onClick={() => setIsRevealed(!isRevealed)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 border border-white/20"
          >
            {isRevealed ? (
              <>
                Hide Stories <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                Reveal Stories <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {/* Testimonials Grid - Hidden by default */}
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden ${
            isRevealed
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-500 ${
                  isRevealed
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } ${
                  testimonial.color === "gold"
                    ? "bg-gradient-to-br from-gold-500/20 to-gold-500/5 border border-gold-500/30"
                    : testimonial.color === "navy"
                      ? "bg-gradient-to-br from-navy-600/40 to-navy-700/20 border border-navy-500/30"
                      : "bg-gradient-to-br from-warmOrange-500/20 to-warmOrange-500/5 border border-warmOrange-500/30"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Quote
                  className={`w-10 h-10 mb-4 ${
                    testimonial.color === "gold"
                      ? "text-gold-400"
                      : testimonial.color === "navy"
                        ? "text-navy-300"
                        : "text-warmOrange-400"
                  }`}
                />
                <p className="text-white/90 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      testimonial.color === "gold"
                        ? "bg-gold-500/30"
                        : testimonial.color === "navy"
                          ? "bg-navy-500/30"
                          : "bg-warmOrange-500/30"
                    }`}
                  >
                    <span className="text-white font-semibold">
                      {testimonial.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      — {testimonial.author}
                    </p>
                    <p
                      className={`text-sm ${
                        testimonial.color === "gold"
                          ? "text-gold-400"
                          : testimonial.color === "navy"
                            ? "text-navy-300"
                            : "text-warmOrange-400"
                      }`}
                    >
                      {testimonial.program}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional CTA */}
          <div className="text-center">
            <Link
              href="/stories"
              className="inline-flex items-center text-gold-400 hover:text-gold-300 font-semibold transition-colors group"
            >
              Read More Stories
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
