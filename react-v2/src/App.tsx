import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import { getAllQuestionByPersonId } from './redux/action';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllQuestionByPersonId(1))
  })

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
