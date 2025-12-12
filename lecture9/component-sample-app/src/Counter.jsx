import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const [names, setNames] = useState([]);

  const handleUpdateClick = () => {
    setCount((prev) => prev + 1);
    const newNames = [...names, input];
    console.log('namesの要素', newNames);
    setNames(newNames);
    setInput('');
  }

  const handleResetClick = () => {
    console.log('リセットします');
    setCount(0);
    setNames([]);
    setInput('');
  }

  const handleChangeInput = (e) => { setInput(e.target.value); }

  return (
    <div style={{ padding: 10 }}>
      <input type="text" value={input} onChange={handleChangeInput} />
      <p>{count}回クリックしました</p>
      <button onClick={handleUpdateClick}>Update</button>
      <button onClick={handleResetClick}>Reset</button>
      <ul>
        {names.map((name, index) => {
          return <li key={index}>{name}</li>
        })}
      </ul>
    </div>
  );
}

export default Counter;
