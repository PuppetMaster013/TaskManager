import React,{useState} from 'react'
import NumericTimer from './NumericTimer'
import { StyledClock } from './PomodoTimer.style'

const PomodoroTimer = () => {

    const [message, setMessage] = useState("keep working")

    const handleWorkEnd = ()=>{
        setMessage("rest for a while")
        alert("take a break")
    }
    const handleBreakEnd = ()=>{
        setMessage("keep working")
        alert("return to work")
    }

  return (
       <StyledClock>
       <NumericTimer workEnd={handleWorkEnd} breakEnd={handleBreakEnd}/>
       <div style={{color:"white"}}>{message}</div>
       </StyledClock>
    )
}

export default PomodoroTimer