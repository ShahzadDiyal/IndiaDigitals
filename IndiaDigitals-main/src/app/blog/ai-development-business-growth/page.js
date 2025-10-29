"use client";
import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BreadCrumb from "../../../components/BreadCrumb";
import { useTranslations } from "next-intl";

const imageUrl =
  "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.30386431.jpg&w=1080&q=75";



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
  const t = useTranslations("blogSection");

  return (
    <section>
      <Navbar />
      <BreadCrumb currentPage="blog / ai-development-business-growth" />
      <div className="bg-white min-h-screen py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-semibold text-gray-700 leading-tight mb-6">
              {t("blog1.heading-main")}
            </h2>
            <p className="text-lg text-gray-700 mb-8">{t("blog1.subheading")}</p>

            <div className="flex flex-col sm:flex-row sm:items-center text-sm font-medium text-gray-500 space-y-3 sm:space-y-0 sm:space-x-8 pt-4">
              {/* Last Updated Date */}
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span className="uppercase tracking-wider">
                 
                  <time dateTime="2025-10-22">{t("blog1.lastUpdated")}</time>
                </span>
              </div>

              {/* Read Time */}
              <div className="flex items-center">
                <ClockIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span className="uppercase tracking-wider">
                  {t("blog1.readTime")}
                </span>
              </div>
            </div>
          </header>

          {/* --- Main Content Body --- */}
          <main className="prose prose-lg max-w-none text-gray-800 pt-8 border-t">
            {/* Placeholder content goes here */}
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
               {t("blog1.introduction")}
              </h2>{" "}
              {t("blog1.paragraph-main")}
            </div>
            <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
              {t("blog1.heading1")}
            </h2>
            <ul>
              <li>
                <strong>+ </strong>{t("blog1.pointsA.point1")}
              </li>
              <li>
                <strong>+ </strong>{t("blog1.pointsA.point2")}
              </li>
              <li>
                <strong>+ </strong>{t("blog1.pointsA.point3")}
              </li>
              <li>
                <strong>+ </strong>{t("blog1.pointsA.point4")}
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
              {t("blog1.heading2")}
            </h2>
            <strong>{t("blog1.subheading1")}</strong>
            <p>
            {t("blog1.paragraph1")}
            </p>
            <strong>{t("blog1.subheading2")}</strong>
            <p>
             {t("blog1.paragraph2")}
            </p>
            <strong>{t("blog1.subheading3")}</strong>
            <p>
           {t("blog1.paragraph3")}
            </p>
            <img
              src={imageUrl}
              alt="ai business growth image here"
              className="w-full h-full object-cover py-3"
            />
            <strong>{t("blog1.subheading4")}</strong>
            <p>
              {t("blog1.paragraph4")}
            </p>

            <strong>{t("blog1.subheading5")}</strong>
            <p>
              {t("blog1.paragraph5")}
            </p>

            <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
  {t("blog1.whyChooseHeading")}
</h2>

<p>
  {t("blog1.point1")}
</p>
<p>
  {t("blog1.point2")}
</p>
<p>
  {t("blog1.point3")}
</p>
<p>
  {t("blog1.point4")}
</p>

<h3>
  {t("blog1.industriesHeading")}
</h3>
<p>{t("blog1.industriesIntro")}</p>

<ul className="list-disc ms-6 space-y-2">
  <li>
    {t("blog1.industry1")}
  </li>
  <li>
    {t("blog1.industry2")}
  </li>
  <li>
    {t("blog1.industry3")}
  </li>
  <li>
    {t("blog1.industry4")}
    </li>
  <li>
    {t("blog1.industry5")}
  </li>
</ul>

<h3>
  <strong>{t("blog1.conclusionHeading")}</strong>
</h3>
<p>{t("blog1.conclusionText")}</p>

<h3>
  {t("blog1.ctaHeading")}
</h3>
<p>{t("blog1.ctaText")}</p>

<h3>
  
    Tags:{" "}
    <u>
      <a>
        {t("blog1.tag1")}, {t("blog1.tag2")}, {t("blog1.tag3")}, {t("blog1.tag4")},{" "}
        {t("blog1.tag5")}
      </a>
    </u>
 
</h3>

          </main>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BlogDetailPage;