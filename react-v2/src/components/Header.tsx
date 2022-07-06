import React from 'react'
import { useDispatch } from 'react-redux'

import { toggleShowLeftSide, toggleShowAddQuestionArea } from '../redux/action';
import { MenuIcon, SearchIcon, PlusIcon } from './svg';


export default function Header() {
  const dispatch = useDispatch();
  
  const onToggleShowleLeftSide = () => {
    dispatch(toggleShowLeftSide);
  }

  const onToggleShowAddQuestionArea = () => {
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
