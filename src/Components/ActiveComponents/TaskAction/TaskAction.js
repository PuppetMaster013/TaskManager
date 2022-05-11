import React from 'react'
import { StyledAction } from './TaskAction.style'

function TaskAction({actionTitle}) {


  return (
    <StyledAction>
        {actionTitle}
    </StyledAction>
  )
}

export default TaskAction