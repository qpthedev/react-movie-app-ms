import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";
import App from "../src/Components/App";
import "./api";

dotenv.config();

ReactDOM.render(<App />, document.getElementById("root"));
