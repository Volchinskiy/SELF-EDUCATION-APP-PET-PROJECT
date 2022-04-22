import React from "react"
import { selectQuestion } from "./../../redux/actions/question";

export default function QuestionItem({title, dispatch, _id, index, selectItem}: any) {
  const onSelect = () => {
    dispatch(selectQuestion(index));
  }

  return (
    <button className={`all-questions__item ${selectItem === _id ? "--questionSelected" : null}`} onClick={onSelect}>
      <div className="all-questions__icon">
        {
          selectItem === _id ?
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
            <path fill="#000000" d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 10c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path>
          </svg>
          :
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
           <path fill="#000000" d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6z"></path>
          </svg>
        }
      </div>
      <div className="all-questions__title">{title}</div>
      <div className="all-questions__button icon-settings">
        <svg aria-hidden="true" height="20" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" className="octicon octicon-grabber">
          <path fillRule="evenodd" d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path>
        </svg>
      </div>
    </button>
  )
}
