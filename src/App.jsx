import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import ViewProductDetails from "./components/ViewProductDetails";
import HomePage from "./components/HomePage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/viewDetails"
            element={<PrivateRoute component={<ViewProductDetails />} />}
          />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
