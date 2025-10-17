import React, { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
  const intervalRef = useRef(null); 

  
  useEffect(() => {
  console.log("isRunning changed:", isRunning); 

  if (isRunning) {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  } else {
    clearInterval(intervalRef.current);
  }

  return () => clearInterval(intervalRef.current);
}, [isRunning]);
  
  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  
  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Stopwatch</h2>
      <div style={{ fontSize: "3rem", margin: "20px 0" }}>
        {formatTime(time)}
      </div>
      <button onClick={handleStartStop} style={{ marginRight: "10px" }}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
