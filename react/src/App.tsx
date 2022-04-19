import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import AddQuestionPopup from "./components/AddQuestionPopup/AddQuestionPopup";


function App() {

  return (
    <div className="App">
      <Header />
      <Content />
      <Routes>
        <Route path="addQuestion" element={<AddQuestionPopup />} />
      </Routes>
    </div>
  );
}

export default App;
