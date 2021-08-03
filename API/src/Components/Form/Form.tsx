import React, {useState} from "react";
import {CardInterface} from "src/interfaces/ComponentsInterfaces";
import styled from "styled-components";
import {findToday} from "../../utils/findToday";
import {validate, ValidationResult} from "../../utils/validate";
import fontP from "../../assets/fonts/MavenPro-Regular.ttf";
import Switcher from "../Switcher/Switcher";

import {
  ErrorBlock,
  FormBlock,
  FormHeading,
  StyledForm,
  InputsBlock,
  StyledCardButton
} from "./FormStyling";

const Form = ({addCard}: {addCard: (obj: CardInterface) => void}): JSX.Element => {
  const [problemName, setProblemName] = useState("Test");
  const [problemFieldIsValid, setProblemFieldIsValid] = useState({valid: true} as ValidationResult);
  const [date, setDate] = useState(findToday());
  const [dateFieldIsValid, setDateFieldIsValid] = useState({valid: true} as ValidationResult);
  const [priority, setPriority] = useState("low");
  const [isFeedback, setIsFeedBack] = useState(true);
  const [switchState, setSwitchState] = useState(false);
  const [switcherCheck, setSwitcherCheck] = useState(false);

  const makeObject = (): CardInterface => {
    return {
      cardProblem: problemName,
      cardDate: date,
      cardPriority: priority,
      cardisRequestNeeded: isFeedback,
      production: switchState
    };
  };
  const resetForm = (): void => {
    setProblemName("Test");
    setDate(findToday());
    setPriority("low");
    setIsFeedBack(true);
    setSwitchState(true);
    setSwitcherCheck(false);
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
          <Switcher
            switchState={switchState}
            setSwitchState={setSwitchState}
            switcherCheck={switcherCheck}
            setSwitcherCheck={setSwitcherCheck}
          />
        </InputsBlock>

        <StyledCardButton
          type="submit"
          value="Submit"
          disabled={!problemFieldIsValid.valid || !dateFieldIsValid.valid}
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
