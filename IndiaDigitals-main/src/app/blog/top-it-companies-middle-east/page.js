"use client";
import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BreadCrumb from "../../../components/BreadCrumb";

const imageUrl =
  "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.fadefa3a.png&w=1080&q=75";

// Mocking useTranslations
const useTranslations = (namespace) => {
  const translations = {
    blogDetail: {
      title:
        "Top­ IT­ Companies­ in­ the­ Middle­ East:­ Transforming­ the­ Tech­Landscape",
      updatedDate: "OCTOBER 22ND 2025",
      readTime: "12 MIN READ",
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
            <p className="text-lg text-gray-700 mb-8"></p>

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
              The Middle East has rapidly emerged as a key player in the global
              technology industry. From AI development to advanced IT
              infrastructure, the region is home to companies that are reshaping
              the tech landscape. Among these innovators, DH Solutions LLC
              stands out as a leader in delivering cutting-edge technology
              services.
            </div>
            <div>
              
                <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                  1. DH Solutions LLC Headquarters:{" "}
                  <span className="font-normal">(Dubai, UAE) </span>
                </h2>
              

              <div>
                {" "}
                <strong> Specialties:</strong> AI Development, Web Development,
                Staff Augmentation
                <p className="py-2">
                  DH Solutions LLC is a trailblazer in the IT sector, offering a comprehensive suite of services tailored to the needs of businesses across the Middle East and beyond. Their focus on innovation, scalability, and client satisfaction has made them a trusted partner for organizations seeking digital transformation.
                </p>
              </div>

              <div>
                <strong className="text-xl font-bold mt-10 mb-[20px] py-1 text-gray-900">
                  Key Offerings:
                </strong>{" "}
                <ul>
                  <li>
                    <strong>+ AI Development:</strong>Advanced tools, predictive analytics, and AI-powered business solutions.
                  </li>
                  <li>
                    <strong>+ Web Development: </strong>Custom, responsive websites and web applications designed to enhance user experiences.
                  </li>
                  <li className="mb-5">
                    <strong>+ Staff Augmentation:</strong>Providing skilled IT professionals to bridge talent gaps and accelerate project delivery.
                  </li>
                </ul>
              </div>

              <div>
                <strong className="text-xl font-bold mt-10 mb-4 py-3 text-gray-900">
                  Why DH Solutions Leads:
                </strong>{" "}
                <ul>
                  <li>
                    <strong>+ </strong> A proven track record of success across multiple industries.
                  </li>
                  <li>
                    <strong>+</strong>A proven track record of success across multiple industries.
                  </li>
                  <li>
                    <strong>+ </strong>Expertise in integrating modern technologies for sustainable growth.
                  </li>
                </ul>
 
              </div>
            </div>
            {/* 2 */}
            <div>
               <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                  2. Injazat Data Systems Headquarters: {" "}
                  <span className="font-normal">(Dubai, UAE) </span>
                </h2>
              <div>
                <strong>Specialties:</strong> Managed IT Services, Cloud Computing, Cybersecurity
                <p className="py-2">
                 Injazat Data Systems is a leader in managed IT services and cloud computing solutions. Their secure and scalable offerings empower businesses to streamline operations and enhance productivity.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                 3. Arkan IT Solutions Headquarters: {" "}
                  <span className="font-normal">(Riyadh, Saudi Arabia) </span>
                </h2>
              <div>
                <strong>Specialties:</strong> IT Consulting, Software Development, Networking
                <p className="py-2">
                  Arkan IT Solutions delivers tailored IT consulting, software solutions, and enterprise network management services, earning them a strong reputation in the region.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div>
               <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                 4. Gulf IT Innovations (GITI) Headquarters: {" "}
                  <span className="font-normal">(Manama, Bahrain) </span>
                </h2>
              
              <div>
                <strong>Specialties:</strong> Mobile App Development, Cloud Solutions, Blockchain
                <p className="py-2">
                  GITI stands out with its expertise in mobile app development and blockchain technology, creating user-friendly applications and innovative blockchain solutions.
                </p>
              </div>
            </div>
            {/* 5 */}
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                5. Omnix International Headquarters: {" "}
                  <span className="font-normal">(Dubai, UAE) </span>
                </h2>
              <div>
                <strong>Specialties:</strong> Digital Transformation, Cloud Solutions, AI
                <p className="py-2">
                  Omnix International drives modernization with AI solutions, cloud computing, and IT infrastructure services across various industries.
                </p>
              </div>
            </div>
            <img
              src={imageUrl}
              alt="ai for call center image here"
              className="w-full h-full object-cover py-3"
            />
            {/* 6 */}
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                6. STC Solutions Headquarters: {" "}
                  <span className="font-normal">(Riyadh, Saudi Arabia) </span>
                </h2>
              <div>
                <strong>Specialties:</strong> Telecommunications, AI, IoT
                <p className="py-2">
                  As a subsidiary of Saudi Telecom Company, STC Solutions offers AI, IoT solutions, and network optimization, leading Saudi Arabia’s digital transformation initiatives.
                </p>
              </div>
            </div>
            {/* 7 */}
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                7. ITQAN Global for Cloud and Digital Computing Systems Headquarters: {" "}
                  <span className="font-normal">(Abu Dhabi, UAE) </span>
                </h2>
              <div>
                <strong>Specialties:</strong> Cloud Solutions, IT Infrastructure
                <p className="py-2">
                 ITQAN provides scalable and reliable cloud-based solutions and enterprise IT infrastructure for businesses across the region.
                </p>
              </div>
            </div>
            {/* 8 */}
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
               8. Zaintech Headquarters: {" "}
                  <span className="font-normal">(Kuwait City, Kuwait) </span>
                </h2>
              <div>
                <strong>Specialties:</strong> Data Analytics, Cybersecurity, Cloud Computing
                <p className="py-2">
                  A subsidiary of Zain Group, Zaintech empowers businesses with advanced IT solutions like data analytics and cybersecurity.
                </p>
              </div>
            </div>
            {/* 9 */}
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
               9. Algosaibi Information Systems Headquarters:  {" "}
                  <span className="font-normal">( Al Khobar, Saudi Arabia) </span>
                </h2>
              <div>
                <strong>Specialties:</strong> Enterprise Solutions, Software Development
                <p className="py-2">
                  Algosaibi specializes in ERP implementations, CRM solutions, and software development, offering tailored enterprise-grade IT solutions.
                </p>
              </div>
            </div>
            {/* 10 */}
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                10. Hiteknofal Solutions Headquarters:  {" "}
                  <span className="font-normal">(Cairo, Egypt) </span>
                </h2>
              <div>
                <strong>Specialties:</strong>  IT Consulting, Networking Solutions
                <p className="py-2">
                 Hiteknofal Solutions focuses on IT consulting, system integration, and networking solutions to help businesses achieve operational efficiency.
                </p>
              </div>
            </div>
           
            <strong>
              Conclusion: Driving Digital Transformation in the Middle East 
            </strong>
            The Middle East is witnessing a digital revolution, with IT companies playing a vital role in reshaping industries. Among these, DH Solutions LLC stands out for its innovative, scalable, and client-focused technology solutions.
            <br /> As technology continues to shape the region’s future, companies like DH Solutions are paving the way for a more connected, innovative, and sustainable Middle East. Whether it’s AI development, web solutions, or staff augmentation, DH Solutions LLC is your trusted partner for success in the digital age.
           
            <br />
            <strong>
              tags: <u> IT in the Middle East, DH Solutions, digital transformation </u>
            </strong>
          </main>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BlogDetailPage;
