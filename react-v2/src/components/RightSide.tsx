import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from "./../redux/store";
import { nextQuestion, updateRepeatStatusReq } from "../redux/action";
import { SelectedQuestionT } from './../../../type';

export default function RightSide() {
  const [showAnswer, setShowAnswer] = React.useState(false);
  const { uiReducer, questionReducer, topicReducer }: RootState = useSelector((state) => state) as RootState;
  const dispatch = useDispatch();

  const selectedQuestion: SelectedQuestionT = questionReducer["selectedQuestion"];

  React.useEffect(() => {
    setShowAnswer(false);
  }, [selectedQuestion])

  const onShowAnswer = () => {
    setShowAnswer(!showAnswer);
  }

  const onNextQuestion = () => {
    if("repeat_status" in selectedQuestion!){
      const updateRepeatStatusObj = {
        person_id: 1,
        question_id: selectedQuestion.id,
        repeat_status: selectedQuestion.repeat_status,
      }
      dispatch(updateRepeatStatusReq(updateRepeatStatusObj));
    }

    dispatch(nextQuestion(topicReducer.selectedTopic[1]))
  }

  if(selectedQuestion === null){
    return (
      <div className={`content__right-side  ${uiReducer.showLeftSide ?  "--right-side-not-stretched" : ""}`}>
        <div className="content__right-side-body">
          при выбранном вопросе === null выводить другой ui
        </div>
      </div>
    )
  }

  return (
    <div className={`content__right-side ${uiReducer.showLeftSide ? "--right-side-not-stretched" : ""}`}>
      <div className="content__right-side-body">
        <div className="content__right-side-title">{selectedQuestion["title"]}</div>            
        
        <div className="content__right-side-text">{showAnswer ? selectedQuestion["text"] : ""}</div>

        <div className="content__right-side-button-wrapper">
          <button onClick={onShowAnswer} className="content__right-side-button">Показать Ответ</button>
          <button onClick={onNextQuestion} className="content__right-side-button">Следующий Вопрос</button>
        </div>    
      </div>
    </div>
  )
}
