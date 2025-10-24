"use client";
import { useState } from "react";
import axios from "axios";
import { useTranslations } from "next-intl";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const t = useTranslations("basicdetail-page");

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (name == "" && email == "") {
      setLoading(false);
      alert("Please enter both name & email id");
      return false;
    }

    await axios
      .post("/api/send", { name, email })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data && data.id) {
          alert(
            `Thank you for your interest ${name}! We will get back to you soon!`
          );
          setName("");
          setEmail("");
        } else {
          alert("Apologies! Please try again.");
        }
      })
      .catch((err) => {
        setLoading(false);
        alert("Ooops! unfortunately some error has occurred.");
      });
    return true;
  };
  return (
    <main className="flex flex-col lg:flex-row">
      <div
        className={`flex w-full flex-col items-center px-5 py-10 sm:px-10 sm:py-16 lg:px-24 lg:py-24 min-h-screen -mt-4`}
      >
        <div className="relative flex flex-col  max-w-xl gap-4 ">
          <div className="flex flex-col gap-10">
            <a href="/">
              <img className="w-[200px] sm:w-[250px]" src="/logo_img.png" />
            </a>
            <p className="text-lg text-gray-600">{t("heading")}</p>
          </div>
          <form
            className="mt-6 flex flex-col  max-w-xl gap-4 z-10"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="font-normal text-gray-700">
                {t("your_name_label")}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                className="rounded-sm w-full mt-1  bg-white/5 px-3 py-2.5 outline-none text-black border border-gray-400/80 text-sm"
                placeholder={t("name_placeholder")}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email-address"
                className="font-normal text-gray-700"
              >
                {t("your_email_label")}
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                className="rounded-sm w-full bg-white/5 mt-1 px-3.5 py-2.5 outline-none text-black border border-gray-400/80  text-sm "
                placeholder={t("email_placeholder")}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="">
              <h3 className="font-normal text-gray-700 mb-3">
                {t("select_service_label")}
              </h3>
              <div className="flex md:flex-row flex-col justify-between">
                <span className="flex items-center">
                  <input
                    type="radio"
                    id="checkbox1"
                    name="service"
                    className="form-checkbox h-4 w-4 text-indigo-600 mr-2"
                  />
                  <label
                    htmlFor="checkbox1"
                    className="font-normal text-gray-700 text-md"
                  >
                    {t("service_software_development")}
                  </label>
                </span>

                <span className="flex items-center">
                  <input
                    type="radio"
                    id="checkbox1"
                    name="service"
                    className="form-checkbox h-4 w-4 text-indigo-600 mr-2"
                  />
                  <label
                    htmlFor="checkbox1"
                    className="font-normal text-gray-700 text-md"
                  >
                    {t("service_cloud_solutions")}
                  </label>
                </span>
                <span className="flex items-center">
                  <input
                    type="radio"
                    id="checkbox1"
                    name="service"
                    className="form-checkbox h-4 w-4 text-indigo-600 mr-2"
                  />
                  <label
                    htmlFor="checkbox1"
                    className="font-normal text-gray-700 text-md"
                  >
                    {t("service_automation_services")}
                  </label>
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="datetime" className="font-normal text-gray-700">
                {t("book_slot_label")}
              </label>
              <input
                id="datetime"
                type="datetime-local"
                placeholder={t("date_placeholder")}
                className="rounded-sm w-full mt-1  bg-white/5 px-3 py-2.5 outline-none text-black border border-gray-400/80 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email-address"
                className="font-normal text-gray-700"
              >
                {t("help_label")}
              </label>
              <textarea
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                className="rounded-sm w-full mt-1  h-24 bg-white/5 px-3.5 py-2.5 outline-none text-black border border-gray-400/80 text-sm "
                placeholder={t("help_placeholder")}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-md py-[0.6rem] px-[1rem] text-sm flex items-center font-semibold bg-gray-900 text-white hover:bg-gray-800"
              >
                {loading ? (
                  <div
                    style={{
                      borderTopColor: "transparent",
                    }}
                    className="w-4 h-4 border-2 border-white border-solid rounded-full animate-spin"
                  ></div>
                ) : (
                  <>
                    {t("button_text")} &nbsp;&nbsp;&nbsp;
                    <span className="rtl:inline ltr:hidden">←</span>
                    <span className="ltr:inline rtl:hidden">→</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* // Modal for */}

      {/* // another seciton  */}

      <div className="bg-[#3D4751] lg:w-[560px] lg:h-auto h-[700px]  px-4 pt-12 lg:pb-36 flex flex-col justify-around text-center">
        <h3 className="text-white text-2xl">Amazing Clients who trust us</h3>
        <div className="  mx-auto">
          <img
            className="w-36 "
            src="https://www.bairesdev.com/start/brands/google.svg"
            alt="google"
          />
        </div>
        <div className="  mx-auto">
          <img
            className="w-36 "
            src="https://www.bairesdev.com/start/brands/rolls-royce-white.svg"
            alt="google"
          />
        </div>
        <div className="  mx-auto">
          <img
            className="w-36 text-xl"
            src="https://www.bairesdev.com/start/brands/netgear.svg"
            alt="google"
          />
        </div>
        <div className="  mx-auto">
          <img
            className="w-12 "
            src="https://www.bairesdev.com/start/brands/ernst-young.svg"
            alt="google"
          />
        </div>
        <div className="  mx-auto">
          <img
            className="w-36 "
            src="https://www.bairesdev.com/start/brands/siriusxm.svg"
            alt="google"
          />
        </div>
        <div className=" mx-auto">
          <img
            className="w-12 "
            src="https://www.bairesdev.com/start/brands/hp.svg"
            alt="google"
          />
        </div>
      </div>
    </main>
  );
};

export default page;