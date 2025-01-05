import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./routers/CustomerRouters";
import { useDispatch, useSelector } from "react-redux";
import AdminPanel from "./Admin/AdminPanel";
import { getUser } from "./Redux/Auth/Action";

function App() {
  const {auth}=useSelector(store=>store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);
 
  return (
    <>
      <div>
        <Routes>
          <Route path="/*" element={<CustomerRouters />}></Route>
          {auth.user?.role==="ROLE_ADMIN" && <Route path="/admin/*" element={<AdminPanel />} />}
        </Routes>
      </div>

   
      
    </>
  );
}

export default App;
