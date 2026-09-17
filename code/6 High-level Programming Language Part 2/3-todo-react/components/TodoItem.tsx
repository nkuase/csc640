// High-level feature: React component with TypeScript
import React from 'react';
import { Todo } from '../App';

// High-level feature: Props interface
interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

// High-level feature: Reusable component
const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      {/* High-level feature: Event handler with arrow function */}
      <span onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>
      
      <button onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
