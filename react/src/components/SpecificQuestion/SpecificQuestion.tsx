import React from "react"

export default function SpecificQuestion() {
  const [ showAnswer, setShowAnswer ] = React.useState(false);

  const onShowAnswer = () => {
    setShowAnswer(!showAnswer);
  }

  return (
    <div className="content__wrapper">
    <div className="specific-question">
      <div className="specific-question__title">Как джуну найти работу?</div>

      { showAnswer === true ?
        <div className="specific-question__text">Очень стараться и развиватся!</div>
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
        <button className="specific-question__button">Следующий Вопрос</button>
      </div>
    </div>
  </div>
  )
}
