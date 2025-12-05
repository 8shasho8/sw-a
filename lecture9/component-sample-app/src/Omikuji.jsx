const Omikuji = () => {
  const handleClick = (name) => {
    const items = ['大吉', '中吉', '小吉', '吉', '凶'];
    const index = Math.floor(Math.random() * items.length);
    alert(name + 'さんの運勢は、' + items[index] + 'です');
  }
  return (
    <div>
      <h2>今日の運勢は？</h2>
      <button onClick={() => { handleClick('Toyo') }}>おみくじを引く</button>
    </div>
  );
}

export default Omikuji;