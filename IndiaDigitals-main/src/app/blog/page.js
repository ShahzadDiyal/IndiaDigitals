"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";

// Mocking useTranslations
const useTranslations = (namespace) => {
  const translations = {
    blogSection: {
      heading: "Latest Insights & News",
      description: "View All Articles",
    },
  };
  return (key) => translations[namespace][key] || key;
};

// Mock data for blog cards
const mockData = [
  {
    id: 1,
    imageUrl:
      "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.18fa1a7c.png&w=1080&q=75",
    title: "How DH Solutions Can Help You Leverage AI for Growth",
    authorName: "Pablo Riboldi",
    authorAvatar:
      "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.30386431.jpg&w=1080&q=75",
    readTime: "8 min read",
    url: "/blog/ai-development-business-growth",
  },
  {
    id: 2,
    imageUrl:
      "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.f49f28cf.png&w=1080&q=75",
    title: "Scaling Your Business with DH Solutions' Global Talent",
    authorName: "Justice Erolin",
    authorAvatar:
      "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.30386431.jpg&w=1080&q=75",
    readTime: "17 min read",
    url: "/blog/staff-augmentation-global-talent",
  },
  {
    id: 3,
    imageUrl:
      "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.18fa1a7c.png&w=1080&q=75",
    title: "How DH Solutions Can Revolutionize Call Centers with AI",
    authorName: "BairesDev Editorial Team",
    authorAvatar:
      "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.30386431.jpg&w=1080&q=75",
    readTime: "9 min read",
    url: "/blog/ai-call-center-revolution",
  },
  {
    id: 4,
    imageUrl:
      "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.706f1ad8.png&w=1080&q=75",
    title: "Emerging IT Companies in the United States: Driving Innovation",
    authorName: "BairesDev Editorial Team",
    authorAvatar:
      "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.30386431.jpg&w=1080&q=75",
    readTime: "11 min read",
    url: "/blog/emerging-it-companies-us",
  },
  {
    id: 5,
    imageUrl:
      "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.3427daf7.png&w=1080&q=75",
    title: "What Are the Top IT Companies in Pakistan?",
    authorName: "BairesDev Editorial Team",
    authorAvatar:
      "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.30386431.jpg&w=1080&q=75",
    readTime: "2 min read",
    url: "/blog/top-it-companies-pakistan",
  },
  {
    id: 6,
    imageUrl:
      "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.fadefa3a.png&w=1080&q=75",
    title: "Top IT Companies in the Middle East: Transforming the Tech Landscape",
    authorName: "BairesDev Editorial Team",
    authorAvatar:
      "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.30386431.jpg&w=1080&q=75",
    readTime: "15 min read",
    url: "/blog/top-it-companies-middle-east",
  },
];

// Blog Card Component
const BlogCard = ({ data }) => {
  const router = useRouter();
  const fallbackImageUrl = "https://placehold.co/600x400/CCCCCC/666666?text=Image+Missing";
  const fallbackAvatarUrl = "https://placehold.co/40x40/DDDDDD/666666?text=AV";

  const handleNavigation = () => {
    router.push(data.url);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full cursor-pointer"
      onClick={handleNavigation}
    >
      {/* Image */}
      <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
        <img
          src={data.imageUrl || fallbackImageUrl}
          alt={data.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImageUrl;
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
          {data.title}
        </h3>

        <div className="flex items-center mt-auto pt-3 border-t border-gray-100">
          <img
            src={data.authorAvatar || fallbackAvatarUrl}
            alt={data.authorName}
            className="w-10 h-10 rounded-full object-cover mr-3"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallbackAvatarUrl;
            }}
          />
          <div className="text-sm">
            <p className="font-medium text-gray-800">{data.authorName}</p>
            <p className="text-gray-500">{data.readTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Blog Section
const BlogSection = () => {
  const t = useTranslations("blogSection");

  return (
    <section>
            <Navbar />
        <BreadCrumb currentPage="blog / emerging-it-companies-us"/>
          <div className="xl:max-w-screen-xl m-auto pt-28 pb-36 px-6">
    
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-end">
        <h1 className="text-4xl lg:text-5xl font-medium text-gray-900">
          {t("heading")}
        </h1>

        {/* <a href="/blog">
          <p className="text-sm mt-5 md:mt-0 font-medium border-b-2 border-slate-800 pb-1 pr-6 inline-flex items-center gap-1 text-gray-900/95 hover:text-orange-600 transition-all">
            {t("description")} →
          </p>
        </a> */}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {mockData.map((data) => (
          <BlogCard key={data.id} data={data} />
        ))}
      </div>
    </div>

    <Footer />
    </section>
  
  );
};

export default BlogSection;
