import React from "react"
import { Link } from "react-router-dom";

export default function Header() {
  const [searchText, setSearchText] = React.useState("");

  const onSearch = () => {
    console.log(searchText);
    // нужно будет доработать поиск
  }

  const onValueChande = (event: any) => {
    setSearchText(event.target.value);
  }

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__search-wrapper">
          <input className="header__input" type="text" value={searchText} onChange={onValueChande} placeholder="Поиск по заголовку" />
          <button className="header__button" onClick={onSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512" width="19" height="19">
              <path d="M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 68.5 47.9 125.9 112 140.4V468c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V316.4c64.1-14.5 112-71.9 112-140.4zm-144 80c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/>
            </svg>
          </button>
        </div>
        <Link to="addQuestion">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
          </svg>
        </Link>
      </div>
    </header>
  )
}
