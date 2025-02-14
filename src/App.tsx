import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import TodoWrapper from './components/todoWrapper';
import History from './components/History';
import logo from './assets/logo.png';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [history, setHistory] = useState<TodoItem[]>([]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1><i>Todo App</i></h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/history">History</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<TodoWrapper setHistory={setHistory} />} />
          <Route path="/history" element={<History history={history} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;