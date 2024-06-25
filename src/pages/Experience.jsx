import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Experience = () => {
    return (
        <div>
            <Link to="/" as={NavLink}>back to HomePage</Link>
            {/*// todo აქ შიგნით რომ წერია back to HomePage, მაგის მაგივრად  ისარი უნდა ჩაჯდეს*/}
            <h1>გამოცდილება</h1>
            <hr/>

            <div>
                <Link to="/personal-info" as={NavLink}>უკან</Link>
            </div>

            <Link to="/education" as={NavLink}>შემდეგი</Link>

        </div>
    );
};

export default Experience;