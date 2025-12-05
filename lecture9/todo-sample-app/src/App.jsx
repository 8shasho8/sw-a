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
  return (
    <div className="App">
      <Header firstName="Taro" lastName="Toyo" />
      <div className="App-title">ToDo管理アプリ</div>
      <div className="App-content">
        <TodoInput />
        <TodoList todos={todos} />
      </div>
    </div>
  )
}

export default App
