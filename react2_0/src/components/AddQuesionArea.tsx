import React from 'react'

export default function AddQuesionArea() {
  return (
    <div className="add-question-area">
      <div className="add-question-area-body">
        <div className="add-question-area-left-side">
          <input type="text" className="add-question-area-left-side-title" placeholder="Заголовок Вопроса" />
          <textarea className="add-question-area-left-side-text" placeholder="Текст Ответа"></textarea>
          <input type="text" className="add-question-area-left-side-theme" placeholder="Тема Вопроса" />
        </div>
        <div className="add-question-area-right-side">
          <div className="add-question-area-right-side-button-wrapper">
            <button className="add-question-area-right-side-button">Добавить Вопрос</button>
            <button className="add-question-area-right-side-button">Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  )
}
