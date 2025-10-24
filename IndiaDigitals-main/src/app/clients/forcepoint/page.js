"use client";
import { useTranslations } from "next-intl";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BottomCall from "@/components/clients/BottomCall";
import CaseStudiesHero from "@/components/clients/CaseStudiesPageTemplate";
import React from "react";

const page = () => {
   const t = useTranslations("forcepoint-page");
  return (
    <>
      <Navbar />
      <BreadCrumb currentPage="Forcepoint" />

      <CaseStudiesHero
        page_title="page_title"
        page_heading="page_heading"
        page_img="/forcepoint.png"
      />

      <section className="px-7 2xl:px-36 pb-16 flex flex-col lg:flex-row gap-20">
        <div className="w-[240px]">
          <div className="mb-2">
            <h3 className="uppercase text-[0.70rem] mb-2 font-semibold tracking-wider">
              {t("industry")}
            </h3>
            <span className="text-[0.85rem]">{t("industry_name")}</span>
          </div>
          <hr />
          <div className="mt-4">
            <h3 className="uppercase text-[0.70rem] mb-4 font-semibold tracking-wider">
              {t("technology_used")}
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-[0.80rem] bg-gray-800/70 p-1 rounded-xl text-white">
                Drupal
              </span>
              <span className="text-[0.80rem] bg-gray-800/70 p-1 rounded-xl text-white">
                Java
              </span>
              <span className="text-[0.80rem] bg-gray-800/70 p-1 rounded-xl text-white">
                PHP
              </span>
            </div>
          </div>
          <hr />
        </div>

        <div className="w-[60%]">
          <h1 className="text-4xl font-medium">{t("title1")}</h1>
          <h2 className="text-3xl my-6">
            {t("subtitle1")}
          </h2>
          <p className="text-lg my-6">
            {t("paragraph1")}
          </p>
          <p className="text-lg my-6">
           {t("paragraph2")}
          </p>
          <p className="text-lg my-6">
           {t("paragraph3")}
          </p>
          <img
            className="w-full my-8 shadow-lg rounded-lg"
            src="https://www.bairesdev.com/_next/image/?url=https%3A%2F%2Fbairesdev.mo.cloudinary.net%2Fcoresite%2Fcase-studies%2Flaptop3-1-scaled.jpg&w=1080&q=75"
            alt="forcepoint_case_study"
          />
          <h1 className="text-4xl font-medium mt-20">{t("title2")}</h1>
          <h2 className="text-3xl my-6">
             {t("subtitle2")}
          </h2>
          <p className="text-lg my-6">
             {t("paragraph4")}
          </p>
          <img
            className="w-full my-8 shadow-lg rounded-lg"
            src="https://www.bairesdev.com/_next/image/?url=https%3A%2F%2Fbairesdev.mo.cloudinary.net%2Fcoresite%2Fcase-studies%2Flaptop3-1-scaled.jpg&w=1080&q=75"
            alt="forcepoint_case_study"
          />
          <hr className="my-28" />
          <BottomCall Company_Name="ForcePoint" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
