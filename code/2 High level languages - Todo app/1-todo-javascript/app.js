// Todos are stored in memory (a plain array of objects)
let todos = [];

// High-level feature: Arrow function + template literals + forEach
const renderTodos = () => {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = todo.completed ? 'completed' : '';
        
        // High-level feature: Template literal (multi-line + interpolation)
        li.innerHTML = `
            <span>${todo.text}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        li.querySelector('span').addEventListener('click', () => toggleTodo(index));
        li.querySelector('.delete-btn').addEventListener('click', () => deleteTodo(index));
        
        todoList.appendChild(li);
    });
};

const addTodo = () => {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    
    if (text === '') {
        alert('Please enter a task!');
        return;
    }
    
    // High-level feature: Object shorthand ({ text } is the same as { text: text })
    const newTodo = { text, completed: false, id: Date.now() };
    
    // High-level feature: Spread operator (creates a new array, no push)
    todos = [...todos, newTodo];
    
    input.value = '';
    renderTodos();
};

// High-level feature: Array.map + spread for an immutable update
const toggleTodo = (index) => {
    todos = todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
    );
    renderTodos();
};

// High-level feature: Array.filter to remove an element
const deleteTodo = (index) => {
    todos = todos.filter((_, i) => i !== index);
    renderTodos();
};

const initializeApp = () => {
    const addButton = document.getElementById('addButton');
    const input = document.getElementById('todoInput');
    
    addButton.addEventListener('click', addTodo);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    
    renderTodos();
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);
