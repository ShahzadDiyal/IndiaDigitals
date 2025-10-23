"use client";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("about");
  return (
    <>
      <Navbar />
      <BreadCrumb currentPage="About" />
      <section className=" px-7 md:px-36 pb-16">
        <div className="text-zinc-500/95 font-bold text-sm mt-12 tracking-widest"></div>
        <div className="my-6">
          <span>
            <b className="  text-orange-600/95 font-bold my-4 text-4xl sm:text-5xl xl:text-6xl">
              {t("title")}&nbsp;
            </b>
            <br className="xl:block hidden" />
            <p className=" text-gray-900/90 my-4 text-2xl  sm:text-3xl leading-[30px] sm:leading-[44px]">
              {t("paragraph1")}
            </p>
            <p className=" text-gray-900/90 my-4 text-2xl  sm:text-3xl leading-[30px] sm:leading-[44px]">
              {t("paragraph2")}
            </p>
          </span>
        </div>
      </section>

      <section className=" bg-gray-200/70 px-7 md:pl-36 md:pr-10 pt-10 md:pt-20 pb-32">
        <h2 className="text-3xl font-medium">Heading</h2>
        <p>paragraph , text, image, whatever</p>
      </section>

      <Footer />
    </>
  );
};

export default page;
