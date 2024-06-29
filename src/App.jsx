import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ResumeProvider } from "./ResumeContext";
import HomePage from "./pages/HomePage";
import PersonalInfo from "./pages/PersonalInfo";
import Experience from "./pages/Experience";
import Education from "./pages/Education";

function App() {
  return (
    <ResumeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Router>
    </ResumeProvider>
  );
}

export default App;
