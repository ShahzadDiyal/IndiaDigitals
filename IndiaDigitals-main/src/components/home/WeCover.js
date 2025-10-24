"use client";
import { useTranslations } from "next-intl";

const WeCover = ({ bgColor }) => {
  const t = useTranslations("home-page");

  return (
    <div className={bgColor ? bgColor : ""}>
      <div className="text-center pt-28 pb-16 flex flex-col gap-3 sm:px-0 px-5 ">
        <h1 className="text-[2.6rem] text-gray-800/95 font-medium ">
          {t("techStackHeading")}
          <span className="text-orange-500/70">.</span>
        </h1>
        <p className="text-gray-600/90 text-xl leading-[30px]">
          {t("techStack-p1")}
          <br />
          {t("techStack-p2")}
        </p>
      </div>
      <div className="sm:mb-3 overflow-hidden">
        <ul className="flex gap-14 py-1  w-full animate-marquee text-zinc-600/30 text-4xl sm:text-5xl font-extrabold">
          <li>Java</li>
          <li>PHP</li>
          <li>Javascript</li>
          <li>Go</li>
          <li>C</li>
          <li>C++</li>
          <li>C#</li>
          <li>Python</li>
          <li>Dart</li>
          <li>Ruby</li>
          <li>TypeScript</li>
          <li>Kotlin</li>
          <li>Swift</li>
          <li>Rust</li>
          <li>Scala</li>
          <li>Perl</li>
          <li>Lua</li>
          <li>R</li>
          <li>Julia</li>
          <li>Haskell</li>
          <li>Groovy</li>
          <li>Cobol</li>
          <li>Fortran</li>
          <li>Prolog</li>
          <li>Lisp</li>
          <li>Elixir</li>
          <li>Clojure</li>
          <li>F#</li>
        </ul>
      </div>
      <div className="mb-3 overflow-hidden">
        <ul className="flex gap-14 py-1 w-full animate-marqueeRight text-zinc-600/30 text-4xl sm:text-5xl  font-extrabold">
          <li>Spring</li>
          <li>Laravel</li>
          <li>Node.js</li>
          <li>Flutter</li>
          <li>Rails</li>
          <li>Angular</li>
          <li>React</li>
          <li>Vue.js</li>
          <li>Express.js</li>
          <li>Flask</li>
          <li>Django</li>
          <li>ASP.NET</li>
          <li>Svelte</li>
          <li>NestJS</li>
          <li>Quarkus</li>
          <li>Vert.x</li>
          <li>Play</li>
          <li>Spark</li>
          <li>Aurelia</li>
          <li>Ember.js</li>
          <li>Next.js</li>
          <li>Nuxt.js</li>
          <li>Symfony</li>
          <li>CodeIgniter</li>
          <li>CakePHP</li>
          <li>Zend</li>
        </ul>
      </div>
      <div className="mt-16 pb-20 text-center w-fit m-auto">
        <p className=" text-md md:my-0 font-medium gap-2 border-b-2  border-slate-800 pb-3 pr-6">
          <span className="h-full  inline-flex cursor-pointer custom-hover-translate text-black">
            <a href="/technologies">
              {t("allTechnologies")}
              <span className="rtl:inline ltr:hidden">←</span>
              <span className="ltr:inline rtl:hidden">→</span>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default WeCover;