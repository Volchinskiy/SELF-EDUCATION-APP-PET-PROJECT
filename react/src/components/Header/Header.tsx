import React from 'react'

export default function Header() {
  const [searchText, setSearchText] = React.useState('');

  const onSearch = () => {
    console.log(searchText);
    // нужно будет доработать поиск
  }

  const onValueChande = (event: any) => {
    setSearchText(event.target.value);
  }

  return (
    <header className="header">
      <div className='header__content'>
        <div>
          <input type="text" value={searchText} onChange={onValueChande} />
          <button onClick={onSearch}>

          </button>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
        </svg>
      </div>
    </header>
  )
}
