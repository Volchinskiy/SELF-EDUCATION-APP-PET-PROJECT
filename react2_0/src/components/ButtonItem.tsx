import React from 'react'
import { useDispatch, useSelector} from "react-redux";
import { selectQuestion, RootState } from "./../redux/store";
 

type props = {
  title: string;
  index: number;
  theme: string;
}

export default function ButtonItem({title, index, theme}: props) {
  const [ ShowSettings, setShowSettings ] = React.useState(false);
  const dispatch = useDispatch();
  const { QuestionReducer }: RootState = useSelector((state) => state) as RootState;

  const flagForSelectRender = QuestionReducer.SelectedQuestion !== null && QuestionReducer.SelectedQuestion.index === index ? true : false

  const onShowSettings = () => {
    setShowSettings(!ShowSettings);
  }

  const onSelectQuestion = () => {
    dispatch(selectQuestion(index, theme))
  }

  if(ShowSettings){
    return (
      <button onClick={onSelectQuestion} className={`content__left-side-button-item-open ${flagForSelectRender ? "--buttonSelected" : ""}`}>
        <div className="content__left-side-button-item-open-top">
          <div>
            {
              flagForSelectRender
              ?
              <svg className="content__left-side-button-with-arrow-first-svg" viewBox="0 0 16 16">
                <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 10c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path>
              </svg>
              :
              <svg className="content__left-side-button-with-arrow-first-svg" viewBox="0 0 16 16">
                <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6z"></path>
              </svg>
            }
          </div>
          {title}
          <div>
            <svg onClick={onShowSettings} viewBox="0 0 16 16">
              <path d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path>
            </svg>
          </div>
        </div>
        <div className="content__left-side-button-item-open-bottom">
          <div className="content__left-side-button-item-open-bottom-svg-wrapper">
            <svg className="content__left-side-button-item-open-bottom-svg" viewBox="0 0 16 16">
              <path d="M13.5 0c1.381 0 2.5 1.119 2.5 2.5 0 0.563-0.186 1.082-0.5 1.5l-1 1-3.5-3.5 1-1c0.418-0.314 0.937-0.5 1.5-0.5zM1 11.5l-1 4.5 4.5-1 9.25-9.25-3.5-3.5-9.25 9.25zM11.181 5.681l-7 7-0.862-0.862 7-7 0.862 0.862z"></path>
            </svg>
          </div>
          <div className="content__left-side-button-item-open-bottom-svg-wrapper">
            <svg className="content__left-side-button-item-open-bottom-svg" viewBox="0 0 16 16">
              <path d="M2 5v10c0 0.55 0.45 1 1 1h9c0.55 0 1-0.45 1-1v-10h-11zM5 14h-1v-7h1v7zM7 14h-1v-7h1v7zM9 14h-1v-7h1v7zM11 14h-1v-7h1v7z"></path>
              <path d="M13.25 2h-3.25v-1.25c0-0.412-0.338-0.75-0.75-0.75h-3.5c-0.412 0-0.75 0.338-0.75 0.75v1.25h-3.25c-0.413 0-0.75 0.337-0.75 0.75v1.25h13v-1.25c0-0.413-0.338-0.75-0.75-0.75zM9 2h-3v-0.987h3v0.987z"></path>
            </svg>
          </div>
        </div>
      </button>
    )
  }

  return (
    <button onClick={onSelectQuestion} className={`content__left-side-button-item ${flagForSelectRender ? "--buttonSelected" : ""}`}>
      <div>
        {
          flagForSelectRender
          ?
          <svg className="content__left-side-button-with-arrow-first-svg" viewBox="0 0 16 16">
            <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 10c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path>
           </svg>
          :
          <svg className="content__left-side-button-with-arrow-first-svg" viewBox="0 0 16 16">
            <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6z"></path>
          </svg>
        }
      </div>
      {title}
      <div>
        <svg onClick={onShowSettings} viewBox="0 0 16 16">
          <path d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path>
        </svg>
      </div>
    </button>
  )
}
