import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useResume} from "../lib/useResume.js";

const Education = () => {
    const {values, setValues, inputErrors, setInputErrors} = useResume();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: values.education.school,
        });

        let error = false;
        if (name === "school" ) {
            error = value.length < 2;
        } else if (name === "degree" || "description") {
            error = value.mandatory;
        }
        setInputErrors({ ...inputErrors, [name]: error });
    } ;

        return (
            <>
            <div className="flex h-screen justify-center items-start">
                <div className="bg-[#F9F9F9] px-[126px] max-w-[1098px] w-full h-screen">
                    <div className="title-container flex items-center">
                        <Link to="/" as={NavLink}>
                            <span> &lt; </span>
                        </Link>{" "}
                        <div className="flex items-center justify-between w-full ml-4">
                            <h1 className="text-[#1A1A1A] text-[24px] font-bold">
                                გ ა ნ ა თ ლ ე ბ ა
                                <hr/>
                            </h1>
                            <span className="text-lg">3/3</span>
                        </div>
                    </div>

                    <div className="nameSurname-container mt-[69px] mb-[46px] flex gap-[56px]">
                        <div className="schoolContainer flex flex-col  w-[850px]">
                            <label
                                htmlFor="school"
                                className={`text-sm font-medium ${
                                    inputErrors.school ? "text-[#EF5050]" : "text-[#1A1A1A]"
                                }`}
                            >სასწავლებელი
                            </label>

                            <input
                                type="text"
                                name="school"
                                className={`mt-[8px] mb-[8px] border ${
                                    inputErrors.userName ? "border-[#EF5050]" : "border-[#98E37E]"
                                } px-[16px] py-[14px]`}
                                //value={values.education.school}
                                onChange={handleChange}
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
                            >ხარისხი
                            </label>
                            <input
                                type="text"
                                //value={values.education.degree}
                                className={`mt-[8px] mb-[8px] border ${
                                    inputErrors.degree ? "border-[#EF5050]" : "border-[#98E37E]"
                                } px-[16px] py-[14px]`}
                            />
                        </div>
                        <div className="graduation_dateContainer flex flex-col w-[419px]">
                            <label
                                htmlFor="graduation_date"
                                className={`text-sm font-medium ${
                                    inputErrors.graduation_date ? "text-[#EF5050]" : "text-[#1A1A1A]"
                                }`}
                            >დამთავრების რიცხვი
                            </label>
                            <input
                                type="date"
                                name="graduation_date"
                                //value={values.education.graduation_date}
                                onChange={handleChange}
                                className={`mt-[8px] mb-[8px] border ${
                                    inputErrors.graduation_date
                                        ? "border-[#EF5050]"
                                        : "border-[#98E37E]"
                                } px-[16px] py-[14px]`}
                            />
                        </div>


                    </div>


                    <div className="description-container mb-[46px]">
                        <label
                            htmlFor="description"
                            className="text-[#1A1A1A] text-sm font-medium">
                            აღწერა (სავალდებულო)
                        </label>
                        <textarea

                            name="description"
                            //value={values.education.description}
                            onChange={handleChange}
                            className="mt-[8px] border border-[#BCBCBC] w-full px-[16px] py-[14px]"
                        />
                    </div>

                    <hr/>

                    <div>
                        <Link to="/experience"
                              as={NavLink}
                              className="bg-[#1A1A1A] text-white py-[12px] px-[24px] rounded-lg">
                            უკან
                        </Link>
                        <Link
                            to="/resume"
                            as={NavLink}
                            className="bg-[#1A1A1A] text-white py-[12px] px-[24px] rounded-lg">
                            დასრულება
                        </Link>
                    </div>


                </div>


                {/*//todo აქედან იწყება საიტის მარჯვენა ნაწილი*/}
                <div className="sideBar-container w-[822px] flex items-center justify-center bg-gray-200">
                    <img src="" alt=""/>

                </div>


            </div>
         </>





        )
   }


export default Education;