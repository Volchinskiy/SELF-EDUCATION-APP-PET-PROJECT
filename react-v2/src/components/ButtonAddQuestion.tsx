import { useDispatch, useSelector } from 'react-redux';

import { PlusIcon } from './svg';
import { toggleShowAddQuestionArea, resetEditableQuestion } from '../redux/action';
import { RootState } from '../redux/store';

export default function ButtonAddQuestion() {
  const dispatch = useDispatch();
  const { questionReducer }: RootState = useSelector((state) => state) as RootState;

  const onToggleShowAddQuestionArea = () => {
    if(questionReducer.editableQuestion){
      dispatch(resetEditableQuestion);
      return;
    }
    
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
