import React, { useEffect, useState } from "react";

function Timer() {
  const testTime = new Date();
  const [taskTime, setTaskTime] = useState("");
  const [firstHour, firstMinute, firstSecond] = [
    testTime.getHours(),
    testTime.getMinutes(),
    testTime.getSeconds(),
  ];
  useEffect(()=>{
    setTaskTime(`${firstHour}:${firstMinute}:${firstSecond}`)
  },[])
  setInterval(()=>{
    setTaskTime(`${firstHour}:${firstMinute}:${firstSecond}`);
  },1000)
  return (
    <>
      <div>Timer</div>
      <div >{taskTime}</div>
    </>
  );
}

export default Timer;
