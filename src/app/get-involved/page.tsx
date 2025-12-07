import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Handshake,
  Users,
  Heart,
  Clock,
  GraduationCap,
  Building2,
  Briefcase,
  MessageSquare,
  Calendar,
  BookOpen,
  Megaphone,
  FileText,
  Gift,
  CreditCard,
  UserPlus,
  Award,
  Building,
  Mail,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved - Support KindleX | Partner, Mentor, Donate, Volunteer",
  description:
    "Your support fuels the futures of women, underserved youth, and justice-impacted communities rising in tech. Partner, mentor, donate, or volunteer with KindleX.",
};

export default function GetInvolvedPage() {
  const partnerWays = [
    {
      icon: Briefcase,
      text: "Host interns, apprentices, or early-career hires",
    },
    {
      icon: Users,
      text: "Offer mentorship or guest instruction",
    },
    {
      icon: BookOpen,
      text: "Co-develop training programs or workshops",
    },
    {
      icon: Calendar,
      text: "Sponsor events, scholarships, or program cohorts",
    },
    {
      icon: Building2,
      text: "Collaborate on research or community initiatives",
    },
  ];

  const mentorOpportunities = [
    {
      icon: Users,
      text: "One-on-one mentorship",
    },
    {
      icon: GraduationCap,
      text: "Skill-specific tutoring",
    },
    {
      icon: FileText,
      text: "Career guidance & resume support",
    },
    {
      icon: MessageSquare,
      text: "Guest speaking or workshop facilitation",
    },
  ];

  const donationOptions = [
    {
      icon: Gift,
      text: "One-time gift",
    },
    {
      icon: CreditCard,
      text: "Monthly membership",
    },
    {
      icon: UserPlus,
      text: "Sponsor a participant",
    },
    {
      icon: Award,
      text: "Fund a scholarship",
    },
    {
      icon: Building,
      text: "Corporate giving & matching",
    },
  ];

  const volunteerRoles = [
    {
      icon: Calendar,
      text: "Event support",
    },
    {
      icon: FileText,
      text: "Admin or program coordination",
    },
    {
      icon: GraduationCap,
      text: "Tech tutoring",
    },
    {
      icon: Megaphone,
      text: "Community outreach",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
          <div className="absolute inset-0 bg-navy-950/40" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-warmOrange-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/6 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-white/90 text-sm font-medium">
              Get Involved with KindleX
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Be the Spark That Helps{" "}
            <span className="bg-gradient-to-r from-gold-400 via-warmOrange-400 to-gold-500 bg-clip-text text-transparent">
              Brilliance Take Flight
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Your support fuels the futures of women, underserved youth, and
            justice-impacted communities rising in tech.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl text-navy-700 leading-relaxed mb-8">
            KindleX thrives because of people and organizations who believe in a
            more inclusive, equitable, and innovative tech future.
          </p>
          <p className="text-lg text-navy-600 leading-relaxed">
            Whether you&apos;re an employer looking to cultivate diverse talent, a
            mentor eager to share your knowledge, or a donor wanting to make a
            direct impact—you have the power to ignite possibility.
          </p>
          <p className="text-xl font-semibold text-navy-900 mt-8">
            Below are the meaningful ways you can help brilliance take flight.
          </p>
        </div>
      </section>

      {/* Section 1: Partner With Us */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gold-100 rounded-full px-4 py-2 mb-6">
                <Handshake className="w-5 h-5 text-gold-600" />
                <span className="text-gold-700 text-sm font-semibold uppercase tracking-wide">
                  Partner With Us
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">
                Build the Future of Tech—
                <span className="gradient-text">Together</span>
              </h2>

              <p className="text-lg text-navy-600 leading-relaxed mb-8">
                We collaborate with tech companies, educational institutions, and
                community organizations committed to expanding access to
                opportunity. As a partner, you play a vital role in creating
                pathways for rising talent from Lumynr and The GenAIrate Project.
              </p>

              <Link href="/partner" className="btn-primary group">
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-navy-100">
              <h3 className="text-xl font-display font-semibold text-navy-900 mb-6">
                Ways to Partner
              </h3>
              <ul className="space-y-4">
                {partnerWays.map((way, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <way.icon className="w-5 h-5 text-gold-600" />
                    </div>
                    <span className="text-navy-700 leading-relaxed pt-2">
                      {way.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mentor a Rising Leader */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-warmOrange-50 to-gold-50 rounded-2xl p-8 border border-warmOrange-100">
              <h3 className="text-xl font-display font-semibold text-navy-900 mb-6">
                Mentor Opportunities
              </h3>
              <ul className="space-y-4">
                {mentorOpportunities.map((opportunity, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-warmOrange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <opportunity.icon className="w-5 h-5 text-warmOrange-600" />
                    </div>
                    <span className="text-navy-700 leading-relaxed pt-2">
                      {opportunity.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 bg-warmOrange-100 rounded-full px-4 py-2 mb-6">
                <Users className="w-5 h-5 text-warmOrange-600" />
                <span className="text-warmOrange-700 text-sm font-semibold uppercase tracking-wide">
                  Mentorship
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">
                Illuminate Someone&apos;s{" "}
                <span className="gradient-text">Path</span>
              </h2>

              <p className="text-lg text-navy-600 leading-relaxed mb-8">
                KindleX mentors help participants navigate career decisions, build
                confidence, strengthen professional skills, and see the brilliance
                in themselves. Mentorship is a transformative experience—for both
                mentor and mentee.
              </p>

              <Link href="/mentorship" className="btn-primary group">
                Apply to Mentor
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Donate */}
      <section className="py-20 bg-gradient-to-br from-gold-50 via-warmOrange-50 to-gold-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gold-100 rounded-full px-4 py-2 mb-6">
                <Heart className="w-5 h-5 text-gold-600" />
                <span className="text-gold-700 text-sm font-semibold uppercase tracking-wide">
                  Donate
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">
                Fuel Brilliance.{" "}
                <span className="gradient-text">Change Futures.</span>
              </h2>

              <p className="text-lg text-navy-600 leading-relaxed mb-8">
                Your contribution directly supports skills training, mentorship
                programs, scholarships, technology access, and career pathways for
                participants in Lumynr and GenAIrate. Every dollar is an investment
                in brighter futures.
              </p>

              <Link href="/donate" className="btn-primary group">
                Make a Donation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gold-200">
              <h3 className="text-xl font-display font-semibold text-navy-900 mb-6">
                Donation Options
              </h3>
              <ul className="space-y-4">
                {donationOptions.map((option, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold-100 to-warmOrange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <option.icon className="w-5 h-5 text-gold-600" />
                    </div>
                    <span className="text-navy-700 leading-relaxed pt-2">
                      {option.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Volunteer */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-navy-900 rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold text-white mb-6">
                Volunteer Roles May Include
              </h3>
              <ul className="space-y-4">
                {volunteerRoles.map((role, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <role.icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <span className="text-white/90 leading-relaxed pt-2">
                      {role.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 bg-navy-100 rounded-full px-4 py-2 mb-6">
                <Clock className="w-5 h-5 text-navy-600" />
                <span className="text-navy-700 text-sm font-semibold uppercase tracking-wide">
                  Volunteer
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">
                Give Time. Share Knowledge.{" "}
                <span className="gradient-text">Spark Change.</span>
              </h2>

              <p className="text-lg text-navy-600 leading-relaxed mb-8">
                Volunteers are the heartbeat of KindleX. From community events to
                program support, your time and expertise help create meaningful
                experiences for participants.
              </p>

              <Link href="/volunteer" className="btn-primary group">
                Become a Volunteer
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Stay Connected */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gold-100 rounded-full px-4 py-2 mb-6">
            <Mail className="w-5 h-5 text-gold-600" />
            <span className="text-gold-700 text-sm font-semibold uppercase tracking-wide">
              Stay Connected
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6">
            Join Our <span className="gradient-text">Community</span>
          </h2>

          <p className="text-lg text-navy-600 leading-relaxed mb-10">
            Stay up to date on upcoming cohorts, events, success stories, and new
            opportunities to contribute.
          </p>

          {/* Newsletter Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-navy-100">
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-xl bg-navy-50 border border-navy-200 text-navy-900 placeholder-navy-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-xl bg-navy-50 border border-navy-200 text-navy-900 placeholder-navy-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-gold-400 to-warmOrange-500 text-navy-950 font-semibold rounded-full hover:from-gold-300 hover:to-warmOrange-400 transition-all shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Together, We Can{" "}
            <span className="bg-gradient-to-r from-gold-400 via-warmOrange-400 to-gold-500 bg-clip-text text-transparent">
              Light the Way Forward
            </span>
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
            Your involvement—big or small—helps create a world where brilliance is
            nurtured, opportunity is illuminated, and rising leaders can take
            flight.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/partner"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-navy-950 bg-gradient-to-r from-gold-400 to-warmOrange-400 rounded-full hover:from-gold-300 hover:to-warmOrange-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Handshake className="mr-2 w-5 h-5" />
              Partner
            </Link>
            <Link
              href="/mentorship"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <Users className="mr-2 w-5 h-5" />
              Mentor
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <Heart className="mr-2 w-5 h-5" />
              Donate
            </Link>
            <Link
              href="/volunteer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <Clock className="mr-2 w-5 h-5" />
              Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/*
        Hidden Section: Supporter Testimonials
        Uncomment this section when ready to enable testimonials

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
                Why People Support <span className="gradient-text">KindleX</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gold-50 to-white rounded-2xl p-8 border border-gold-100">
                <blockquote className="text-navy-700 leading-relaxed mb-6 italic">
                  "Partnering with KindleX has brought fresh talent and perspectives
                  into our organization. Their participants are motivated, skilled,
                  and ready to lead."
                </blockquote>
                <cite className="text-navy-900 font-semibold not-italic">
                  — Tech Partner
                </cite>
              </div>

              <div className="bg-gradient-to-br from-warmOrange-50 to-white rounded-2xl p-8 border border-warmOrange-100">
                <blockquote className="text-navy-700 leading-relaxed mb-6 italic">
                  "Mentoring a Lumynr participant has been the most rewarding
                  professional experience of my year."
                </blockquote>
                <cite className="text-navy-900 font-semibold not-italic">
                  — Mentor
                </cite>
              </div>

              <div className="bg-gradient-to-br from-navy-50 to-white rounded-2xl p-8 border border-navy-100">
                <blockquote className="text-navy-700 leading-relaxed mb-6 italic">
                  "Supporting GenAIrate is investing in the future workforce—the
                  impact is tangible and immediate."
                </blockquote>
                <cite className="text-navy-900 font-semibold not-italic">
                  — Corporate Donor
                </cite>
              </div>
            </div>
          </div>
        </section>
      */}

      <Footer />
    </main>
  );
}
