// High-level feature: Interface definition
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

// High-level feature: Type annotation for arrays
let todos: Todo[] = [];

// High-level feature: Type annotations for function parameters and return types
const renderTodos = (): void => {
    const todoList = document.getElementById('todoList') as HTMLUListElement;
    todoList.innerHTML = '';
    
    // High-level feature: Type-safe array operations
    todos.forEach((todo: Todo, index: number) => {
        const li = document.createElement('li');
        li.className = todo.completed ? 'completed' : '';
        
        li.innerHTML = `
            <span>${todo.text}</span>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        
        // High-level feature: Type-safe event handling
        const span = li.querySelector('span') as HTMLSpanElement;
        span.addEventListener('click', () => toggleTodo(index));
        
        const deleteBtn = li.querySelector('.delete-btn') as HTMLButtonElement;
        deleteBtn.addEventListener('click', () => deleteTodo(index));
        
        todoList.appendChild(li);
    });
};

// High-level feature: Type annotations ensure type safety
const addTodo = (): void => {
    const input = document.getElementById('todoInput') as HTMLInputElement;
    const text: string = input.value.trim();
    
    if (text === '') {
        alert('Please enter a task!');
        return;
    }
    
    // High-level feature: Object type matches interface
    const newTodo: Todo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    
    // High-level feature: Spread operator with type safety
    todos = [...todos, newTodo];
    
    input.value = '';
    renderTodos();
};

// High-level feature: Type-safe parameter and operations
const toggleTodo = (index: number): void => {
    todos = todos.map((todo: Todo, i: number): Todo => 
        i === index ? { ...todo, completed: !todo.completed } : todo
    );
    renderTodos();
};

// High-level feature: Array filter with type inference
const deleteTodo = (index: number): void => {
    todos = todos.filter((_: Todo, i: number): boolean => i !== index);
    renderTodos();
};

// High-level feature: Type-safe DOM manipulation
const initializeApp = (): void => {
    const addButton = document.getElementById('addButton') as HTMLButtonElement;
    const input = document.getElementById('todoInput') as HTMLInputElement;
    
    addButton.addEventListener('click', addTodo);
    input.addEventListener('keypress', (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    
    renderTodos();
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);
