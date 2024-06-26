import React from "react";

function PersonalInfo() {
  return (
    <div className="flex h-screen justify-center items-start">
      <div className="bg-[#F9F9F9] px-[126px] max-w-[1098px] w-full h-screen">
        <div className="title-container flex items-center">
          <span className="text-lg">&lt;</span>
          <div className="flex items-center justify-between w-full ml-4">
            <h1 className="text-[#1A1A1A] text-[24px] font-bold">
              ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ
            </h1>
            <span className="text-lg">1/3</span>
          </div>
        </div>
        <div className="nameSurname-container mt-[69px] mb-[46px] flex gap-[56px]">
          <div className="nameContainer flex flex-col w-[419px]">
            <label
              htmlFor="userName"
              className="text-[#1A1A1A] text-sm font-medium "
            >
              სახელი
            </label>
            <input
              type="text"
              name="userName"
              className="mt-[8px] mb-[8px] border border-[#BCBCBC] px-[16px] py-[14px]"
            />
            <p className="font-light text-sm">მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
          <div className="surnameContainer flex flex-col w-[419px]">
            <label
              htmlFor="userSurname"
              className="text-[#1A1A1A] text-sm font-medium"
            >
              გვარი
            </label>
            <input
              type="text"
              name="userSurname"
              className="mt-[8px] mb-[8px] border border-[#BCBCBC] px-[16px] py-[14px]"
            />
            <p className="font-light text-sm">მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
        </div>
        <div className="photoUpload-container mb-[46px]">
          <label
            htmlFor="photoUpload"
            className="text-[#1A1A1A] text-sm font-medium"
          >
            პირადი ფოტოს ატვირთვა
          </label>
          <input type="file" name="photoUpload" className="mt-[8px]" />
        </div>
        <div className="aboutInfo-container mb-[46px]">
          <label
            htmlFor="aboutInfo"
            className="text-[#1A1A1A] text-sm font-medium"
          >
            ჩემ შესახებ (არასავალდებულო)
          </label>
          <textarea
            name="aboutInfo"
            className="mt-[8px] border border-[#BCBCBC] w-full px-[16px] py-[14px]"
          />
        </div>
        <div className="email-container mb-[46px]">
          <label htmlFor="email" className="text-[#1A1A1A] text-sm font-medium">
            ელ.ფოსტა
          </label>
          <input
            type="email"
            name="email"
            className="mt-[8px] mb-[8px] border border-[#BCBCBC] w-full px-[16px] py-[14px]"
          />
          <p className="font-light text-sm">
            უნდა მთავრდებოდეს @redberry.ge-ით
          </p>
        </div>
        <div className="phone-container mb-[46px]">
          <label htmlFor="phone" className="text-[#1A1A1A] text-sm font-medium">
            მობილურის ნომერი
          </label>
          <input
            type="tel"
            name="phone"
            className="mt-[8px] mb-[8px] border border-[#BCBCBC] w-full px-[16px] py-[14px]"
          />
          <p className="font-light text-sm">
            უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
          </p>
        </div>
        <button className="bg-[#1A1A1A] text-white py-[12px] px-[24px] rounded-lg">
          ᲨᲔᲛᲓᲔᲒᲘ
        </button>
      </div>
      <div className="sideBar-container w-[822px] flex items-center justify-center bg-gray-200">
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default PersonalInfo;
