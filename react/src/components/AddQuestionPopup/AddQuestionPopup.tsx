import React from "react"
import { Link } from "react-router-dom"


export default function AddQuestionPopup() {
  const [ inputValue, setInputValue ] = React.useState("");
  const [ textareaValue, setTextareaValue ] = React.useState("");

  const onChengeInput = (event: any) => {
    setInputValue(event.target.value);
  }

  const onChengeTexarea = (event: any) => {
    setTextareaValue(event.target.value);
  }

  return (
    <div className="popup">
        <div className="popup__content-wrapper">
          <input className="popup__input" value={inputValue} onChange={onChengeInput} placeholder="Заголовок Вопроса" />
          <textarea className="popup__textarea" value={textareaValue} onChange={onChengeTexarea} placeholder="Текст Вопроса" />
          <div className="popup__button-wrapper">
            <button className="popup__button">Добавить Вопрос</button>
            <Link to="/">
              <button className="popup__button">Назад</button>
            </Link>
          </div>
        </div>
      </div>
  )
}
