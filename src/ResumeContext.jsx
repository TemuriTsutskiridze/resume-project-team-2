import {createContext, useContext, useState} from "react";
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

        education: []
    },
});

export const ResumeProvider = () => {
    const [values, setValues] = useState(
         {
        general: {
                first_name: "",
                last_name: "",
                image: "",
                about_me: "",
                email: "",
                phone_number: "",
        },
        experience: [],

        education: []
    },
    );

    return (
        <ResumeContext.Provider value ={{values, setValues}}>

            {/*//todo შიგნით ვატან კომპონენტებს, და ეს დასაწერი მაქვს ობიექტის შიგნით ინპუთები როგორ მივცე აქ?;*/}
            <Input inputName="first_name" />
            <Input inputName="last_name" />
            <Input inputName="image" />
            <Input inputName="about_me" />
            <Input inputName="email" />
            <Input inputName="phone_number" />

            <Input inputName="experience" />
            {/*// todo ობიექტის შიდა ინპუთები როგორ ჩავწერო? */}


            <Input inputName="education" />
            {/*// todo ობიექტის შიდა ინპუთები როგორ ჩავწერო? */}

        </ResumeContext.Provider>
    )
}

export const useResume = () => {
    const context = useContext(ResumeContext);

    if(!context) {
        throw new Error("useResume აუცილებლად! გამოყენებული უნდა იყოს ResumeProvider-თან ერთად ")
    }
    return context;
}