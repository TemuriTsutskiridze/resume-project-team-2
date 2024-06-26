import React from 'react';
import {Link, NavLink} from "react-router-dom";

const PersonalInfo = () => {
    return (
        <div>
            <Link to="/" as={NavLink}>back to HomePage</Link>
            {/*// todo აქ შიგნით რომ წერია back to HomePage, მაგის მაგივრად  ისარი უნდა ჩაჯდეს*/}

            <h1> პირადი ინფორმაცია</h1>
            <hr/>
            <Link to="/experience" as={NavLink}>შემდეგი</Link>
        </div>
    );
};

export default PersonalInfo;