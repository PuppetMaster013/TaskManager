import React from "react";
import { Container } from "./NoteContainer.style";
import Task from "../Tasks/Task";

const NoteContainer = () => {
  return (
    <Container>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </Container>
  );
};

export default NoteContainer;
