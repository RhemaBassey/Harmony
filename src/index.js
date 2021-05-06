import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./Components/App";

const root = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
