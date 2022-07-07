import { useDispatch, useSelector } from 'react-redux'

import { toggleShowLeftSide, toggleShowAddQuestionArea, resetEditableQuestion } from '../redux/action';
import { MenuIcon, SearchIcon, PlusIcon } from './svg';
import { RootState } from '../redux/store';


export default function Header() {
  const dispatch = useDispatch();
  const { questionReducer }: RootState = useSelector((state) => state) as RootState;
  
  const onToggleShowleLeftSide = () => {
    dispatch(toggleShowLeftSide);
  }

  const onToggleShowAddQuestionArea = () => {
    if(questionReducer.editableQuestion){
      dispatch(resetEditableQuestion);
      return;
    }

    dispatch(toggleShowAddQuestionArea);
  }
  
  return (
    <header className="header">
      <div className="header__body">

        <div className="header__left-side">
          <button onClick={onToggleShowleLeftSide} className="header__left-side-menu-button">
            <MenuIcon />
          </button>

          <input type="text" className="header__left-side-input" />
          <button className="header__left-side-input-button">
            <SearchIcon />
          </button>
        </div>

        <div className="header__right-side">
          <button onClick={onToggleShowAddQuestionArea} className="header__right-side-add-question-button">
            <PlusIcon />
          </button>
        </div>

      </div>
    </header>
  )
}
