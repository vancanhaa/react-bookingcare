import { Outlet, Route, Routes } from "react-router";
import CustomScrollbars from "./components/custom-scrollbars/CustomScrollbars";
import { ROUTE } from "./constants";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ProtectedRouteAdmin from "./layouts/ProtectedRouteAdmin";
import System from "./pages/system/System";
import UserManage from "./pages/system/user-manage/UserManage";
import ProductManage from "./pages/system/product-manage/ProductManage";

function App() {
  return (
    <div className="App">
      <CustomScrollbars style={{ width: "100%", height: "100vh" }}>
        <Routes>
          <Route path={ROUTE.HOME} element={<Home />} />
          <Route path={ROUTE.LOGIN} element={<Login />} />
          <Route path={ROUTE.REGISTER} element={<Register />} />
          <Route
            path={ROUTE.SYSTEM}
            element={
              <ProtectedRouteAdmin>
                <System />
              </ProtectedRouteAdmin>
            }
          >
            <Route index element={<UserManage />} />
            <Route path="/system/user-manage" element={<UserManage />} />
            <Route path="/system/product-manage" element={<ProductManage />} />
          </Route>
        </Routes>
      </CustomScrollbars>
    </div>
  );
}

export default App;
