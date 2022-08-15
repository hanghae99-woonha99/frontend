import "./App.css";
//import { RESP } from "./response";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import SignIn from "./pages/SignIn";
import Write from "./pages/Write";
import Update from "./pages/Update";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Login from "./pages/Login";

const App = () => {
  // console.log(RESP);
  // console.log(RESP.AUTH_POSTS[0].data.imgUrl);

  // const [state, setState] = useState("스태이트")

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