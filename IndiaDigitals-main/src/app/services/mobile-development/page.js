"use client";
import { useTranslations } from "next-intl";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  ChevronDownIcon,
} from "@/components/ui/accordion";
import BlogSection from "@/components/home/BlogSection";

const mobileAppStacks = [
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Swift",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  },
  {
    name: "Kotlin",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "Ionic",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg",
  },
  {
    name: "Cordova",
    icon: "https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg",
  },
  {
    name: "Objective-C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg",
  },
];

const imageUrl = "https://dhsol.net/_next/static/media/3.62089747.svg";
const page = () => {
  const t = useTranslations("customSoftware-page");
  return (
    <>
      <Navbar />
      <BreadCrumb
        currentPage="Custom-Software"
        screen_size_padding_x="xl:px-36"
      />
      <section className=" px-7 xl:px-36 pb-16">
        <div className="text-zinc-500/95 font-bold text-sm mt-12 tracking-widest">
          {/* {t("heading")} */}
          Mobile App Development Services
        </div>
        <div className="my-6 flex w-full ">
          <div className="flex flex-col gap-4 lg:gap-0 justify-between py-10 w-full lg:w-[670px] xl:w-[820px]">
            <h1 className=" text-gray-900/90 font-medium  text-4xl sm:text-5xl xl:text-6xl">
              {/* {t("subheading")}&nbsp; */}
              Expert Mobile App Development Services
            </h1>
            <p className=" text-gray-900/70 my-4 text-xl ">
              {/* {t("description")} */}
              At DH Solutions, we are dedicated to delivering exceptional mobile
              app development services designed to bring your vision to life.
              Our expert team specializes in building user-friendly,
              high-performance apps tailored to meet the unique needs of your
              business.
            </p>
            <p className=" text-gray-900/70 my-4 text-xl ">
              {/* {t("description")} */}
              We believe that each project is an opportunity to innovate and
              create value. Using cutting-edge frameworks and technologies, we
              ensure that every app we develop is optimized for performance,
              user engagement, and cross-platform compatibility.
            </p>
            {/* <a href="/basic-detail" className="w-fit">
              <button className="bg-orange-600/95  text-white text-lg md:text-xl font-medium sm:font-normal px-3 py-2 sm:px-5 sm:py-3 rounded-lg">
               {t("cta")}
              </button>
            </a> */}
          </div>
          <div>
            <img
              className="h-[400px] w-[300px] xl:w-[550px] object-cover rounded-l-2xl xl:absolute lg:block hidden"
              src={imageUrl}
              alt="custom-software"
            />
          </div>
        </div>
      </section>

      <section className="px-7 xl:px-36 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl mb-10">Our Design Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Project Planning",
                description:
                  "We begin by understanding client needs, defining goals, and planning the development phases to ensure the app aligns with the vision and user expectations.",
              },
              {
                title: "UI/UX Design",
                description:
                  "Our design team crafts user-centric interfaces and experiences that prioritize usability, ensuring an intuitive and engaging mobile app experience.",
              },
              {
                title: "App Development",
                description:
                  "Building the app with the latest technologies, focusing on performance, security, and seamless functionality across iOS and Android platforms.",
              },
              {
                title: "Testing & Deployment",
                description:
                  "Rigorous testing on various devices ensures a bug-free experience. We then deploy the app to app stores and offer support for future updates.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 hover:translate-y-[-4px] transition-transform duration-300"
              >
                <svg
                  className="w-6 h-6 text-orange-500 mt-2 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.6 11.8L6.425 9.625C6.24167 9.44167 6.01267 9.35433 5.738 9.363C5.46267 9.371 5.23333 9.46667 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.08333 14.0833 8.31667 14.175 8.6 14.175C8.88333 14.175 9.11667 14.0833 9.3 13.9L14.975 8.225C15.1583 8.04167 15.246 7.81233 15.238 7.537C15.2293 7.26233 15.1333 7.03333 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2167 18 14.1043 17.221 15.663 15.663C17.221 14.1043 18 12.2167 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.1043 2.779 12.2167 2 10 2C7.78333 2 5.896 2.779 4.338 4.337C2.77933 5.89567 2 7.78333 2 10C2 12.2167 2.77933 14.1043 4.338 15.663C5.896 17.221 7.78333 18 10 18Z"></path>
                </svg>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl mb-10 font-semibold text-gray-900">
            Our Tech Stacks
          </h2>

          {/* Mobile App Development Section */}
          <h3 className="text-2xl md:text-3xl font-semibold mb-10">
            Mobile App Development
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
            {mobileAppStacks.map((tool, index) => (
              <div
                key={index}
                className="group border border-gray-200 hover:border-gray-300 rounded-2xl shadow-sm hover:shadow-lg transition-all w-full h-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] min-h-[180px] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-14 h-14 mb-4 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <p className="text-gray-800 font-medium text-base md:text-lg text-center">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" px-7 xl:px-36 pb-16">
        <h1 className="text-3xl md:text-5xl mb-10">
          {/* {t("heading2")} */}
          Mobile App Development FAQ
          <br />
          {/* {t("subheading3")} */}
        </h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl md:text-2xl font-normal text-gray-900/80 hover:underline hover:text-orange-500/95 ">
              {/* {t("accordion-h1")} */}
              What platforms do you develop mobile apps for?
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap p-3 justify-between mt-3 ">
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">{t("accordion.item1.title")}</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  {/* {t("accordion.item1.description")} */}
                  We specialize in developing mobile applications for both iOS
                  and Android platforms. Our team uses cross-platform frameworks
                  like React Native and Flutter, as well as native development
                  for more customized requirements.{" "}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl md:text-2xl font-normal text-gray-900/80">
              {/* {t("accordion-h2")} */}
              How long does it take to develop a mobile app?
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap p-3 justify-between mt-3 ">
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">{t("accordion.item1.title")}</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  {/* {t("accordion.item1.description")} */}
                  Development timelines vary depending on the complexity of the
                  app and the features involved. On average, a standard app
                  takes 3 to 6 months to develop from concept to launch, while
                  more complex apps may require additional time.{" "}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl md:text-2xl font-normal text-gray-900/80 text-left">
              {/* {t("accordion-h3")} */}
              Can you help with app design as well?
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap p-3 justify-between mt-3 ">
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">{t("accordion.item1.title")}</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  {/* {t("accordion.item1.description")} */}
                  Yes, our team includes skilled UI/UX designers who work
                  closely with clients to create visually appealing,
                  user-friendly interfaces. We prioritize human-centered design
                  to ensure an engaging experience for your app users.{" "}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl md:text-2xl font-normal text-gray-900/80 text-left">
              {/* {t("accordion-h3")} */}
              What is the cost of mobile app development?
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap p-3 justify-between mt-3 ">
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">{t("accordion.item1.title")}</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  {/* {t("accordion.item1.description")} */}
                  The cost of developing a mobile app depends on various factors
                  such as app complexity, features, design, and the platforms
                  targeted. We provide tailored estimates after a thorough
                  assessment of your project requirements.{" "}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl md:text-2xl font-normal text-gray-900/80 text-left">
              {/* {t("accordion-h3")} */}
              Do you offer post-launch support?
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap p-3 justify-between mt-3 ">
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">{t("accordion.item1.title")}</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  {/* {t("accordion.item1.description")} */}
                  Absolutely. We provide ongoing maintenance and support
                  services to ensure your app remains up-to-date and functions
                  smoothly post-launch. This includes bug fixes, updates, and
                  adding new features as needed.{" "}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <BlogSection />

      <Footer />
    </>
  );
};

export default page;
