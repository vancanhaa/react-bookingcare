import { Route, Routes } from "react-router";
import CustomScrollbars from "./components/custom-scrollbars/CustomScrollbars";
import { ROUTE } from "./constants";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <div className="App">
      <CustomScrollbars style={{ width: "100%", height: "100vh" }}>
        <Routes>
          <Route path={ROUTE.HOME} element={<Home />} />
          <Route path={ROUTE.LOGIN} element={<Login />} />
          <Route path={ROUTE.REGISTER} element={<Register />} />
        </Routes>
      </CustomScrollbars>
    </div>
  );
}

export default App;
