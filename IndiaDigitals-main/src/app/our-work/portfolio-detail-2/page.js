"use client";

import React from "react";


import {
  FaShieldAlt,
  FaBolt,
  FaBug,
  FaLock,
  FaThumbsUp,
  FaNetworkWired,
  FaKey,
  FaCloud,
  FaSearch,
  FaCogs,
  FaCertificate,
} from "react-icons/fa";


import { FiArrowRight } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import BlogSection from "@/components/home/BlogSection";

const imageUrl =
  "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.cf499d81.jpg&w=828&q=75";

const processSteps = [
  {
    icon: <FaSearch className="text-blue-600 text-3xl" />,
    title: "Security Audits & Risk Assessments",
    desc: "We begin with a detailed analysis of your digital ecosystem to identify potential vulnerabilities, evaluate threats, and define security priorities.",
  },
  {
    icon: <FaShieldAlt className="text-purple-600 text-3xl" />,
    title: "Security Infrastructure Design",
    desc: "Designing a robust architecture that includes firewalls, IDS/IPS systems, and endpoint protection to ensure multi-layered defense.",
  },
  {
    icon: <FaLock className="text-green-600 text-3xl" />,
    title: "Data Encryption & Access Control",
    desc: "Implementing end-to-end encryption, secure key management, and role-based access to protect data integrity and confidentiality.",
  },
  {
    icon: <FaCogs className="text-orange-600 text-3xl" />,
    title: "Ongoing Monitoring & Threat Response",
    desc: "Continuous real-time monitoring with automated alerts and proactive threat mitigation to prevent potential breaches.",
  },
  {
    icon: <FaCertificate className="text-pink-600 text-3xl" />,
    title: "Compliance with GDPR & International Standards",
    desc: "Ensuring all solutions adhere to global data protection standards like GDPR, ISO 27001, and SOC 2 for full compliance.",
  },
];

const tools = [
  {
    name: "Network Security Solutions",
    icon: (
      <FaNetworkWired className="text-blue-600 text-5xl group-hover:scale-110 transition-transform" />
    ),
    color: "from-blue-100 to-blue-50",
  },
  {
    name: "Data Encryption",
    icon: (
      <FaLock className="text-purple-600 text-5xl group-hover:scale-110 transition-transform" />
    ),
    color: "from-purple-100 to-purple-50",
  },
  {
    name: "Firewall Protection",
    icon: (
      <FaShieldAlt className="text-red-500 text-5xl group-hover:scale-110 transition-transform" />
    ),
    color: "from-red-100 to-red-50",
  },
  {
    name: "Cloud Security",
    icon: (
      <FaCloud className="text-cyan-600 text-5xl group-hover:scale-110 transition-transform" />
    ),
    color: "from-cyan-100 to-cyan-50",
  },
  {
    name: "Access Management & Authentication",
    icon: (
      <FaKey className="text-amber-500 text-5xl group-hover:scale-110 transition-transform" />
    ),
    color: "from-amber-100 to-amber-50",
  },
];

const results = [
  {
    icon: <FaLock className="text-blue-600 text-3xl" />,
    stat: "Millions",
    label: "Secure Transactions Handled",
  },
  {
    icon: <FaBug className="text-red-600 text-3xl" />,
    stat: "↓90%",
    label: "Reduction in Security Vulnerabilities",
  },
  {
    icon: <FaBolt className="text-yellow-500 text-3xl" />,
    stat: "Real-Time",
    label: "Threat Detection & Rapid Response",
  },
  {
    icon: <FaShieldAlt className="text-green-600 text-3xl" />,
    stat: "100%",
    label: "Compliance with GDPR & PCI DSS",
  },
  {
    icon: <FaThumbsUp className="text-pink-600 text-3xl" />,
    stat: "Enhanced",
    label: "Customer Trust & Brand Reputation",
  },
];
export default function PortfolioDetails() {
  return (
    <div className="min-h-screen text-gray-900">
      <Navbar />
      <BreadCrumb currentPage="our-work/Portfolio-detail-2" />
      {/* Hero Section */}
      <section className="px-7 md:px-36 pb-1">
        <div className="max-w-4xl my-6">
          <h1 className="text-orange-600/95 font-bold my-2 text-4xl sm:text-5xl xl:text-6xl">
            Cybersecurity Services for Dubai Duty Free
          </h1>
          <p className="text-lg text-gray-600">
            Ensuring Digital Security for Dubai Duty Free's Operations and
            Sensitive Data
          </p>

          <a
            href="/our-work/portfolio-detail-2"
            className="inline-flex items-center gap-2 px-6 py-3 my-6 bg-orange-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Visit Dubai Duty Free <FiArrowRight />
          </a>
        </div>
      </section>

      {/* Project Overview */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <img
            src={imageUrl}
            alt="Project visual"
            className="rounded-xl shadow-lg border"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Project Overview
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            DH Solutions has partnered with Dubai Duty Free to deliver robust
            cybersecurity services, ensuring the safety of their digital
            infrastructure and safeguarding sensitive customer and business
            data. As one of the leading retail organizations in the UAE, Dubai
            Duty Free relies on DH Solutions to maintain the security of their
            e-commerce platform and internal systems, allowing them to operate
            confidently in the digital space while maintaining strict compliance
            with industry standards.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            The Challenges
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dubai Duty Free operates a highly valuable and sensitive digital
            ecosystem, processing thousands of transactions daily and storing
            sensitive customer data. The challenge was to ensure robust
            cybersecurity protocols that could protect this data, defend against
            cyber-attacks, and meet international security standards. Our task
            was to enhance their existing infrastructure and provide ongoing
            support to mitigate any potential security threats.
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              My Role
            </h3>
            <p className="text-gray-700 leading-relaxed">
              DH Solutions was responsible for implementing a comprehensive
              cybersecurity strategy for Dubai Duty Free, which included
              security audits, threat detection, vulnerability assessments, data
              encryption, and access control. Our team provided continuous
              monitoring, timely threat response, and ensured compliance with
              GDPR and other industry regulations. We also provided ongoing
              support and updates to address emerging security threats.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-gray-900 mb-6">
      Cybersecurity Tools & Tech Stack
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 justify-items-center">
      {tools.map((tool, index) => (
        <div
          key={index}
          className={`group bg-gradient-to-b ${tool.color} hover:from-white hover:to-gray-50 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-sm hover:shadow-lg transition-all w-full h-full max-w-[180px] sm:max-w-[200px] min-h-[180px] flex flex-col items-center justify-center p-6`}
        >
          <div className="mb-4 text-4xl text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
            {tool.icon}
          </div>
          <p className="text-gray-800 font-medium text-sm md:text-base text-center">
            {tool.name}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Next Project */}

      <section className="bg-gray-50 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Process & Approach
          </h2>
          <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
            Our streamlined process ensures that every project moves from
            concept to completion with clarity, creativity, and precision.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 text-left border border-gray-100"
              >
                <div className="mb-5">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 md:px-20 border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Results & Impact
          </h2>
          <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
            The project delivered measurable business value and exceeded
            performance benchmarks — empowering global operations with
            reliability and speed.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 justify-items-center">
            {results.map((item, index) => (
              <div
                key={index}
                className="bg-white w-full sm:w-72 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all p-8 flex flex-col items-center text-center group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {item.stat}
                </h3>
                <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BlogSection />
      <Footer />
    </div>
  );
}
