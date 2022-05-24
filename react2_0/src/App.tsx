import React from 'react';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  // чтобы запухнуть вопрос в selectesQuestion нужно сделать новій екшен,
  // чтобі добавить функционал на кнопку ,следующий вопрос, для вопросов на повтор, нужно добавить в store свойство которое отслеживает что мы последний раз выбрали обычный вопросы или вопросы на повторо , и от етого прописываем логику для выбора следующего вопроса 
  // из все svg сделать компоненты и опментть длинные пути svg  на которк ие  компонеты
  return (
    <div className="App">

    <Header />

    <Content />
    
    </div>
  );
}

export default App;
