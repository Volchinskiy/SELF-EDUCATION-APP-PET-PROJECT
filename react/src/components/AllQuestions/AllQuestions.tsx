import React from "react"
import questionServise from "../../service/Question.servise"
import QuestionItem from "../QuestionItem/QuestionItem";

export default function AllQuestions() {
  const [ questions, setQuestions ] = React.useState<any> ([]);

  React.useEffect(() => {
    questionServise.getAllQuestion().then((data) => {
      setQuestions(data.data);
    }).catch( (error) => {
      setQuestions([{
        title: "Что-то пошло не так :(",
        text: `${error.message}`
      }])
    });
  }, []);

  return (
    <div className="content__wrapper">
      <div className="all-questions">

      {
        questions.length !== 0 ?
        questions.map((item: any) => <QuestionItem {...item} />)
        :
        "ljhf,jnfq vtyz"
      }

      </div>
    </div>
  )
}


// <button className="all-questions__item --itemActive">
//   <div className="all-questions__icon">
//     <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
//       <path fill="#000000" d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 10c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path>
//     </svg>
//   </div>
//   <div className="all-questions__title">Как джуну найти работу?</div>
//   <div className="all-questions__button icon-settings">
//     <svg aria-hidden="true" height="20" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" className="octicon octicon-grabber">
//       <path fillRule="evenodd" d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path>
//     </svg>
//   </div>
// </button>

// <button className="all-questions__item">
//   <div className="all-questions__icon">
//     <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
//       <path fill="#000000" d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6z"></path>
//     </svg>
//   </div>
//   <div className="all-questions__title">Как джуну найти работу?</div>
//   <div className="all-questions__button icon-settings">
//     <svg aria-hidden="true" height="20" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" className="octicon octicon-grabber">
//       <path fillRule="evenodd" d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path>
//     </svg>
//   </div>
// </button>