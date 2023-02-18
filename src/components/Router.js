import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Recode from "routes/Recode";
import Calender from "components/Calender";
import RecodeForm from "components/RecodeForm";
import Detail from "components/Detail";

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <Calender />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/recode">
              <Recode userObj={userObj} />
            </Route>
            <Route exact path="/recodeForm">
              <RecodeForm />
            </Route>
            <Route exact path="/detail">
              <Detail />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
