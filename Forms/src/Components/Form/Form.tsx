import React, {useState} from "react";
import {CardInterface} from "src/interfaces/ComponentsInterfaces";
import styled from "styled-components";
import {findToday} from "../../utils/findToday";
import {validate, ValidationResult} from "../../utils/validate";
import fontP from "../../assets/fonts/MavenPro-Regular.ttf";
import Switcher from "../Switcher/Switcher";

const day = Date.now();

const ErrorBlock = styled.div`
  background-color: #c24237;
  color: #fff;
`;
const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #000a;
  margin-bottom: 10px;
  padding: 10px 0;
`;
const FormHeading = styled.h3`
  color: #fff;
  padding: 0;
  margin: 10px 0;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
const InputsBlock = styled.div`
  @font-face {
    font-family: "CardTextFont";
    src: url(${fontP});
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: felx-start;
  width: 70%;
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
`;
export const StyledCardButton = styled.input`
  @font-face {
    font-family: "CardTextFont";
    src: url(${fontP});
  }
  width: 150px;
  height: 45px;
  margin: 0 5px;
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

const Form = ({addCard}: {addCard: (obj: CardInterface) => void}): JSX.Element => {
  const [problemName, setProblemName] = useState("");
  const [problemFieldIsValid, setProblemFieldIsValid] = useState({valid: true} as ValidationResult);
  const [date, setDate] = useState(findToday());
  const [dateFieldIsValid, setDateFieldIsValid] = useState({valid: true} as ValidationResult);
  const [priority, setPriority] = useState("low");
  const [isFeedback, setIsFeedBack] = useState(true);

  const makeObject = (): CardInterface => {
    return {
      cardProblem: problemName,
      cardDate: date,
      cardPriority: priority,
      cardisRequestNeeded: isFeedback
    };
  };
  const resetForm = (): void => {
    setProblemName("");
    setDate(findToday());
    setPriority("low");
    setIsFeedBack(true);
  };

  return (
    <FormBlock>
      <FormHeading>Register your Problem</FormHeading>
      <StyledForm action="" method="post">
        <InputsBlock>
          <label>Problem: </label>
          <input
            type="text"
            value={problemName}
            onChange={(e) => {
              setProblemName(e.target.value);
              setProblemFieldIsValid(validate("problem", e.target.value));
            }}
          />
          {problemFieldIsValid.valid ? null : (
            <ErrorBlock>{problemFieldIsValid.errorText}</ErrorBlock>
          )}
          <label>Choose the date: </label>
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setDateFieldIsValid(validate("date", e.target.value));
            }}
          />
          {dateFieldIsValid.valid ? null : <ErrorBlock>{dateFieldIsValid.errorText}</ErrorBlock>}
          <label>Choose problem priority:</label>
          <select
            name="priority"
            id="priority"
            value={priority}
            onChange={(e) => {
              setPriority(e.target.value);
            }}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="urgent">Urgent</option>
          </select>
          <label>Send me a request</label>
          <input
            type="checkbox"
            name=""
            id=""
            checked={isFeedback}
            onChange={() => {
              const newCheck = !isFeedback;
              setIsFeedBack(newCheck);
            }}
          />
          <label>Production or development</label>
          <Switcher />
        </InputsBlock>

        <StyledCardButton
          type="submit"
          value="Submit"
          onClick={(e) => {
            e.preventDefault();
            addCard(makeObject());
            resetForm();
          }}
        />
      </StyledForm>
    </FormBlock>
  );
};
export default Form;
