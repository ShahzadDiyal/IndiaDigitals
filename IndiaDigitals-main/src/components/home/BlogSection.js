"use client";
import React from "react";
import { useRouter } from "next/navigation";

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

// Mock data for the cards, adjusted to fit the new design (with author info)
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
      "	https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.18fa1a7c.png&w=1080&q=75",
    title: "How DH Solutions Can Revolutionize Call Centers with AI",
    authorName: "BairesDev Editorial Team",
    authorAvatar:
      "https://dhsol.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.30386431.jpg&w=1080&q=75",
    readTime: "9 min read",
    url: "/blog/ai-call-center-revolution",
  },
];

// Mocking shadcn/ui Carousel components (simplified divs for structure)
const Carousel = ({ children, className }) => (
  <div className={`relative overflow-hidden ${className}`}>{children}</div>
);
const CarouselContent = ({ children, className }) => (
  <div className={`flex -ml-4 ${className}`}>{children}</div>
);
const CarouselItem = ({ children, className }) => (
  <div className={`pl-4 flex-shrink-0 w-full ${className}`}>{children}</div>
);
const CarouselNext = ({ className, ...props }) => (
  <div
    className={`absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-white/70 rounded-full cursor-pointer shadow-lg ${className}`}
    {...props}
  >
    &gt;
  </div>
);
const CarouselPrevious = ({ className, ...props }) => (
  <div
    className={`absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-white/70 rounded-full cursor-pointer shadow-lg ${className}`}
    {...props}
  >
    &lt;
  </div>
);

// --- NEW BLOG CARD COMPONENT ---

const BlogCard = ({ data }) => {
  const router = useRouter();
  const fallbackImageUrl =
    "https://placehold.co/600x400/CCCCCC/666666?text=Image+Missing";
  const fallbackAvatarUrl = "https://placehold.co/40x40/DDDDDD/666666?text=AV";

  const handleNavigation = () => {
    router.push(data.url);
  };
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      {/* Image at the top, fixed aspect ratio for consistency */}
      <div
        className="aspect-w-16 aspect-h-9 w-full overflow-hidden"
        onClick={handleNavigation}
      >
        {" "}
        {/* Using aspect ratio classes for image height */}
        <img
          src={data.imageUrl || fallbackImageUrl}
          alt={data.title}
          className="w-full h-full object-cover cursor-pointer"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImageUrl;
          }}
        />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3
          className="text-xl font-semibold text-gray-900 mb-4 flex-grow leading-tight cursor-pointer"
          onClick={handleNavigation}
        >
          {data.title}
        </h3>

        {/* Author and Read Time */}
        <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
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

// --- MAIN BLOG SECTION COMPONENT ---

const BlogSection = () => {
  const t = useTranslations("blogSection");

  return (
    <div className="xl:max-w-screen-lg m-auto pt-32 pb-36 mb-10 md:px-5 ">
      <div className="flex flex-col md:flex-row justify-between md:items-end md:px-0 px-5">
        <h1 className="text-4xl lg:text-5xl font-medium text-gray-900/95">
          {t("heading")}
        </h1>
        <a href="/blog">
          <p className="text-sm my-10 md:my-0 font-medium gap-2 w-fit border-b-2 border-slate-800 pb-1 pr-6">
            <span className="h-full inline-flex cursor-pointer custom-hover-translate text-gray-900/95">
              {t("description")}
              <span className="rtl:inline ltr:hidden">←</span>
              <span className="ltr:inline rtl:hidden">→</span>
            </span>
          </p>
        </a>
      </div>
      <Carousel className="mt-10 md:mt-16">
        {/* The CarouselContent holds the slides */}
        <CarouselContent className="gap-5 lg:flex">
          {mockData.map((data) => (
            <CarouselItem
              key={data.id}
              // Set the basis for responsive layout: 100% width on small, 1/2 on medium, 1/3 on large screens
              className="sm:basis-1/2 md:basis-1/3 px-2"
            >
              {/* The card content */}
              <BlogCard data={data} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Navigation buttons */}
        <CarouselPrevious className="xl:flex items-center hidden hover:border-orange-500/95" />
        <CarouselNext className="xl:flex items-center hidden hover:border-orange-500/95" />
      </Carousel>
    </div>
  );
};

export default BlogSection;
