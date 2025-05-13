import { useCallback, useEffect, useState} from 'react';
import './App.css';
import Titles from './Todocomponents/Pageusename/Pagename';
import Tasknotify from './Todocomponents/Functionalities/Tasknotify';
import Listitem from './Todocomponents/Displaydata/Listitem';
import TodoItem from './Todocomponents/typescript/appts';

import { fetchTodos, createTodo, deleteTodo, updateTodo } from './Services/todo';

function App() {
  const [todolist, settodolist] = useState<TodoItem[]>([]);
  console.log(todolist);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [deletingTaskId, setDeletingTaskId] = useState<string | null>(null);

  useEffect(() => {
    const loadTodos = async () => {
      const data = await fetchTodos();
      settodolist(data);
    };
    loadTodos();
  }, []);

  const dataextract = useCallback(async (task: string) => {
    const savedTask = await createTodo(task);
    settodolist((list) => [...list, savedTask]);
  }, []);

  const handleTaskDelete = useCallback(async (id: string) => {
    const done = window.confirm('Are you sure you want to delete this task?');
    if (!done) {
      return; 
    }
    setDeletingTaskId(id);
    try {
      await deleteTodo(id);
      settodolist((prevList) => prevList.filter(task => task._id !== id));
    } catch {
      setErrorMessage('Failed to delete the task.');
    } finally {
      setDeletingTaskId(null);
    }
  }, []);
  


  const toggleTask = useCallback(async (id: string) => {
    const currentTask = todolist.find(task => task._id === id);
    if (!currentTask) return;
    const updatedDone = !currentTask.done;
    await updateTodo(id, updatedDone);
    settodolist((prevList) =>
      prevList.map(task => (task._id === id ? { ...task, done: updatedDone } : task))
    );
  }, [todolist]);


  const deleteAllTasks = async () => {
    await Promise.all(
      todolist.map(task => deleteTodo(task._id))
    );
    settodolist([]);
  };

  return (
    <div className='todofullapplication'>
      <Titles />
    {errorMessage && (
      <div style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>
        {errorMessage}
      </div>
    )}
      <Tasknotify dataextract={dataextract} />
      <Listitem todolist={todolist} deleteTask={handleTaskDelete} toggleTask={toggleTask} deleteAllTasks={deleteAllTasks} deletingTaskId={deletingTaskId} />
    </div>
  );
}

export default App;
