import React from "react";
import styled from "styled-components";
import fontP from "../../assets/fonts/MavenPro-Regular.ttf";

export const ErrorBlock = styled.div`
  background-color: #c24237;
  color: #fff;
`;
export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #000a;
  margin-bottom: 10px;
  padding: 10px 0;
`;
export const FormHeading = styled.h3`
  @font-face {
    font-family: "CardTextFont";
    src: url(${fontP});
  }
  padding: 0;
  margin: 10px 0;
  font-family: "CardTextFont";
  font-size: 2.5em;
  color: #fff;
  text-align: center;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
export const InputsBlock = styled.div`
  @font-face {
    font-family: "CardTextFont";
    src: url(${fontP});
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: felx-start;
  width: 70%;
  padding: 0 10px;
  font-family: "CardTextFont";
  font-size: 20px;
  & input,
  & select {
    margin: 10px 0;
    height: 40px;
    font-family: "CardTextFont";
    font-size: 20px;
    border: none;
    outline: none;
  }
  & input {
    height: 40px;
    padding: 0 5px 0 10px;
    font-size: 19px;
  }
  & input[type="checkbox"] {
    width: 30px;
    height: 30px;
  }
`;
export const StyledCardButton = styled.input`
  @font-face {
    font-family: "CardTextFont";
    src: url(${fontP});
  }
  width: 150px;
  height: 45px;
  margin: 0 10px;
  font-family: "CardTextFont";
  border: none;
  font-size: 1em;
  border-radius: 3px;
  background-color: #ddde;
  &:hover {
    cursor: pointer;
    background-color: #eeef;
  }
`;
