import React from "react";
import { useResume } from "../lib/useResume.js";
import PersonalInfo from "../pages/PersonalInfo.jsx";
import {useLocation} from "react-router";

export function Input({ inputName, page }) {
  const { values, setValues } = useResume();
  console.log(inputName);
  console.log(values)

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          // setValues({...values, [inputName]: event.target.value})}
          if (page === "personal-info") {
            setValues({
              ...values,
              general: { ...values.general, [inputName]: event.target.value },
            });
          } else if (page === "experience") {
            setValues({
              ...values,
              experience: values.experience.map((experience) => {
                if (experience.id === 2) {
                  //todo აქ 2-იანის ნაცვლად უნდა მოვიდეს ობიექტის აიდი
                  return { ...experience, [inputName]: event.target.value };
                }
                return experience;
              }),
            });
          } else if (page === "education") {
            setValues({
              ...values,
              education: { ...values.education, [inputName]: event.target.value },

            // setValues({
            //   ...values,
            //   education: values.education.map((education) => {
            //     if (education.id === 1) {
            //       //1-ინის ნაცვლად უნდა ჩაიწეროდ მოსული ობიექტის აიდი
            //       return { ...education, [inputName]: event.target.value };
            //     }
            //     return education;
            //   }),
            });
          }
        }}
      />
    </div>
  );
}

export default Input;
