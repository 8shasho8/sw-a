import { useState, useEffect } from "react";
import createBoard from "./createBoard";
import Cell from "./Cell";

const Board = ({row, col, mines}) => {
  const [gameData, setGameData] = useState({});

  useEffect(() => {
    const newBoard = createBoard(row, col, mines);
    console.log(newBoard);
    setGameData({
      board: newBoard,
      gameStatus: 'Game in Progress',
      cellsWithoutMines: row * col - mines,
      numOfMines: mines
    });
  }, []);

  // ▼ フラグ（旗）を管理する関数を追加
  const handleUpdateFlag = (e, x, y) => {
    e.preventDefault(); // 右クリックメニューが出ないようにする
    if(gameData.gameStatus === 'You Lost' || gameData.gameStatus === 'You Win') { return; }
    if(gameData.board[x][y].revealed) { return; }

    setGameData((prev) => {
      const newBoard = [...prev.board];
      const newFlag = !newBoard[x][y].flagged;
      let newNumOfMines = prev.numOfMines;
      
      // フラグを立てたら地雷カウントを減らし、外したら増やす
      newFlag ? newNumOfMines-- : newNumOfMines++;
      newBoard[x][y].flagged = newFlag;

      return {
        ...prev,
        numOfMines: newNumOfMines,
        board: newBoard
      }
    });
  }

  if(!gameData.board) { return <div>Loading...</div> }

  return(
    <div>
      {/* ▼ 残り地雷数とゲームステータスを表示 */}
      <div style={{marginBottom: "10px"}}>
        <div>残り地雷数: {gameData.numOfMines}</div>
        <div>Game Status: {gameData.gameStatus}</div>
      </div>
      
      <div>
        {gameData.board.map((singleRow, index1) => {
          return(
            <div style={{display:'flex'}} key={index1}>
              {
                singleRow.map((singleCell, index2) => {
                  return <Cell 
                    details={singleCell} 
                    key={index2} 
                    // ▼ 右クリック時の関数を渡す
                    onUpdateFlag={(e) => handleUpdateFlag(e, singleCell.x, singleCell.y)} 
                  />
                })
              }
            </div>
          )
        })}
      </div>
    </div>
  );
}
export default Board;