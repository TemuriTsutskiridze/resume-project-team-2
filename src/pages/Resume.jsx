import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {FaAnglesLeft} from "react-icons/fa6";

const Resume = () => {
    return (
        <div className="flex h-screen justify-center items-start">
            <div className="bg-[#F9F9F9] px-[126px] max-w-[1098px] w-full h-screen">
                <div className="title-container flex items-center">
                    <Link to="/" as={NavLink}>
                        <span> <FaAnglesLeft /> </span>
                    </Link>{" "}
                </div>

            <h1>რეზიუმე</h1>
            </div>
        </div>
    );
};

export default Resume;