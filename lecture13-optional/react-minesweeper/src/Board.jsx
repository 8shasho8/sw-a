import { useState, useEffect } from "react";
import createBoard from "./createBoard";
import Cell from "./Cell";

const Board = ({ row, col, mines }) => {
  const [gameData, setGameData] = useState({});
  // リセット状態を管理するステートを追加
  const [resetGame, setResetGame] = useState(true);

  useEffect(() => {
    // --- useEffectの処理内容解説 ---
    
    // 1. リセットが必要なフラグ（resetGame）が true の時だけ実行する
    if (!resetGame) return;

    // 2. 指定された行・列・地雷数に基づいて、新しい盤面データ（2次元配列）を作成する
    const newBoard = createBoard(row, col, mines);

    // 3. ゲームの初期データをステートに保存する
    setGameData({
      board: newBoard,                    // 生成した盤面をセット
      gameStatus: 'Game in Progress',     // ステータスを「進行中」に初期化
      cellsWithoutMines: row * col - mines, // 勝利判定のため、地雷以外の総マス数を計算
      numOfMines: mines                   // 表示用の残り地雷数をセット
    });

    // 4. リセット処理が完了したので、フラグを false に戻して無限ループを防ぐ
    setResetGame(false);

    // resetGameフラグ、または盤面サイズの設定が変わった時に再実行する
  }, [resetGame, row, col, mines]);

  // ▼ 隣接する空白マスを再帰的にオープンする関数
  const revealEmpty = (x, y, data) => {
    if (data.board[x][y].revealed) return data;

    data.board[x][y].revealed = true;
    data.cellsWithoutMines--;

    if (data.cellsWithoutMines === 0) {
      data.gameStatus = 'You Win';
    }

    // 周辺に地雷がない場合、その周辺8マスを探索
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

    const newGameData = { ...gameData };

    if (newGameData.board[x][y].value === 'X') {
      newGameData.board.forEach((r) => {
        r.forEach((cell) => {
          if (cell.value === 'X') cell.revealed = true;
        });
      });
      newGameData.gameStatus = 'You Lost';
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
      }
    }

    setGameData(newGameData);
  };

  const handleUpdateFlag = (e, x, y) => {
    e.preventDefault();
    if (gameData.gameStatus === 'You Lost' || gameData.gameStatus === 'You Win') return;
    if (gameData.board[x][y].revealed) return;

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
      {/* リセットボタンの追加 */}
      <div style={{ marginBottom: '10px' }}>
        🚩 {gameData.numOfMines} &nbsp;&nbsp;
        <button onClick={() => setResetGame(true)}>Reset</button>
      </div>
      <div>Game Status: {gameData.gameStatus}</div>
      <div>
        {gameData.board.map((singleRow, index1) => {
          return (
            <div style={{ display: 'flex' }} key={index1}>
              {singleRow.map((singleCell, index2) => {
                return (
                  <Cell 
                    details={singleCell} 
                    onUpdateFlag={(e) => handleUpdateFlag(e, singleCell.x, singleCell.y)} 
                    onRevealCell={() => handleRevealCell(singleCell.x, singleCell.y)}
                    key={index2} 
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Board;