import { useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mode, setMode] = useState("login");
  const viewProductFlow = useSelector((store) => store?.viewProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initiateLogin = useFetch();

  const submitHandler = (e) => {
    e.preventDefault();
    const data = initiateLogin;
    console.log(data, "data");
    // dispatch(loginAction());
    // if (!viewProductFlow.length) {
    //   navigate("/");
    // } else {
    //   navigate("/viewDetails");
    // }
  };
  return (
    <form onSubmit={submitHandler} className="signup-form middle-content">
      {mode === "signup" && (
        <>
          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            id="lastName"
            required
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </>
      )}
      <label htmlFor="email">Email*</label>
      <input
        type="email"
        id="email"
        required
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password*</label>
      <input
        type="password"
        id="password"
        required
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {mode === "signup" && (
        <>
          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input
            type="password"
            id="confirmPassword"
            required
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </>
      )}
      <a href="#">Forgot Password</a>
      <Button
        name={mode === "signup" ? "Signup" : "Login"}
        type="button"
        onClick={() => console.log("Signup clicked")}
        styles={{ padding: "16px", borderRadius: "10px", marginTop: "20px" }}
      />
      <p>
        {mode === "login" ? (
          <>
            <span>New User? </span>
            <a onClick={() => setMode("signup")}>Signup</a>
          </>
        ) : (
          <>
            <span>Registered User? </span>
            <a onClick={() => setMode("login")}>Login</a>{" "}
          </>
        )}
      </p>
    </form>
  );
};

export default Signup;
