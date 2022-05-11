import React from 'react'
import TaskAction from './TaskAction'
import { StyledActionContainer } from './TaskAction.style'

function TaskActionContainer() {
  return (
    <StyledActionContainer>
        <TaskAction actionTitle="Completed"/>
        <TaskAction actionTitle="Interrupted"/>
        <TaskAction actionTitle="Call"/>
    </StyledActionContainer>
  )
}

export default TaskActionContainer