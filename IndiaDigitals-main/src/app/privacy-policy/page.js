"use client";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/ContactSection";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "info", title: "Information We Collect" },
  { id: "use", title: "How We Use Your Information" },
  { id: "share", title: "Data Sharing" },
  { id: "security", title: "Security of Data" },
  { id: "rights", title: "Your Data Protection Rights" },
  { id: "changes", title: "Changes to This Privacy Policy" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyPolicyPage() {
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
        currentPage="Privacy Policy"
        screen_size_padding_x="xl:px-36"
      />
      <section className=" px-7 xl:px-36">
        <div className="text-zinc-500/95 font-bold text-sm mt-12 tracking-widest">
          {/* {t("heading")} */}
          Our privacy policy
        </div>
        <h1 className=" text-gray-900/90 font-medium  text-4xl sm:text-5xl xl:text-6xl">
          {/* {t("subheading")}&nbsp; */}
          Privacy Policy
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
                  className={`text-left w-full px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    ${
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
          {/* Section 1 */}
          <section id="intro" ref={(el) => (sectionRefs.current["intro"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Introduction
            </h2>
            <p>
              At <strong>DH Solution</strong>, we respect and protect your
              privacy. This Privacy Policy outlines the types of personal
              information we collect and how we use, disclose, and safeguard
              your data when you use our services. By using our services, you
              agree to the collection and use of information in accordance with
              this policy.
            </p>
          </section>

          {/* Section 2 */}
          <section id="info" ref={(el) => (sectionRefs.current["info"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Data:</strong> When you use our services, we
                may collect personal data such as your name, email address,
                phone number, and payment details.
              </li>
              <li>
                <strong>Usage Data:</strong> We may collect information on how
                you access and use our services, including your IP address,
                browser type, and usage patterns.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies to enhance user
                experience and collect data on site usage. You can control
                cookie settings in your browser.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="use" ref={(el) => (sectionRefs.current["use"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our services.</li>
              <li>To notify you about changes to our services.</li>
              <li>To provide customer support.</li>
              <li>
                To gather analysis or valuable information so that we can
                improve our services.
              </li>
              <li>To monitor the usage of our services and prevent misuse.</li>
              <li>
                To communicate with you, including sending marketing and
                promotional materials.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="share" ref={(el) => (sectionRefs.current["share"] = el)}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Data Sharing
            </h2>
            <p>
              We may share your personal information in the following
              situations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>With Service Providers:</strong> We may employ
                third-party companies and individuals to facilitate our
                services.
              </li>
              <li>
                <strong>For Legal Compliance:</strong> We may disclose your
                information if required by law or legal requests.
              </li>
              <li>
                <strong>Business Transfers:</strong> If DH Solution is involved
                in a merger, acquisition, or asset sale, your personal data may
                be transferred.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section
            id="security"
            ref={(el) => (sectionRefs.current["security"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Security of Data
            </h2>
            <p>
              We prioritize the security of your personal information. While we
              implement various measures to safeguard your data, please note
              that no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          {/* Section 6 */}
          <section
            id="rights"
            ref={(el) => (sectionRefs.current["rights"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Your Data Protection Rights
            </h2>
            <p>
              Depending on your location, you may have the right to access,
              update, delete, or restrict the use of your personal data. To
              exercise any of these rights, please contact us using the details
              below.
            </p>
          </section>

          {/* Section 7 */}
          <section
            id="changes"
            ref={(el) => (sectionRefs.current["changes"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. Any changes
              will be posted on this page, and we will notify you if there are
              any significant changes. You are encouraged to review this Privacy
              Policy periodically for updates.
            </p>
          </section>

          {/* Section 8 */}
          <section
            id="contact"
            ref={(el) => (sectionRefs.current["contact"] = el)}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
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
