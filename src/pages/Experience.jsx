import { Link, NavLink } from "react-router-dom";
import { useResume } from "../lib/useResume";
import avatar from "../assets/avatar.jpg";
import Input from "../components/Input";
import { useState } from "react";

const Experience = () => {
  const { inputErrors, values, setValues } = useResume();
  const [startDate, setStartDate] = useState(values.experience.started_at);
  const [endDate, setEndDate] = useState(values.experience.ended_at);

  // const handleStartDate = (event) => {
  //   setStartDate(event.target.value);
  // };

  // const handleEndDate = (event) => {
  //   setEndDate(event.target.value);
  // };
  const handleStartDate = (event) => {
    const newStartDate = event.target.value;
    setStartDate(newStartDate);
    setValues((prevValues) => ({
      ...prevValues,
      experience: { ...prevValues.experience, started_at: newStartDate },
    }));
  };

  const handleEndDate = (event) => {
    const newEndDate = event.target.value;
    setEndDate(newEndDate);
    setValues((prevValues) => ({
      ...prevValues,
      experience: { ...prevValues.experience, ended_at: newEndDate },
    }));
  };

  return (
    <div className="flex h-full justify-center items-start">
      <div className="bg-[#F9F9F9] px-[126px] max-w-[1098px] w-full h-screen">
        <div className="title-container flex items-center">
          <Link to="/" as={NavLink}>
            &lt;
          </Link>
          <div className="flex items-center justify-between w-full ml-4">
            <h1 className="text-[#1A1A1A] text-[24px] font-bold">
              გამოცდილება
            </h1>
            <hr />
            <span className="text-lg">2/3</span>
          </div>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="position"
            className={`text-sm font-medium ${
              inputErrors.position ? "text-[#EF5050]" : "text-[#1A1A1A]"
            }`}
          >
            თანამდებობა
          </label>
          <Input
            inputName="position"
            type="text"
            name="position"
            className="mt-[8px] mb-[8px] border border-[#BCBCBC] px-[16px] py-[14px]"
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
            error={inputErrors.position}
          />
          <p className="font-light text-sm">მინიმუმ 2 სიმბოლო</p>
        </div>

        <div className="flex flex-col mt-[40px]">
          <label
            htmlFor="employer"
            className={`text-sm font-medium ${
              inputErrors.employer ? "text-[#EF5050]" : "text-[#1A1A1A]"
            }`}
          >
            დამსაქმებელი
          </label>
          <Input
            inputName="employer"
            type="text"
            name="employer"
            className="mt-[8px] mb-[8px] border border-[#BCBCBC] px-[16px] py-[14px]"
            error={inputErrors.employer}
          />
          <p className="font-light text-sm">მინიმუმ 2 სიმბოლო</p>
        </div>

        <div className="flex justify-between gap-[32px] mt-[40px] mb-[46px]">
          <div className="flex flex-col w-full">
            <label
              htmlFor="started_at"
              className="text-sm font-medium text-[#1A1A1A]"
            >
              დაწყების რიცხვი
            </label>
            <input
              onChange={handleStartDate}
              value={startDate}
              type="date"
              name="started_at"
              className="mt-[8px] border border-[#BCBCBC] px-[16px] py-[14px]"
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="ended_at"
              className="text-sm font-medium text-[#1A1A1A]"
            >
              დასრულების რიცხვი
            </label>
            <input
              onChange={handleEndDate}
              value={endDate}
              type="date"
              name="ended_at"
              className="mt-[8px] border border-[#BCBCBC] px-[16px] py-[14px]"
            />
          </div>
        </div>

        <div className="mb-[51px]">
          <label
            htmlFor="description"
            className="text-sm font-medium text-[#1A1A1A]"
          >
            აღწერა
          </label>
          <Input
            inputName="description"
            type="text"
            name="description"
            className="mt-[8px] mb-[8px] border border-[#BCBCBC] w-full px-[16px] py-[14px] min-h-[123px]"
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            error={inputErrors.description}
          />
        </div>

        <hr />
        <button className="bg-[#62A1EB] mt-[45px] mb-[75px] px-[18px] py-[18px] text-white">
          მეტი გამოცდილების დამატება
        </button>

        <div className="flex justify-between">
          <Link
            to="/personal-info"
            as={NavLink}
            className="bg-[#6B40E3] text-white py-[14px] px-[35px] rounded-lg"
          >
            უკან
          </Link>
          <Link
            to="/education"
            as={NavLink}
            className="bg-[#6B40E3] text-white py-[14px] px-[35px] rounded-lg"
          >
            შემდეგი
          </Link>
        </div>
      </div>

      <div className="sideBar-container w-[822px] flex items-center justify-center">
        <div className="my-[47px] pr-[75px] pl-[80px] flex">
          <div>
            <div className="name-surname-email-mobile-container">
              <h1 className="text-[#F93B1D] font-bold text-[34px] mb-[17px] flex gap-[20px] font-face-helvetica leading-10">
                <p>{values.general.first_name}</p>
                <p>{values.general.last_name}</p>
              </h1>
              <p className="text-[#1A1A1A] font-medium text-[18px] font-face-helvetica">
                {values.general.email && (
                  <>
                    <span>@</span> {values.general.email}
                  </>
                )}
              </p>
              <p className="text-[#1A1A1A] font-medium text-[18px]">
                {values.general.phone_number && (
                  <>
                    <span>&#128222;</span> {values.general.phone_number}
                  </>
                )}
              </p>
            </div>

            <div className="aboutMe-container mt-[34px]">
              {values.general.about_me && (
                <>
                  <h4 className="text-[#F93B1D] font-bold text-[18px]">
                    ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ
                  </h4>
                  <p className="text-[#000000] font-normal text-[16px]">
                    {values.general.about_me}
                  </p>
                </>
              )}
            </div>
          </div>
          <img
            className="w-[246px] h-[246px] rounded-full"
            src={avatar}
            alt="avatar"
          />
        </div>
      </div>
      {/* end personal info  */}

      <div className=" resume w-[822px] flex items-center justify-center">
        <div className="experience infos justify-start">
          <div className="position-container mt-[34px]">
            {values.experience.position && (
              <>
                <h4 className="text-[#F93B1D] font-bold text-[18px]">
                  თანამდებობა
                </h4>
                <p className="text-[#000000] font-normal text-[16px]">
                  {values.experience.position}
                </p>
              </>
            )}
          </div>

          <div className="employer-container mt-[34px]">
            {values.experience.employer && (
              <>
                <h4 className="text-[#F93B1D] font-bold text-[18px]">
                  დამსაქმებელი
                </h4>
                <p className="text-[#000000] font-normal text-[16px]">
                  {values.experience.employer}
                </p>
              </>
            )}
          </div>

          <div className="started-ended flex gap-[20px]">
            <div className="started-container mt-[34px]">
              {values.experience.started_at && (
                <>
                  <p className="text-[#000000] font-normal text-[16px]">
                    {values.experience.started_at}
                  </p>
                </>
              )}
            </div>

            <div className="ended-container mt-[34px]">
              {values.experience.ended_at && (
                <>
                  <p className="text-[#000000] font-normal text-[16px]">
                    {values.experience.ended_at}
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="description-container mt-[34px]">
            {values.experience.description && (
              <>
                <h4 className="text-[#F93B1D] font-bold text-[18px]">აღწერა</h4>
                <p className="text-[#000000] font-normal text-[16px]">
                  {values.experience.description}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
