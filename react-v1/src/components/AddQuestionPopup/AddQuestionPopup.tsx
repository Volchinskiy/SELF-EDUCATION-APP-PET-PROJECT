import React from "react"
import { Link } from "react-router-dom"
import questionServise from "../../service/Question.servise";

export default function AddQuestionPopup() {
  const [ inputValue, setInputValue ] = React.useState("");
  const [ textareaValue, setTextareaValue ] = React.useState("");

  const onChengeInput = (event: any) => {
    setInputValue(event.target.value);
  }

  const onChengeTexarea = (event: any) => {
    setTextareaValue(event.target.value);
  }

  const onSubmit = () => {
    const data = {
      title: inputValue,
      text: textareaValue,
    }
    questionServise.addNewQuestion(data);
    window.location.replace("/");
  }

  return (
    <div className="popup">
        <div className="popup__content-wrapper">
          <input className="popup__input" value={inputValue} onChange={onChengeInput} placeholder="Заголовок Вопроса" />
          <textarea className="popup__textarea" value={textareaValue} onChange={onChengeTexarea} placeholder="Текст Вопроса" />
          <div className="popup__button-wrapper">
            <button onClick={onSubmit} className="popup__button">Добавить Вопрос</button>
            <Link to="/">
              <button className="popup__button">Назад</button>
            </Link>
          </div>
        </div>
      </div>
  )
}
