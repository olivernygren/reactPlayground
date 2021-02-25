import React from "react";
import MasterView from "./MasterView";
import DetailView from "./DetailView";
import { Route, Switch } from "react-router-dom";

function ViewContainer() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={MasterView} />
      {/* <Route path="/:name" component={DetailView} /> */}
      <Route path="/forest" component={DetailView} />
      <Route path="/sky" component={DetailView} />
      <Route path="/desert" component={DetailView} />
    </Switch>
    </>
  ) 
}

export default ViewContainer;