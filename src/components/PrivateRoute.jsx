import { useSelector } from "react-redux";

const PrivateRoute = ({ component }) => {
  const storeData = useSelector((store) => store?.auth);
  let authenticatedUser = storeData?.isAuthenticated;

  return <>{authenticatedUser ? component : ""}</>;
};

export default PrivateRoute;
