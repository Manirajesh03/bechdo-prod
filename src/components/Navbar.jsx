import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import Button from "./Button";
import userIcon from "../assets/user.png";
import searchIcon from "../assets/search.png";
import closeIcon from "../assets/close.png";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../redux/actions";

const Navbar = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const isLogin = useSelector((store) => store?.auth?.isAuthenticated);
  const [searchBlock, setSearchBlock] = useState(false);

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

  const searchHandler = () => {
    setSearchBlock((prev) => !searchBlock);
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <h2 className="logo" onClick={backToHome}>
          SastaDealz
          <span className="tagline">Why Pay More?</span>
        </h2>
      </div>
      {searchBlock && <Search onBlur={() => setSearchBlock(false)} />}

      <div className="profile-block">
        <img
          src={searchBlock ? closeIcon : searchIcon}
          alt="user-icon"
          onClick={searchHandler}
        />
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
