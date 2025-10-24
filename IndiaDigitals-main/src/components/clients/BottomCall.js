"use client";
import { useTranslations } from "next-intl";
import React from "react";


const BottomCall = () => {
  const t = useTranslations("forcepoint-page");
  return (
    <div className="w-[80%] mb-10">
      <h1 className="my-12 text-3xl font-medium">
        {t("text")}
      </h1>
      <a
        href="/basic-detail"
        className="bg-green-600 text-white font-semibold py-3 px-2 rounded-lg"
      >
        {t("button")}
      </a>
    </div>
  );
};

export default BottomCall;
