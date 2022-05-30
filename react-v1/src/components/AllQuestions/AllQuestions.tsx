import React from "react"
import questionServise from "../../service/Question.servise"
import QuestionItem from "../QuestionItem/QuestionItem";
import { useDispatch, useSelector } from "react-redux"
import { getAllQuestions } from "../../redux/actions/question";

export default function AllQuestions() {
  const dispatch = useDispatch();
  const {questions, selectedQuestion} = useSelector((state: any) => state.questionReduser);

  React.useEffect(() => {
    questionServise.getAllQuestion().then((data) => {
      dispatch(getAllQuestions(data.data));
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="content__wrapper">
      <div className="all-questions">
      {
        questions.length !== 0 ?
        questions.map((item: any, index: number) => <QuestionItem {...item} key={item._id} dispatch={dispatch} index={index} selectItem={selectedQuestion?._id}/>)
        :
        "Ошибка сети"
      }
      </div>
    </div>
  )
}
