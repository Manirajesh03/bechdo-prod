import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import ViewProductDetails from "./components/ViewProductDetails";
import HomePage from "./components/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/viewDetails"
              element={<PrivateRoute component={<ViewProductDetails />} />}
            />
          </Routes>
        </div>
        <Footer />
        <a
          href="https://madewithloveinindia.org"
          className="made-with-love"
          target="_blank"
        >
          Made with{" "}
          <span
            aria-label="Love"
            style={{ color: "#f43f5e", fontSize: "24px" }}
          >
            &hearts;
          </span>{" "}
          in India
        </a>
      </div>
    </Provider>
  );
}

export default App;
