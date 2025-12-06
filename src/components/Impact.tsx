import Link from "next/link";
import { ArrowRight, Users, GraduationCap, Heart } from "lucide-react";

export default function Impact() {
  const metrics = [
    {
      icon: Users,
      value: "200+",
      label: "Women trained through Lumynr",
      color: "gold",
    },
    {
      icon: GraduationCap,
      value: "150+",
      label: "Youth equipped with AI skills",
      color: "warmOrange",
    },
    {
      icon: Heart,
      value: "100%",
      label: "Mentorship access for participants",
      color: "navy",
    },
  ];

  return (
    <section id="impact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gold-50/30 to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-6">
            Because Talent Is Everywhere—
            <br />
            <span className="gradient-text">Opportunity Is Not.</span>
          </h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Too many brilliant minds are overlooked due to systemic inequities.
            KindleX exists to change that. By providing access to skills,
            mentorship, and career pathways, we help participants unlock their
            potential, contribute to innovation, and inspire their communities.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`relative group p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                metric.color === "gold"
                  ? "border-gold-200 bg-gradient-to-br from-gold-50 to-white hover:border-gold-400 hover:shadow-lg hover:shadow-gold-100"
                  : metric.color === "warmOrange"
                    ? "border-warmOrange-200 bg-gradient-to-br from-warmOrange-50 to-white hover:border-warmOrange-400 hover:shadow-lg hover:shadow-warmOrange-100"
                    : "border-navy-200 bg-gradient-to-br from-navy-50 to-white hover:border-navy-400 hover:shadow-lg hover:shadow-navy-100"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  metric.color === "gold"
                    ? "bg-gold-100"
                    : metric.color === "warmOrange"
                      ? "bg-warmOrange-100"
                      : "bg-navy-100"
                }`}
              >
                <metric.icon
                  className={`w-7 h-7 ${
                    metric.color === "gold"
                      ? "text-gold-600"
                      : metric.color === "warmOrange"
                        ? "text-warmOrange-600"
                        : "text-navy-600"
                  }`}
                />
              </div>
              <div
                className={`text-5xl font-display font-bold mb-2 ${
                  metric.color === "gold"
                    ? "text-gold-600"
                    : metric.color === "warmOrange"
                      ? "text-warmOrange-600"
                      : "text-navy-700"
                }`}
              >
                {metric.value}
              </div>
              <p className="text-navy-600 font-medium">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/donate" className="btn-primary group">
            Support Our Mission
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
