import ReactDOM from "react-dom";

import App from "./Components/App";
import AboutPageApp from "./Components/AboutPageApp.jsx";

const homePage = document.getElementById("home");



if (document.title === "Harmony| Talk & Hang Out") {
  ReactDOM.render(<App />, homePage);
} else if (document.title === "Why harmony is different") {
  ReactDOM.render(<App />, homePage);
}
