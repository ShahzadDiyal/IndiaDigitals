"use client";
import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BreadCrumb from "../../../components/BreadCrumb";

const imageUrl =
  "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.18fa1a7c.png&w=1080&q=75";

// Mocking useTranslations
const useTranslations = (namespace) => {
  const translations = {
    blogDetail: {
      title:
        "How­ DH­ Solutions­ Can­ Revolutionize­ Call­ Centers­ with­ AI­Development",
      summary:
        "Behind Salesforce's AI evolution lies a bigger story: how data trust, agentic AI, and human-centric personalization are setting the stage for the next chapter of enterprise intelligence.",
      updatedDate: "OCTOBER 22ND 2025",
      readTime: "7 MIN READ",
      mainContent:
        "This is the main body of the blog post. It would contain several paragraphs of detailed text, subheadings, images, and embedded media. The content here is just placeholder text to show the structure. We are focusing on making the header/metadata section match the design exactly.",
    },
  };
  return (key) => translations[namespace][key] || key;
};

// Mock Calendar Icon (for updated date)
const CalendarIcon = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    ></path>
  </svg>
);

// Mock Clock Icon (for read time)
const ClockIcon = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

// --- MAIN DETAIL PAGE COMPONENT ---

const BlogDetailPage = () => {
  const t = useTranslations("blogDetail");

  return (
    <section>
      <Navbar />
      <BreadCrumb currentPage="blog / ai-call-center-revolution" />
      <div className="bg-white min-h-screen py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-semibold text-gray-700 leading-tight mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-700 mb-8">{t("summary")}</p>

            <div className="flex flex-col sm:flex-row sm:items-center text-sm font-medium text-gray-500 space-y-3 sm:space-y-0 sm:space-x-8 pt-4">
              {/* Last Updated Date */}
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span className="uppercase tracking-wider">
                  LAST UPDATED:{" "}
                  <time dateTime="2025-10-22">{t("updatedDate")}</time>
                </span>
              </div>

              {/* Read Time */}
              <div className="flex items-center">
                <ClockIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span className="uppercase tracking-wider">
                  {t("readTime")}
                </span>
              </div>
            </div>
          </header>

          {/* --- Main Content Body --- */}
          <main className="prose prose-lg max-w-none text-gray-800 pt-8 border-t">
            {/* Placeholder content goes here */}
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                Introduction
              </h2>{" "}
              The call center industry is evolving rapidly, with businesses
              seeking faster, more efficient, and personalized customer support.
              DH Solutions equips call centers with AI tools to tackle high call
              volumes, reduce response times, and improve customer satisfaction.
            </div>

            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                AI Chatbots & Voice Assistants
              </h2>{" "}
              Our intelligent chatbots and voice AI solutions streamline
              operations by:
              <ul>
                <li>
                  <strong>+ </strong>Resolving routine inquiries instantly,
                  24/7.
                </li>
                <li>
                  <strong>+ </strong>Providing self-service options to
                  customers.
                </li>
                <li>
                  <strong>+ </strong> Reducing wait times and transferring
                  complex queries seamlessly to human agents. These tools free
                  up agents to focus on high-value interactions, improving
                  efficiency and customer experience.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                Sentiment Analysis
              </h2>{" "}
              Understanding customer emotions is critical for effective
              engagement. Our AI tools analyze tone and speech to:
              <ul>
                <li>
                  <strong>+ </strong>Detect frustration or satisfaction in real
                  time.
                </li>
                <li>
                  <strong>+ </strong>Flag calls needing managerial intervention.
                </li>
                <li>
                  <strong>+ </strong>Help agents adjust communication styles for
                  better outcomes. This fosters loyalty and improves first-call
                  resolution rates.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                Predictive Analytics
              </h2>{" "}
              AI-driven predictive analytics helps call centers operate smarter
              by:
              <ul>
                <li>
                  <strong>+ </strong>Forecasting call volumes for better
                  staffing.
                </li>
                <li>
                  <strong>+ </strong>Analyzing customer interactions to predict
                  behavior.
                </li>
                <li>
                  <strong>+ </strong>Identifying potential issues early to
                  mitigate risks. This ensures optimal resource utilization and
                  enhances service quality.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                Automated Post-Call Processes
              </h2>{" "}
              Manual post-call tasks drain productivity. DH Solutions automates
              these processes by:
              <ul>
                <li>
                  <strong>+ </strong>Generating call summaries using
                  speech-to-text technology.
                </li>
                <li>
                  <strong>+ </strong>Automatically updating CRM systems with
                  relevant details.
                </li>
                <li>
                  <strong>+ </strong>Providing agents with actionable follow-up
                  recommendations. Agents can now focus on delivering
                  exceptional customer experiences rather than administrative
                  work.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                Real-Time Agent Assistance
              </h2>{" "}
              Our AI-powered tools enhance live calls by:
              <ul>
                <li>
                  <strong>+ </strong>Offering real-time response suggestions.
                </li>
                <li>
                  <strong>+ </strong>Providing instant access to knowledge base
                  articles.
                </li>
                <li>
                  <strong>+ </strong>Identifying upselling or cross-selling
                  opportunities. This equips agents to handle queries
                  efficiently and drive better outcomes.
                </li>
              </ul>
            </div>
            <img
              src={imageUrl}
              alt="ai for call center image here"
              className="w-full h-full object-cover py-3"
            />
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                The Benefits of AI for Call Centers
              </h2>{" "}
              Partnering with DH Solutions delivers measurable results,
              including:
              <ul>
                <li>
                  <strong>+ </strong>Reduced wait times and higher first-call
                  resolution rates.
                </li>
                <li>
                  <strong>+ </strong>Increased agent productivity through task
                  automation.
                </li>
                <li>
                  <strong>+ </strong>Lower operational costs with optimized
                  staffing.
                </li>
                <li>
                  <strong>+ </strong>Enhanced customer satisfaction via faster,
                  smarter responses.
                </li>
                <li>
                  <strong>+ </strong>Actionable insights to refine processes and
                  improve agent performance.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                Conclusion
              </h2>{" "}
              AI is transforming call centers into efficient, customer-focused
              operations. With DH Solutions, your call center can leverage
              cutting-edge AI to streamline workflows, boost agent efficiency,
              and elevate customer satisfaction.
            </div>
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                Get Started Today
              </h2>{" "}
              Contact DH Solutions to discover how AI can revolutionize your
              call center and deliver real results. <br />
              <a>
                <strong>
                  tags: AI, call centers, automation, predictive analytics,
                  customer support{" "}
                </strong>
              </a>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BlogDetailPage;