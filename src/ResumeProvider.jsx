import { createContext, useState } from "react";
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

    education: {
      //id:1 ,
      school: "",
      degree: "",
      graduation_date: "",
      description: ""
    },
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

    education: {
      //id:1 ,
      school: "",
      degree: "",
      graduation_date: "",
      description: ""
    },
  });

  const [inputErrors, setInputErrors] = useState({
    userName: false,
    userSurname: false,
    aboutInfo: false,
    email: false,
    phone: false,
    school: false,
    degree: false,
    description:false,
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

      {/*<Input inputName="id" />*/}
      <Input inputName="school" />
      <Input inputName="degree" />
      <Input inputName="graduation_date" />
      <Input inputName="description" />

      {values.general.first_name}
      {values.general.last_name}
      {values.general.image}
      {values.general.about_me}
      {values.general.email}
      {values.general.phone_number}

      {values.experience}

      {/*{values.education.id}*/}
      {values.education.school}
      {values.education.degree}
      {values.education.graduation_date}
      {values.education.description}

      {/*{values.experience.map((experience) => {*/}
      {/*  <div>{experience.title}</div>;*/}
      {/*})}*/}
      {/*//ეს დამჭირდება მერე, როცა ობიექტების მასივად გადავაკეთებ*/}

    </ResumeContext.Provider>
  );
};
