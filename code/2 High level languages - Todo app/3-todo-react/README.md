# Todo App - React + TypeScript Version

## Overview
This is a todo app built with React and TypeScript, demonstrating component-based architecture and modern React patterns.

## High-Level Features Demonstrated

### 1. React Functional Components
```typescript
const App: React.FC = () => { ... }
```

### 2. React Hooks (useState)
```typescript
const [todos, setTodos] = useState<Todo[]>([]);
```

### 3. Component Composition
```typescript
<TodoInput onAdd={addTodo} />
<TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
```

### 4. Props and Props Interface
```typescript
interface TodoInputProps {
  onAdd: (text: string) => void;
}
```

### 5. Controlled Components
```typescript
<input value={text} onChange={handleChange} />
```

### 6. List Rendering with Keys
```typescript
{todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
```

### 7. Conditional Rendering
```typescript
{todos.length === 0 && <li>No tasks yet!</li>}
```

## Project Structure
```
3-todo-react/
├── App.tsx              # Main app component
├── App.css              # Styles
├── main.tsx             # Entry point
├── index.html           # HTML template
└── components/
    ├── TodoInput.tsx    # Input component
    ├── TodoList.tsx     # List component
    └── TodoItem.tsx     # Item component
```

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open browser to `http://localhost:5173`

## Build for Production
```bash
npm run build
```
