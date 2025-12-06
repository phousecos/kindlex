import Link from "next/link";
import { ArrowRight, Sparkles, Heart, Users, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About KindleX - Igniting Brilliance, Illuminating Futures",
  description:
    "KindleX empowers women, underserved youth, and justice-impacted communities to thrive in the tech world through skills training, mentorship, and community support.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-warmOrange-500/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-white/90 text-sm font-medium">
              About KindleX
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Igniting Brilliance.
            <br />
            <span className="bg-gradient-to-r from-gold-400 via-warmOrange-400 to-gold-500 bg-clip-text text-transparent">
              Illuminating Futures.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            KindleX empowers women, underserved youth, and justice-impacted
            communities to thrive in the tech world.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Opening Statement */}
          <div className="text-center mb-16">
            <p className="text-2xl md:text-3xl font-display font-semibold text-navy-900 leading-relaxed">
              KindleX was founded on a simple yet powerful belief:{" "}
              <span className="gradient-text">
                brilliance belongs to everyone
              </span>
              , but opportunity does not.
            </p>
          </div>

          {/* Programs Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-gold-50 to-warmOrange-50 rounded-3xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-navy-700 leading-relaxed mb-8">
                Through our flagship programs—
                <span className="font-semibold text-navy-900">Lumynr</span> and{" "}
                <span className="font-semibold text-navy-900">
                  The GenAIrate Project
                </span>
                —we provide skills training, mentorship, and community support
                that allow participants to step confidently into technology
                careers and leadership roles.
              </p>

              {/* Program Icons */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium text-navy-800">
                    Skills Training
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-warmOrange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium text-navy-800">Mentorship</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-navy-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium text-navy-800">
                    Community Support
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center mb-16">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-navy-700 leading-relaxed mb-6">
                We don&apos;t just teach skills.
              </p>
              <p className="text-xl md:text-2xl text-navy-800 font-medium leading-relaxed">
                We{" "}
                <span className="text-gold-600 font-semibold">
                  spark possibility
                </span>
                , nurture{" "}
                <span className="text-warmOrange-600 font-semibold">
                  confidence
                </span>
                , and help rising leaders{" "}
                <span className="text-navy-900 font-semibold">shine</span>
                —creating a ripple effect that transforms individuals,
                communities, and the broader tech landscape.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-navy-950 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Join us in creating pathways for the next generation of tech
                leaders.
              </p>
              <Link href="/#get-involved" className="btn-primary group">
                Join the Movement
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
