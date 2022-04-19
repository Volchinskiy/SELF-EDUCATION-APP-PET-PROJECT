import React from "react";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import AddQuestionPopup from "./components/AddQuestionPopup/AddQuestionPopup";

function App() {

  return (
    <div className="App">
      <Header />
      <Content />

      <AddQuestionPopup />

    </div>
  );
}

export default App;
