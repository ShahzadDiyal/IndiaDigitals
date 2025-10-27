"use client";
import { useTranslations } from "next-intl";
const Footer = () => {
  const t = useTranslations("footer");
  return (
    <>
      <div className="py-16 md:px-20 bg-gray-900 flex-col-reverse xl:flex-col flex justify-between xl:relative">
        <div className="flex flex-col">
          <span className="text-2xl md:text-3xl xl:text-4xl font-normal leading-[32px] md:leading-[37px] xl:leading-[45px] py-5">
            <span className="text-white">
              {t("accelerateSoftwarep-1")} <br /> {t("accelerateSoftwarep-2")}{" "}
            </span>
            <br /> <span className="text-orange-600">{t("seeHowWeCanHelp")}</span>
          </span>
          <a
            href="/basic-detail"
            className="py-2 px-3 rounded-lg text-white bg-green-600 w-fit"
          >
            {t("scheduleacall")}
          </a>
        </div>
        <div className="xl:absolute flex  max-w-screen-xl text-white justify-end w-full -mt-36">
          <img className="w-[500px]" src="/bottom_footer.avif" />
        </div>
      </div>

      <footer className="bg-white">
        <div className="grid grid-cols-1 xl:grid-cols-4 h-full xl:h-[500px]">
          {/* Column 1: Discover BairesDev */}
          <div className="xl:pr-8 p-14">
            <div className="flex items-start xl:items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="BairesDev Logo"
                className="h-8 w-auto flex-shrink-0"
              />
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="/about" className="hover:text-gray-900">
                 {t("aboutus")}
                </a>
              </li>
              <li>
                <a href="/methodologies" className="hover:text-gray-900">
                 {t("methodologies")}
                </a>
              </li>
              <li>
                <a href="/technologies" className="hover:text-gray-900">
           {t("technologies")}
                </a>
              </li>
              <li>
                <a href="/certifications" className="hover:text-gray-900">
                {t("certifications")} 
                </a>
              </li>
              <li>
                <a
                  href="/software-development-services"
                  className="hover:text-gray-900"
                >
                  {t("softwareDevelopmentServices")}
                </a>
              </li>
              <li>
                <a href="/solutions" className="hover:text-gray-900">
                  {t("solutions")}
                </a>
              </li>
              <li>
                <a href="/dedicated-teams" className="hover:text-gray-900">
                  {t("dedicatedSoftwareDevelopmentTeams")}
                </a>
              </li>
              <li>
                <a href="/staff-augmentation" className="hover:text-gray-900">
                  {t("staffAugmentation")}
                </a>
              </li>
              <li>
                <a href="/outsourcing" className="hover:text-gray-900">
                {t("outsourcing")}
                </a>
              </li>
              <li>
                <a href="/diversity" className="hover:text-gray-900">
               {t("diversity")}
                </a>
              </li>
              <li>
                <a
                  href="/social-responsibility"
                  className="hover:text-gray-900"
                >
                  {t("socialResponsibility")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="xl:pr-8 xl:pl-8 p-14">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {t("services")}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="/case-studies" className="hover:text-gray-900">
                {t("frontEndDevelopment")}
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-gray-900">
              {t("backEndDevelopment")}
                </a>
              </li>
              <li>
                <a href="/press" className="hover:text-gray-900">
                 {t("backEndDevelopment")}
                </a>
              </li>
              <li>
                <a href="/industry-insights" className="hover:text-gray-900">
                 {t("aiMlSolutions")}
                </a>
              </li>
              <li>
                <a
                  href="/technology-resource-center"
                  className="hover:text-gray-900"
                >
                  {t("cyberSecurity")}
                </a>
              </li>
              <li>
                <a
                  href="/client-referral-program"
                  className="hover:text-gray-900"
                >
                  {t("devOpsSolutions")}
                </a>
              </li>
              <li>
                <a
                  href="/client-referral-program"
                  className="hover:text-gray-900"
                >
                 {t("softwareDevelopment")}
                </a>
              </li>
              <li>
                <a
                  href="/client-referral-program"
                  className="hover:text-gray-900"
                >
                  {t("qaTesting")}
                </a>
              </li>
              <li>
                <a
                  href="/client-referral-program"
                  className="hover:text-gray-900"
                >
                  {t("computerVision")}
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900">{t("phone")}:(888) 610-DHSOL</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Careers */}
          <div className="xl:pl-8 p-14">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {t("career")}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="/case-studies" className="hover:text-gray-900">
                  {t("jobOpportunities")}
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-gray-900">
                  {t("talentReferrals")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch - Full Height Gray Background */}
          <div className="bg-gray-300 pt-14 px-6 mt-6 xl:mt-0 xl:col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {t("getInTouch")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center text-semibold justify-center px-4 py-2 border-[3px] border-black text-black rounded-lg hover:bg-black hover:text-white w-full md:w-auto transition"
                >
                  {t("contactUs")}
                </a>
                <a
                  href="/schedule-call"
                  className="inline-flex items-center justify-center px-4 py-2 bg-orange-400 text-white text-xl rounded-lg hover:bg-orange-600 w-full md:w-auto transition"
                >
                  {t("scheduleCall")}→
                </a>
              </div>

              <div className="text-sm">
                <a
                  href="tel:+140873279"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <h2 className="text-xl text-black pt-3 mb-6">
                    +1 (408) 727-979
                  </h2>
                </a>
              </div>
              <div>
                <p
                  className="text-sm text-black font-bold leading-relaxed"
                  style={{ fontSize: "16px" }}
                >
                  {t("getInsights")}
                 
                </p>
              </div>
              <form className="space-y-2">
                <label>{t("emailPlaceholder")}</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <label className="flex items-start gap-2 text-xs text-gray-500">
                  <input type="checkbox" className="mt-1" />
                  <span style={{fontSize:"15px"}}>
                   {t("privacyAcceptance")}{" "}
                    <a
                      href="/privacy-policy"
                      className="text-orange-500 hover:underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-orange-500 text-white rounded-lg text-base hover:bg-orange-600"
                >
                  {t("subscribe")} →
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="text-orange-500 font-semibold">
                IndiaDigitals
              </span>
              {t("copyright")}.
            </p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a
                href="/privacy-policy"
                className="hover:text-orange-400 transition"
              >
                {t("privacy_policy")}
              </a>
              <a href="/terms" className="hover:text-orange-400 transition">
                {t("terms_conditions")}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;