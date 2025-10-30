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

const customSoftwareTools = [
  {
    name: ".NET Core",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
  },
  {
    name: "Ruby on Rails",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
  },
  {
    name: "Spring Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Electron",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
  },
];

const imageUrl = "	https://dhsol.net/_next/static/media/7.9fc8ac93.svg";
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
          Custom Software Development Services

        </div>
        <div className="my-6 flex w-full ">
          <div className="flex flex-col gap-4 lg:gap-0 justify-between py-10 w-full lg:w-[670px] xl:w-[820px]">
            <h1 className=" text-gray-900/90 font-medium  text-4xl sm:text-5xl xl:text-6xl">
              {/* {t("subheading")}&nbsp; */}
              Expert Custom Software Development Services

            </h1>
            <p className=" text-gray-900/70 my-4 text-xl ">
              {/* {t("description")} */}
              At DH Solutions, we excel in providing tailored custom software development services that cater to your specific business requirements. Our dedicated team ensures that every solution is aligned with your goals, emphasizing functionality, scalability, and user experience.


            </p>
            <p className=" text-gray-900/70 my-4 text-xl ">
              {/* {t("description")} */}
              We understand that each project is unique and offers a chance for innovation. By leveraging cutting-edge technologies and agile methodologies, we create software solutions that not only meet your expectations but also drive business growth and efficiency.


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
                title: "Requirement Gathering",
                description:
                  "Understanding your business needs and defining project requirements to ensure a tailored solution.",
              },
              {
                title: "Development Phase",
                description:
                  "Building robust and scalable applications using the latest technologies and frameworks, ensuring high-quality code.",
              },
              {
                title: "Quality Assurance Testing ",
                description:
                  "Rigorous testing procedures to identify and resolve issues, ensuring the software is reliable and meets your standards.",
              },
              {
                title: "Deployment and Support",
                description:
                  "Launching the software and providing ongoing support and maintenance to ensure smooth operation and continuous improvement.",
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
    {/* Main Heading */}
    <h2 className="text-3xl md:text-5xl mb-10 font-semibold text-gray-900">
      Our Tech Stacks
    </h2>

    {/* Custom Software Development Section */}
    <h3 className="text-2xl md:text-3xl font-semibold mb-10">
      Custom Software Development
    </h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
      {customSoftwareTools.map((tool, index) => (
        <div
          key={index}
          className="group border border-gray-200 hover:border-gray-300 rounded-2xl shadow-sm hover:shadow-lg transition-all w-full h-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] min-h-[180px] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white"
        >
          <img
            src={tool.icon}
            alt={tool.name}
            onError={(e) =>
              (e.target.src =
                "https://cdn-icons-png.flaticon.com/512/2889/2889676.png")
            }
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
          Frequently Asked
Questions About
Custom Software
Development
          <br />
          {/* {t("subheading3")} */}
        </h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl md:text-2xl font-normal text-gray-900/80 hover:underline hover:text-orange-500/95 ">
              {/* {t("accordion-h1")} */}
            What is custom software development?{" "}
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap p-3 justify-between mt-3 ">
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">{t("accordion.item1.title")}</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  {/* {t("accordion.item1.description")} */}
                  Custom software development is the process of designing, building, and maintaining software applications that are tailored specifically to meet the unique needs of a business or organization.

{" "}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl md:text-2xl font-normal text-gray-900/80">
              {/* {t("accordion-h2")} */}
              How long does it take to develop custom software?
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap p-3 justify-between mt-3 ">
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">{t("accordion.item1.title")}</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  {/* {t("accordion.item1.description")} */}
                  The timeline for custom software development varies based on project complexity, requirements, and the development methodology used. Generally, it can take from a few weeks to several months.

{" "}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl md:text-2xl font-normal text-gray-900/80 text-left">
              {/* {t("accordion-h3")} */}
              What are the benefits of custom software?{" "}
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap p-3 justify-between mt-3 ">
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">{t("accordion.item1.title")}</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  {/* {t("accordion.item1.description")} */}
                  Custom software provides solutions that are specifically designed to meet your business goals, improve efficiency, enhance user experience, and provide a competitive advantage.

{" "}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl md:text-2xl font-normal text-gray-900/80 text-left">
              {/* {t("accordion-h3")} */}
              How do you ensure the quality of the software?
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap p-3 justify-between mt-3 ">
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">{t("accordion.item1.title")}</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  {/* {t("accordion.item1.description")} */}
                 We implement rigorous testing and quality assurance processes throughout the development lifecycle to ensure that the software meets high standards of quality, functionality, and performance.

{" "}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl md:text-2xl font-normal text-gray-900/80 text-left">
              {/* {t("accordion-h3")} */}
             What support do you offer after development? {" "}
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap p-3 justify-between mt-3 ">
              <div className="lg:w-[47%] mb-4">
                <h3 className="text-xl">{t("accordion.item1.title")}</h3>
                <p className="text-[16px] text-gray-900/80 py-3">
                  {/* {t("accordion.item1.description")} */}
                  We provide comprehensive post-development support, including software maintenance, updates, troubleshooting, and enhancements to ensure your software continues to meet your needs over time.

{" "}
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