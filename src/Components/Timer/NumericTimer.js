import React, { useState,useEffect } from "react";

const NumericTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
      let interval = setInterval(() => {
          clearInterval(interval)
          if(seconds===0){
              if(minutes!==0){
                    setSeconds(59);
                    setMinutes(minutes-1);
              }
              else{
                  
              }
          }
          else{
              setSeconds(seconds-1)
          }
      }, 1000);
  }, [seconds]);

  return (
    <div style={{ color: "white", fontSize: "3rem", fontFamily: "monospace" }}>
      {timerMinutes}:{timerSeconds}
    </div>
  );
};

export default NumericTimer;
