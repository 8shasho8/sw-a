import Header from './Header'
import Comment from './Comment'
import Omikuji from './Omikuji'
import Counter from './Counter'
import { useState } from 'react';
import Timer from './Timer'
import './App.css'
import Message from './Message'

function App() {
  const [showTimer, setShowTimer] = useState(false);
  const toggleTimer = () => { setShowTimer(!showTimer); }

  const textStyle = { color: 'red', fontSize: 24 };

  return (
    <div>
      <Header firstName="Taro" lastName="Toyo" />
      {showTimer && <Timer />}
      <button onClick={toggleTimer}>{showTimer ? 'タイマーを非表示' : 'タイマーを表示'}</button>
      <Counter />

      <div className="App-container">
        <p className="text">Pure CSSを適用した例です</p>
        <Message />
        <p style={textStyle}>インラインスタイルを適用した例です</p>
      </div>

      {/* <Omikuji /> */}
    </div>
  )
}

export default App
