import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleShowAddQuestionArea } from '../redux/store'

export default function ButtonAddQuestion() {
  const dispatch = useDispatch();

  const onToggleShowAddQuestionArea = () => {
    dispatch(toggleShowAddQuestionArea);
  }

  return (
    <button onClick={onToggleShowAddQuestionArea} className="content__left-side-button-add-question">
      <div>
        <svg className="content__left-side-button-with-arrow-first-svg" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
        </svg>
      </div>
      Добавить Вопрос
    </button>
  )
}
