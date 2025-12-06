import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Users,
  Brain,
  Briefcase,
  Shield,
  Quote,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GenAIrate - Equipping Young Adults with Real-World AI Skills | KindleX",
  description:
    "The GenAIrate Project prepares underserved and justice-impacted youth for high-growth AI and tech careers through hands-on training and mentorship.",
};

export default function GenAIratePage() {
  const highlights = [
    {
      icon: Brain,
      title: "Hands-On AI Training",
      description:
        "Build real-world projects with industry-standard tools.",
      color: "bg-warmOrange-500",
    },
    {
      icon: Users,
      title: "Mentorship & Support",
      description:
        "Guidance from tech leaders and educators.",
      color: "bg-gold-500",
    },
    {
      icon: Briefcase,
      title: "Career Pathways",
      description:
        "Internships, apprenticeships, and placement support.",
      color: "bg-navy-700",
    },
    {
      icon: Shield,
      title: "Empowerment & Community",
      description:
        "A safe, inclusive environment where participants grow personally and professionally.",
      color: "bg-warmOrange-600",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-warmOrange-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-warmOrange-400" />
            <span className="text-white/90 text-sm font-medium">
              KindleX Program
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            GenAIrate: Equipping Young Adults with{" "}
            <span className="bg-gradient-to-r from-warmOrange-400 via-gold-400 to-warmOrange-500 bg-clip-text text-transparent">
              Real-World AI Skills
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Preparing underserved and justice-impacted youth for high-growth AI
            and tech careers.
          </p>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Young people having a good time working with technology"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl md:text-2xl text-navy-700 leading-relaxed">
              The GenAIrate Project gives young adults the{" "}
              <span className="font-semibold text-navy-900">tools</span>,{" "}
              <span className="font-semibold text-navy-900">knowledge</span>,
              and{" "}
              <span className="font-semibold text-navy-900">mentorship</span> to
              thrive in AI-driven industries. Participants gain hands-on
              experience with AI technologies, problem-solving projects, and
              career guidance that opens doors to meaningful opportunities.
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
            <div className="bg-gradient-to-br from-warmOrange-50 via-gold-50 to-warmOrange-50 rounded-3xl p-8 md:p-12 relative">
              <Quote className="absolute top-6 left-6 w-10 h-10 text-warmOrange-300" />
              <div className="text-center pt-6">
                <blockquote className="text-xl md:text-2xl text-navy-800 font-medium leading-relaxed mb-6 italic">
                  &ldquo;GenAIrate taught me real AI skills and opened doors I
                  never thought possible. Now I&apos;m pursuing a tech career I
                  love.&rdquo;
                </blockquote>
                <cite className="text-navy-600 font-medium not-italic">
                  — GenAIrate Participant
                </cite>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-navy-950 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                Ready to Launch Your AI Career?
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Take the first step toward a future in AI and technology. Apply
                now or reach out to learn more about The GenAIrate Project.
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
