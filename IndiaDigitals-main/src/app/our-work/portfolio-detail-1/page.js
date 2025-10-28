"use client";

import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";
import {
  FaSearch,
  FaPalette,
  FaCogs,
  FaVial,
  FaRocket,
  FaGlobeAmericas,
  FaChartLine,
  FaBolt,
  FaLock,
  FaFlag,
} from "react-icons/fa";

import { FiArrowRight } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import BlogSection from "@/components/home/BlogSection";

const imageUrl =
  "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.2c15e023.jpg&w=828&q=75";

const processSteps = [
  {
    icon: <FaSearch className="text-blue-600 text-3xl" />,
    title: "Requirement Analysis & Wireframing",
    desc: "We start by understanding the client’s goals, target audience, and technical needs — creating wireframes that define the core structure and user flow.",
  },
  {
    icon: <FaPalette className="text-purple-600 text-3xl" />,
    title: "UI/UX Design (Mobile First)",
    desc: "A user-centered design approach focusing on accessibility, modern aesthetics, and responsiveness across all devices.",
  },
  {
    icon: <FaCogs className="text-green-600 text-3xl" />,
    title: "Agile Sprints & Feature Delivery",
    desc: "We follow an agile methodology, breaking down the project into manageable sprints for faster, consistent delivery.",
  },
  {
    icon: <FaVial className="text-orange-600 text-3xl" />,
    title: "Testing, QA, and Optimizations",
    desc: "Comprehensive testing ensures performance, security, and usability across different platforms and environments.",
  },
  {
    icon: <FaRocket className="text-pink-600 text-3xl" />,
    title: "CI/CD with AWS Cloud Hosting",
    desc: "Automated CI/CD pipelines and AWS infrastructure ensure seamless deployment, scalability, and high availability.",
  },
];

const tools = [
  {
    name: "React",
    icon: (
      <SiReact className="text-sky-500 text-5xl group-hover:scale-110 transition-transform" />
    ),
    color: "from-sky-100 to-sky-50",
  },
  {
    name: "Node.js",
    icon: (
      <SiNodedotjs className="text-green-600 text-5xl group-hover:scale-110 transition-transform" />
    ),
    color: "from-green-100 to-green-50",
  },
  {
    name: "MongoDB",
    icon: (
      <SiMongodb className="text-emerald-500 text-5xl group-hover:scale-110 transition-transform" />
    ),
    color: "from-emerald-100 to-emerald-50",
  },
  {
    name: "Tailwind CSS",
    icon: (
      <SiTailwindcss className="text-cyan-500 text-5xl group-hover:scale-110 transition-transform" />
    ),
    color: "from-cyan-100 to-cyan-50",
  },
  {
    name: "Figma",
    icon: (
      <SiFigma className="text-pink-500 text-5xl group-hover:scale-110 transition-transform" />
    ),
    color: "from-pink-100 to-pink-50",
  },
];

const results = [
  {
    icon: <FaGlobeAmericas className="text-blue-600 text-3xl" />,
    stat: "100K+",
    label: "Tickets Sold in First 3 Months",
  },
  {
    icon: <FaChartLine className="text-green-600 text-3xl" />,
    stat: "70%",
    label: "Boost in Event Efficiency",
  },
  {
    icon: <FaBolt className="text-yellow-500 text-3xl" />,
    stat: "<300ms",
    label: "Average Response Time",
  },
  {
    icon: <FaLock className="text-purple-600 text-3xl" />,
    stat: "100%",
    label: "GDPR & PCI Compliance",
  },
  {
    icon: <FaFlag className="text-pink-600 text-3xl" />,
    stat: "20+",
    label: "Countries Operating",
  },
];
export default function PortfolioDetails() {
  return (
    <div className="min-h-screen text-gray-900">
      <Navbar />
      <BreadCrumb currentPage="our-work/Portfolio-detail-1" />
      {/* Hero Section */}
      <section className="px-7 md:px-36 pb-1">
        <div className="max-w-4xl my-6">
          <h1 className="text-orange-600/95 font-bold my-2 text-4xl sm:text-5xl xl:text-6xl">
            ViBeats
          </h1>
          <p className="text-lg text-gray-600">
            A Global Ticketing Platform Empowering Events Worldwide.
          </p>

          <a
            href="https://vibeat.io/"
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
            ViBeats is a global ticketing platform that enables organizers to
            host, manage, and sell tickets for events across the world. It
            offers real-time analytics, dynamic pricing, fraud protection, and a
            seamless user experience across all devices.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            The Challenges
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Build a scalable, secure, and fast system capable of handling global
            event ticketing in real time — with top-tier UX and support for
            various currencies and payment gateways.
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              My Role
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We managed end-to-end product development — including front-end
              and back-end development, architecture, payment integration, and
              DevOps. We ensured security, scalability, and top performance
              throughout.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-gray-900 mb-6">
      Tools & Technologies
    </h2>
    <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
      We leverage modern frameworks, design tools, and cloud technologies
      to deliver scalable, performant, and visually compelling solutions.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 justify-items-center">
      {tools.map((tool, index) => (
        <div
          key={index}
          className={`group bg-gradient-to-b ${tool.color} hover:from-white hover:to-gray-50 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-sm hover:shadow-lg transition-all w-full h-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] min-h-[180px] flex flex-col items-center justify-center p-6`}
        >
          <div className="mb-4 flex justify-center">{tool.icon}</div>
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
