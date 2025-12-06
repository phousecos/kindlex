import Link from "next/link";
import { ArrowRight, Users, Cpu, Sparkles, Star } from "lucide-react";

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-navy-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #D97706 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Our Programs</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Two transformative initiatives designed to unlock potential and
            create pathways to success in technology.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Lumynr Card */}
          <div className="card group">
            {/* Image Header */}
            <div className="relative h-64 bg-gradient-to-br from-gold-400 to-warmOrange-500 overflow-hidden">
              <div className="absolute inset-0 bg-navy-950/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-bold text-3xl">Lumynr</h3>
                </div>
              </div>
              <Sparkles className="absolute top-4 right-4 w-6 h-6 text-white/60" />
              <Star className="absolute bottom-4 left-4 w-5 h-5 text-white/40" />
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-gold-600 font-semibold mb-2">
                Helping Women Become Tech Luminaries
              </p>
              <p className="text-navy-600 leading-relaxed mb-6">
                Lumynr empowers women to step boldly into IT careers through
                mentorship, skills development, and a supportive community.
                Participants gain the confidence and experience to lead,
                innovate, and shine in tech.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm font-medium">
                  Mentorship
                </span>
                <span className="px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm font-medium">
                  Skills Training
                </span>
                <span className="px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm font-medium">
                  Community
                </span>
              </div>

              <Link
                href="/lumynr"
                className="inline-flex items-center text-gold-600 font-semibold hover:text-gold-700 group/link"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* GenAIrate Card */}
          <div className="card group">
            {/* Image Header */}
            <div className="relative h-64 bg-gradient-to-br from-navy-700 to-navy-900 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-warmOrange-500/20 to-gold-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-bold text-3xl">
                    The GenAIrate Project
                  </h3>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-6 h-6 bg-warmOrange-400/60 rounded-full blur-sm" />
              <div className="absolute bottom-4 left-4 w-4 h-4 bg-gold-400/40 rounded-full blur-sm" />
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-navy-700 font-semibold mb-2">
                Equipping Young Adults with Real-World AI Skills
              </p>
              <p className="text-navy-600 leading-relaxed mb-6">
                GenAIrate prepares underserved and justice-impacted young adults
                for high-growth AI and tech careers. Hands-on projects,
                mentorship, and career pathways ensure participants are ready to
                thrive in the modern workforce.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-sm font-medium">
                  AI Training
                </span>
                <span className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-sm font-medium">
                  Hands-On Projects
                </span>
                <span className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-sm font-medium">
                  Career Pathways
                </span>
              </div>

              <Link
                href="/genairate"
                className="inline-flex items-center text-navy-700 font-semibold hover:text-navy-800 group/link"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
