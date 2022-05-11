import React from 'react'
import { useSelector } from 'react-redux'

import {RootState, UIStateI} from "./../redux/store";


export default function RightSide() {
  const { ShowLeftSide }: UIStateI = useSelector((state) => state) as RootState;

  return (
    <div className={`content__right-side  ${ShowLeftSide ?  "--right-side-not-stretched" : ""}`}>
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
