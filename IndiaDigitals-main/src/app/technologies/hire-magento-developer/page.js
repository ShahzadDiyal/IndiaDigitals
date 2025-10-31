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
              <span className="text-orange-600">Magento Developers</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Top 1% engineers to build robust, scalable eCommerce stores with
              Magento.
            </p>
            <button className="text-white font-semibold bg-orange-500 hover:bg-white hover:text-black px-8 py-3 rounded-full shadow-lg transition">
              Get Started
            </button>
          </div>

          {/* Image */}
          <div className="flex-1">
            <Image
              src="/laravel.png"
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
            Why Choose Magento for Your eCommerce Business?
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Magento offers flexibility, scalability, and customization for
            eCommerce businesses of all sizes. Whether you’re launching a new
            store or scaling an existing one, Magento can meet your business
            needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-start md:[dir='rtl']:text-end">
            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Zap className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">Fast Setup</h3>
              <p className="text-gray-600">
                Quick setup and launch with pre-built templates and extensions
                tailored for eCommerce.
              </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Layers className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">Highly Scalable</h3>
              <p className="text-gray-600">
                Magento can handle growing businesses with ease and scale to
                thousands of products and customers.
              </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Shield className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">Secure</h3>
              <p className="text-gray-600">
                Magento provides enterprise-level security features for safe
                transactions and customer data protection.
              </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Globe className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">Customizable</h3>
              <p className="text-gray-600">
                Build custom features, integrations, and solutions for your
                business with Magento’s flexibility.
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
            End-to-end Magento development with a focus on business outcomes.
          </p>

          <div className="grid md:grid-cols-5 gap-8 text-start md:[dir='rtl']:text-end">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <MessageSquare className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">
                Understand your Magento requirements and business goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <ClipboardList className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">
                Tailor Magento&rsquo;s features to suit your business model and
                scale.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <Code className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">
                Custom Magento themes, extensions, and modules development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <Bug className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Testing</h3>
              <p className="text-gray-600">
                Ensure your Magento site runs smoothly and bug-free.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <UploadCloud className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Launch</h3>
              <p className="text-gray-600">
                Deploy your Magento store with high availability and security.
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
                “The Magento team at DH Solution was fantastic, delivering a
                feature-rich store quickly and efficiently.”
              </p>
              <h4 className="font-semibold">
                — James Watson , Founder, ShopNow .
              </h4>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-700 italic mb-4">
                “DH Solution helped optimize our Magento store, and we saw an
                immediate increase in sales.”
              </p>
              <h4 className="font-semibold">
                — Rachel Lee , Marketing Head, TechCart
              </h4>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-700 italic mb-4">
                “Highly professional and skilled team. Our Magento site runs
                flawlessly thanks to them.”
              </p>
              <h4 className="font-semibold">
                — Paul Richards,Ecommerce Manager, FurnitureX
              </h4>
            </div>
          </div>
        </div>
      </section>
      <BlogSection />
      <Footer />
    </div>
  );
}
