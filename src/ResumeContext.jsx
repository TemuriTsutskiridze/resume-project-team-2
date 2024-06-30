import { createContext, useContext, useState } from "react";
import Input from "./components/Input.jsx";

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
    // experience: [],

    education: {
      //id:1 ,
      school: "",
      degree: "",
      graduation_date: "",
      description: "",
    },
  },
});

export const ResumeProvider = () => {
  const [values, setValues] = useState({
    general: {
      first_name: "",
      last_name: "",
      image: "",
      about_me: "",
      email: "",
      phone_number: "",
    },
    // experience: [],

    education: {
      // id:1 ,
      school: "",
      degree: "",
      graduation_date: "",
      description: "",
    },
  });

  return (
    <ResumeContext.Provider value={{ values, setValues }}>
      {values.general.first_name}
      {values.general.last_name}
      {values.general.image}
      {values.general.about_me}
      {values.general.email}
      {values.general.phone_number}

      {values.experience}

      {values.education.id}
      {values.education.school}
      {values.education.degree}
      {values.education.graduation_date}
      {values.education.description}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error(
      "useResume აუცილებლად! გამოყენებული უნდა იყოს ResumeProvider-თან ერთად "
    );
  }
  return context;
};
