import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { nextQuestion } from "../../redux/actions/question";

export default function SpecificQuestion() {
  const [ showAnswer, setShowAnswer ] = React.useState(false);
  const selectQuestion = useSelector((state: any) => state.questionReduser.selectedQuestion);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setShowAnswer(false);
  }, [selectQuestion])

  const onNextQuestion = () => {
      dispatch(nextQuestion());
  }

  const onShowAnswer = () => {
    setShowAnswer(!showAnswer);
  }

  if(selectQuestion){
    return (
      <div className="content__wrapper">
        <div className="specific-question">
          <div className="specific-question__title">{selectQuestion.title}</div>

          { showAnswer === true ?
            <div className="specific-question__text">{selectQuestion.text}</div>
            :
            <div className="specific-question__text"></div>
          }

          <div className="specific-question__button-wrapper">
            <button onClick={onShowAnswer} className="specific-question__button">
            {
              showAnswer === true ?
              "Скрыть Ответ"
              :
              "Показать Ответ"
            }
            </button>
            <button onClick={onNextQuestion} className="specific-question__button">Следующий Вопрос</button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="content__wrapper">
    <div className="specific-question">
      тут будет другой ui когда selectedQuestion === null
    </div>
    </div>
  )
}
