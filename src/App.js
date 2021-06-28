import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import Upload from "./Upload";



const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Gallery} />
        <Route exact path="/upload" component={Upload} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default App;