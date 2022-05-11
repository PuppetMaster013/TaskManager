import React from "react";
import { StyledActiveTask } from "../../Components/ActiveComponents/ActiveTaskTitle.style";
import TaskActionContainer from "../../Components/ActiveComponents/TaskAction/TaskActionContainer";
import PomodoroTimer from "../../Components/Timer/PomodoroTimer";
import {
  PageContainer,
  StyledActiveContainer,
  StyledHompage,
} from "./CommonPage.style";

function ActiveTaskPage() {
  return (
    <StyledHompage>
      <PageContainer>
        <StyledActiveContainer>
          <StyledActiveTask>Finish Redux</StyledActiveTask>
          <PomodoroTimer />
          <TaskActionContainer/>
        </StyledActiveContainer>
      </PageContainer>
    </StyledHompage>
  );
}

export default ActiveTaskPage;
