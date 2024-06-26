import React from "react";
import Router from "./components/Router.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Router/>
        {/*// აქ დროებით დავსვი ლიკები, რომ სატესტოდ ჩანდეს, ანუ სათითაოდ ლინკზე დაჭერით სათითაოდ პეიჯზე გადადიხარ*/}
        {/*// ისრებს და ღილაკს "შემდეგი" შემდეგ კომიტში გამოვუშვებ*/}
    </>
  );
}

export default App;
