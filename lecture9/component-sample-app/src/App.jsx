import Header from './Header'
import Comment from './Comment'
import Omikuji from './Omikuji'
import Counter from './Counter'
import { useState } from 'react';
import Timer from './Timer'
function App() {
  const [showTimer, setShowTimer] = useState(false);
  const toggleTimer = () => { setShowTimer(!showTimer); }

  return (
    <div>
      <Header firstName="Taro" lastName="Toyo" />
      {showTimer && <Timer />}
      <button onClick={toggleTimer}>{showTimer ? 'タイマーを非表示' : 'タイマーを表示'}</button>
      <Counter />
      {/* <Omikuji /> */}
      </div>
  )
}

export default App
