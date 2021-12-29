import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes as RRRoutes, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <RRRoutes>
        <Route path="/" element={<Home />}></Route>
      </RRRoutes>
    </BrowserRouter>
  );
};

export default Routes;
