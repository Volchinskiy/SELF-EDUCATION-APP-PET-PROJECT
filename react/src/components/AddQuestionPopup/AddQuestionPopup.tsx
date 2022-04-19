import React from 'react'

export default function AddQuestionPopup() {
  return (
    <div className='popup'>
        <div className='popup__content-wrapper'>
          <input className="popup__input" placeholder='Заголовок Вопроса' />
          <textarea className="popup__textarea" placeholder='Текст Вопроса' />
          <div className='popup__button-wrapper'>
            <button className='popup__button'>Добавить Вопрос</button>
            <button className='popup__button'>Назад</button>
          </div>
        </div>
      </div>
  )
}
