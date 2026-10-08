// High-level feature: React component with TypeScript
import React from 'react';
import { Todo } from '../App';
import TodoItem from './TodoItem';

// High-level feature: Props interface with function types
interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

// High-level feature: Presentational component
const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className="todo-list">
      {/* High-level feature: Array.map() for rendering lists */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}  // High-level feature: Key prop for list items
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
      
      {/* High-level feature: Conditional rendering */}
      {todos.length === 0 && (
        <li className="empty-message">No tasks yet. Add one above!</li>
      )}
    </ul>
  );
};

export default TodoList;
