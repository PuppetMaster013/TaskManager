import styled from "styled-components";

export const StyledTask = styled.div`
  /* display: flex; */
  text-align: center;
  /* justify-content: space-between; */
  /* align-items: center; */
  position: relative;
  background: linear-gradient(90deg, black, #900000);
  color: white;
  padding: 0.5em;
  border-radius: 0.5em;
  cursor: pointer;

  &:hover::after {
    position: absolute;
    z-index: 1;
    background: black;
    color: white;
    opacity: 1;
    content: "you need to learn react because if you don't do it then you're going to face a lot of issues ";
    padding: 0.5em;
    border-radius: 0.5em;
    top: 100%;
    left: 50%;
    width: 95%;
    transform: translate(-50%);
    margin-top: 0.5em;
  }
`;

export const CheckMark = styled.div`
  position: relative;
  /* display: inline; */
  z-index: 0;
  /* width: 0.7em; */
  /* height: 0.7em; */
  /* background-color: green; */
`;
