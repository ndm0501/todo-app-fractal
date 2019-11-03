import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "./components/Error";
import EditBucket from "./components/EditBucket";
import Navbar from "./components/Navbar";
import LandingComponent from "./components/LandingComponent";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App container my-4">
        <Switch>
          <Route exact path="/" component={LandingComponent} />
          <Route exact path="/home" component={LandingComponent} />
          <Route exact path="/add-todo" component={AddTodo} />
          <Route exact path="/add-bucket" component={EditBucket} />

          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
