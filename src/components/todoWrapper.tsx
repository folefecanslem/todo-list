import React, { useState, useEffect } from 'react';
import TodoForm from './todoForm';
import Todo from './todo';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
  deadline?: Date;
}

interface TodoWrapperProps {
  setHistory: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const TodoWrapper: React.FC<TodoWrapperProps> = ({ setHistory }) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (text: string, deadline?: Date) => {
    const newTodo = { id: Date.now(), text, completed: false, deadline };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    const todoToRemove = todos.find(todo => todo.id === id);
    if (todoToRemove) {
      setHistory(prevHistory => [...prevHistory, todoToRemove]);
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      todos.forEach(todo => {
        if (todo.deadline && !todo.completed && todo.deadline.getTime() - now.getTime() <= 3600000) { // 1 hour
          alert(`Deadline approaching for: ${todo.text}`);
        }
      });
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [todos]);

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoWrapper;