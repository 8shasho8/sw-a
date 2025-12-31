import { useState, useEffect } from "react";
import createBoard from "./createBoard";
import Cell from "./Cell";

const Board = ({ row, col, mines }) => {
  const [gameData, setGameData] = useState({});
  const [resetGame, setResetGame] = useState(true);

  // --- 課題4：タイマー用のステート ---
  const [count, setCount] = useState(0); // 秒数
  const [startCount, setStartCount] = useState(false); // タイマーが動いているか

  // ゲームの初期化処理
  useEffect(() => {
    if (!resetGame) return;

    const newBoard = createBoard(row, col, mines);

    setGameData({
      board: newBoard,
      gameStatus: 'Game in Progress',
      cellsWithoutMines: row * col - mines,
      numOfMines: mines
    });

    // --- リセット時にタイマーも初期化 ---
    setCount(0);
    setStartCount(false);
    setResetGame(false);

  }, [resetGame, row, col, mines]);

  // --- 課題4：タイマー機能のロジック ---
  useEffect(() => {
    let interval;
    if (!startCount) return () => {};

    interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [startCount]);

  // ▼ 隣接する空白マスを再帰的にオープンする関数
  const revealEmpty = (x, y, data) => {
    if (data.board[x][y].revealed) return data;

    data.board[x][y].revealed = true;
    data.cellsWithoutMines--;

    if (data.cellsWithoutMines === 0) {
      data.gameStatus = 'You Win';
      setStartCount(false); // 勝利時にタイマー停止
    }

    if (data.board[x][y].value === 0) {
      for (let y2 = Math.max(y - 1, 0); y2 < Math.min(y + 2, col); y2++) {
        for (let x2 = Math.max(x - 1, 0); x2 < Math.min(x + 2, row); x2++) {
          if (x2 !== x || y2 !== y) {
            revealEmpty(x2, y2, data);
          }
        }
      }
    }
    return data;
  };

  const handleRevealCell = (x, y) => {
    if (gameData.gameStatus === 'You Lost' || gameData.gameStatus === 'You Win') return;
    if (gameData.board[x][y].revealed || gameData.board[x][y].flagged) return;

    // --- 初めてセルをクリックした時にタイマーを開始 ---
    if (!startCount) {
      setStartCount(true);
    }

    const newGameData = { ...gameData };

    if (newGameData.board[x][y].value === 'X') {
      newGameData.board.forEach((r) => {
        r.forEach((cell) => {
          if (cell.value === 'X') cell.revealed = true;
        });
      });
      newGameData.gameStatus = 'You Lost';
      setStartCount(false); // 敗北時にタイマー停止
    } 
    else if (newGameData.board[x][y].value === 0) {
      const newRevealedData = revealEmpty(x, y, newGameData);
      setGameData({ ...newRevealedData });
      return;
    } 
    else {
      newGameData.board[x][y].revealed = true;
      newGameData.cellsWithoutMines--;
      if (newGameData.cellsWithoutMines === 0) {
        newGameData.gameStatus = 'You Win';
        setStartCount(false); // 勝利時にタイマー停止
      }
    }

    setGameData(newGameData);
  };

  const handleUpdateFlag = (e, x, y) => {
    e.preventDefault();
    if (gameData.gameStatus === 'You Lost' || gameData.gameStatus === 'You Win') return;
    if (gameData.board[x][y].revealed) return;

    // 旗を立てた時もゲーム開始とみなす場合はここでも setStartCount(true)
    if (!startCount) setStartCount(true);

    setGameData((prev) => {
      const newBoard = [...prev.board];
      const newFlag = !newBoard[x][y].flagged;
      let newNumOfMines = prev.numOfMines;
      newFlag ? newNumOfMines-- : newNumOfMines++;
      newBoard[x][y].flagged = newFlag;

      return { ...prev, numOfMines: newNumOfMines, board: newBoard };
    });
  };

  if (!gameData.board) return <div>Loading...</div>;

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        🚩 {gameData.numOfMines} &nbsp;&nbsp;
        {/* --- タイマーの表示 --- */}
        ⏰ {count} &nbsp;&nbsp;
        <button onClick={() => setResetGame(true)}>Reset</button>
      </div>
      <div>Game Status: {gameData.gameStatus}</div>
      <div>
        {gameData.board.map((singleRow, index1) => (
          <div style={{ display: 'flex' }} key={index1}>
            {singleRow.map((singleCell, index2) => (
              <Cell 
                details={singleCell} 
                onUpdateFlag={(e) => handleUpdateFlag(e, singleCell.x, singleCell.y)} 
                onRevealCell={() => handleRevealCell(singleCell.x, singleCell.y)}
                key={index2} 
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;