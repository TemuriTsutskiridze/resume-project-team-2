import { Link, NavLink } from "react-router-dom";

const Experience = () => {
  // const handleChange = (event) => {

  //   const { name, value } = event.target;
  // };

  return (
    <div>
      <Link to="/" as={NavLink}>
        back to HomePage
      </Link>
      {/*// todo აქ შიგნით რომ წერია back to HomePage, მაგის მაგივრად  ისარი უნდა ჩაჯდეს*/}

      <div className="flex h-full justify-center items-start">
        <div className="bg-[#F9F9F9] px-[126px] max-w-[1098px] w-full h-screen">
          <div className="title-container flex items-center">
            <span className="text-lg">&lt;</span>
            <div className="flex items-center justify-between w-full ml-4">
              <h1 className="text-[#1A1A1A] text-[24px] font-bold">
                გამოცდილება
              </h1>
              <hr />
              <span className="text-lg">2/3</span>
            </div>
          </div>

          <div className=" flex flex-col ">
            <label
              htmlFor="position"
              className="text-[#1A1A1A] text-sm font-medium "
            >
              თანამდებობა
            </label>

            <input
              type="text"
              name="position"
              className="mt-[8px] mb-[8px] border border-[#BCBCBC] px-[16px] py-[14px]"
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
            />
            <p className="font-light text-sm">მინიმუმ 2 სიმბოლო</p>
          </div>
          <div className=" flex flex-col  mt-[40px]">
            <label
              htmlFor="employer"
              className="text-[#1A1A1A] text-sm font-medium"
            >
              დამსაქმებელი
            </label>
            <input
              type="text"
              name="employer"
              className="mt-[8px] mb-[8px] border border-[#BCBCBC] px-[16px] py-[14px]"
            />
            <p className="font-light text-sm">მინიმუმ 2 სიმბოლო</p>
          </div>
          <div className=" startEnd items-center flex justify-between gap-[32px] ">
            <div className=" flex flex-col w-full  mb-[46px] mt-[40px]">
              <label
                htmlFor="aboutInfo"
                className="text-[#1A1A1A] text-sm font-medium"
              >
                დაწყების რიცხვი
              </label>
              <input
                type="date"
                name="started_at"
                className="mt-[8px] border border-[#BCBCBC]  px-[16px] py-[14px]"
              />
            </div>
            <div className=" flex  w-full flex-col mt-[40px] mb-[46px] ">
              <label
                htmlFor="email"
                className="text-[#1A1A1A] text-sm font-medium"
              >
                დასრულების რიცხვი
              </label>
              <input
                type="date"
                name="ended_at"
                className="  mt-[8px] border border-[#BCBCBC]  px-[16px] py-[14px]"
              />
            </div>
          </div>

          <div className="phone-container mb-[51px]">
            <label
              htmlFor="phone"
              className="text-[#1A1A1A] text-sm font-medium"
            >
              აღწერა
            </label>
            <input
              type="text"
              name="description"
              className="mt-[8px] mb-[8px] border border-[#BCBCBC] w-full px-[16px] py-[14px] min-h-[123px]"
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            />
          </div>
          <hr />
          <button className="bg-[#62A1EB;] mt-[45px] mb-[75px] px-[18px] py-[18px] text-white  ">
            მეტი გამოცდილების დამატება
          </button>
          <div className="flex justify-between relative ">
            {/* <button className="bg-[#6B40E3] text-white py-[12px] px-[24px] rounded-lg">
              უკან
            </button>
            <button  onClick={} className="bg-[#6B40E3] text-white py-[12px] px-[24px] rounded-lg">
              ᲨᲔᲛᲓᲔᲒᲘ
            </button> */}
            <Link
              to="/personal-info"
              as={NavLink}
              className="bg-[#6B40E3] text-white py-[14px] px-[35px] rounded-lg absolute  bottom-[65px]"
            >
              უკან
            </Link>

            <Link
              to="/education"
              as={NavLink}
              className="bg-[#6B40E3] text-white py-[14px] px-[35px] rounded-lg absolute right-[160px] bottom-[65px]"
            >
              შემდეგი
            </Link>
          </div>
        </div>
        <div className="sideBar-container w-[822px] flex items-center justify-center bg-gray-200">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
