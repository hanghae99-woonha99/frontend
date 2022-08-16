import React, { useState } from "react";
import "./App.css";
import { RESP } from "./response";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import SignUp from "./pages/Signup";
import Write from "./pages/Write";
import Update from "./pages/Update";
import Header from "./components/Header";
import Layout from "./components/Layout";

const App = () => {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/write" element={<Write />} />
            <Route path="/update" element={<Update />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;