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
    setTaskTime(`${firstMinute}:${firstSecond}`)
  },[])
  function contDown(endTimeSeconds){
    
  }
  setInterval(()=>{
    clearInterval();
    setTaskTime(`${testTime.getMinutes()}:${testTime.getSeconds()}`);
  },1000)
//   console.log(firstSecond)
  return (
    <>
      {/* <div>Timer</div> */}
      <div style={{color:"white",fontSize:"3em",fontFamily:"monospace"}}>{taskTime}</div>
    </>
  );
}

export default Timer;
