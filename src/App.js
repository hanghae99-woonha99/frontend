import React from "react";
import "./App.css";
import { RESP } from "./response";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import SignIn from "./pages/SignIn";
import Write from "./pages/Write";

function App() {
  console.log(RESP);
  console.log(RESP.AUTH_POSTS.data.imgUrl);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
