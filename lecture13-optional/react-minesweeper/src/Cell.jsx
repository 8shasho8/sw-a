const Cell = ({ details, onUpdateFlag, onRevealCell }) => {
  const cellStyle = {
    width: 40,
    height: 40,
    background: "lightgrey",
    borderWidth: 3,
    // ▼ 修正点: オープン状態に応じてスタイルを切り替え
    borderStyle: details.revealed ? "inset" : "outset", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
  };

  const getCellDisplay = () => {
    if (!details.revealed) {
      return details.flagged ? '🚩' : null;
    }
    if (details.value === 'X') {
      return "💣";
    }
    if (details.value === 0) {
      return null;
    }
    return details.value;
  };

  return (
    <div 
      style={cellStyle} 
      onContextMenu={onUpdateFlag}
      // ▼ 修正点: 左クリック時に props で渡された関数を実行
      onClick={onRevealCell} 
    >
      {getCellDisplay()}
    </div>
  );
};

export default Cell;