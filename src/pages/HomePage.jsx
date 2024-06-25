import React from 'react';
import {Link, NavLink} from "react-router-dom";
import PersonalInfo from "./PersonalInfo.jsx";
import {Route, Routes} from "react-router";

const HomePage = () => {
    return (
        <div>

            <hr/>

            <Link to="/personal-info" as={NavLink}>რეზიუმეს დამატება</Link>

            <Routes>
                <Route path="/personal-info" element={<PersonalInfo/>}/>
            </Routes>

        </div>
    );
};

export default HomePage;