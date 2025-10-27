"use client";
import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BreadCrumb from "../../../components/BreadCrumb";

const imageUrl =
  "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.b8e38c2a.png&w=1080&q=75";

// Mocking useTranslations
const useTranslations = (namespace) => {
  const translations = {
    blogDetail: {
      title:
        "Staff­ Augmentation:­ Scaling­ Your­ Business­ with­ DH­ Solutions'­ Global­Talent",
      summary:
        "Behind Salesforce's AI evolution lies a bigger story: how data trust, agentic AI, and human-centric personalization are setting the stage for the next chapter of enterprise intelligence.",
      updatedDate: "OCTOBER 22ND 2025",
      readTime: "4 MIN READ",
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
      <BreadCrumb currentPage="blog / staff-augmentation-global-talent" />
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
              In today’s fast-paced global market, finding the right talent can
              be challenging. DH Solutions simplifies the process with staff
              augmentation services, giving businesses quick access to skilled
              professionals worldwide.
            </div>

            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                What Is Staff Augmentation?
              </h2>{" "}
              Staff augmentation is a flexible outsourcing strategy allowing
              businesses to hire experts on-demand. Whether for niche expertise
              or scalable staffing, it reduces hiring costs and ensures timely
              project delivery.{" "}
            </div>

            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                Why Choose DH Solutions for Staff Augmentation?
              </h2>{" "}
              DH Solutions offers a global network of pre-vetted
              professionals—software developers, IT specialists, business
              consultants, and more—ready to make an immediate impact. We ensure
              fast hiring, cost savings, and flexibility for businesses of all
              sizes.{" "}
            </div>

            <img
              src={imageUrl}
              alt="Service Image"
              className="w-full h-full object-cover pt-3"
            />
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                Global Talent Pool
              </h2>{" "}
              Our worldwide talent pool covers a diverse range of expertise,
              including AI, web development, cybersecurity, and cloud
              technologies. No matter where you’re located, we deliver the
              talent you need.{" "}
            </div>

            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                Cost-Effective & Scalable
              </h2>{" "}
              Avoid overhead costs and long recruitment cycles. Whether for
              short-term projects or long-term engagements, our staff
              augmentation services let you scale up or down with ease.{" "}
            </div>

            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                Specialized Expertise
              </h2>{" "}
              From AI and machine learning to web development and cybersecurity,
              DH Solutions provides skilled professionals who integrate
              seamlessly into your existing workflows, ensuring efficiency and
              quality.
            </div>

            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                Conclusion
              </h2>{" "}
              Stay agile in a rapidly evolving market by leveraging DH
              Solutions’ global talent. Contact us today to discover how staff
              augmentation can help your business scale efficiently and
              cost-effectively
              <h3>
                <strong>
                  Tags:{" "}
                  <u>
                    <a>
                      AI, business growth, automation, custom solutions, data
                      insights
                    </a>
                  </u>
                </strong>
              </h3>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BlogDetailPage;
