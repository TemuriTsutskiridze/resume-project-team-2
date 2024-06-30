import { createContext, useContext, useState } from "react";

export const ResumeContext = createContext({
  setValues: () => {},
  values: {
    general: {
      first_name: "",
      last_name: "",
      image: "",
      about_me: "",
      email: "",
      phone_number: "",
    },
    experience: [],
    education: [],
  },
  inputErrors: {},
  setInputErrors: () => {},
  validateInput: () => {},
});

export const ResumeProvider = ({ children }) => {
  const [values, setValues] = useState({
    general: {
      first_name: "",
      last_name: "",
      image: "",
      about_me: "",
      email: "",
      phone_number: "",
    },
    experience: [],
    education: [],
  });

  const [inputErrors, setInputErrors] = useState({
    first_name: false,
    last_name: false,
    about_me: false,
    email: false,
    phone_number: false,
  });

  const validateInput = (name, value) => {
    let errors = { ...inputErrors };
    switch (name) {
      case "first_name":
        errors.first_name = value.length < 2;
        break;
      case "last_name":
        errors.last_name = value.length < 2;
        break;
      case "email":
        errors.email = !value.endsWith("@redberry.ge");
        break;
      case "phone_number":
        errors.phone_number = value.length < 9;
        break;
      default:
        break;
    }
    setInputErrors(errors);
  };

  return (
    <ResumeContext.Provider
      value={{ values, setValues, inputErrors, setInputErrors, validateInput }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
