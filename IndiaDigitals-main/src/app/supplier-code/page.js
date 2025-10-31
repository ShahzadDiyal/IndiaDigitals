"use client";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/ContactSection";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "labor", title: "Labor and Human Rights" },
  { id: "health", title: "Health and Safety" },
  { id: "environment", title: "Environmental Responsibility" },
  { id: "ethics", title: "Ethical Business Practices" },
  { id: "monitoring", title: "Monitoring and Compliance" },
  { id: "reporting", title: "Reporting Violations" },
  { id: "contact", title: "Contact Us" },
];

export default function SupplierCodeOfConductPage() {
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
        currentPage="Global Supplier Code of Conduct"
        screen_size_padding_x="xl:px-36"
      />
      <section className="px-7 xl:px-36">
        <div className="text-zinc-500/95 font-bold mb-3 text-sm mt-12 tracking-widest">
          Our Commitment to Ethical Partnerships
        </div>
        <h1 className="text-gray-900/90 font-medium text-4xl sm:text-5xl xl:text-6xl">
          Global Supplier Code of Conduct
          <strong className="font-bold text-6xl text-orange-600">.</strong>
        </h1>
      </section>

      <section className="px-7 xl:px-36 pb-20 pt-10 flex flex-col lg:flex-row gap-12">
        {/* LEFT SIDE – Tabs */}
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
          <section id="intro" ref={(el) => (sectionRefs.current["intro"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Introduction
            </h2>
            <p>
              At <strong>DH Solution</strong>, we are dedicated to maintaining
              the highest ethical and professional standards across all aspects
              of our business operations. This Global Supplier Code of Conduct
              outlines our expectations for suppliers, vendors, contractors, and
              business partners to ensure responsible, lawful, and ethical
              practices throughout our global supply chain.
            </p>
          </section>

          <section id="labor" ref={(el) => (sectionRefs.current["labor"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Labor and Human Rights
            </h2>
            <p>
              We expect all suppliers to uphold the fundamental rights of their
              workers and to treat them with dignity and respect. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Freely Chosen Employment:</strong> No forced, bonded, or
                indentured labor.
              </li>
              <li>
                <strong>Child Labor:</strong> No employment of individuals below
                the legal working age.
              </li>
              <li>
                <strong>Non-Discrimination:</strong> Equal opportunity without
                discrimination based on race, gender, religion, or other
                protected status.
              </li>
              <li>
                <strong>Fair Wages:</strong> Workers must be paid at least the
                legal minimum wage and provided all legally required benefits.
              </li>
            </ul>
          </section>

          <section id="health" ref={(el) => (sectionRefs.current["health"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Health and Safety
            </h2>
            <p>
              Suppliers must provide a safe, healthy, and secure working
              environment. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Compliance with all applicable health and safety laws.</li>
              <li>Providing necessary training and protective equipment.</li>
              <li>
                Implementing procedures to prevent workplace accidents and
                injuries.
              </li>
              <li>
                Maintaining emergency preparedness and response plans for all
                facilities.
              </li>
            </ul>
          </section>

          <section
            id="environment"
            ref={(el) => (sectionRefs.current["environment"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Environmental Responsibility
            </h2>
            <p>
              We are committed to environmental sustainability and expect our
              suppliers to operate responsibly and minimize their impact:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Regulatory Compliance:</strong> Adherence to all
                environmental laws and standards.
              </li>
              <li>
                <strong>Waste Management:</strong> Safe disposal, reduction, and
                recycling of waste.
              </li>
              <li>
                <strong>Resource Efficiency:</strong> Efficient use of energy,
                water, and materials.
              </li>
            </ul>
          </section>

          <section id="ethics" ref={(el) => (sectionRefs.current["ethics"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Ethical Business Practices
            </h2>
            <p>
              DH Solution expects all suppliers to conduct business with
              integrity, honesty, and transparency. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Anti-Corruption:</strong> No bribery, corruption, or
                unethical influence of any kind.
              </li>
              <li>
                <strong>Confidentiality:</strong> Protect all information shared
                by DH Solution and never disclose without permission.
              </li>
              <li>
                <strong>Fair Competition:</strong> Avoid collusion or
                anticompetitive practices.
              </li>
            </ul>
          </section>

          <section
            id="monitoring"
            ref={(el) => (sectionRefs.current["monitoring"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Monitoring and Compliance
            </h2>
            <p>
              DH Solution reserves the right to assess and monitor supplier
              compliance with this Code of Conduct. Non-compliance may result in
              corrective actions or termination of business relationships.
            </p>
          </section>

          <section
            id="reporting"
            ref={(el) => (sectionRefs.current["reporting"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Reporting Violations
            </h2>
            <p>
              Suppliers and their employees are encouraged to report any
              suspected or actual violations of this Code. Reports can be made
              confidentially and without fear of retaliation.
            </p>
          </section>

          <section
            id="contact"
            ref={(el) => (sectionRefs.current["contact"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Contact Us
            </h2>
            <p>
              For questions or to report a concern related to the Global
              Supplier Code of Conduct, please reach out to:
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
