import TodoItem from "../Todocomponents/typescript/appts";

export const fetchTodos = async (): Promise<TodoItem[]> => {
  const response = await fetch('http://localhost:5000/api/v2/todos');
  const data = await response.json();
  return data;
};

export const createTodo = async (task: string): Promise<TodoItem> => {
  const newTask = { task, done: false };
  const response = await fetch('http://localhost:5000/api/v2/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTask),
  });
  const savedTask = await response.json();
  return savedTask;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${'http://localhost:5000/api/v2/todos'}/${id}`, {
    method: 'DELETE',
  });
};

export const updateTodo = async (id: string, done: boolean): Promise<void> => {
  await fetch(`${'http://localhost:5000/api/v2/todos'}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ done }),
  });
};
