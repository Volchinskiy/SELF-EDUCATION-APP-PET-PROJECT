import { useDispatch } from 'react-redux';
import { toggleShowAddQuestionArea } from '../redux/action';

import { PlusIcon } from './svg';

export default function ButtonAddQuestion() {
  const dispatch = useDispatch();

  const onToggleShowAddQuestionArea = () => {
    dispatch(toggleShowAddQuestionArea);
  }

  return (
    <button onClick={onToggleShowAddQuestionArea} className="content__left-side-button-add-question">
      <div>
        <PlusIcon className="content__left-side-button-with-arrow-first-svg" />
      </div>
      Добавить Вопрос
    </button>
  )
}
