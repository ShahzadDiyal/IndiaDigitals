"use client";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      className="w-full py-20 px-6 md:px-16 bg-[radial-gradient(circle_at_top_left,#0d0d0d,#3533cd)] text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6">
          {/* Heading with Icon */}
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" x2="20" y1="19" y2="19"></line>
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Expert Software Team</h3>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-white">Let’s Build Something </span>
            <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-300 leading-relaxed max-w-lg">
            At DH Solutions, we deliver high-performing apps, powerful backends,
            and digital products that scale. Let’s turn your idea into reality.
          </p>

          {/* Services List */}
          <ul className="space-y-3">
            {[
              "Custom Web & Mobile Development",
              "AI & ML Integrations",
              "API Architecture & Cloud Solutions",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-400"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                  <path d="M4 17v2"></path>
                  <path d="M5 18H3"></path>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-8">
            {[
              { value: "1000+", label: "Projects Delivered" },
              { value: "40+", label: "Industries Served" },
              { value: "95%", label: "Client Retention" },
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTACT FORM */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 text-gray-800">
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Company Size</option>
                <option>1-10 Employees</option>
                <option>11-50 Employees</option>
                <option>51-200 Employees</option>
                <option>200+ Employees</option>
              </select>
              <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Service Interested In</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>AI/ML Integration</option>
                <option>Cloud Solutions</option>
              </select>
            </div>

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>

            <div className="flex items-start gap-3">
              <input type="checkbox" id="agree" className="mt-1" />
              <label htmlFor="agree" className="text-sm text-gray-600">
                I agree to the terms and privacy policy.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
