import React from 'react';

import Header from './components/Header/Header';
import Content from './components/Content/Content';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Content />

      <div className='popup'>
        <div className='popup__content-wrapper'>
          <label>Вопрос : 
            <input className="popup__input" />
          </label>
          <label>Ответ:</label>
          <textarea className="popup__textarea" />
          <div className='popup__button-wrapper'>
            <button className='popup__button'>Добавить Вопрос</button>
            <button className='popup__button'>Назад</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
