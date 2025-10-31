"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import BlogSection from "@/components/home/BlogSection";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";



export default function GetADemoPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };


const logos = [
  { src: "https://dhsol.net/assets/logos/stripe.svg" },
  { src: "https://dhsol.net/assets/logos/shopify.svg" },
  { src: "/aws.png" },
  { src: "https://dhsol.net/assets/logos/googlecloud.svg" },
];


  const offices = [
    {
      code: "US",
      country: "USA",
      city: "New York",
      phone: "+1-888-610-5270",
      email: "sales@dhsol.net",
    },
    {
      code: "US",
      country: "USA",
      city: "San Francisco",
      phone: "+1-888-610-5270",
      email: "sales@dhsol.net",
    },
    {
      code: "CA",
      country: "Canada",
      city: "Ottawa",
      phone: "+1-888-610-5270",
      email: "sales@dhsol.net",
    },
    {
      code: "PK",
      country: "Pakistan",
      city: "Islamabad",
      phone: "+92-330-7474-614",
      email: "sales@dhsol.net",
    },
    {
      code: "KW",
      country: "Kuwait",
      city: "Kuwait City",
      phone: "+965-6613-2885",
      email: "sales@dhsol.net",
    },
    {
      code: "AE",
      country: "UAE",
      city: "Dubai",
      phone: "+965-6613-2885",
      email: "sales@dhsol.net",
    },
    {
      code: "AE",
      country: "UAE",
      city: "Abu Dhabi",
      phone: "+965-6613-2885",
      email: "sales@dhsol.net",
    },
    {
      code: "SA",
      country: "Saudi Arabia",
      city: "Riyadh",
      phone: "+965-6613-2885",
      email: "sales@dhsol.net",
    },
  ];

  return (
    <div className="font-sans text-gray-800e">
      {/* Navbar with spacing */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* HERO SECTION */}
      <section className="mt-24 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-10 bg-gradient-to-r from-gray-50 to-gray-100">
        {/* LEFT SIDE TEXT */}
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-site-primary-600 text-sm font-bold uppercase tracking-wide">
            Get a Demo
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-orange-600">
            We’d Love to Show You Around
          </h1>
          <p className="text-gray-600 text-lg">
            Ready to see how{" "}
            <span className="font-semibold text-orange-600">DH Solutions</span>{" "}
            can help transform your service delivery?
          </p>
          <p className="text-gray-600">
            Call us, chat with us, or fill out the form to get in touch — we’re
            excited to see what challenges we can solve together.
          </p>
        </div>


        {/* CONTACT FORM */}
        <div className="md:w-1/2 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Get in Touch
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="text"
                placeholder="+1 555 123 4567"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Our Global Presence
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            DH Solutions is expanding globally — delivering innovation across
            borders.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center justify-center text-center"
              >
                <ReactCountryFlag
                  countryCode={office.code}
                  svg
                  style={{
                    width: "2.5em",
                    height: "2.5em",
                    borderRadius: "8px",
                    marginBottom: "12px",
                  }}
                  title={office.country}
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {office.country}
                </h3>
                <p className="text-gray-500 mb-2">City: {office.city}</p>
                <p className="text-gray-500 mb-1">Phone: {office.phone}</p>
                <p className="text-gray-500">Email: {office.email}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            🧾 Quick Links / Resources
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore our most useful links to learn more about DH Solutions and
            our offerings.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {[
            { title: "About DH Solutions", link: "/about" },
            { title: "Our Services", link: "/services" },
            { title: "Careers", link: "/careers" },
            { title: "Case Studies", link: "/case-studies" },
            { title: "Contact Us", link: "/contact" },
            { title: "Privacy Policy", link: "/privacy-policy" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:bg-blue-50 hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h4 className="font-semibold text-lg text-blue-700">
                {item.title}
              </h4>
            </a>
          ))}
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            🤝 Trusted By Industry Leaders
          </h2>
          <p className="text-gray-600">
            We’re proud to partner with some of the world’s most innovative
            organizations.
          </p>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-10 mb-16">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="w-42 h-26 p-3  flex items-center justify-center "
        >
          <Image
            src={logo.src}
            alt={`Partner logo ${index + 1}`}
            width={100}
            height={60}
            className="object-contain"
          />
        </div>
      ))}
    </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            {
              name: "Sarah L.",
              role: "CTO at FinTech Pro",
              review:
                "Working with DH was seamless — they delivered ahead of schedule and beyond expectations.",
            },
            {
              name: "James R.",
              role: "Head of Product at SaaSFlow",
              review:
                "Their technical excellence and communication were outstanding throughout the project.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <p className="text-gray-700 italic mb-4">“{item.review}”</p>
              <h4 className="font-semibold text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about DH Solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "What kind of roles are available at DH Solutions?",
              a: "We offer positions across development, design, strategy, marketing, and support. Check our Careers page for live roles.",
            },
            {
              q: "Do you offer remote work options?",
              a: "Yes! Many of our roles are fully remote or hybrid, depending on the team and department.",
            },
            {
              q: "What does the hiring process look like?",
              a: "You'll go through an initial application, a screening interview, a technical/cultural round, and final offer discussion.",
            },
            {
              q: "How can I stand out as a candidate?",
              a: "Be authentic, show passion, and share examples of how you’ve solved problems or delivered results in the real world.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-gray-900"
              >
                {item.q}
                <span className="text-xl">{openFAQ === i ? "−" : "+"}</span>
              </button>
              {openFAQ === i && (
                <div className="px-6 pb-4 text-gray-600 border-t border-gray-100">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <BlogSection />
      <Footer />
    </div>
  );
}
