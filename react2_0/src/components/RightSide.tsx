import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState, nextQuestion, SelectedQuestionT } from "./../redux/store";


export default function RightSide() {
  const [ShowAnswer, setShowAnswer] = React.useState(false);
  const { UIReducer, QuestionReducer, ThemeReducer }: RootState = useSelector((state) => state) as RootState;
  const dispatch = useDispatch();

  const SelectedQuestion: SelectedQuestionT = QuestionReducer["SelectedQuestion"];

  React.useEffect(() => {
    setShowAnswer(false);
  }, [QuestionReducer])

  const onShowAnswer = () => {
    setShowAnswer(!ShowAnswer);
  }

  const onNextQuestion = () => {
    dispatch(nextQuestion(ThemeReducer.SelectedTheme))
  }

  if(SelectedQuestion === null){
    return (
      <div className={`content__right-side  ${UIReducer.ShowLeftSide ?  "--right-side-not-stretched" : ""}`}>
        <div className="content__right-side-body">
          при выбранном вопросе === null выводить другой ui
        </div>
      </div>
    )
  }

  return (
    <div className={`content__right-side  ${UIReducer.ShowLeftSide ?  "--right-side-not-stretched" : ""}`}>
      <div className="content__right-side-body">
        <div className="content__right-side-title">{SelectedQuestion.title}</div>            
        
        <div className="content__right-side-text">{ShowAnswer ? SelectedQuestion.text : ""}</div>

        <div className="content__right-side-button-wrapper">
          <button onClick={onShowAnswer} className="content__right-side-button">Показать Ответ</button>
          <button onClick={onNextQuestion} className="content__right-side-button">Следующий Вопрос</button>
        </div>    
      </div>
    </div>
  )
}
