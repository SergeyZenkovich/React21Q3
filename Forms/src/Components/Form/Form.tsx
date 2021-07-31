import React, {useState} from "react";
import {CardInterface} from "src/interfaces/ComponentsInterfaces";
import {findToday} from "../../utils/findToday";

const day = Date.now();

const Form = ({addCard}: {addCard: (obj: CardInterface) => void}): JSX.Element => {
  const [problemName, setProblemName] = useState("");
  const [date, setDate] = useState(findToday());
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
    <form action="" method="post">
      <input
        type="text"
        value={problemName}
        onChange={(e) => {
          setProblemName(e.target.value);
        }}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
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
      <p>Switcher</p>
      <input
        type="submit"
        value="Submit"
        onClick={(e) => {
          e.preventDefault();
          addCard(makeObject());
          resetForm();
        }}
      />
    </form>
  );
};
export default Form;
