import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { auth } from "./firebase";
import { setUser } from "./redux/action";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Home />} path={"/"} />
          <Route element={<Login />} path={"/login"} />
          <Route element={<Registration />} path={"/registration"} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
