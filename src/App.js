import "./App.css";
<<<<<<< HEAD
//import { RESP } from "./response";
import { Route, Routes } from "react-router-dom";
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
>>>>>>> 2cca7eb9ebf72bbf4d6d711b55dc87cbafc48664
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import SignIn from "./pages/SignIn";
import Write from "./pages/Write";
import Update from "./pages/Update";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Login from "./pages/Login";

const App = () => {

  return (
    <>
      <Header />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
            <Route path="/write" element={<Write />} />
            <Route path="/update" element={<Update />} />
          </Route>
        </Routes>
    </>    
  );
}

export default App;