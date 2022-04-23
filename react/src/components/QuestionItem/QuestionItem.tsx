import React from "react"
import { selectQuestion } from "./../../redux/actions/question";
import questionServise from "../../service/Question.servise";

export default function QuestionItem({title, dispatch, _id, index, text, selectItem}: any) {
  const [ showButton, setShowButton ] = React.useState(false);
  const [ showPopup, setShowPopup ] = React.useState(false);
  const [ inputValue, setInputValue ] = React.useState("");
  const [ textareaValue, setTextareaValue ] = React.useState("");

  const onSelect = () => {
    dispatch(selectQuestion(index));
  }

  const onChengeInput = (event: any) => {
    setInputValue(event.target.value);
  }

  const onChengeTexarea = (event: any) => {
    setTextareaValue(event.target.value);
  }

  const onSubmit = async () => {
    const data = {
      title: inputValue,
      text: textareaValue,
    }
    await questionServise.editQuestion(_id, data);
    window.location.replace("/");
  }

  const onShowButton = () => {
    setShowButton(!showButton);
  }

  const onEdit = () => {
    setShowPopup(!showPopup)
    setInputValue(title);
    setTextareaValue(text);
  }

  const onDelete = async () => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm("Удалить этот вопрос?")){
      await questionServise.deleteQuestion(_id);
      window.location.replace("/");
    }
  }

  if(showButton === true){
    return (
      <button className={`all-questions__item-crud ${selectItem === _id ? "--questionSelected" : ""}`} onClick={onSelect}>
        <div className="all-questions__item-crud-wrapper">
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
          <div onClick={onShowButton} className="all-questions__button">
            <svg aria-hidden="true" height="20" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" className="octicon octicon-grabber">
              <path fillRule="evenodd" d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path>
            </svg>
          </div>
        </div>
        <div className="all-questions__crud-button">
          <div onClick={onEdit}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="23" height="23" viewBox="0 0 16 16">
              <path fill="#000000" d="M13.5 0c1.381 0 2.5 1.119 2.5 2.5 0 0.563-0.186 1.082-0.5 1.5l-1 1-3.5-3.5 1-1c0.418-0.314 0.937-0.5 1.5-0.5zM1 11.5l-1 4.5 4.5-1 9.25-9.25-3.5-3.5-9.25 9.25zM11.181 5.681l-7 7-0.862-0.862 7-7 0.862 0.862z"></path>
            </svg>
          </div>
          <div onClick={onDelete} >
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="23" height="23" viewBox="0 0 16 16">
              <path fill="#000000" d="M2 5v10c0 0.55 0.45 1 1 1h9c0.55 0 1-0.45 1-1v-10h-11zM5 14h-1v-7h1v7zM7 14h-1v-7h1v7zM9 14h-1v-7h1v7zM11 14h-1v-7h1v7z"></path>
              <path fill="#000000" d="M13.25 2h-3.25v-1.25c0-0.412-0.338-0.75-0.75-0.75h-3.5c-0.412 0-0.75 0.338-0.75 0.75v1.25h-3.25c-0.413 0-0.75 0.337-0.75 0.75v1.25h13v-1.25c0-0.413-0.338-0.75-0.75-0.75zM9 2h-3v-0.987h3v0.987z"></path>
            </svg>
          </div>
        </div>
        {
          showPopup === true ?
          <div className="popup">
            <div className="popup__content-wrapper">
              <input className="popup__input" value={inputValue} onChange={onChengeInput} placeholder="Заголовок Вопроса" />
              <textarea className="popup__textarea" value={textareaValue} onChange={onChengeTexarea} placeholder="Текст Вопроса" />
              <div className="popup__button-wrapper">
                <button onClick={onSubmit} className="popup__button">Изменить Вопрос</button>
                <button onClick={onEdit} className="popup__button">Назад</button>
              </div>
            </div>
          </div>
          :
          null
        }
      </button>
    )
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
      <div onClick={onShowButton} className="all-questions__button">
        <svg aria-hidden="true" height="20" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" className="octicon octicon-grabber">
          <path fillRule="evenodd" d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path>
        </svg>
      </div>
    </button>
  )
}
