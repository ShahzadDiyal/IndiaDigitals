"use client";

import { useEffect, useState } from "react";
import LocaleProvider from "../providers/LocaleProvider";
import enLocale from "../locales/en.json";
import arLocale from "../locales/ar.json";

export default function LocaleWrapper({ children }) {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved) setLocale(saved);
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const messages = locale === "ar" ? arLocale : enLocale;

  return (
    <LocaleProvider locale={locale} messages={messages}>
      {children}

      <button
  onClick={toggleLocale}
  className="fixed bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-4 bg-blue-600 text-white rounded-full shadow-lg"
>
  {locale === "en" ? "العربية (AR)" : "English (EN)"}
</button>

    </LocaleProvider>
  );
}
