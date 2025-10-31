"use client";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/ContactSection";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "commitment", title: "Our Commitment" },
  { id: "supplier", title: "Supplier and Partner Expectations" },
  { id: "dueDiligence", title: "Due Diligence" },
  { id: "training", title: "Training and Awareness" },
  { id: "reporting", title: "Reporting Violations" },
  { id: "enforcement", title: "Enforcement and Accountability" },
  { id: "contact", title: "Contact Us" },
];

export default function AntiHumanTraffickingPolicyPage() {
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
        currentPage="Anti-Human Trafficking and Slavery Policy"
        screen_size_padding_x="xl:px-36"
      />

      {/* HERO SECTION */}
      <section className="px-7 xl:px-36">
        <div className="text-zinc-500/95 font-bold mb-3 text-sm mt-12 tracking-widest">
          Upholding Human Rights and Ethical Responsibility
        </div>
        <h1 className="text-gray-900/90 font-medium text-4xl sm:text-5xl xl:text-6xl">
          Anti-Human Trafficking & Slavery Policy
          <strong className="font-bold text-6xl text-orange-600">.</strong>
        </h1>
      </section>

      {/* MAIN CONTENT */}
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
              <strong>DH Solution</strong> is committed to operating with
              integrity and in full compliance with all applicable laws,
              including those protecting human rights. This
              <strong> Anti-Human Trafficking and Slavery Policy</strong>{" "}
              outlines our ongoing commitment to prevent human trafficking and
              forced labor in all aspects of our operations and supply chains.
            </p>
          </section>

          <section
            id="commitment"
            ref={(el) => (sectionRefs.current["commitment"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Our Commitment
            </h2>
            <p>
              We have <strong>zero tolerance</strong> for any form of modern
              slavery — including forced labor, human trafficking, or child
              labor. All employees, contractors, suppliers, and business
              partners of DH Solution are required to uphold this commitment and
              comply with relevant laws and ethical standards.
            </p>
          </section>

          <section
            id="supplier"
            ref={(el) => (sectionRefs.current["supplier"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Supplier and Partner Expectations
            </h2>
            <p>We expect all our suppliers and business partners to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Comply with all anti-trafficking and labor regulations.</li>
              <li>
                Ensure all employment is voluntary and free from coercion or
                deception.
              </li>
              <li>
                Prohibit the use of child labor and comply with legal working
                age requirements.
              </li>
              <li>
                Provide safe, humane, and respectful working conditions for all
                employees.
              </li>
            </ul>
          </section>

          <section
            id="dueDiligence"
            ref={(el) => (sectionRefs.current["dueDiligence"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Due Diligence
            </h2>
            <p>
              DH Solution conducts <strong>due diligence</strong> on suppliers
              and partners to identify and address risks related to modern
              slavery and human trafficking. This includes supplier assessments,
              compliance checks, and implementation of corrective actions where
              necessary.
            </p>
          </section>

          <section
            id="training"
            ref={(el) => (sectionRefs.current["training"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Training and Awareness
            </h2>
            <p>
              We provide targeted <strong>training and awareness programs</strong> 
              for staff and stakeholders involved in procurement and supply chain
              management to recognize, prevent, and respond to risks of modern
              slavery and trafficking.
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
              We strongly encourage employees, suppliers, and third parties to
              report any concerns or suspected violations of this policy.
              Reports can be made <strong>confidentially</strong> and without
              fear of retaliation.
            </p>
          </section>

          <section
            id="enforcement"
            ref={(el) => (sectionRefs.current["enforcement"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Enforcement and Accountability
            </h2>
            <p>
              Violations of this policy may result in disciplinary actions,
              including <strong>termination of employment</strong> or
              <strong> discontinuation of business relationships</strong>. DH
              Solution takes all reports seriously and investigates promptly and
              thoroughly.
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
              For questions, feedback, or to report a concern related to this
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
