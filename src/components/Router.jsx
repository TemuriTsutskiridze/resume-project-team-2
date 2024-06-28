import React from 'react';
import {Route, Routes} from "react-router";
import HomePage from "../pages/HomePage.jsx";
import {Link, NavLink} from "react-router-dom";
import PersonalInfo from "../pages/PersonalInfo.jsx";
import Experience from "../pages/Experience.jsx";
import Education from "../pages/Education.jsx";
import Resume from "../pages/Resume.jsx";


const Router = () => {
    return (
        <>
            <div>
                <Link to="/" as={NavLink}>-HomePage-</Link>
                <Link to="/personal-info" as={NavLink}>-Personal Info-</Link>
                <Link to="/experience" as={NavLink}>-Experience-</Link>
                <Link to="/education" as={NavLink}>-Education-</Link>
                <Link to="/resume" as={NavLink}>-Resume-</Link>

            </div>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/personal-info" element={<PersonalInfo/>} />
                <Route path="/experience" element={<Experience/>} />
                <Route path="/education" element={<Education/>} />
                <Route path="/resume" element={<Resume/>} />

            </Routes>



        </>
    );
};

export default Router;