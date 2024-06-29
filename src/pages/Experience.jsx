import { Link, NavLink } from "react-router-dom";

//     setValues({
//       ...values,
//       [name]: values.experience.first_name,
//     });

// // let error = false;
// // if (name === "userName" || name === "userSurname") {
// //   error = value.length < 2;
// // } else if (name === "email") {
// //   error = !value.endsWith("@redberry.ge");
// // } else if (name === "phone") {
// //   const phoneRegex = /^\+995\d{9}$/;
// //   error = !phoneRegex.test(value);
// // }
// // setInputErrors({ ...inputErrors, [name]: error });
// // };
const Experience = () => {
  //   const handleChange = (event) => {
  //     const { values, setValues, inputErrors, setInputErrors } = useResume();
  //     const { name, value } = event.target;
  //   };

  return (
    <div>
      <Link to="/" as={NavLink}>
        back to HomePage
      </Link>
      {/*// todo აქ შიგნით რომ წერია back to HomePage, მაგის მაგივრად  ისარი უნდა ჩაჯდეს*/}

      <div className="flex h-screen justify-center items-start">
        <div className="bg-[#F9F9F9] px-[126px] max-w-[1098px] w-full h-screen">
          <div className="title-container flex items-center">
            <span className="text-lg">&lt;</span>
            <div className="flex items-center justify-between w-full ml-4">
              <h1 className="text-[#1A1A1A] text-[24px] font-bold">
                გამოცდილება
              </h1>
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
            />
            <p className="font-light text-sm">მინიმუმ 2 ასო, ქართული ასოები</p>
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
            <p className="font-light text-sm">მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
          <div className=" flex items-stretch justify-start space-x gap-[50px]">
            <div className=" mb-[46px] mt-[40px]">
              <label
                htmlFor="aboutInfo"
                className="text-[#1A1A1A] text-sm font-medium"
              >
                დაწყების რიცხვი
              </label>
              <input
                type="date"
                name="started_at"
                className="mt-[8px] border border-[#BCBCBC] w-full px-[16px] py-[14px]"
              />
            </div>
            <div className="mt-[] mb-[46px] ">
              <label
                htmlFor="email"
                className="text-[#1A1A1A] text-sm font-medium"
              >
                დასრულების რიცხვი
              </label>
              <input
                type="date"
                name="ended_at"
                className="mt-[8px] mb-[8px] border border-[#BCBCBC] w-full px-[16px] py-[14px]"
              />
            </div>
          </div>

          <div className="phone-container mb-[46px]">
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
            />
          </div>
          <button className="bg-[#1A1A1A] text-white py-[12px] px-[24px] rounded-lg">
            ᲨᲔᲛᲓᲔᲒᲘ
          </button>
        </div>
        <div className="sideBar-container w-[822px] flex items-center justify-center bg-gray-200">
          <img src="" alt="" />
        </div>
      </div>

      <hr />
      <Link to="/experience" as={NavLink}>
        შემდეგი
      </Link>
    </div>
  );
};

export default Experience;
