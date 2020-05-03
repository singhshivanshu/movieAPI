import React from "react";

import "./App.css";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";

import { Switch, Route } from "react-router-dom";
import VideoPlayer from "./Videoplayer";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/videoplayer/:id" component={VideoPlayer} />
        <Route exact path="/search" component={Search} />
        <Route path="/videoplayer/search" component={Search} />
        
      </Switch>
    </div>
  );
}

export default App;
