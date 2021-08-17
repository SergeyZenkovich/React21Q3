import React, {useState} from "react";
import {Switch, Route} from "react-router-dom";
import styled from "styled-components";
import {motion, AnimatePresence} from "framer-motion";

import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import Header from "./Components/Header/Header";
import ErrorBlock from "./Components/ErrorComponent/ErrorComponent";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import {FetchObject} from "./interfaces/ComponentsInterfaces";
import {useTypedSelector} from "./hooks/useTypedSelector";
import HomePageWithRedux from "./Components/HomePageWithRedux/HomePageWithRedux";
import DetailsPageWithRedux from "./Components/DetailsPageWithRedux/DetailsPageWithRedux";

const MainComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const App: React.FC = (): JSX.Element => {
  const [activePage, setActivePage] = useState("Home");
  const [pageElements, setPageElements] = useState([] as FetchObject[]);
  const homeStateFromSelector = useTypedSelector((state) => state.home);
  const detailsStateFromSelector = useTypedSelector((state) => state.details);
  return (
    <div>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <MainComponent>
        <AnimatePresence>
          <Switch>
            <Route exact path="/about" render={() => <AboutPage setActivePage={setActivePage} />} />
            <Route
              exact
              path="/detailsDuplication/:id "
              render={() => <DetailsPage setActivePage={setActivePage} />}
            />
            <Route
              exact
              path="/homeDuplication"
              render={() => (
                <HomePage setActivePage={setActivePage} setPageElements={setPageElements} />
              )}
            />
            <Route
              exact
              path="/details/:id"
              render={() => (
                <DetailsPageWithRedux
                  detailsState={detailsStateFromSelector}
                  setActivePage={setActivePage}
                />
              )}
            />
            <Route
              exact
              path="/"
              render={() => (
                <HomePageWithRedux
                  setActivePage={setActivePage}
                  homeState={homeStateFromSelector}
                />
              )}
            />
            <Route path="/*" render={() => <ErrorBlock />} />
          </Switch>
        </AnimatePresence>
      </MainComponent>
    </div>
  );
};
export default App;
