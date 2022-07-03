import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store';
import { toggleShowAddQuestionArea } from '../redux/action';

export default function AddQuesionArea() {
  const { uiReducer }: RootState = useSelector((state) => state) as RootState;
  const dispatch = useDispatch();

  const onToggleShowAddQuestionArea = () => {
    dispatch(toggleShowAddQuestionArea);
  }

  return (
    <div className={`add-question-area ${uiReducer.showAddQuestionArea ? "" : "--display-none"}`}>
      <div className="add-question-area-body">
        <div className="add-question-area-left-side">
          <input type="text" className="add-question-area-left-side-title" placeholder="Заголовок Вопроса" />
          <textarea className="add-question-area-left-side-text" placeholder="Текст Ответа"></textarea>
          <input type="text" className="add-question-area-left-side-theme" placeholder="Тема Вопроса" />
        </div>
        <div className="add-question-area-right-side">
          <div className="add-question-area-right-side-button-wrapper">
            <button className="add-question-area-right-side-button">Добавить Вопрос</button>
            <button onClick={onToggleShowAddQuestionArea} className="add-question-area-right-side-button">Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  )
}
