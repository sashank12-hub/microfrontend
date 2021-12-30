import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    el
  );
};
if (process.env.NODE_ENV === "development") {
  const devroot = document.getElementById("_marketing-dev-root");
  if (devroot) {
    mount(devroot);
  }
}
export { mount };
