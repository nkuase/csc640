// High-level feature: React component with TypeScript
import React, { useState } from 'react';

// High-level feature: Props interface
interface TodoInputProps {
  onAdd: (text: string) => void;
}

// High-level feature: Functional Component with Props typing
const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  // High-level feature: Local state management
  const [text, setText] = useState<string>('');

  // High-level feature: Type-safe event handler
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    
    if (text.trim() === '') {
      alert('Please enter a task!');
      return;
    }
    
    onAdd(text);
    setText('');
  };

  // High-level feature: Controlled input with type safety
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="input-section">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter a new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
