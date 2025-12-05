import { useState } from 'react';
import './App.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import Header from './Header';

function App() {
  const createId = () => Math.random().toString(36).substring(2);
  const initialTodos = [
    { id: createId(), text: 'React勉強', isFinished: true },
    { id: createId(), text: 'メール返信', isFinished: false },
    { id: createId(), text: 'レポート作成', isFinished: false }
  ];
  const [todos, setTodos] = useState(initialTodos);

  const handleAdd = (text) => {
    const newTodo = { id: createId(), text: text, isFinished: false };
    setTodos((prev) => [...prev, newTodo]);
  }

  const handleRemove = (deleteId) => {
    setTodos((prev) => prev.filter((t) => t.id !== deleteId));
  }

  const handleToggle = (toggleId) => {
    setTodos((prev) => prev.map((t) => (
      t.id === toggleId ? { ...t, isFinished: !t.isFinished } : t
    )));
  }

  return (
    <div className="App">
      <Header firstName="Taro" lastName="Toyo" />
      <div className="App-title">ToDo管理アプリ</div>
      <div className="App-content">
        <TodoInput onAdd={handleAdd} />
        <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
      </div>
    </div>
  )
}

export default App
