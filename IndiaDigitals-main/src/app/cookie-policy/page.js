"use client";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/ContactSection";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "what", title: "What Are Cookies?" },
  { id: "types", title: "Types of Cookies We Use" },
  { id: "use", title: "How We Use Cookies" },
  { id: "manage", title: "Managing Cookies" },
  { id: "thirdparty", title: "Third-Party Cookies" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

export default function CookiePolicyPage() {
  const [activeTab, setActiveTab] = useState("intro");
  const sectionRefs = useRef({});

  const handleTabClick = (id) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveTab(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const sec of sections) {
        const el = sectionRefs.current[sec.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(sec.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <BreadCrumb currentPage="Cookie Policy" screen_size_padding_x="xl:px-36" />
      <section className="px-7 xl:px-36">
        <div className="text-zinc-500/95 font-bold mb-3 text-sm mt-12 tracking-widest">
          Our Commitment to Transparency
        </div>
        <h1 className="text-gray-900/90 font-medium text-4xl sm:text-5xl xl:text-6xl">
          Cookie Policy
          <strong className="font-bold text-6xl text-orange-600">.</strong>
        </h1>
      </section>

      <section className="px-7 xl:px-36 pb-20 pt-10 flex flex-col lg:flex-row gap-12">
        {/* LEFT SIDE – Sidebar */}
        <aside className="lg:w-[30%] border border-gray-200 rounded-xl p-6 h-fit sticky top-28 bg-white shadow-sm">
          <ul className="flex lg:flex-col flex-wrap gap-3 lg:gap-4 justify-start">
            {sections.map((sec) => (
              <li key={sec.id}>
                <button
                  onClick={() => handleTabClick(sec.id)}
                  className={`text-left w-full px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === sec.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {sec.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* RIGHT SIDE – Content */}
        <div className="lg:w-[70%] text-gray-700 leading-relaxed space-y-10">
          {/* Introduction */}
          <section id="intro" ref={(el) => (sectionRefs.current["intro"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Introduction
            </h2>
            <p>
              This Cookie Policy explains how <strong>DH Solution</strong> uses
              cookies and similar tracking technologies when you visit our
              website. By using our site, you consent to the use of cookies in
              accordance with this policy.
            </p>
          </section>

          {/* What Are Cookies */}
          <section id="what" ref={(el) => (sectionRefs.current["what"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device by your web
              browser. They help websites remember your preferences, improve
              performance, and provide analytical insights.
            </p>
          </section>

          {/* Types of Cookies */}
          <section id="types" ref={(el) => (sectionRefs.current["types"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Types of Cookies We Use
            </h2>
            <p>DH Solution uses the following types of cookies:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Essential Cookies:</strong> Required for the operation
                of our website and cannot be disabled.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us understand how
                visitors interact with our website by collecting and reporting
                information anonymously.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Allow us to remember your
                preferences and enhance user experience.
              </li>
              <li>
                <strong>Targeting/Advertising Cookies:</strong> Used to deliver
                relevant advertisements and track marketing effectiveness.
              </li>
            </ul>
          </section>

          {/* How We Use Cookies */}
          <section id="use" ref={(el) => (sectionRefs.current["use"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              How We Use Cookies
            </h2>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Enable website functionality and navigation.</li>
              <li>Analyze site traffic and user behavior.</li>
              <li>Personalize content and user experience.</li>
              <li>
                Deliver and measure the effectiveness of marketing campaigns.
              </li>
            </ul>
          </section>

          {/* Managing Cookies */}
          <section id="manage" ref={(el) => (sectionRefs.current["manage"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Managing Cookies
            </h2>
            <p>
              You can control and manage cookies through your browser settings.
              Most browsers allow you to block or delete cookies. Please note
              that disabling cookies may impact the functionality of our
              website.
            </p>
          </section>

          {/* Third-Party Cookies */}
          <section
            id="thirdparty"
            ref={(el) => (sectionRefs.current["thirdparty"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Third-Party Cookies
            </h2>
            <p>
              Some cookies may be placed by third-party services that appear on
              our pages. We do not control these cookies and recommend reviewing
              the third parties’ cookie policies for more details.
            </p>
          </section>

          {/* Changes */}
          <section id="changes" ref={(el) => (sectionRefs.current["changes"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Changes to This Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes
              will be posted on this page. Continued use of our website after
              changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" ref={(el) => (sectionRefs.current["contact"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Cookie Policy, please contact
              us at:
            </p>
            <p className="mt-3 font-medium text-blue-600">
              Email: legal@dhsol.net
            </p>
          </section>
        </div>
      </section>

      <ContactSection />
      <BlogSection />
      <Footer />
    </>
  );
}
