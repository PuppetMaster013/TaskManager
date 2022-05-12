import React, { useState, useEffect } from "react";

const NumericTimer = ({workEnd,breakEnd}) => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [workingPeriod, setWorkingPeriod] = useState(true);
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          //   this is time when the timer ends
          let minutes =0 ;
          if(workingPeriod){
              minutes = 4
              workEnd();
          }
          else{
              minutes =25;
              breakEnd();
          }
          let seconds = 59;
          setSeconds(seconds);
          setMinutes(minutes);
          setWorkingPeriod(!workingPeriod);
        }
      } else {
        //   this happens every time the second is not zero
        setSeconds(seconds - 1);
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
