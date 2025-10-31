"use client";
import { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/ContactSection";

export default function CareersPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "What positions are currently open?",
      a: "You can view all open positions on our Careers page. We regularly update listings based on our hiring needs.",
    },
    {
      q: "Do you offer remote roles?",
      a: "Yes, many of our roles are fully remote or offer hybrid flexibility depending on the department.",
    },
    {
      q: "What does your interview process look like?",
      a: "Our process usually includes an application review, one or more interviews, and a culture-fit conversation.",
    },
    {
      q: "How should I prepare for the interview?",
      a: "Be yourself, know our values, and be ready to demonstrate your passion and skills with real-world thinking.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="font-sans text-gray-800 pt-20">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-10"></div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-5xl font-bold mb-4">Careers at DH Solutions</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Join the DH Solution team and kickstart your career in an
              innovative and supportive work environment.
            </p>
          </div>
        </section>

        {/* OUR VALUES */}
        {/* OUR VALUES + VISION & MISSION */}
        <section className="py-24 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our core values shape our culture and guide every decision,
              ensuring we build technology that empowers people and businesses
              globally.
            </p>
          </div>

          {/* Glassmorphic Container */}
          <div className="relative max-w-6xl mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200/50 p-10">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Innovation",
                  icon: "💡",
                  desc: "We constantly push boundaries, embracing creativity and new ideas to drive change.",
                  color: "from-orange-400 to-pink-500",
                },
                {
                  title: "Transparency",
                  icon: "🔍",
                  desc: "We believe in open communication, honesty, and trust across every level of the organization.",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  title: "Team Work",
                  icon: "🤝",
                  desc: "Collaboration lies at the heart of everything we do — we grow stronger together.",
                  color: "from-green-400 to-emerald-500",
                },
                {
                  title: "Integrity",
                  icon: "🧭",
                  desc: "We uphold the highest standards of ethics and accountability in every project we deliver.",
                  color: "from-purple-500 to-fuchsia-500",
                },
              ].map((val, i) => (
                <div
                  key={i}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl text-white bg-gradient-to-r ${val.color} shadow-md group-hover:scale-110 transition-transform`}
                  >
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision & Mission Section */}
          <div className="mt-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg">
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-base opacity-90 leading-relaxed">
                To be a global leader in innovative software solutions,
                empowering businesses through cutting-edge technology.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-white border border-gray-200 shadow-md">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver high-quality, customized digital solutions that drive
                growth and success for our clients worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* CURRENT OPENINGS */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              We’re Currently Hiring
            </h2>
            <p className="text-gray-600">
              Explore exciting opportunities to grow with us and make an impact.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Example job card */}
            <div className="flex flex-col md:flex-row justify-between items-start border rounded-2xl shadow-md hover:shadow-lg p-8 bg-gradient-to-r from-blue-50 to-indigo-50 transition mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  MERN Stack Developer
                </h3>
                <p className="text-gray-600 mt-3 max-w-xl">
                  We are seeking a passionate MERN Stack Developer to design,
                  build, and scale cutting-edge applications.
                </p>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:opacity-90 transition">
                Apply Now
              </button>
            </div>

            <p className="text-gray-600 mt-8 text-center">
              No other openings available. Send your resume to{" "}
              <a
                href="mailto:careers@dhsol.net"
                className="text-blue-600 font-semibold hover:underline"
              >
                careers@dhsol.net
              </a>
            </p>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 via-white to-blue-50">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Global Perks & Benefits
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We want you to love working here as much as we do. To inspire our
              team to be creative, productive, and most importantly – feel
              valued as employees, we offer endless perks and de-stressors. How
              fun it is to unwind while at work!
            </p>
          </div>

          <ul className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Vacation & Paid Time Off",
              "Work-life Integration",
              "Maternity/Paternity Benefits",
              "Personal Career Growth",
              "Learning & Development",
              "Hybrid Working Environment",
            ].map((perk, i) => (
              <li
                key={i}
                className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <CheckCircle2 className="text-green-600 w-6 h-6 mt-1" />
                <span className="text-gray-700 font-medium">{perk}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* WHY JOIN */}
        <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Why Join DH Solutions?</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              At DH Solutions, we believe in pushing boundaries, embracing
              innovation, and building a future that empowers both our clients
              and our team. We are not just growing — we are evolving into a
              global force.
            </p>
            <p className="text-lg opacity-90 leading-relaxed">
              Our mission is to expand globally by 2030, and we are looking for
              passionate, visionary individuals who want to make real impact
              across industries and borders. Join us to be part of something
              extraordinary.
            </p>
          </div>
        </section>

        {/* HIRING PROCESS */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Hiring Process
            </h2>
            <p className="text-gray-600">
              We keep it simple, transparent, and efficient — so you can focus
              on showing your true potential.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Apply Online",
                desc: "Send us your resume and share your story.",
              },
              {
                step: "2",
                title: "Initial Screening",
                desc: "HR connects for a quick intro discussion.",
              },
              {
                step: "3",
                title: "Technical Interview",
                desc: "Showcase your skills in action.",
              },
              {
                step: "4",
                title: "Culture Fit",
                desc: "Meet the team and ensure our values align.",
              },
              {
                step: "5",
                title: "Offer & Onboarding",
                desc: "Join the team and start your journey!",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border rounded-2xl shadow-sm bg-gradient-to-br from-gray-50 to-white hover:shadow-md transition"
              >
                <div className="text-4xl font-bold text-blue-600 mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Have questions? We’ve got answers.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border rounded-lg bg-white shadow-sm">
                <button
                  className="flex justify-between items-center w-full p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-gray-900">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-600">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      <ContactSection />
      <BlogSection />
      <Footer />
    </>
  );
}
