import Image from "next/image";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function JobOpportunitiesPage() {
  const jobs = [
    {
      title: "Frontend Developer",
      description:
        "We’re looking for a skilled React/Next.js developer passionate about building interactive, high-performance web apps.",
      category: "Development",
    },
    {
      title: "UI/UX Designer",
      description:
        "Join our creative design team to craft intuitive user experiences and stunning digital interfaces for global brands.",
      category: "Design",
    },
    {
      title: "Project Manager",
      description:
        "Manage cross-functional teams and ensure smooth delivery of software projects within time and budget.",
      category: "Management",
    },
    {
      title: "Backend Engineer",
      description:
        "Design scalable APIs and backend systems using Node.js, Express, and cloud technologies.",
      category: "Engineering",
    },
    {
      title: "QA Tester",
      description:
        "Ensure our software quality through automated and manual testing while maintaining top user experience.",
      category: "Quality Assurance",
    },
    {
      title: "Marketing Specialist",
      description:
        "Help us grow our digital presence through creative campaigns, SEO, and performance marketing.",
      category: "Marketing",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pb-28 pt-40 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Join Our Team & Build the Future with Us
          </h1>
          <p className="text-lg text-indigo-100 mb-8">
            Explore exciting career opportunities and become part of a
            passionate team shaping tomorrow’s technology.
          </p>
          <button className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-md hover:bg-indigo-50 transition">
            View Open Positions
          </button>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Your Next Opportunity
          </h2>
          <p className="text-gray-600">
            Search by job title, skills, or department to discover roles that
            match your passion.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden border border-gray-200 focus-within:ring-2 focus-within:ring-indigo-500 transition">
            <div className="pl-5 text-gray-500">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search for jobs..."
              className="flex-grow px-4 py-3 outline-none text-gray-700 placeholder-gray-400"
            />
            <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-r-full hover:bg-indigo-700 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* JOB CARDS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Current Job Openings
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore roles across departments and find where you fit best.
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                  {job.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {job.description}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm font-medium text-gray-500">
                  {job.category}
                </span>
                <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ContactSection />
      <Footer />
    </>
  );
}