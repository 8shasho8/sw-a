const Cell = ({details, onUpdateFlag}) => {
  const cellStyle = {
    width: 40, height: 40, background: "lightgrey",
    borderWidth: 3, borderStyle: "outset", display: "flex",
    justifyContent: "center", alignItems: "center", cursor: "pointer"
  }

  // ▼ セルに表示する内容を決める関数
  const getCellDisplay = () => {
    if(!details.revealed) { return details.flagged ? '🚩' : null; }
    if(details.value === 'X') { return "💣"; }
    if(details.value === 0) { return null; }
    return details.value;
  }

  return(
    <div style={cellStyle} onContextMenu={onUpdateFlag}>
      {getCellDisplay()}
    </div>
  );
}

export default Cell;