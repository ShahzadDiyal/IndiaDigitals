"use client";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/ContactSection";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "definitions", title: "Definitions" },
  { id: "services", title: "Services Provided" },
  { id: "responsibilities", title: "User Responsibilities" },
  { id: "payment", title: "Payment Terms" },
  { id: "privacy", title: "Privacy and Data Protection" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "amendments", title: "Amendments to Terms" },
  { id: "law", title: "Governing Law" },
  { id: "contact", title: "Contact Information" },
];

export default function TermsAndConditionsPage() {
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
        currentPage="Terms & Conditions"
        screen_size_padding_x="xl:px-36"
      />
      <section className=" px-7 xl:px-36">
        <div className="text-zinc-500/95 font-bold text-sm mt-12 tracking-widest">
          {/* {t("heading")} */}
          Our terms and conditions
        </div>
        <h1 className=" text-gray-900/90 font-medium  text-4xl sm:text-5xl xl:text-6xl">
          {/* {t("subheading")}&nbsp; */}
          Terms of Services
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
              Welcome to <strong>DH Solution</strong>. These Terms and
              Conditions ("Terms") govern your use of our website and services.
              By accessing or using any part of our services, you agree to be
              bound by these Terms. If you do not agree, please do not use our
              services.
            </p>
          </section>

          <section
            id="definitions"
            ref={(el) => (sectionRefs.current["definitions"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Definitions
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>“We”, “Us”, “Our”:</strong> DH Solution, the service
                provider.
              </li>
              <li>
                <strong>“You”, “Your”:</strong> The user or customer of DH
                Solution.
              </li>
              <li>
                <strong>“Services”:</strong> Includes software development,
                cybersecurity, AI solutions, cloud, and other digital services.
              </li>
              <li>
                <strong>“Content”:</strong> All text, graphics, images, and
                materials provided on our website.
              </li>
            </ul>
          </section>

          <section
            id="services"
            ref={(el) => (sectionRefs.current["services"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Services Provided
            </h2>
            <p>
              DH Solution offers a wide range of digital and technology services
              to help businesses grow, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Custom Software Development</li>
              <li>Cybersecurity Solutions</li>
              <li>Artificial Intelligence (AI) Development</li>
              <li>Cloud Services</li>
              <li>Data Analytics and Business Intelligence</li>
            </ul>
          </section>

          <section
            id="responsibilities"
            ref={(el) => (sectionRefs.current["responsibilities"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              User Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You must comply with all local, national, and international laws
                while using our services.
              </li>
              <li>
                You must not misuse or attempt to interfere with our systems.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials.
              </li>
            </ul>
          </section>

          <section
            id="payment"
            ref={(el) => (sectionRefs.current["payment"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Payment Terms
            </h2>
            <p>
              All services provided by DH Solution are subject to the payment
              terms outlined in the respective agreement.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Payments must follow the agreed schedule.</li>
              <li>
                Accepted payment methods include Bank Transfer, Credit Card, and
                PayPal.
              </li>
              <li>
                Refunds are available only if the service was not delivered as
                agreed.
              </li>
            </ul>
          </section>

          <section
            id="privacy"
            ref={(el) => (sectionRefs.current["privacy"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Privacy and Data Protection
            </h2>
            <p>
              We respect your privacy and protect your personal data as
              described in our{" "}
              <a
                href="/privacy"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Privacy Policy
              </a>
              . We never share data without consent except where required by
              law.
            </p>
          </section>

          <section
            id="liability"
            ref={(el) => (sectionRefs.current["liability"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Limitation of Liability
            </h2>
            <p>
              DH Solution shall not be held liable for indirect, incidental, or
              consequential damages arising from the use or inability to use our
              services.
            </p>
            <p className="mt-2">
              You agree to indemnify DH Solution against claims arising from
              misuse of our services.
            </p>
          </section>

          <section
            id="amendments"
            ref={(el) => (sectionRefs.current["amendments"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Amendments to Terms
            </h2>
            <p>
              DH Solution reserves the right to update these Terms at any time.
              Continued use of our services after updates means you accept the
              revised terms.
            </p>
          </section>

          <section id="law" ref={(el) => (sectionRefs.current["law"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of the jurisdiction where DH
              Solution operates. Disputes will be resolved in the competent
              courts of that jurisdiction.
            </p>
          </section>

          <section
            id="contact"
            ref={(el) => (sectionRefs.current["contact"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Contact Information
            </h2>
            <p>
              If you have any questions regarding these Terms and Conditions,
              please contact us at:
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
