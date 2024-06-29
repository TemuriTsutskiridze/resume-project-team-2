import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useResume } from "../ResumeContext.jsx";

const PersonalInfo = () => {
  const { values, setValues } = useResume();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: values.general.first_name,
    });

    let error = false;
    if (name === "userName" || name === "userSurname") {
      error = value.length < 2;
    } else if (name === "email") {
      error = !value.endsWith("@redberry.ge");
    } else if (name === "phone") {
      const phoneRegex = /^\+995\d{9}$/;
      error = !phoneRegex.test(value);
    }
    setInputErrors({ ...inputErrors, [name]: error });
  };

  return (
    <div>
      <div className="flex h-screen justify-center items-start">
        <div className="bg-[#F9F9F9] px-[126px] max-w-[1098px] w-full h-screen">
          <div className="title-container flex items-center">
            <Link to="/" as={NavLink}>
              <span>&lt;</span>
            </Link>{" "}
            <div className="flex items-center justify-between w-full ml-4">
              <h1 className="text-[#1A1A1A] text-[24px] font-bold">
                ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ
              </h1>
              <span className="text-lg">1/3</span>
            </div>
          </div>
          <div className="nameSurname-container mt-[69px] mb-[46px] flex gap-[56px]">
            <div className="nameContainer flex flex-col w-[419px]">
              <label
                htmlFor="userName"
                className={`text-sm font-medium ${
                  inputErrors.userName ? "text-[#EF5050]" : "text-[#1A1A1A]"
                }`}
              >
                სახელი
              </label>
              <input
                type="text"
                name="userName"
                className={`mt-[8px] mb-[8px] border ${
                  inputErrors.userName ? "border-[#EF5050]" : "border-[#98E37E]"
                } px-[16px] py-[14px]`}
                value={values.general.first_name}
                onChange={handleChange}
              />
              <p className="font-light text-sm">
                მინიმუმ 2 ასო, ქართული ასოები
              </p>
            </div>
            <div className="surnameContainer flex flex-col w-[419px]">
              <label
                htmlFor="userSurname"
                className={`text-sm font-medium ${
                  inputErrors.userSurname ? "text-[#EF5050]" : "text-[#1A1A1A]"
                }`}
              >
                გვარი
              </label>
              <input
                type="text"
                name="userSurname"
                value={inputValues.userSurname}
                onChange={handleChange}
                className={`mt-[8px] mb-[8px] border ${
                  inputErrors.userSurname
                    ? "border-[#EF5050]"
                    : "border-[#98E37E]"
                } px-[16px] py-[14px]`}
              />
              <p className="font-light text-sm">
                მინიმუმ 2 ასო, ქართული ასოები
              </p>
            </div>
          </div>
          <div className="photoUpload-container mb-[46px]">
            <label
              htmlFor="photoUpload"
              className="text-[#1A1A1A] text-sm font-medium"
            >
              პირადი ფოტოს ატვირთვა
            </label>
            <input
              type="file"
              name="photoUpload"
              className="mt-[8px]"
              onChange={handleChange}
            />
          </div>
          <div className="aboutInfo-container mb-[46px]">
            <label
              htmlFor="aboutInfo"
              className="text-[#1A1A1A] text-sm font-medium"
            >
              ჩემ შესახებ (არასავალდებულო)
            </label>
            <textarea
              name="aboutInfo"
              value={inputValues.aboutInfo}
              onChange={handleChange}
              className="mt-[8px] border border-[#BCBCBC] w-full px-[16px] py-[14px]"
            />
          </div>
          <div className="email-container mb-[46px]">
            <label
              htmlFor="email"
              className={`text-sm font-medium ${
                inputErrors.email ? "text-[#EF5050]" : "text-[#1A1A1A]"
              }`}
            >
              ელ.ფოსტა
            </label>
            <input
              type="email"
              name="email"
              value={inputValues.email}
              onChange={handleChange}
              className={`mt-[8px] mb-[8px] border ${
                inputErrors.email ? "border-[#EF5050]" : "border-[#BCBCBC]"
              } w-full px-[16px] py-[14px]`}
            />
            <p className="font-light text-sm">
              უნდა მთავრდებოდეს @redberry.ge-ით
            </p>
          </div>
          <div className="phone-container mb-[46px]">
            <label
              htmlFor="phone"
              className={`text-sm font-medium ${
                inputErrors.phone ? "text-[#EF5050]" : "text-[#1A1A1A]"
              }`}
            >
              მობილურის ნომერი
            </label>
            <input
              type="tel"
              name="phone"
              value={inputValues.phone}
              onChange={handleChange}
              className={`mt-[8px] mb-[8px] border ${
                inputErrors.phone ? "border-[#EF5050]" : "border-[#BCBCBC]"
              } w-full px-[16px] py-[14px]`}
            />
            <p className="font-light text-sm">
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </p>
          </div>
        </div>
        <div className="sideBar-container w-[822px] flex items-center justify-center bg-gray-200">
          <img src="" alt="" />
        </div>
      </div>
      <Link
        to="/experience"
        as={NavLink}
        className="bg-[#1A1A1A] text-white py-[12px] px-[24px] rounded-lg"
      >
        შემდეგი
      </Link>
    </div>
  );
};

export default PersonalInfo;
