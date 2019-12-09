import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";

import TestBoard from "views/TestBoard.jsx";
import "assets/scss/TestBoard.scss";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <TestBoard>
      </TestBoard>
    </Switch>
  </Router>,
  document.getElementById("root")
);
