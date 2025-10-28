"use client";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";



// Step 1: Updated mock cards with link for each card
const mockCards = [
  {
    id: 1,
    imageUrl:
      "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.2c15e023.jpg&w=828&q=75",
    heading: "Custom Software Solutions",
    paragraph:
      "Building bespoke applications tailored exactly to your business logic and industry needs.",
    link: "/our-work/portfolio-detail-1",
  },
  {
    id: 2,
    imageUrl:
      "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.cf499d81.jpg&w=828&q=75",
    heading: "Mobile App Development",
    paragraph:
      "Creating native and cross-platform apps for iOS and Android with a focus on UX/UI.",
    link: "/our-work/portfolio-detail-2",
  },
  {
    id: 3,
    imageUrl:
      "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.a4939da8.jpg&w=828&q=75",
    heading: "Cloud & DevOps Integration",
    paragraph:
      "Seamless cloud migration, infrastructure management, and continuous delivery pipelines.",
    link: "/our-work/portfolio-detail-3",
  },
  {
    id: 4,
    imageUrl:
      "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.284f0c81.jpg&w=828&q=75",
    heading: "Data & Analytics Services",
    paragraph:
      "Transforming raw data into actionable insights using modern BI tools and data modeling.",
    link: "/our-work/portfolio-detail-4",
  }
];

// ✅ Step 2: FeatureCard component with navigation support
const FeatureCard = ({ imageUrl, link }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <div
      onClick={handleClick}
      className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full min-h-[300px] cursor-pointer"
    >
      <img
        src={imageUrl}
        alt="Service Image"
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/600x400/CCCCCC/666666?text=Placeholder";
        }}
      />

      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering the parent div click
          router.push(link);
        }}
        className="
          absolute bottom-5 right-5 
          w-12 h-12 rounded-full flex items-center justify-center 
          bg-transparent border-2 border-orange-600 text-orange-600 
          transition-all duration-300 ease-in-out shadow-xl
          hover:bg-white hover:shadow-orange-500/50 hover:shadow-xl
          group-hover:right-3
        "
      >
        <svg
          className="ml-2 w-4 h-4 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </button>
    </div>
  );
};

// ✅ Step 3: Expertise section to display cards
const Expertise = () => {
  return (
    <div className="py-12 px-7 md:px-36">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {mockCards.map((card) => (
            <FeatureCard key={card.id} imageUrl={card.imageUrl} link={card.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

// ✅ Step 4: Full page layout
const Page = () => {
  const t = useTranslations("about");

  return (
    <>
      <Navbar />
      <BreadCrumb currentPage="About" />

      <section className="px-7 md:px-36 pb-1">
        <div className="text-zinc-500/95 font-bold text-sm mt-12 tracking-widest">
          OUR CLIENTS
        </div>
        <div className="my-6">
          <span>
            <p className="text-orange-600/95 font-bold my-2 text-4xl sm:text-5xl xl:text-6xl">
              Over 10 Years of <br />
              Over Delivering.
            </p>
            <br className="xl:block hidden" />
            <p className="text-gray-900/90 my-2 text-2xl sm:text-3xl leading-[30px] sm:leading-[44px]">
              500+ active clients with an average relationship of over 3 years.
              And a 96% retention rate.
            </p>
          </span>
        </div>
      </section>

      {/* ✅ Expertise section with clickable cards */}
      <section>
        <Expertise />
      </section>

      <section className="bg-gray-200/70 px-7 md:pl-36 md:pr-10 pt-10 md:pt-20 pb-32">
        <h2 className="text-3xl font-medium">Heading</h2>
        <p>paragraph, text, image, whatever</p>
      </section>

      <Footer />
    </>
  );
};

export default Page;
