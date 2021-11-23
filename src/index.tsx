import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainScene from "./scene/main";
import SelectScene from "./scene/selectPage";
import SearchScene from "./scene/searchPage";
import DetailScene from "./scene/detailPage";
import { Provider } from "react-redux";

import { createStore } from "redux";
import rootReducer from "./modules";
const store = createStore(rootReducer);
export interface areaCodeParam {
  id?: string;
}
export interface areaIdParam {
  id: string;
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={"/"} component={SelectScene}></Route>
          <Route path={`/main/:id`} component={MainScene}></Route>

          <Route path={`/main`} component={MainScene}></Route>

          <Route path={"/search/"} component={SearchScene}></Route>

          <Route path={"/detail/:id"} component={DetailScene}></Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
