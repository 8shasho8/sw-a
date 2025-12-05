const Omikuji = () => {
  const handleClick = () => {
    const items = ['大吉', '中吉', '小吉', '吉'];
    const index = Math.floor(Math.random() * items.length);
    alert(items[index] + 'です！');
  }
  return (
    <div>
      <h2>今日の運勢は？</h2>
      <button onClick={handleClick}>おみくじを引く</button>
    </div>
  );
}

export default Omikuji;