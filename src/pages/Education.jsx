import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useResume } from "../lib/useResume.js";
import Input from "../components/Input";
import { FaAnglesLeft } from "react-icons/fa6";
import { FormSelect } from "react-bootstrap";
import avatar from "../assets/avatar.jpg";
import "../index.css";

const Education = () => {
  const { inputErrors, values } = useResume();



  return (
    <>
      <div className="flex h-screen justify-center items-start">
        <div className="bg-[#F9F9F9] px-[126px] max-w-[1098px] w-full h-screen">
          <div className="title-container flex items-center">
            <Link to="/" as={NavLink}>
              <span>
                {" "}
                <FaAnglesLeft />{" "}
              </span>
            </Link>{" "}
            <div className="flex items-center justify-between w-full ml-4">
              <h1 className="text-[#1A1A1A] text-[24px] font-bold">
                გ ა ნ ა თ ლ ე ბ ა
                <hr />
              </h1>
              <span className="text-lg font-bold">3/3</span>
            </div>
          </div>

          <div className="nameSurname-container mt-[69px] mb-[46px] flex gap-[56px]">
            <div className="schoolContainer flex flex-col  w-[850px]">
              <label
                htmlFor="school"
                className={`text-sm font-medium ${
                  inputErrors.school ? "text-[#EF5050]" : "text-[#1A1A1A]"
                }`}
              >
                სასწავლებელი
              </label>

              <Input
                type="text"
                inputName="school"
                name="school"
                error={inputErrors.school}
              />
              <p className="font-light text-sm">
                მინიმუმ 2 ასო, ქართული ასოები
              </p>
            </div>
          </div>

          <div className="degree-container mt-[69px] mb-[46px] flex gap-[56px]">
            <div className="degreeContainer flex flex-col w-[419px]">
              <label
                htmlFor="degree"
                className={`text-sm font-medium ${
                  inputErrors.degree ? "text-[#EF5050]" : "text-[#1A1A1A]"
                }`}
              >
                ხარისხი
              </label>

              <FormSelect
                aria-label="Default select example"
                className={`mt-[8px] mb-[8px] border ${
                  inputErrors.degree ? "border-[#EF5050]" : "border-[#98E37E]"
                } px-[16px] py-[14px]`}
              >
                <option>აირჩიეთ ხარისხი</option>
                <option value="1">საშუალო სკოლის დიპლომი</option>
                <option value="2">ზოგადსაგანმანათლებლო დიპლომი</option>
                <option value="3">ბაკალავრი</option>
                <option value="3">მაგისტრი</option>
                <option value="3">დოქტორი</option>
                <option value="3">ასოცირებული ხარისხი</option>
                <option value="3">სტუდენტი</option>
                <option value="3">კოლეჯი (ხარისხის გარეშე)</option>
                <option value="3">სხვა</option>
              </FormSelect>
            </div>

            <div className="graduation_dateContainer flex flex-col w-[419px]">
              <label
                htmlFor="graduation_date"
                className={`text-sm font-medium ${
                  inputErrors.graduation_date
                    ? "text-[#EF5050]"
                    : "text-[#1A1A1A]"
                }`}
              >
                დამთავრების რიცხვი
              </label>
              <input
                type="date"
                className={`mt-[8px] mb-[8px] border ${
                    inputErrors.graduation_date ? "border-[#EF5050]" : "border-[#98E37E]"
                } px-[16px] py-[14px]`}
                //inputName="graduation_date"
                name="graduation_date"
                //error={inputErrors.graduation_date}
              />
            </div>
          </div>

          <div className="description-container mb-[46px]">
            <label
              htmlFor="description"
              className="text-[#1A1A1A] text-sm font-medium"
            >
              აღწერა (სავალდებულო)
            </label>

            <Input
                inputName="description"
                name="description"
                error={inputErrors.description}
            />
          </div>

          <hr />

          <div className="buttons gap-[56px]">
            <Link
              to="/experience"
              as={NavLink}

              className="bg-[#6B40E3] text-white py-[14px] px-[35px] rounded-lg absolute left-[160px] bottom-[65px]"
            >
              უკან
            </Link>
            <Link
              to="/resume"
              as={NavLink}
              className="bg-[#6B40E3] text-white py-[14px] px-[35px] rounded-lg absolute right-[160px] bottom-[65px]"
            >
              დასრულება
            </Link>
          </div>
        </div>

        {/*//todo აქედან იწყება საიტის მარჯვენა ნაწილი*/}

        <div className="sideBar-container w-[822px] flex items-center justify-center">
          <div className="my-[47px] pr-[75px] pl-[80px] flex">

            <div>
              <div className="name-surname-email-mobile-container">
                <div>
                  <h1 className="text-[#F93B1D] font-bold text-[34px] mb-[17px] flex gap-[20px] font-face-helvetica leading-10	">
                    <p>{values.general.first_name}</p>
                    <p>{values.general.last_name}</p>
                  </h1>
                  <p className="text-[#1A1A1A] font-medium text-[18px] font-face-helvetica">
                    {values.general.email ? (
                        <>
                          <span>@</span> {values.general.email}
                        </>
                    ) : (
                        ""
                    )}
                  </p>
                  <p className="text-[#1A1A1A] font-medium text-[18px]">
                    {values.general.phone_number ? (
                        <>
                          <span>&#128222;</span> {values.general.phone_number}
                        </>
                    ) : (
                        ""
                    )}
                  </p>
                </div>
              </div>

              <div className="aboutMe-container mt-[34px]">
                {values.general.about_me ? (
                    <>
                      <h4 className="text-[#F93B1D] font-bold text-[18px]">
                        ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ
                      </h4>
                      <p className="text-[#000000] font-normal text-[16px]">
                        {values.general.about_me}
                      </p>
                    </>
                ) : (
                    ""
                )}
              </div>
            </div>
            <img
                className="w-[246px] h-[246px] rounded-full"
                src={avatar}
                alt="avatar"
            />
          </div>


          {/*//todo აქ უნდა ჩავსვა სტილის, რასაც დაწერს ნიკა*/}


          {/*//todo ამ ადგილიდან იქყება ჩემი სტილები*/}
          <div>
            <div className="school-degree-graduation_date-description-container">


              <div className="education-container mt-[534px]">
                {values.education ? (
                    <>
                      <h4 className="text-[#F93B1D] font-bold text-[18px]">
                        გ ა ნ ა თ ლ ე ბ ა
                      </h4>
                      <p className="text-[#000000] font-normal text-[16px]">
                        {values.education.school}
                      </p>

                      {/*//todo აქ უნდა ჩაჯდეს degree და რიცხვი კალებდარიდან*/}




                      <p className="text-[#000000] font-normal text-[16px]" >
                        {values.education.description}
                      </p>




                    </>
                ) : (
                    ""
                )}
              </div>


            </div>
          </div>







        </div>
      </div>

    </>
  );
};

export default Education;
