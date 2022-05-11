import React from 'react'
import NumericTimer from './NumericTimer'
import { StyledClock } from './PomodoTimer.style'
import Timer from './Timer'

const PomodoroTimer = () => {


  return (
       <StyledClock>
       <NumericTimer/>
       </StyledClock>
    )
}

export default PomodoroTimer