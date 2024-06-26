import React from "react";
import logo from "../assets/logo.png";
import background from "../assets/background.jpg";

function Home() {
  return (
    <div
      className="bg-cover h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full flex justify-start" style={{ padding: "0 70px" }}>
        <div className="py-[25px] border-b border-black w-full">
          <img src={logo} alt="logo" className="w-[236px] h-[38px]" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <button className="py-[18px] px-[126px] text-white bg-[#1A1A1A] rounded-lg">
          ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ
        </button>
      </div>
    </div>
  );
}

export default Home;
