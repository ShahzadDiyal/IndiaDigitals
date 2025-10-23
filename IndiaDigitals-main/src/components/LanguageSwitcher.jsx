"use client";

import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") || "en";
    setLocale(savedLocale);
  }, []);

  const handleToggle = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    localStorage.setItem("locale", nextLocale);
    setLocale(nextLocale);
    window.location.reload(); 
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-6 right-6 z-50 bg-orange-500 text-white px-5 py-2 rounded-full shadow-lg hover:bg-orange-600 transition-all"
    >
        {locale === "en" ? "العربية (AR)" : "English (EN)"}
    </button>
  );
}
