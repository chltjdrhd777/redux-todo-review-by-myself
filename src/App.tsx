import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import about from "./routes/about";

function App() {
  return (
    <>
      <HashRouter>
        <Route path="/" exact component={Home}></Route>
        <Route path="/:id" component={about}></Route>
      </HashRouter>
    </>
  );
}

export default App;
