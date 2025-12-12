import { useEffect } from 'react';

const Timer = () => {
  const callbackFunc = () => {
    const timer = setInterval(() => {
      console.log('タイマー実行中です⏰');
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log('タイマーを停止しました');
    }
  }

  useEffect(callbackFunc, []);

  return (<p>タイマーを開始しました</p>);
}

export default Timer;
