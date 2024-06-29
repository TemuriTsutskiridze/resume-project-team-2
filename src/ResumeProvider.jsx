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
    experience: [],

    education: [],
  },
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
    userName: false,
    userSurname: false,
    aboutInfo: false,
    email: false,
    phone: false,
  });

  return (
    <ResumeContext.Provider
      value={{ values, setValues, inputErrors, setInputErrors }}
    >
      {children}
      {/*//todo შიგნით ვატან კომპონენტებს, და ეს დასაწერი მაქვს ობიექტის შიგნით ინპუთები როგორ მივცე აქ?;*/}
      <Input inputName="first_name" className="bg-black" />
      <Input inputName="last_name" />
      <Input inputName="image" />
      <Input inputName="about_me" />
      <Input inputName="email" />
      <Input inputName="phone_number" />

      <Input inputName="experience" />
      {/*// todo ობიექტის შიდა ინპუთები როგორ ჩავწერო? */}

      <Input inputName="education" />
      {/*// todo ობიექტის შიდა ინპუთები როგორ ჩავწერო? */}
      {values.general.first_name}
      {values.general.last_name}
      {values.general.image}
      {values.general.about_me}
      {values.general.email}
      {values.general.phone_number}
      {values.experience}
      {values.education}
      {values.experience.map((experience) => {
        <div>{experience.title}</div>;
      })}
    </ResumeContext.Provider>
  );
};
