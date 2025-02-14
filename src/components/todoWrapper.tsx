import React, { useState } from 'react';
import TodoForm from './todoForm';
import Todo from './todo';
// define the interface for the todo item
interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}
// state to hold the todos  and the functions to add, toggle and remove todos
const TodoWrapper: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
//add
  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };
//toggle
  const toggleComplete = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
//remove
  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      /* pass the addTodo function to the TodoForm component
      <TodoForm addTodo={addTodo} />
      // pass the todos, toggleComplete and removeTodo functions to the Todo component
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