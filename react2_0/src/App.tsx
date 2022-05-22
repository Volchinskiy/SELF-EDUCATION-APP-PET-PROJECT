import React from 'react';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  // ты закончил на том что радовался от того что все работает и думал как реализовать показ вопросов которые нужно повторить
  // нужно добавить в Question reducer поле repeat и рендеритть его при какихто условиях
  // из все svg сделать компоненты и опментть длинные пути svg  на которк ие  компонеты
  return (
    <div className="App">

    <Header />

    <Content />
    
    </div>
  );
}

export default App;
