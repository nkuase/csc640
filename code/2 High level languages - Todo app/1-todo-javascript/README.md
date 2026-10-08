# Todo App - JavaScript Version

## Overview
This is a todo app built with plain modern JavaScript (ES6+). There is no build step: just open `index.html` in a browser.

## High-Level Features Demonstrated

### 1. Arrow Functions
```javascript
const addTodo = () => { ... };
```

### 2. Template Literals
```javascript
li.innerHTML = `
    <span>${todo.text}</span>
    <button class="delete-btn">Delete</button>
`;
```

### 3. Object Shorthand
```javascript
const newTodo = { text, completed: false, id: Date.now() };
```

### 4. Spread Operator
```javascript
todos = [...todos, newTodo];
```

### 5. Array Methods (Functional Programming)
```javascript
todos = todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo);
todos = todos.filter((_, i) => i !== index);
todos.forEach((todo, index) => { ... });
```

## How to Run

Open `index.html` in a web browser. No installation is needed.

## Next Step
See `../2-todo-typescript` for the same app with static types.
