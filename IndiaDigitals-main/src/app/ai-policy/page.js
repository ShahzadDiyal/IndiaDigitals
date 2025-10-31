"use client";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/ContactSection";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "principles", title: "Principles of Responsible AI" },
  { id: "development", title: "AI Development and Use" },
  { id: "collaboration", title: "Collaboration and Compliance" },
  { id: "risk", title: "Risk Management and Review" },
  { id: "rights", title: "Your Rights and Choices" },
  { id: "updates", title: "Policy Updates" },
  { id: "contact", title: "Contact Us" },
];

export default function GlobalAIPolicyPage() {
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
      <BreadCrumb
        currentPage="Global AI Policy"
        screen_size_padding_x="xl:px-36"
      />

      {/* Header */}
      <section className="px-7 xl:px-36">
        <div className="text-zinc-500/95 font-bold mb-3 text-sm mt-12 tracking-widest">
          Responsible & Ethical AI Practices
        </div>
        <h1 className="text-gray-900/90 font-medium text-4xl sm:text-5xl xl:text-6xl">
          Global AI Policy
          <strong className="font-bold text-6xl text-orange-600">.</strong>
        </h1>
      </section>

      {/* Main Section */}
      <section className="px-7 xl:px-36 pb-20 pt-10 flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
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

        {/* Content */}
        <div className="lg:w-[70%] text-gray-700 leading-relaxed space-y-10">
          {/* Introduction */}
          <section id="intro" ref={(el) => (sectionRefs.current["intro"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Introduction
            </h2>
            <p>
              At <strong>DH Solution</strong>, we are committed to the responsible
              and ethical development, deployment, and use of Artificial
              Intelligence (AI). This Global AI Policy outlines our approach to
              ensuring that AI technologies are used in a way that respects human
              rights, enhances transparency, and promotes accountability across
              all regions where we operate.
            </p>
          </section>

          {/* Principles */}
          <section
            id="principles"
            ref={(el) => (sectionRefs.current["principles"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Principles of Responsible AI
            </h2>
            <p>
              We adhere to the following guiding principles to ensure our AI
              practices are ethical and responsible:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Fairness:</strong> AI systems should be free from bias
                and discrimination and treat all individuals equally.
              </li>
              <li>
                <strong>Transparency:</strong> We commit to making our AI
                systems understandable and their decisions explainable to users
                where possible.
              </li>
              <li>
                <strong>Accountability:</strong> We take full responsibility for
                the AI systems we build and deploy, ensuring human oversight is
                maintained.
              </li>
              <li>
                <strong>Privacy:</strong> Personal data used in AI systems is
                protected in compliance with applicable data protection laws.
              </li>
              <li>
                <strong>Security:</strong> AI systems are built with strong
                safeguards to prevent misuse and unauthorized access.
              </li>
            </ul>
          </section>

          {/* AI Development and Use */}
          <section
            id="development"
            ref={(el) => (sectionRefs.current["development"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              AI Development and Use
            </h2>
            <p>
              Our AI development process incorporates rigorous testing and
              validation to minimize risks and unintended consequences. We
              prioritize building AI that enhances human capabilities and avoids
              harm.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                AI is used to support innovation, automate processes, and
                improve user experiences.
              </li>
              <li>
                AI systems are tested for accuracy, reliability, and fairness
                before deployment.
              </li>
              <li>
                Human oversight is integrated into critical AI applications,
                especially those involving significant decisions about people.
              </li>
            </ul>
          </section>

          {/* Collaboration and Compliance */}
          <section
            id="collaboration"
            ref={(el) => (sectionRefs.current["collaboration"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Collaboration and Compliance
            </h2>
            <p>
              We collaborate with global stakeholders including regulators,
              researchers, and civil society organizations to align our AI
              practices with emerging international standards and laws.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Regulatory Alignment:</strong> Our AI systems comply
                with national and international laws regarding data protection,
                consumer rights, and AI usage.
              </li>
              <li>
                <strong>Cross-border Cooperation:</strong> We support
                interoperability and the sharing of best practices in AI
                governance worldwide.
              </li>
            </ul>
          </section>

          {/* Risk Management */}
          <section id="risk" ref={(el) => (sectionRefs.current["risk"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Risk Management and Review
            </h2>
            <p>
              We regularly assess AI-related risks and conduct audits to ensure
              responsible AI use. Reviews are performed at every stage of the AI
              lifecycle, including planning, development, deployment, and
              monitoring.
            </p>
          </section>

          {/* Rights */}
          <section id="rights" ref={(el) => (sectionRefs.current["rights"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Your Rights and Choices
            </h2>
            <p>
              You have the right to know when AI is being used and to understand
              how decisions are made by AI systems. If you are affected by an
              AI-driven decision, you may request human intervention or an
              explanation where applicable.
            </p>
          </section>

          {/* Updates */}
          <section
            id="updates"
            ref={(el) => (sectionRefs.current["updates"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Policy Updates
            </h2>
            <p>
              We may revise this Global AI Policy to reflect changes in
              technology, regulation, or our practices. Any updates will be
              posted on this page and communicated where necessary. We encourage
              stakeholders to review this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section
            id="contact"
            ref={(el) => (sectionRefs.current["contact"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Contact Us
            </h2>
            <p>
              For questions or concerns regarding our AI practices or this
              policy, please contact us at:
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
