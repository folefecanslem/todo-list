import React from 'react';
import './App.css';
import TodoWrapper from './components/todoWrapper';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
};

export default App;