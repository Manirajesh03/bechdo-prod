import { useSelector } from "react-redux";

const PrivateRoute = ({ component }) => {
  const storeData = useSelector((store) => store?.auth);
  console.log("storeData from PrivateRoute", storeData);
  let authenticatedUser = storeData?.isAuthenticated;

  return <>{authenticatedUser ? component : ""}</>;
};

export default PrivateRoute;
