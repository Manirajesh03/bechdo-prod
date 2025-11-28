import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import userIcon from "../assets/user.png";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../redux/actions";

const Navbar = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const isLogin = useSelector((store) => store?.auth?.isAuthenticated);
  const [isLoggedIn, setIsLoggedIn] = useState(isLogin);

  const dispatch = useDispatch();
  console.log(isLogin, "isLogin");
  const navigate = useNavigate();

  const loginClickHandler = () => {
    console.log("Login clicked");
    navigate("/signup");

    if (isLogin) {
      dispatch(logoutAction());
      console.log(isLogin, "test login");
    } else {
      dispatch(loginAction());
    }
  };

  const backToHome = () => {
    navigate("/");
  };

  const userClickHandler = () => {
    console.log("inside dialog");
    setOpenDialog((prev) => !prev);
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <h2 className="logo" onClick={backToHome}>
          SastaDealz
          <span className="tagline">Why Pay More?</span>
        </h2>
      </div>

      <div className="profile-block">
        <img src={userIcon} alt="user-icon" onClick={userClickHandler} />
        <Button
          name={isLogin ? "Logout" : "Login"}
          onClick={loginClickHandler}
        />
      </div>
      {openDialog && (
        <div className="user-dialog">
          <ul>
            <li>Your Profile</li>
            <li>Settings</li>
            <li>Settings</li>
            <li>Settings</li>
            <li>Settings</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
