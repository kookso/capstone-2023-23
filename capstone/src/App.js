/* eslint-disable */

import { useState, Component } from "react";
import Header from "./component/HeaderBar";
import DataChart from "./component/DataChart";
import DataList from "./component/DataList";
import EmptyPage from "./component/EmptyPage";
import DataBox from "./component/DataBox";
import Login from "./component/Login";
import Alert from "./component/Alert";
import SignIn from "./component/SignIn";
import Home from "./component/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <Alert /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/datalist" element={<DataList />} />
          {/* <Route path="/DataChart/:id" element={<DataChart />} /> */}
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
