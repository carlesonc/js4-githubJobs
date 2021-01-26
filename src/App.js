import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import JobDetailPage from "./pages/JobDetailPage";
import JobListPage from "./pages/JobListPage";

function App() {
  return (
    <div style={{ margin: 15 }}>
      <h1>GitHub Job Listing</h1>
      <Switch>
        <Route path="/js4-githubJobs/:id" component={JobDetailPage} />
        <Route path="/js4-githubJobs/" component={JobListPage} />
      </Switch>
    </div>
  );
}

export default App;
