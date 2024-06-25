import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Education = () => {
    return (
        <div>
            <Link to="/" as={NavLink}>back to HomePage</Link>
            {/*// todo აქ შიგნით რომ წერია back to HomePage, მაგის მაგივრად  ისარი უნდა ჩაჯდეს*/}
            <h1>განათლება</h1>
            <hr/>
            <div>
                <Link to="/experience" as={NavLink}>უკან</Link>
            </div>

            <Link to="/resume" as={NavLink}>დასრულება</Link>
        </div>
    );
};

export default Education;