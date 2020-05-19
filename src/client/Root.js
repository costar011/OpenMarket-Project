import React from "react";
import App from "../components/App";
import { BrowserRouter } from "react-router-dom";

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

export default Root;
