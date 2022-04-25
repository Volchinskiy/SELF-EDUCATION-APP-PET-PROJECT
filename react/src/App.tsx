import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import AddQuestionPopup from "./components/AddQuestionPopup/AddQuestionPopup";

// нужно добавить функцию в приложение чтобы она имело представление что есть 8 интервалов повторения кадого вопроса
// они зависят от времени после добавления информации и напоминало мне про то что нужно посторить вопрос смс в телеге или мейл на почту.
// во фронте нужно будет добавить раздел %вопросы которые нужно повторить%.

// добавить функцию при которой можно будет получать пачки вопросо которые принадлежат конкретному теме
// типа вопросы по js или все вопросы по flexbox.

// вся сложная сортировка должна проиходить на беке

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
