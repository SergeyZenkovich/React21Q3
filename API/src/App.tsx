import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import styled from "styled-components";

import {URLs} from "./interfaces/ComponentsInterfaces";
import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import Header from "./Components/Header/Header";

const App = (): JSX.Element => {
  const [activePage, setActivePage] = useState("Home");

  return (
    <div>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main>
        <Switch>
          <Route path="/about" render={() => <AboutPage />} />
          <Route path="/" render={() => <HomePage />} />
        </Switch>
      </main>
    </div>
  );
};
export default App;
