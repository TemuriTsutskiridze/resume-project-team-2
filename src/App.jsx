import React from "react";
import Router from "./components/Router.jsx";
import { ResumeProvider } from "./ResumeProvider.jsx";

function App() {
  return (
    <ResumeProvider>
      <Router />
    </ResumeProvider>
  );
}

export default App;
