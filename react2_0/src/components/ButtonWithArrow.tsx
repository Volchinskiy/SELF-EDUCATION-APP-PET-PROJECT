import React from 'react'
import { useDispatch } from "react-redux";
import { AnyAction } from 'redux'

type props = {
  title: string;
  count: number;
  objForDispatch: AnyAction;
  flagForRenderArrow: boolean;
}

export default function ButtonWithArrow({title, count, objForDispatch, flagForRenderArrow}: props) {
  const dispatch = useDispatch();

  const onShowTheme = () => {
    dispatch(objForDispatch);
  }

  return (
    <button onClick={onShowTheme} className="content__left-side-button-with-arrow">
      <div>
        {
          flagForRenderArrow 
          ?
          <svg className="content__left-side-button-with-arrow-first-svg" viewBox="0 0 320 512">
            <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/>
          </svg>
          :
          <svg className="content__left-side-button-with-arrow-first-svg" viewBox="0 0 256 512">
            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/>
          </svg>
        }
      </div>
      <div className="content__left-side-button-with-arrow-title">
        {title}
        <div className="content__left-side-button-with-arrow-count">{count}</div>  
      </div>
    </button>
  )
}
