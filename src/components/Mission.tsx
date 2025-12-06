import Link from "next/link";
import { ArrowRight, Lightbulb, Target, Zap } from "lucide-react";

export default function Mission() {
  return (
    <section id="mission" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="section-heading mb-6">
              Ignite Potential.
              <br />
              <span className="gradient-text">Illuminate Opportunity.</span>
              <br />
              Empower Brilliance.
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed mb-8">
              KindleX sparks transformative opportunity by illuminating pathways
              into the future of technology. Through our flagship
              initiatives—Lumynr and The GenAIrate Project—we equip women and
              young adults with the skills, mentorship, and support to thrive in
              IT and AI careers.
            </p>
            <Link href="/about" className="btn-outline group">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Visual Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card p-6 bg-gradient-to-br from-gold-50 to-white border border-gold-100">
              <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-display font-semibold text-navy-900 mb-2">
                Ignite
              </h3>
              <p className="text-navy-600 text-sm">
                Spark curiosity and passion for technology careers
              </p>
            </div>

            <div className="card p-6 bg-gradient-to-br from-warmOrange-50 to-white border border-warmOrange-100 mt-8">
              <div className="w-12 h-12 bg-warmOrange-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-warmOrange-600" />
              </div>
              <h3 className="font-display font-semibold text-navy-900 mb-2">
                Illuminate
              </h3>
              <p className="text-navy-600 text-sm">
                Clear pathways to meaningful tech opportunities
              </p>
            </div>

            <div className="card p-6 bg-gradient-to-br from-navy-50 to-white border border-navy-100">
              <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-navy-600" />
              </div>
              <h3 className="font-display font-semibold text-navy-900 mb-2">
                Empower
              </h3>
              <p className="text-navy-600 text-sm">
                Build skills and confidence to lead in tech
              </p>
            </div>

            <div className="card p-6 bg-gradient-to-br from-gold-100 to-warmOrange-50 border border-gold-200 mt-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-display font-semibold text-navy-900 mb-2">
                Transform
              </h3>
              <p className="text-navy-600 text-sm">
                Create lasting change in communities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
