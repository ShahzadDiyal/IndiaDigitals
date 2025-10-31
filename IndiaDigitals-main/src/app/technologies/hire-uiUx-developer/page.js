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
              Hire Expert <span className="text-orange-600">UI/UX Designers</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
Create intuitive, user-friendly designs that boost engagement and satisfaction.



            </p>
            <button className="text-white font-semibold bg-orange-500 hover:bg-white hover:text-black px-8 py-3 rounded-full shadow-lg transition">
              Get Started
            </button>
          </div>

          {/* Image */}
          <div className="flex-1">
            <Image
              src="/uiUx.png"
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
   Why Choose Our UI/UX Designers?

          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
Our UI/UX designers focus on creating user-centered designs that deliver an intuitive, seamless experience. Whether it's mobile apps, web platforms, or product design, we ensure that your users' needs are at the heart of every design decision.

          </p>

          <div className="grid md:grid-cols-3 gap-8 text-start md:[dir='rtl']:text-end">
            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Zap className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">Creative Design


</h3>
              <p className="text-gray-600">
Our designers bring innovative and aesthetically pleasing designs that align with your brand and user needs.

              </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Layers className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">User-Centered Approach</h3>
              <p className="text-gray-600">
We focus on the user’s journey, creating designs that are intuitive and easy to navigate.

            </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Shield className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">Mobile-First Design</h3>
              <p className="text-gray-600">
We ensure your design is optimized for mobile, providing a seamless experience across devices.






              </p>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <Globe className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-3">
              Iterative Process

              </h3>
              <p className="text-gray-600">
We use an iterative design approach, refining the product through constant feedback and testing to achieve the best result.



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
Designing with the user in mind to create functional, engaging, and beautiful experiences.




{" "}
          </p>

          <div className="grid md:grid-cols-5 gap-8 text-start md:[dir='rtl']:text-end">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <MessageSquare className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">
             Understand the user needs and define the design requirements.


              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <ClipboardList className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Research</h3>
              <p className="text-gray-600">
       Conduct user research to understand the target audience and user behavior.


              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <Code className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Wireframing</h3>
              <p className="text-gray-600">
              Create wireframes to visualize the layout and functionality of the design.



              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <Bug className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray-600">
           Design high-fidelity prototypes and user interfaces based on the wireframes.



              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <UploadCloud className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Testing</h3>
              <p className="text-gray-600">
Test designs with users and refine based on feedback.


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
“The UI/UX design team at DH Solution transformed our app&apos;s usability, increasing user satisfaction significantly.”              </p>
              <h4 className="font-semibold">
                — Sophia Williams , Product Manager, TechTonic


 .
              </h4>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-700 italic mb-4">
“Their attention to detail and user-centric design approach were instrumental in our app&rsquo;s success.”              </p>
              <h4 className="font-semibold">
                — 
Daniel Black, Founder, InnovateX



              </h4>
            </div>

            <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-700 italic mb-4">
“We saw an immediate improvement in our app&apos;s engagement after collaborating with their UI/UX team.”            </p>
              <h4 className="font-semibold">
                — Rachel Green,Lead Designer, AppWorks


 
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
