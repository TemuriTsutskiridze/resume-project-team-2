import React from "react";
import { useResume } from "../lib/useResume";
import { useLocation } from "react-router";

const Input = ({ inputName, name, error }) => {
  const { values, setValues, validateInput } = useResume();
  const location = useLocation();

  const handleChange = (event) => {
    const { value } = event.target;
    validateInput(inputName, value);

    if (location.pathname === "/personal-info") {
      setValues({
        ...values,
        general: {
          ...values.general,
          [inputName]: value,
        },
      });
    }
  };

  return (
    <div>
      <input
        name={name}
        className={`mt-[8px] border w-full px-[16px] py-[14px] ${
          error ? "border-[#EF5050]" : "border-[#BCBCBC]"
        }`}
        type="text"
        value={values.general[inputName] || ""}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
