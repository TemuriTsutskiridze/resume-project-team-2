import React from 'react';
import {ResumeContext} from "../ResumeContext.jsx";
import { useContext} from "react";

export  function  Input ({inputName}) {
  const { values, setValues } = useContext(ResumeContext);
    console.log(inputName)

    return (
        <div>
            <input
                type="text"
                onChange={(event) =>
                setValues({...values, [inputName]: event.target.value})}
            />
        </div>
    );
}

export default Input;