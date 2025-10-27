"use client";
import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BreadCrumb from "../../../components/BreadCrumb";

const imageUrl =
  "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.3427daf7.png&w=1080&q=75";

// Mocking useTranslations
const useTranslations = (namespace) => {
  const translations = {
    blogDetail: {
      title: "What­ Are­ the­ Top­ IT­ Companies­ in­Pakistan?",
      updatedDate: "OCTOBER 22ND 2025",
      readTime: "5 MIN READ",
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
              Pakistan’s IT industry has experienced significant growth over the
              last decade, becoming a global hub for technology solutions,
              software development, and IT services. With a growing talent pool,
              competitive costs, and innovative approaches, Pakistan’s IT
              companies are gaining international recognition.
            </div>
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                1. DH Solutions LLC:
              </h2>
              <div>
                {" "}
                Empowering Businesses Globally{" "}
                <strong> Headquarters: Lahore, Pakistan</strong>
              </div>

              <div>
                {" "}
                <strong> Specialties:</strong> AI Development, Web Development,
                Staff Augmentation
                <p className="py-2">
                  DH Solutions LLC is revolutionizing the IT landscape in
                  Pakistan with cutting-edge services and a focus on innovation.
                  With expertise in Artificial Intelligence, DH Solutions helps
                  businesses automate processes, enhance decision-making, and
                  improve customer experiences.
                </p>
              </div>

              <div>
                <strong className="text-xl font-bold mt-10 mb-[20px] py-1 text-gray-900">
                  Their services include:
                </strong>{" "}
                <ul>
                  <li>
                    <strong>+ </strong>AI Development: Building advanced AI
                    tools, chatbots, and machine learning solutions.
                  </li>
                  <li>
                    <strong>+ </strong>Web Development: Designing and developing
                    state-of-the-art websites tailored to client needs.
                  </li>
                  <li className="mb-5">
                    <strong>+ </strong>Staff Augmentation: Providing global
                    businesses with skilled professionals for seamless project
                    execution.
                  </li>
                </ul>
              </div>

              <div>
                <strong className="text-xl font-bold mt-10 mb-4 py-3 text-gray-900">
                  Why DH Solutions Stands Out:
                </strong>{" "}
                <ul>
                  <li>
                    <strong>+ </strong> Customized solutions tailored to client
                    goals.
                  </li>
                  <li>
                    <strong>+</strong> A global presence with clients across the
                    US, UK, and the Middle East.
                  </li>
                  <li>
                    <strong>+ </strong>Commitment to quality, efficiency, and
                    cutting-edge technology.
                  </li>
                </ul>
                DH Solutions LLC is a trusted partner for businesses looking to
                stay ahead in today’s competitive digital landscape.
              </div>
            </div>
            {/* 2 */}
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                2. Systems Limited:
              </h2>
              <div>
                {" "}
                 A Pioneer in IT Services Headquarters:
                {" "}
                <strong> (Lahore, Pakistan)</strong>
              </div>
              <div>
                <strong>Specialties:</strong> Digital Transformation, Cloud
                Services, Big Data
                <p className="py-2">
                  With over four decades of experience, Systems Limited is one
                  of Pakistan’s oldest and most established IT firms. The
                  company specializes in helping businesses transition to
                  digital platforms and offers services like cloud migration,
                  big data analytics, and enterprise application development.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                3. Netsol Technologies: 
              </h2>
               <div>
                {" "}
                 Leading in Financial IT Solutions
                Headquarters:
                {" "}
                <strong> (Lahore, Pakistan)</strong>
              </div>
              <div>
                <strong>Specialties:</strong> Leasing Software, Financial
                Systems
                <p className="py-2">
                  Netsol Technologies has a strong global presence, particularly
                  in financial IT solutions. Their flagship product, Netsol
                  Financial Suite, is widely used by financial institutions for
                  asset management and leasing.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                4. 10Pearls: 
              </h2>
              <div>
                {" "}
                  Digital Innovation Experts Headquarters:
                {" "}
                <strong>(Karachi,
                Pakistan)</strong>
              </div>
              <div>
                <strong>Specialties:</strong> Custom Software Development,
                Cybersecurity
                <p className="py-2">
                  Known for its innovative approach, 10Pearls provides
                  cutting-edge solutions in software development, mobile app
                  creation, and cybersecurity. They cater to industries like
                  healthcare, education, and financial services, with a focus on
                  delivering customer-centric products.
                </p>
              </div>
            </div>
            {/* 5 */}
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                5. VentureDive:
                
              </h2>
              <div>
                {" "}
                   Enabling Startups and Enterprises Headquarters:
                {" "}
                <strong>(Karachi, Pakistan)</strong>
              </div>
              <div>
                <strong>Specialties:</strong> Software Engineering, Product
                Design
                <p className="py-2">
                  VentureDive focuses on empowering startups and established
                  enterprises with tailored software solutions. Their expertise
                  spans web and mobile app development, AI integration, and
                  product design.
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
                6. Folio3:
              </h2>
              <div>
                {" "}
                    Experts in Enterprise Software Solutions
                Headquarters: 
                {" "}
                <strong>(Karachi, Pakistan)</strong>
              </div>
              <div>
                <strong>Specialties:</strong> ERP Systems, AI Solutions
                <p className="py-2">
                  Folio3 is recognized for its enterprise-grade solutions,
                  especially in ERP, AI, and digital marketing. They cater to
                  various industries, including agriculture, retail, and
                  manufacturing.
                </p>
              </div>
            </div>
            {/* 7 */}
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                7. TRG Pakistan: 
              </h2>
               <div>
                {" "}
                    Business Process Outsourcing Leader
                Headquarters:
                {" "}
                <strong>(Karachi, Pakistan)</strong>
              </div>
              <div>
                <strong>Specialties:</strong> Customer Support, BPO Services
                <p className="py-2">
                  TRG Pakistan is renowned for its Business Process Outsourcing
                  (BPO) services. The company specializes in customer support
                  and back-office solutions, enabling businesses to streamline
                  their operations.
                </p>
              </div>
            </div>
            {/* 8 */}
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                8. Arbisoft:
              </h2>
              <div>
                {" "}
                    A Global Software Powerhouse Headquarters: 
                {" "}
                <strong> (Lahore,
                Pakistan)</strong>
              </div>
              <div>
                <strong>Specialties:</strong> Mobile Apps, Machine Learning
                <p className="py-2">
                  Arbisoft has gained international acclaim for its software
                  engineering services. They excel in creating mobile apps,
                  machine learning tools, and e-learning platforms.
                </p>
              </div>
            </div>
            {/* 9 */}
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                9. Afiniti:  
              </h2>
              <div>
                {" "}
                AI-Powered Contact Centers Headquarters:
                {" "}
                <strong>(Islamabad,
                Pakistan)</strong>
              </div>
              <div>
                <strong>Specialties:</strong> AI and Machine Learning for Call
                Centers
                <p className="py-2">
                  Afiniti uses AI and machine learning to optimize call center
                  operations. Their patented technology helps businesses improve
                  customer interactions and operational efficiency.
                </p>
              </div>
            </div>
            {/* 10 */}
            <div>
              <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">
                10. Techlogix: 
              </h2>
               <div>
                {" "}
               Simplifying Business with IT Solutions
                Headquarters:
                {" "}
                <strong> (Lahore, Pakistan)</strong>
              </div>
              <div>
                <strong>Specialties:</strong> IT Consultancy, Digital
                Transformation
                <p className="py-2">
                  Techlogix focuses on digital transformation services and IT
                  consulting. Their solutions are particularly impactful in
                  healthcare, education, and banking sectors.
                </p>
              </div>
            </div>
            <strong>Why DH Solutions is the Industry Leader </strong>While
            Pakistan boasts many incredible IT companies, DH Solutions LLC
            stands out for its:
            <br />
            <strong>Innovative Technologies: </strong>Leveraging AI and web
            solutions to create smarter business processes.
            <br />
            <strong>Global Reach: </strong>Working with clients worldwide to
            provide tailored solutions.
            <br />
            <strong>Flexible Staffing Solutions: </strong> Meeting client needs
            with staff augmentation services that deliver results. By combining
            technical expertise with a client-first approach, DH Solutions LLC
            is paving the way for a smarter, more connected future.
            <br />
            <strong>
              Conclusion: The Bright Future of Pakistan’s IT Industry
            </strong>
            Pakistan’s IT companies are reshaping industries and setting
            benchmarks for global success. With DH Solutions LLC leading the
            charge, businesses can access world-class technology, talent, and
            innovation to thrive in a competitive world.
            <br /> Whether you need AI solutions, web development, or global
            staff augmentation, DH Solutions LLC is your trusted partner for all
            IT needs.
            <strong>
              Contact DH Solutions today to take your business to the next level
              with cutting-edge technology and expert talent.
            </strong>
            <br />
            <strong>
              tags: <u> IT in Pakistan, DH Solutions, tech companies </u>
            </strong>
          </main>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BlogDetailPage;
