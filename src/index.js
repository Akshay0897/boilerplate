import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "@babel/polyfill"
import DefaultErrorBoundry from "./DefaultErrorBoundry"

ReactDOM.render(
  <DefaultErrorBoundry>
    <App />
  </DefaultErrorBoundry>,
  document.getElementById("root")
)
