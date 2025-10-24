"use client";
import { useTranslations } from "next-intl";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WeCover from "@/components/home/WeCover";
import React from "react";

const page = () => {
  const t = useTranslations("solutions-page");

  return (
    <>
      <Navbar />
      <BreadCrumb currentPage="Solutions" screen_size_padding_x="xl:px-36" />
      <section className=" px-7 xl:px-36 pb-16">
        <div className="text-zinc-500/95 font-bold text-sm mt-12 tracking-widest">
          {t("heading1")}
        </div>
        <div className="my-6">
          <span>
            <b className=" text-gray-900/90  font-bold my-4 text-5xl xl:text-6xl">
              {t("subheading1")}&nbsp;
            </b>
            <br className="xl:block hidden" />
            <b className=" text-orange-600/95 font-bold my-4 text-5xl xl:text-6xl">
              {t("subheading2")}
            </b>
          </span>
        </div>
      </section>

      <section className=" bg-gray-200/40 px-7 xl:px-36  py-6 ">
        {/* // solutions 1 */}

        <div>
          <div className="my-14">
            <h1 className="text-4xl md:text-5xl font-medium">
              {t("heading2")}
            </h1>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="bg-white px-7 py-6 h-[260px] max-w-[540px] xl:w-[32%] rounded-xl border border-slate-300 mb-7">
              <h2 className="text-2xl md:text-3xl font-bold underline">
                <a href="/solutions/custom-software">
                  {t("sections.custom_software.title")}
                </a>
              </h2>
              <p className="text-xl py-5">
                {t("sections.custom_software.description")}
              </p>
            </div>
            <div className="bg-white px-7 py-6 h-[260px] max-w-[540px] xl:w-[32%] rounded-xl border border-slate-300 mb-7">
              <h2 className="text-2xl md:text-3xl font-bold underline">
                <a href="/solutions/custom-software">
                  {t("sections.custom_software.title")}
                </a>
              </h2>
              <p className="text-xl py-5">
                {t("sections.custom_software.description")}
              </p>
            </div>
            <div className="bg-white px-7 py-6 h-[260px] max-w-[540px] xl:w-[32%] rounded-xl border border-slate-300 mb-7">
              <h2 className="text-2xl md:text-3xl font-bold underline">
                <a href="/solutions/custom-software">
                  {t("sections.custom_software.title")}
                </a>
              </h2>
              <p className="text-xl py-5">
                {t("sections.custom_software.description")}
              </p>
            </div>
            <div className="bg-white px-7 py-6 h-[260px] max-w-[540px] xl:w-[32%] rounded-xl border border-slate-300 mb-7">
              <h2 className="text-2xl md:text-3xl font-bold underline">
                <a href="/solutions/custom-software">
                  {t("sections.custom_software.title")}
                </a>
              </h2>
              <p className="text-xl py-5">
                {t("sections.custom_software.description")}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="my-14">
            <h1 className="text-4xl md:text-5xl font-medium">
              {t("heading3")}
            </h1>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="bg-white px-7 py-6 h-[260px] max-w-[540px] xl:w-[32%] rounded-xl border border-slate-300 mb-7">
              <h2 className="text-2xl md:text-3xl font-bold underline">
                <a href="/solutions/custom-software">
                  {t("sections.custom_software.title")}
                </a>
              </h2>
              <p className="text-xl py-5">
                {t("sections.custom_software.description")}
              </p>
            </div>
            <div className="bg-white px-7 py-6 h-[260px] max-w-[540px] xl:w-[32%] rounded-xl border border-slate-300 mb-7">
              <h2 className="text-2xl md:text-3xl font-bold underline">
                <a href="/solutions/custom-software">
                  {t("sections.business_digital.title")}
                </a>
              </h2>
              <p className="text-xl py-5">
                {t("sections.custom_software.description")}
              </p>
            </div>
            <div className="bg-white px-7 py-6 h-[260px] max-w-[540px] xl:w-[32%] rounded-xl border border-slate-300 mb-7">
              <h2 className="text-2xl md:text-3xl font-bold underline">
                <a href="/solutions/custom-software">
                  {t("sections.erp_crm.title")}
                </a>
              </h2>
              <p className="text-xl py-5">
                {t("sections.erp_crm.description")}
              </p>
            </div>
            <div className="bg-white px-7 py-6 h-[260px] max-w-[540px] xl:w-[32%] rounded-xl border border-slate-300 mb-7">
              <h2 className="text-2xl md:text-3xl font-bold underline">
                <a href="/solutions/custom-software">
                  {t("sections.digital_acceleration.title")}
                </a>
              </h2>
              <p className="text-xl py-5">
                {t("sections.digital_acceleration.description")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <WeCover bgColor="bg-gray-200/40" />
      <div className="bg-gray-200/40 py-10"></div>
      <Footer />
    </>
  );
};

export default page;