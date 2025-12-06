import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Users,
  Code,
  Briefcase,
  Heart,
  Quote,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumynr - Helping Women Become Tech Luminaries | KindleX",
  description:
    "Lumynr supports women to rise in IT, gain leadership skills, and illuminate the tech world through mentorship, training, and community.",
};

export default function LumynrPage() {
  const highlights = [
    {
      icon: Users,
      title: "Mentorship",
      description:
        "One-on-one guidance from experienced tech professionals.",
      color: "bg-gold-500",
    },
    {
      icon: Code,
      title: "Skills Development",
      description:
        "Workshops and real-world projects in coding, IT, and emerging technologies.",
      color: "bg-warmOrange-500",
    },
    {
      icon: Briefcase,
      title: "Career Pathways",
      description:
        "Access to internships, networking, and job placement support.",
      color: "bg-navy-700",
    },
    {
      icon: Heart,
      title: "Community",
      description:
        "A vibrant network of peers, alumni, and mentors.",
      color: "bg-gold-600",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image with 60% Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-navy-950/60" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-warmOrange-500/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-white/90 text-sm font-medium">
              KindleX Program
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Lumynr: Helping Women Become{" "}
            <span className="bg-gradient-to-r from-gold-400 via-warmOrange-400 to-gold-500 bg-clip-text text-transparent">
              Tech Luminaries
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Supporting women to rise in IT, gain leadership skills, and
            illuminate the tech world.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl md:text-2xl text-navy-700 leading-relaxed">
              Lumynr is designed for women who aspire to{" "}
              <span className="font-semibold text-navy-900">lead</span>,{" "}
              <span className="font-semibold text-navy-900">innovate</span>, and{" "}
              <span className="font-semibold text-navy-900">
                make an impact
              </span>{" "}
              in technology. Through mentorship, hands-on training, career
              guidance, and a supportive community, participants gain the
              confidence and expertise to step into IT roles and leadership
              positions.
            </p>
          </div>

          {/* Program Highlights */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 text-center mb-12">
              Program{" "}
              <span className="gradient-text">Highlights</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-navy-50 to-white rounded-2xl p-8 border border-navy-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-14 h-14 ${highlight.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <highlight.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-navy-900 mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-navy-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-gold-50 via-warmOrange-50 to-gold-50 rounded-3xl p-8 md:p-12 relative">
              <Quote className="absolute top-6 left-6 w-10 h-10 text-gold-300" />
              <div className="text-center pt-6">
                <blockquote className="text-xl md:text-2xl text-navy-800 font-medium leading-relaxed mb-6 italic">
                  &ldquo;Lumynr gave me the confidence and tools to step into a
                  leadership role in tech. I finally feel like I belong.&rdquo;
                </blockquote>
                <cite className="text-navy-600 font-medium not-italic">
                  — Lumynr Alumna
                </cite>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-navy-950 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                Ready to Become a Tech Luminary?
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Take the first step toward your future in technology. Apply now
                or reach out to learn more about the Lumynr program.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#get-involved" className="btn-primary group">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/#get-involved" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
