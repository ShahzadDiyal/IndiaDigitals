"use client";

import { IntlProvider } from "next-intl";
import { useEffect } from "react";

export default function LocaleProvider({ children, locale = "en", messages }) {
  useEffect(() => {
    document.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
