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
              <span className="text-orange-600">Cloud Engineers</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Build robust and scalable cloud solutions with top engineers from
              the cloud computing industry. Get Started
            </p>
            <button className="text-white font-semibold bg-orange-500 hover:bg-white hover:text-black px-8 py-3 rounded-full shadow-lg transition">
              Get Started
            </button>
          </div>

          {/* Image */}
          <div className="flex-1">
            <Image
              src="/cloud.png"
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
            Why Choose Cloud for Your Business?
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Cloud computing allows businesses to scale faster, reduce IT costs,
            and enhance data security. Whether it’s for infrastructure
            management, application hosting, or data storage, cloud solutions
            are flexible and future-proof.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-start md:[dir='rtl']:text-end">
            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Zap className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">Rapid Deployment</h3>
              <p className="text-gray-600">
                Cloud engineers quickly deploy and configure cloud
                infrastructure to meet your business needs.
              </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Layers className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">
                Cloud solutions can be easily scaled as your business grows,
                accommodating high-traffic spikes effortlessly.{" "}
              </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Shield className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">Enhanced Security</h3>
              <p className="text-gray-600">
                Cloud platforms provide built-in security features to protect
                your data and infrastructure from external threats.
              </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Globe className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">Cost-Effective</h3>
              <p className="text-gray-600">
                Cloud platforms offer flexible pricing models, making it easier
                to optimize costs and only pay for what you use.
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
            Cloud platforms offer flexible pricing models, making it easier to
            optimize costs and only pay for what you use.{" "}
          </p>

          <div className="grid md:grid-cols-5 gap-8 text-start md:[dir='rtl']:text-end">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <MessageSquare className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">
                Analyze your cloud infrastructure needs and growth requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <ClipboardList className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">
                Design a cloud architecture tailored to your business and future
                scalability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <Code className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">
                Implement cloud solutions using AWS, Azure, or Google Cloud to
                optimize performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <Bug className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Optimization</h3>
              <p className="text-gray-600">
                Refine and optimize cloud services for cost-efficiency and
                resource usage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <UploadCloud className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600">
                Provide ongoing monitoring, troubleshooting, and updates to
                ensure seamless cloud operations.
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
                “Our cloud migration was seamless, and the solution provided has
                increased our efficiency tremendously.”
              </p>
              <h4 className="font-semibold">
                — David Brown , CTO, GlobalTech .
              </h4>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-700 italic mb-4">
                “The team helped us optimize our AWS infrastructure, saving us
                time and money while scaling our operations.”
              </p>
              <h4 className="font-semibold">
                — Emma White, VP of Engineering, SoftWave
              </h4>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-700 italic mb-4">
                “We needed reliable cloud engineers for our project, and their
                expertise in cloud security was invaluable.”{" "}
              </p>
              <h4 className="font-semibold">
                — Olivia Green,Cloud Operations Lead, CloudNet
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
