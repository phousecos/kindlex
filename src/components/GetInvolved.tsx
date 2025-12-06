import Link from "next/link";
import { Handshake, Heart, Users, ArrowRight } from "lucide-react";

const involvementOptions = [
  {
    icon: Handshake,
    title: "Partner with Us",
    description:
      "Join forces as an employer, mentor, or corporate partner to help shape the future of tech talent.",
    cta: "Become a Partner",
    href: "/partner",
    gradient: "from-gold-400 to-warmOrange-500",
    hoverBg: "hover:bg-gold-50",
  },
  {
    icon: Heart,
    title: "Donate",
    description:
      "Support programs, scholarships, and resources that empower the next generation of tech leaders.",
    cta: "Make a Gift",
    href: "/donate",
    gradient: "from-warmOrange-400 to-warmOrange-600",
    hoverBg: "hover:bg-warmOrange-50",
  },
  {
    icon: Users,
    title: "Join Our Community",
    description:
      "Sign up for our newsletter, volunteer your time, or become part of our growing network.",
    cta: "Get Connected",
    href: "/community",
    gradient: "from-navy-600 to-navy-800",
    hoverBg: "hover:bg-navy-50",
  },
];

export default function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 30%, #FBBF24 60%, #F97316 100%)",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">
            Be a Part of the Movement
          </h2>
          <p className="text-xl text-navy-700 max-w-2xl mx-auto">
            Whether you're a partner, mentor, donor, or community member,
            KindleX offers meaningful ways to ignite the next generation of tech
            leaders.
          </p>
        </div>

        {/* Involvement Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {involvementOptions.map((option, index) => (
            <Link
              key={index}
              href={option.href}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${option.hoverBg}`}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <option.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-display font-bold text-navy-900 mb-3">
                {option.title}
              </h3>
              <p className="text-navy-600 leading-relaxed mb-6">
                {option.description}
              </p>

              {/* CTA */}
              <span className="inline-flex items-center text-navy-900 font-semibold group-hover:text-gold-600 transition-colors">
                {option.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-navy-900 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Stay Connected
              </h3>
              <p className="text-white/70">
                Subscribe to our newsletter for updates on programs, success
                stories, and ways to get involved.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold-400 focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-gold-400 to-warmOrange-500 text-navy-950 font-semibold rounded-full hover:from-gold-300 hover:to-warmOrange-400 transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
