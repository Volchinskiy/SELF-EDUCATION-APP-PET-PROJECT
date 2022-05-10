import React from 'react'
import { useSelector } from 'react-redux'

export default function RightSide() {
  const state: any = useSelector((state) => state)

  return (
    <div className={`content__right-side  ${state.ShowLeftSide ?  "--right-side-not-stretched" : ""}`}>
      <div className="content__right-side-body">
        <div className="content__right-side-title">Как Джуну найти работу?</div>            
        
        <div className="content__right-side-text">Очень старатся и развиватся!</div>

        <div className="content__right-side-button-wrapper">
          <button className="content__right-side-button">Показать Ответ</button>
          <button className="content__right-side-button">Следующий Вопрос</button>
        </div>    
      </div>
    </div>
  )
}
