import React from 'react';

interface TodoProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
    deadline?: Date; // Make deadline optional
  };
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text} {todo.deadline ? `(Deadline: ${todo.deadline.toLocaleString()})` : ''}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;