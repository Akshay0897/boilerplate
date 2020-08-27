import React, { Component } from "react"
import "./styles.css"
import { hot } from "react-hot-loader"
const Warning = React.lazy(() => import("./Warning"))

class App extends Component {
  state = {
    count: 0,
  }
  render() {
    return (
      <>
        <div>Hey there Akki !!!</div>
        <img src="" alt="not image bruh" />
        <h2 className={this.state.count > 12 ? "warning" : ""}>
          Count is : {this.state.count}
        </h2>
        <button
          onClick={() =>
            this.setState({ ...this.state, count: this.state.count + 2 })
          }
        >
          ++
        </button>
        {this.state.count > 12 ? (
          <React.Suspense fallback={null}>
            {" "}
            <Warning />{" "}
          </React.Suspense>
        ) : (
          ""
        )}
      </>
    )
  }
}

export default hot(module)(App)
