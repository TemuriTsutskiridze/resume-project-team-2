import React from "react";
import Router from "./components/Router.jsx";
import {ResumeProvider} from "./ResumeContext.jsx";
import PersonalInfo from "./pages/PersonalInfo.jsx";
import Experience from "./pages/Experience.jsx";
import Education from "./pages/Education.jsx";



function App() {
  return (
      <ResumeProvider>
          <Router/>
          {/*//todo გიო Home-ს ან HomePage-ს რომ გადაარქმევ სახელს, რასაც დაარქმევ, ის ჩასვი აქ */}
          // <PersonalInfo/>
          // <Experience/>
          // <Education/>
          {/*//Resume-ს პეიჯი უნდა დარენდერდეს აქ? ???????????*/}
          {/*//იქ ხომ ინპუთები არ გვაქვს*/}
      </ResumeProvider>

  );
}

export default App;
