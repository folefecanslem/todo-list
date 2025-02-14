import React, { useState } from 'react';

// Define the props for the TodoForm component
interface TodoFormProps {
  addTodo: (text: string, deadline?: Date) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  // State to manage the text input
  const [text, setText] = useState('');
  // State to manage the deadline input
  const [deadline, setDeadline] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Convert deadline to Date object if provided
    const deadlineDate = deadline ? new Date(deadline) : undefined;
    // Check if text is not empty
    if (text.trim()) {
      // Call addTodo with text and deadline
      addTodo(text, deadlineDate);
      // Reset the input fields
      setText('');
      setDeadline('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input for the todo text */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      {/* Input for the deadline (optional) */}
      <input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        placeholder="Set a deadline (optional)"
      />
      {/* Submit button */}
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;