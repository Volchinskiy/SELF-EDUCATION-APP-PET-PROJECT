import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleShowLeftSide } from '../redux/store'


export default function Header() {
  const dispatch = useDispatch();

  const onToggShowleLeftSide = () => {
    dispatch(toggleShowLeftSide);
  }

  return (
    <header className="header">
      <div className="header__body">

        <div className="header__left-side">
          <button onClick={onToggShowleLeftSide} className="header__left-side-menu-button">
            <svg className="header__left-side-menu-button-svg" viewBox="0 0 448 512">
              <path d="M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"/>
            </svg>
          </button>

          <input type="text" className="header__left-side-input" />
          <button className="header__left-side-input-button">
            <svg  viewBox="0 0 24 24" >    
                <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"/>
              </svg>
          </button>
        </div>

        <div className="header__right-side">
          <button className="header__right-side-add-question-button">
            <svg viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
            </svg>
          </button>
        </div>

      </div>
    </header>
  )
}
