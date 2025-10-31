"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const Navbar = () => {
  //translation
  const t = useTranslations("navbar");
  // Toggle Menu - Responsive

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Dropdown - menu

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTechDropdownOpen, setIsTechDropdownOpen] = useState(false);

  // const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnterServices = (e) => {
    setIsDropdownOpen(true);
  };
  const handleMouseLeaveServices = () => {
    setIsDropdownOpen(false);
  };

  const handleMouseEnterTechnologies = () => setIsTechDropdownOpen(true);
  const handleMouseLeaveTechnologies = () => setIsTechDropdownOpen(false);

  const handleMouseEnterIndustries = () => setIsIndDropdownOpen(true);
  const handleMouseLeaveIndustries = () => setIsIndDropdownOpen(false);

  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScrollTop) {
        // Scrolling down
        setIsFixed(true);
      } else {
        // Scrolling up
        setIsFixed(false);
      }
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  // Map each key to a route
  const linkMap = {
    frontendDevelopment: "/services/frontend-development",
    backendDevelopment: "/services/backend-development",
    machineLearning: "/services/machine-learning",
    mobileDevelopment: "/services/mobile-development",
    qaTestingAutomation: "/services/qa-testing-automation",
    cybersecurity: "/services/cybersecurity",
    devOps: "/services/devops",
    softwareDevelopment: "/services/software-Development",
    computerVision:"/services/computer-vision",
phpDev: "/technologies/hire-php-developer",
shopifyDev: "/technologies/hire-shopify-developer",
wordpressDev: "/technologies/hire-wordpress-developer",
reactDev: "/technologies/hire-react-developer",
pythonDev: "/technologies/hire-python-developer",
nodejsDev: "/technologies/hire-nodejs-developer",
javaDev: "/technologies/hire-javascript-developer",
laravalDev: "/technologies/hire-laraval-developer",
magentoDev: "/technologies/hire-magento-developer",
angularDev: "/technologies/hire-angular-developer",

vuejsDev: "/technologies/hire-vuejs-developer",
awsExpert: "/technologies/hire-aws-developer",
iosDev: "/technologies/hire-ios-developer",
androidDev: "/technologies/hire-android-developer",
cloudEngr: "/technologies/hire-cloud-developer",
uiUxDev: "/technologies/hire-uiUx-developer",
databaseDev: "/technologies/hire-database-developer",
fullStackDev: "/technologies/hire-fullstack-developer",
DevOpsDev: "/technologies/hire-devOps-developer",
qaEngr: "/technologies/hire-qa-developer",


    
  };

  const topSolKeys1 = [
    "frontendDevelopment",
    "backendDevelopment",
    "machineLearning",
    "qaTestingAutomation",
    "mobileDevelopment",
    "cybersecurity",
    "devOps",
    "softwareDevelopment",
    "computerVision"
  ];

  const topSolKeys2 = [
    "androidDevelopment",
    "businessIntelligence",
    "dataEngineering",
    "ecommerceDevelopment",
    "iosDevelopment",
    "saasDevelopment",
  ];

  const topSolKeys3 = [
    "backupSolutions",
    "bigData",
    "cloudApplications",
    "crmSystems",
    "digitalTransformations",
    "erpDevelopment",
  ];

  const techKeys1 = [
    "phpDev",
    "shopifyDev",
    "wordpressDev",
    "reactDev",
    "pythonDev",
    "nodejsDev",
    "javaDev",
    "laravalDev",
    "magentoDev",
    "angularDev",
  ];
  const techKeys2 = [
    "vuejsDev",
    "awsExpert",
    "iosDev",
    "androidDev",
    "cloudEngr",
    "uiUxDev",
    "databaseDev",
    "fullStackDev",
    "DevOpsDev",
    "qaEngr",
  ];
  const techKeys3 = [
    "python",
    "react",
    "ruby",
    "salesforce",
    "typescript",
    "vuejs",
    "xamarin",
  ];

  return (
    //  p-[1.1rem]
    <nav
      className={`bg-white z-50 fixed w-full transition-all duration-300 ease-in-out top-0 shadow-sm sm:shadow-none ${
        isOpen ? "" : isFixed ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* // px-2 py-1 */}
      <div className=" mx-auto flex justify-between items-center px-5 sm:px-10 xl:py-0 py-5">
        <div className="flex items-center sm:mt-1 cursor-pointer">
          <a href="/">
            {/* <svg
              width="188"
              height="28"
              viewBox="0 0 188 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8492 0.202026C25.5254 0.202026 31.7482 6.42486 31.7482 14.101C31.7482 21.7771 25.5254 28 17.8492 28V0.202026Z"
                fill="#F66135"
              />
              <path
                d="M8.01166 0C15.3615 2.21331 19.5268 9.96358 17.3135 17.3135C15.102 24.6633 7.34989 28.8286 0 26.6153L8.01166 0Z"
                fill="#F66135"
              />
              <path
                d="M39.7655 3.39417H48.0145C52.3466 3.39417 54.8621 5.90965 54.8621 9.25374C54.8621 11.2928 53.8426 12.9482 52.2502 13.8713V14.0623C53.7147 14.6666 55.5943 16.2589 55.5943 19.2211C55.5943 23.3289 52.3466 25.6869 48.6522 25.6869H39.7674V3.39417H39.7655ZM47.5047 12.5663C49.4474 12.5663 50.6579 11.3874 50.6579 9.66897C50.6579 7.95058 49.4159 6.89767 47.5696 6.89767H43.8437V12.5663H47.5066H47.5047ZM47.6011 22.0888C49.6717 22.0888 51.1362 21.0693 51.1362 18.8726C51.1362 16.676 49.4159 15.7195 47.4732 15.7195H43.8437V22.0888H47.6011Z"
                fill="#070707"
              />
              <path
                d="M57.3146 17.4081C57.3146 12.1529 60.4993 8.52332 65.0854 8.52332C67.9827 8.52332 69.6084 10.2436 70.1812 11.1037H70.4036V8.93855H74.543V25.6905H70.4667V23.5569H70.2442C69.766 24.2576 68.27 26.1039 65.2114 26.1039C60.5289 26.1039 57.3127 22.6004 57.3127 17.41M70.4982 17.347C70.4982 14.1938 68.587 12.2826 65.9751 12.2826C63.3633 12.2826 61.517 14.3847 61.517 17.347C61.517 20.3092 63.3317 22.3798 66.0066 22.3798C68.6816 22.3798 70.4963 20.1498 70.4963 17.347"
                fill="#070707"
              />
              <path
                d="M77.5052 4.28579C77.5052 2.85288 78.5562 1.89636 80.0522 1.89636C81.5481 1.89636 82.5992 2.85102 82.5992 4.28579C82.5992 5.72056 81.5481 6.70673 80.0522 6.70673C78.5562 6.70673 77.5052 5.78359 77.5052 4.28579ZM77.9834 8.93489H82.1228V25.6868H77.9834V8.93675V8.93489Z"
                fill="#070707"
              />
              <path
                d="M85.5614 8.93668H89.4783V11.6765H89.7323C90.2735 10.3715 91.8028 8.87366 94.1274 8.87366H95.6567V12.8221H93.9365C91.2931 12.8221 89.7007 14.7647 89.7007 17.7585V25.6886H85.5614V8.93668Z"
                fill="#070707"
              />
              <path
                d="M96.8042 17.4081C96.8042 12.1214 100.339 8.52332 105.244 8.52332C110.627 8.52332 113.556 12.5051 113.556 17.2172V18.5241H100.817C100.945 21.0711 102.697 22.7913 105.372 22.7913C107.411 22.7913 108.97 21.8366 109.545 20.4668H113.399C112.57 23.8739 109.576 26.1039 105.246 26.1039C100.31 26.1039 96.806 22.4094 96.806 17.41M109.61 15.5952C109.419 13.3337 107.667 11.8377 105.246 11.8377C102.825 11.8377 101.138 13.4931 100.882 15.5952H109.608H109.61Z"
                fill="#070707"
              />
              <path
                d="M115.465 20.6559H119.288C119.447 22.0888 120.593 22.8525 122.472 22.8525C124.352 22.8525 125.466 22.0239 125.466 20.8468C125.466 17.2803 115.849 20.6559 115.849 13.6488C115.849 10.8145 118.302 8.52148 122.441 8.52148C126.072 8.52148 128.779 10.3696 129.033 13.7119H125.37C125.179 12.5014 124.224 11.7062 122.408 11.7062C120.719 11.7062 119.636 12.4384 119.636 13.5209C119.636 16.7056 129.478 13.3615 129.478 20.6225C129.478 23.8072 126.897 26.1002 122.408 26.1002C117.918 26.1002 115.625 23.9666 115.465 20.654"
                fill="#070707"
              />
              <path
                d="M132.664 3.39417H140.179C147.281 3.39417 151.55 7.98024 151.55 14.4775C151.55 21.3881 147.283 25.6887 140.179 25.6887H132.664V3.39417ZM140.022 21.9924C143.938 21.9924 147.155 19.6994 147.155 14.4756C147.155 9.25188 143.97 7.08675 140.022 7.08675H136.9V21.9943H140.022V21.9924Z"
                fill="#070707"
              />
              <path
                d="M153.428 17.4081C153.428 12.1214 156.963 8.52332 161.868 8.52332C167.251 8.52332 170.18 12.5051 170.18 17.2172V18.5241H157.441C157.569 21.0711 159.321 22.7913 161.996 22.7913C164.035 22.7913 165.595 21.8366 166.168 20.4668H170.022C169.193 23.8739 166.2 26.1039 161.869 26.1039C156.933 26.1039 153.429 22.4094 153.429 17.41M166.233 15.5952C166.042 13.3337 164.29 11.8377 161.869 11.8377C159.449 11.8377 157.762 13.4931 157.506 15.5952H166.231H166.233Z"
                fill="#070707"
              />
              <path
                d="M170.658 8.93677H174.99L178.97 20.7523H179.226L183.174 8.93677H187.601L181.454 25.6887H176.773L170.658 8.93677Z"
                fill="#070707"
              />
            </svg> */}
            <img className="w-[200px] sm:w-[250px]" src="/logo_img.png" />
          </a>
        </div>
        <div className="hidden xl:flex gap-1 md:items-center text-base">
          <div
            className="px-5 flex items-center py-7 relative"
            onMouseEnter={handleMouseEnterServices}
            onMouseLeave={handleMouseLeaveServices}
          >
            <a
              className="relative px-5 py-3 font-bold text-gray-900
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0 after:h-[5px] after:bg-orange-500 
             hover:after:w-full hover:text-orange-500 text-xl"
            >
              {t("services")}
            </a>

            <svg
              className="fill-site-neutrals-800 w-4 h-4 "
              viewBox="0 0 24 24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14.65C11.8833 14.65 11.771 14.6333 11.663 14.6C11.5543 14.5667 11.4583 14.5 11.375 14.4L6.84999 9.89999C6.71666 9.74999 6.64999 9.57499 6.64999 9.37499C6.64999 9.17499 6.72499 8.99999 6.87499 8.84999C7.02499 8.71666 7.19999 8.64999 7.39999 8.64999C7.59999 8.64999 7.77499 8.71666 7.92499 8.84999L12 12.925L16.1 8.84999C16.2333 8.69999 16.4 8.62899 16.6 8.63699C16.8 8.64566 16.975 8.71666 17.125 8.84999C17.275 8.99999 17.35 9.17899 17.35 9.38699C17.35 9.59566 17.275 9.76666 17.125 9.89999L12.625 14.4C12.5417 14.5 12.446 14.5667 12.338 14.6C12.2293 14.6333 12.1167 14.65 12 14.65Z"></path>
            </svg>

            {isDropdownOpen && (
              <div
                className={`fixed left-0 top-[5rem] w-screen bg-white shadow-lg transition-all duration-300 z-50 ${
                  isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="grid grid-cols-4">
                  {/* First Column - Gray Background */}
                  <div className="bg-gray-100 px-8 py-10">
                    <h2 className="text-3xl font-semibold text-gray-900/95 mb-4">
                      {t("solutions")}.
                    </h2>
                    <p className="text-1xl text-gray-900 mb-4">
                      {t("solutionstxt")}
                    </p>
                    <div className="space-y-4 mb-[50px]">
                      <div className="flex items-start gap-2">
                        <div>
                          <a
                            href="/software-development-services"
                            className="text-md font-semibold block pt-3"
                          >
                            {t("staffAugmentation")}
                          </a>
                          <a
                            href="/software-development-services"
                            className="text-md font-semibold block pt-3"
                          >
                            {t("dedicatedTeams")}
                          </a>
                          <a
                            href="/software-development-services"
                            className="text-md font-semibold block pt-3"
                          >
                            {t("softwareOutsourcing")}
                          </a>
                        </div>
                      </div>
                    </div>
                    <hr class="h-[2px] bg-gray-300 border-0 mt-[20px]" />

                    <div>
                      <h2 className="pt-3 text-2xl"> {t("rollsRoys")}</h2>
                      <p className="pt-2">{t("rollsroysParagraph")}</p>
                    </div>
                  </div>

                  {/* Second Column */}
                  <div className="p-8">
                    <h2 className="text-xl font-semibold text-gray-700/95">
                      {t("topSolutions")}
                    </h2>
                    <ul className="flex flex-col gap-2 mb-3 pt-3  text-gray-600">
                      {topSolKeys1.map((key, i) => (
                        <li key={i}>
                          <a
                            href={linkMap[key]}
                            onClick={(e) => {
                              e.preventDefault();
                              window.location.href = linkMap[key];
                            }}
                            className="hover:underline cursor-pointer pt-3"
                            style={{ fontSize: "18px" }}
                          >
                            {t(key)}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/technologies"
                      className="hover:underline text-md flex items-center gap-2 pt-4 text-xl"
                      dir="auto"
                    >
                      {t("allSolutions")}
                      <span className="rtl:inline ltr:hidden">←</span>
                      <span className="ltr:inline rtl:hidden">→</span>
                    </a>
                  </div>

                  {/* Third Column */}
                  <div className="p-8">
                    <h2 className="text-xl font-semibold text-gray-900/95 mb-6"></h2>
                    <ul className="flex flex-col gap-2 mb-3 pt-3 text-gray-600">
                      {topSolKeys2.map((key, i) => (
                        <li key={i}>
                          <a
                            href="/solutions"
                            className="hover:underline cursor-pointer"
                            style={{ fontSize: "18px" }}
                          >
                            {t(`${key}`)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fourth Column (optional or image/banner) */}
                  <div className="p-8">
                    <h2 className="text-xl font-semibold text-gray-700/95">
                      {t("enterpriseFocused")}
                    </h2>
                    <ul className="flex flex-col gap-2 mb-3 pt-3 text-gray-600">
                      {topSolKeys3.map((key, i) => (
                        <li key={i}>
                          <a
                            href="/solutions"
                            className="hover:underline cursor-pointer"
                            style={{ fontSize: "18px" }}
                          >
                            {t(`${key}`)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* TECHNOLOGIES dropdown */}
          <div
            className="px-5 flex items-center py-7 relative"
            onMouseEnter={handleMouseEnterTechnologies}
            onMouseLeave={handleMouseLeaveTechnologies}
          >
            <a
              className="relative px-5 py-3 font-bold text-gray-900
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0 after:h-[5px] after:bg-orange-500 
             hover:after:w-full hover:text-orange-500 text-xl"
            >
              {t("technologies")}
            </a>

            <svg
              className="fill-site-neutrals-800 w-4 h-4"
              viewBox="0 0 24 24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14.65C11.8833 14.65 11.771 14.6333 11.663 14.6C11.5543 14.5667 11.4583 14.5 11.375 14.4L6.84999 9.89999C6.71666 9.74999 6.64999 9.57499 6.64999 9.37499C6.64999 9.17499 6.72499 8.99999 6.87499 8.84999C7.02499 8.71666 7.19999 8.64999 7.39999 8.64999C7.59999 8.64999 7.77499 8.71666 7.92499 8.84999L12 12.925L16.1 8.84999C16.2333 8.69999 16.4 8.62899 16.6 8.63699C16.8 8.64566 16.975 8.71666 17.125 8.84999C17.275 8.99999 17.35 9.17899 17.35 9.38699C17.35 9.59566 17.275 9.76666 17.125 9.89999L12.625 14.4C12.5417 14.5 12.446 14.5667 12.338 14.6C12.2293 14.6333 12.1167 14.65 12 14.65Z"></path>
            </svg>

            {isTechDropdownOpen && (
              <div
                className={`fixed left-0 top-[5rem] w-screen bg-white shadow-lg transition-all duration-600 z-50 ${
                  isTechDropdownOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <div className="grid grid-cols-4">
                  {/*Left Column */}
                  <div className="bg-gray-100 px-8 py-10">
                    <h2 className="text-3xl font-semibold text-gray-900/95 mb-4">
                      {t("technologies")}
                    </h2>
                    <p className="text-1xl text-gray-900 mb-4">
                      {t("getExperts")}
                    </p>

                    <div className="space-y-4 mb-[50px]">
                      <div className="flex items-start gap-2">
                        <div>
                          <a className="text-md font-semibold block pt-3">
                            {t("hireDevelopers")}
                          </a>
                          <a className="text-md font-semibold block pt-3">
                            {t("topTalent")}
                          </a>
                        </div>
                      </div>
                    </div>

                    <hr className="h-[2px] bg-gray-300 border-0 mt-[20px]" />
                    <div>
                      <h2 className="pt-3 text-2xl">{t("pinterest")}</h2>
                      <p className="pt-2">{t("pinterestCase")}</p>
                    </div>
                  </div>

                  {/* Second Column */}
                  <div className="p-8">
  <ul className="flex flex-col gap-2 mb-3 pt-3 text-gray-600">
    {techKeys1.map((tech, i) => (
      <li key={i}>
        <a
          href={linkMap[tech]}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = linkMap[tech];
          }}
          className="hover:underline cursor-pointer"
          style={{ fontSize: "18px", padding: "25px" }}
        >
          {t(tech)}
        </a>
      </li>
    ))}
  </ul>

  <a
    href="/technologies"
    className="hover:underline font-semibold flex items-center gap-2 pt-4 text-xl"
    style={{ padding: "25px" }}
    dir="auto"
  >
    {t("allSolutions")}
    <span className="rtl:inline ltr:hidden">←</span>
    <span className="ltr:inline rtl:hidden">→</span>
  </a>
</div>


                  {/* Third Column */}
                  <div className="p-8">
                    <ul className="flex flex-col gap-2 mb-3 pt-3 text-gray-600">
    {techKeys2.map((tech, i) => (
      <li key={i}>
        <a
          href={linkMap[tech]}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = linkMap[tech];
          }}
          className="hover:underline cursor-pointer"
          style={{ fontSize: "18px", padding: "25px" }}
        >
          {t(tech)}
        </a>
      </li>
    ))}
  </ul>
                  </div>

                  {/* Fourth Column */}
                  <div className="p-8">
                    <ul className="flex flex-col gap-2 mb-3 pt-3 text-gray-600">
                      {techKeys3.map((tech, i) => (
                        <li key={i}>
                          <a
                            href="#"
                            className="hover:underline cursor-pointer"
                            style={{ fontSize: "18px", padding: "25px" }}
                          >
                            {t(tech)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            href="/our-work"
            className="px-5 text-xl font-bold hover:text-red-500 py-7 "
          >
            {t("ourWork")}
          </a>
          <a
            href="/about"
            className="px-5 text-xl font-bold hover:text-red-500 py-7 "
          >
            {t("aboutus")}
          </a>
          <a
            href="/blog"
            className="px-5 text-xl font-bold hover:text-red-500 py-7"
          >
            {t("blog")}
          </a>

          <a
            href="/basic-detail"
            className="rounded-md py-[0.6rem] px-[1rem] text-xl flex items-center font-semibold bg-gray-900 text-white hover:bg-gray-800"
          >
            {t("scheduleacall")}
          </a>
        </div>

        <div className="xl:hidden flex items-center">
          <button onClick={toggleMenu} className=" focus:outline-none">
            {isOpen ? (
              <svg
                className="fill-black w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 13.05L6.92499 18.125C6.79166 18.2583 6.62099 18.329 6.41299 18.337C6.20433 18.3457 6.02499 18.275 5.87499 18.125C5.72499 17.975 5.64999 17.8 5.64999 17.6C5.64999 17.4 5.72499 17.225 5.87499 17.075L10.95 12L5.87499 6.92499C5.74166 6.79166 5.67099 6.62066 5.66299 6.41199C5.65433 6.20399 5.72499 6.02499 5.87499 5.87499C6.02499 5.72499 6.19999 5.64999 6.39999 5.64999C6.59999 5.64999 6.77499 5.72499 6.92499 5.87499L12 10.95L17.075 5.87499C17.2083 5.74166 17.3793 5.67066 17.588 5.66199C17.796 5.65399 17.975 5.72499 18.125 5.87499C18.275 6.02499 18.35 6.19999 18.35 6.39999C18.35 6.59999 18.275 6.77499 18.125 6.92499L13.05 12L18.125 17.075C18.2583 17.2083 18.329 17.379 18.337 17.587C18.3457 17.7957 18.275 17.975 18.125 18.125C17.975 18.275 17.8 18.35 17.6 18.35C17.4 18.35 17.225 18.275 17.075 18.125L12 13.05Z"></path>
              </svg>
            ) : (
              <svg
                className="stroke-black w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H24M0 8H24M0 15H24" strokeWidth="1.5"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <>
          <hr />
          <div className="xl:hidden bg-white mt-6 h-[100vh] px-5 pb-7 ">
            <ul className="text-lg flex flex-col gap-4">
              <li className="bg-gray-100 p-2">
                <a className="font-medium">{t("services")}</a>
              </li>
              <li className="bg-gray-100 p-2">
                <a className="font-medium" href="#">
                  About Us
                </a>
              </li>
              <li className="bg-gray-100 p-2">
                <a className="font-medium" href="/clients">
                  Our Clients
                </a>
              </li>
              <li className="bg-gray-100 p-2">
                <a className="font-medium" href="#">
                  Blog
                </a>
              </li>
              <li className="bg-gray-100 p-2">
                <a className="font-medium" href="/basic-detail">
                  Schedule a Call
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
