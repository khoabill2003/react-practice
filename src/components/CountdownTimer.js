import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialMinutes }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60); // Chuyển đổi phút thành giây

  useEffect(() => {
    if (timeLeft <= 0) return; // Dừng lại nếu thời gian đã hết

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000); // Giảm thời gian mỗi giây

    return () => clearInterval(timerId); // Dọn dẹp khi component unmount
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>{formatTime(timeLeft)}</p>
      {timeLeft <= 0 && <p>Time's up!</p>}
    </div>
  );
};

export default CountdownTimer;