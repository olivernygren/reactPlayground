import React, { lazy, Suspense } from "react";
import MasterView from "./MasterView";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

// import DetailView from "./DetailView";
const DetailView = lazy(() => import('./DetailView'));

function ViewContainer() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/" component={MasterView} />
            {/* <Route path="/:name" component={DetailView} /> */}
            <Route path="/forest" component={(props: any) => <DetailView {...props}/>} />
            <Route path="/sky" component={(props: any) => <DetailView {...props}/>} />
            <Route path="/desert" component={(props: any) => <DetailView {...props}/>} />
          </Switch>
        </ErrorBoundary>
    </Suspense>
    </>
  ) 
}

export default ViewContainer;