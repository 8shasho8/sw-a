import { useState } from 'react';

const Omikuji = () => {
  const [username, setUsername] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');

  const handleClick = () => {
    const items = ['大吉', '中吉', '小吉', '吉', '凶'];
    const index = Math.floor(Math.random() * items.length);
    alert(username + 'さんの運勢は、' + items[index] + 'です');
    setUsername('');
    setBirthday('');
  }

  const handleChange = (event) => {
    console.log('event.target:', event.target);
    console.log("event.target.value:", event.target.value);
    setUsername(event.target.value);
  }

  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }

  return (
    <div>
      <h2>{username}さんの今日の運勢は？</h2>
      <h2>生年月日：{birthday}</h2>
      <h2>性別：{gender}</h2>
      <label>お名前: <input type="text" value={username} onChange={handleChange} /></label><br />
      <label>生年月日(yyyymmdd): <input type="text" value={birthday} onChange={handleBirthdayChange} /></label><br />
      <label>女性: <input type="radio" name="gender" value="女性" onChange={handleGenderChange} checked={gender === '女性'} /></label>
      <label>男性: <input type="radio" name="gender" value="男性" onChange={handleGenderChange} checked={gender === '男性'} /></label>
      <br />
      <button onClick={handleClick}>おみくじを引く</button>
    </div>
  );
}

export default Omikuji;