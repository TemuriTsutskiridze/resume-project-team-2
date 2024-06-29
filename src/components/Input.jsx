import React from 'react';
import {useResume} from "../ResumeContext.jsx";
import PersonalInfo from "../pages/PersonalInfo.jsx";
import Experience   from "../pages/Experience.jsx";
import Education  from "../pages/Education.jsx";



export  function  Input ({inputName,page}) {
  const { values, setValues } = useResume();
    console.log(inputName)

    return (
        <div>
            <input
                 type="text"
                onChange={(event) =>{
                    // setValues({...values, [inputName]: event.target.value})}  ეს არ წამიშალოთ რა!!!
                    if (page === "personal_info") {
                        setValues({...values, general: {...values.general,[inputName]: event.target.value }})
                    }else if(page === "experience") {
                        setValues({...values, experience: values.experience.map(experience => {
                                if (experience.id === 2) { //todo აქ 2-იანის ნაცვლად უნდა მოვიდეს ობიექტის აიდი
                                    return {...experience, [inputName]: event.target.value}
                                }
                                return experience
                            })})
                    }else if(page === "education") {
                        setValues({...values, education: values.education.map(education => {
                            if (education.id === 1) {
                                //1-ინის ნაცვლად უნდა ჩაიწეროდ მოსული ობიექტის აიდი
                                return {...education, [inputName]: event.target.value}
                            }
                            return education;
                            })})
                    }
                }
                }

             />

        </div>
    );
}

export default Input;