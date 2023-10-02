import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutInitiate } from "../redux/action";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if (currentUser) {
      dispatch(logOutInitiate());
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return (
    <div>
      <h2>Welcome To Home Page</h2>
      <br />
      <button className="btn btn-danger" onClick={handleAuth}>
        Logout
      </button>
    </div>
  );
};

export default Home;
