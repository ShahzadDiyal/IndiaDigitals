"use client";

import React from "react";

import Navbar from "@/components/Navbar";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import BlogSection from "@/components/home/BlogSection";
import { FiArrowRight } from "react-icons/fi";

import {
  FaSearch,
  FaPalette,
  FaCode,
  FaCreditCard,
  FaRocket,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaShoppingCart,
  FaGlobeAmericas,
  FaBoxOpen,
  FaChartLine,
} from "react-icons/fa";
const imageUrl =
  "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.a4939da8.jpg&w=828&q=75";

const processSteps = [
  {
    icon: <FaSearch className="text-blue-600 text-3xl" />,
    title: "Requirement Gathering & Analysis",
    desc: "Conducted detailed research to understand target users, market needs, and technical requirements for a global e-commerce solution.",
  },
  {
    icon: <FaPalette className="text-purple-600 text-3xl" />,
    title: "UI/UX Design for E-commerce Platform",
    desc: "Designed a user-centric, visually appealing, and mobile-first interface to enhance customer engagement and simplify shopping experiences.",
  },
  {
    icon: <FaCode className="text-green-600 text-3xl" />,
    title: "Front-End Development with React",
    desc: "Implemented a fast and responsive front-end using React and Next.js, optimized for SEO and high performance.",
  },
  {
    icon: <FaCreditCard className="text-orange-600 text-3xl" />,
    title: "Payment Gateway Integration",
    desc: "Integrated secure and seamless multi-currency payment systems with PCI DSS compliance for global transactions.",
  },
  {
    icon: <FaRocket className="text-pink-600 text-3xl" />,
    title: "Deployment & Cloud Hosting on AWS",
    desc: "Deployed on AWS using scalable architecture, ensuring global uptime, security, and high-speed performance.",
  },
];

const tools = [
  {
    name: "React + Next.js",
    icon: <FaReact className="text-sky-500 text-5xl" />,
    color: "from-sky-100 to-sky-50",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600 text-5xl" />,
    color: "from-green-100 to-green-50",
  },
  {
    name: "MongoDB",
    icon: <FaDatabase className="text-emerald-500 text-5xl" />,
    color: "from-emerald-100 to-emerald-50",
  },
  {
    name: "AWS Cloud",
    icon: <FaAws className="text-orange-500 text-5xl" />,
    color: "from-orange-100 to-orange-50",
  },
  {
    name: "E-commerce & Shipping Integration",
    icon: <FaShoppingCart className="text-pink-500 text-5xl" />,
    color: "from-pink-100 to-pink-50",
  },
];

const results = [
  {
    icon: <FaGlobeAmericas className="text-blue-600 text-3xl" />,
    stat: "150%",
    label: "Increase in Global Reach",
  },
  {
    icon: <FaBoxOpen className="text-green-600 text-3xl" />,
    stat: "Streamlined",
    label: "Inventory & Order Management",
  },
  {
    icon: <FaCreditCard className="text-purple-600 text-3xl" />,
    stat: "Secure",
    label: "Multi-Currency Payment Integration",
  },
  {
    icon: <FaShoppingCart className="text-orange-500 text-3xl" />,
    stat: "Global",
    label: "Shipping Integration for Worldwide Customers",
  },
  {
    icon: <FaChartLine className="text-pink-600 text-3xl" />,
    stat: "+40%",
    label: "Revenue Growth in First 6 Months",
  },
];

export default function PortfolioDetails() {
  return (
    <div className="min-h-screen text-gray-900">
      <Navbar />
      <BreadCrumb currentPage="our-work/Portfolio-detail-3" />
      {/* Hero Section */}
      <section className="px-7 md:px-36 pb-1">
        <div className="max-w-4xl my-6">
          <h1 className="text-orange-600/95 font-bold my-2 text-4xl sm:text-5xl xl:text-6xl">
            E-commerce Platform for Perfume Business
          </h1>
          <p className="text-lg text-gray-600">
            Transforming a Local Perfume Business in Kuwait into a Global
            E-commerce Platform
          </p>

          <a
            href="/our-work/portfolio-detail-2"
            className="inline-flex items-center gap-2 px-6 py-3 my-6 bg-orange-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Visit Live Site <FiArrowRight />
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
            DH Solutions is helping a local perfume business in Kuwait by
            transforming it into a fully functional and responsive e-commerce
            platform. This digital transformation allows the perfume brand to
            reach a global audience, offering customers an enhanced shopping
            experience with easy online browsing, purchasing, and delivery
            options. The website features a catalog of premium perfumes,
            detailed product descriptions, and an intuitive user interface,
            bringing traditional retail into the digital marketplace.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            The Challenges
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The perfume business in Kuwait needed a complete digital
            transformation to expand its reach beyond local customers. The
            challenge was to develop a user-friendly, secure, and visually
            stunning e-commerce platform that would allow the business to not
            only sell locally but also cater to international customers. We had
            to ensure a seamless shopping experience across all devices and
            integrate payment gateways for multiple currencies.
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              My Role
            </h3>
            <p className="text-gray-700 leading-relaxed">
              DH Solutions was responsible for the end-to-end development of the
              e-commerce platform. This included front-end and back-end
              development, UI/UX design, product catalog integration, and
              payment gateway setup. We ensured a smooth user experience and
              optimized the platform for performance, security, and scalability.
              Additionally, we provided ongoing support and maintenance for the
              system post-launch.{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-gray-900 mb-6">
      Development Stack
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 justify-items-center">
      {tools.map((tool, index) => (
        <div
          key={index}
          className={`group bg-gradient-to-b ${tool.color} hover:from-white hover:to-gray-50 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 w-full max-w-[190px] min-h-[180px] flex flex-col items-center justify-center p-6`}
        >
          <div className="mb-4 text-5xl group-hover:scale-110 transition-transform duration-300">
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

      <section className="bg-gray-50 py-20 px-6 md:px-10 border-gray-200">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      Results & Impact
    </h2>
    <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
      The project delivered measurable business value and exceeded performance
      benchmarks — empowering global operations with reliability and speed.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 justify-items-center">
      {results.map((item, index) => (
        <div
          key={index}
          className="bg-white w-full sm:w-64 lg:w-72 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all p-8 flex flex-col items-center text-center group"
        >
          <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
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
