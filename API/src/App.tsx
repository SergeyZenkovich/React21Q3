import React, {useEffect, useState} from "react";
import {Switch, Route, useHistory} from "react-router-dom";
import styled from "styled-components";

import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import Header from "./Components/Header/Header";
import ErrorBlock from "./Components/ErrorComponent/ErrorComponent";

const MainComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const App = (): JSX.Element => {
  const [activePage, setActivePage] = useState("Home");

  return (
    <div>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <MainComponent>
        <Switch>
          <Route exact path="/about" render={() => <AboutPage setActivePage={setActivePage} />} />
          <Route exact path="/" render={() => <HomePage setActivePage={setActivePage} />} />
          <Route path="/*" render={() => <ErrorBlock />} />
        </Switch>
      </MainComponent>
    </div>
  );
};
export default App;
