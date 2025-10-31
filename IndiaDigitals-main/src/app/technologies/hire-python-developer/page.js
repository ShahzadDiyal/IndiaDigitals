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
              Hire Expert{" "}
              <span className="text-orange-600">Python Developers</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
             Top 1% engineers to build robust, data-driven, and scalable Python solutions.


            </p>
            <button className="text-white font-semibold bg-orange-500 hover:bg-white hover:text-black px-8 py-3 rounded-full shadow-lg transition">
              Get Started
            </button>
          </div>

          {/* Image */}
          <div className="flex-1">
            <Image
              src="/python.png"
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
           Why Choose Python for Your Project?

          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
           Python is one of the most versatile programming languages—perfect for AI, web apps, data pipelines, and automation. It powers everything from startups to enterprise platforms.


          </p>

          <div className="grid md:grid-cols-3 gap-8 text-start md:[dir='rtl']:text-end">
            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Zap className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">Rapid Development
</h3>
              <p className="text-gray-600">
             Python's simplicity allows quick prototyping and faster time-to-market.


              </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Layers className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">Scalable Backend</h3>
              <p className="text-gray-600">
                Frameworks like Django and FastAPI help us build powerful web backends with ease.


              </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Shield className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">Secure & Stable
</h3>
              <p className="text-gray-600">
              Python enables secure development and robust architecture with clean syntax.


              </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Globe className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">
             AI & Automation Ready
              </h3>
              <p className="text-gray-600">
            Ideal for ML models, data analytics, and task automation using libraries like Pandas, NumPy, and more.


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
            Structured for speed, precision, and quality delivery.
          </p>

          <div className="grid md:grid-cols-5 gap-8 text-start md:[dir='rtl']:text-end">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <MessageSquare className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">
Analyze your technical goals and Python project scope.

                </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <ClipboardList className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">
Blueprint the modules, architecture, and integrations.

              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <Code className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">
We write scalable, clean Python code with high performance.

              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <Bug className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Testing</h3>
              <p className="text-gray-600">
Unit, integration, and system testing to ensure reliability.

              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <UploadCloud className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Launch</h3>
              <p className="text-gray-600">
Deploy & monitor with ongoing optimization and support.

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
               “Their Python developers delivered a powerful backend API for our fintech app.”
              </p>
              <h4 className="font-semibold">
                — Michael Tan, CTO, Bankzy   .
              </h4>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-700 italic mb-4">
                “From Django to automation scripts &ndash; these guys handled everything flawlessly.”
              </p>
              <h4 className="font-semibold">
                — Clara Jensen , Product Manager, AutoPulse

              </h4>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-700 italic mb-4">
               “Reliable, skilled, and fast. The Python work they did saved us weeks.”
              </p>
              <h4 className="font-semibold">
                — Dev Patel,Founder, SmartBotics
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
