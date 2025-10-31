import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  Rocket,
  Shield,
  Zap,
  Layers,
  Globe,
  MessageSquare,
  ClipboardList,
  Code,
  Bug,
  UploadCloud,
} from "lucide-react";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/ContactSection";

export default function HireDeveloperPage() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <BreadCrumb currentPage="/technologies/hire-wordpress-developer" />

      {/* HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-r to-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:[dir='rtl']:flex-row-reverse">
          {/* Text */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-6">
              Hire Expert <span className="text-orange-600">QA Engineers</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Ensure high-quality, bug-free applications with top QA
              professionals.
            </p>
            <button className="text-white font-semibold bg-orange-500 hover:bg-white hover:text-black px-8 py-3 rounded-full shadow-lg transition">
              Get Started
            </button>
          </div>

          {/* Image */}
          <div className="flex-1">
            <Image
              src="/qa.png"
              alt="Hire PHP Developers"
              width={600}
              height={400}
              className="w-full rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE PHP SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose QA Engineers for Your Project?
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Quality assurance (QA) is crucial to the success of any software
            product. It ensures the product is free of bugs, meets user
            expectations, and performs optimally under all conditions.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-start md:[dir='rtl']:text-end">
            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Zap className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">Automated Testing</h3>
              <p className="text-gray-600">
                Automated tests save time, reduce errors, and ensure faster
                releases with continuous integration.
              </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Layers className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">
                Accurate Bug Detection
              </h3>
              <p className="text-gray-600">
                QA engineers use a mix of manual and automated techniques to
                detect even the most elusive bugs.{" "}
              </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Shield className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">Scalable Testing</h3>
              <p className="text-gray-600">
                QA testing solutions scale with your project, ensuring
                comprehensive testing even in complex environments.
              </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Globe className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">
                Seamless Collaboration
              </h3>
              <p className="text-gray-600">
                Our QA engineers collaborate seamlessly with developers to
                provide fast feedback and ensure continuous quality delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR DESIGN PROCESS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Ensuring the highest quality standards with structured and reliable
            testing.{" "}
          </p>

          <div className="grid md:grid-cols-5 gap-8 text-start md:[dir='rtl']:text-end">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <MessageSquare className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">
                Analyze your project to understand testing requirements and
                goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <ClipboardList className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Test Plan</h3>
              <p className="text-gray-600">
                Design a comprehensive test plan and strategy tailored to your
                needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <Code className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Test Execution</h3>
              <p className="text-gray-600">
                Execute tests across different stages to identify and resolve
                issues.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <Bug className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Bug Reporting</h3>
              <p className="text-gray-600">
                Document and report bugs with detailed information for faster
                resolution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <UploadCloud className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Final Testing</h3>
              <p className="text-gray-600">
                Conduct final tests to ensure the product is ready for
                deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>

          <div className="grid md:grid-cols-3 gap-8 text-start md:[dir='rtl']:text-end">
            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-700 italic mb-4">
                “Their QA engineers were thorough and ensured that no critical
                bugs were missed. The quality of our app improved
                significantly.”
              </p>
              <h4 className="font-semibold">
                — Emma Roberts , Product Owner, FinTech Solutions .
              </h4>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-700 italic mb-4">
                “We had excellent collaboration with their QA team. They were
                diligent and proactive in finding and fixing issues.”{" "}
              </p>
              <h4 className="font-semibold">
                — Mark Johnson , Lead Developer, BrightTech
              </h4>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-700 italic mb-4">
                “Fantastic job by the QA team! They helped us deliver a flawless
                product on time. Highly recommended!”{" "}
              </p>
              <h4 className="font-semibold">
                — Alice Walker ,Project Manager, WebVenture
              </h4>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
