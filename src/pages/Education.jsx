import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useResume} from "../ResumeContext.jsx";

const Education = () => {
    const { values, setValues } = useResume();


    return (
        <>
            <Link to="/" as={NavLink}>back to HomePage</Link>
            {/*// todo აქ შიგნით რომ წერია back to HomePage, მაგის მაგივრად  ისარი უნდა ჩაჯდეს*/}
            <h1>განათლება</h1>
            <hr/>

            {/*<div>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        value={values[inputName.education]}*/}

            {/*    />*/}
            {/*</div>*/}





            <div>
                <Link to="/experience" as={NavLink}>უკან</Link>
            </div>

            <Link to="/resume" as={NavLink}>დასრულება</Link>
        </>
    );
};

export default Education;