# Todo App - TypeScript Version

## Overview
This is a todo app built with TypeScript, adding static type checking to JavaScript.

## High-Level Features Demonstrated

### 1. Interface Definitions
```typescript
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
```

### 2. Type Annotations
```typescript
let todos: Todo[] = [];
const addTodo = (): void => { ... }
```

### 3. Type-Safe DOM Manipulation
```typescript
const input = document.getElementById('todoInput') as HTMLInputElement;
```

### 4. Type-Safe Event Handling
```typescript
input.addEventListener('keypress', (e: KeyboardEvent) => { ... });
```

### 5. Generic Types
```typescript
todos.map((todo: Todo, i: number): Todo => ...);
```

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Compile TypeScript to JavaScript:
   ```bash
   npm run build
   ```

3. Open `index.html` in a web browser

## Development
To watch for changes:
```bash
npm run watch
```
