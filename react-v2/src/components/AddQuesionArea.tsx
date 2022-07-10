import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store';
import { toggleShowAddQuestionArea, resetEditableQuestion, updateQuestionRequest, createQuestionRequest } from '../redux/action';

export default function AddQuesionArea() {
  const { uiReducer, questionReducer }: RootState = useSelector((state) => state) as RootState;
  const dispatch = useDispatch();

  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');
  const [topic, setTopic] = React.useState('');

  React.useLayoutEffect(() => {
    if(questionReducer.editableQuestion){
      setTitle(questionReducer.editableQuestion.title);
      setText(questionReducer.editableQuestion.text);
      setTopic(questionReducer.editableQuestion.topic);
      return;
    }
    setTitle('');
    setText('');
    setTopic('');
  }, [questionReducer.editableQuestion])

  const onToggleShowAddQuestionArea = () => {
    if(questionReducer.editableQuestion){
      dispatch(resetEditableQuestion);
    }

    dispatch(toggleShowAddQuestionArea);
  }

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }

  const onChangeTopic = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  }

  const onSend = () => {
    if(questionReducer.editableQuestion){
      const question = {
        person_id: 1,
        title: title,
        text: text,
        topic: topic,
        question_id: questionReducer.editableQuestion.id,
      };
      dispatch(updateQuestionRequest(question));
      return;
    }

    const newQuestion = {
      person_id: 1,
      title: title,
      text: text,
      topic: topic,
    }
    dispatch(createQuestionRequest(newQuestion))    
  }

  return (
    <div className={`add-question-area ${uiReducer.showAddQuestionArea ? "" : "--display-none"}`}>
      <div className="add-question-area-body">
        <div className="add-question-area-left-side">
          <input value={title} onChange={onChangeTitle} type="text" className="add-question-area-left-side-title" placeholder="Заголовок Вопроса" />
          <textarea value={text} onChange={onChangeText} className="add-question-area-left-side-text" placeholder="Текст Ответа"></textarea>
          <input value={topic} onChange={onChangeTopic} type="text" className="add-question-area-left-side-theme" placeholder="Тема Вопроса" />
        </div>
        <div className="add-question-area-right-side">
          <div className="add-question-area-right-side-button-wrapper">
            <button onClick={onSend} className="add-question-area-right-side-button">{questionReducer.editableQuestion ? "Изменить Вопрос" : "Добавить Вопрос"}</button>
            <button onClick={onToggleShowAddQuestionArea} className="add-question-area-right-side-button">Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  )
}
