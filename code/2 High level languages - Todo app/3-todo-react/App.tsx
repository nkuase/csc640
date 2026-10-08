// High-level feature: React with TypeScript
import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

// High-level feature: TypeScript interface
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// High-level feature: React Functional Component with TypeScript
const App: React.FC = () => {
  // High-level feature: useState Hook with type annotation
  const [todos, setTodos] = useState<Todo[]>([]);

  // High-level feature: Type-safe event handlers
  const addTodo = (text: string): void => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false
    };
    
    // High-level feature: Immutable state update with spread operator
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number): void => {
    // High-level feature: Functional update with map
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number): void => {
    // High-level feature: Functional update with filter
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App (React + TypeScript)</h1>
        
        {/* High-level feature: Component composition */}
        <TodoInput onAdd={addTodo} />
        
        {/* High-level feature: Props passing */}
        <TodoList 
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
};

export default App;
