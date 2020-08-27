import React, { Component } from "react"
import { hot } from "react-hot-loader"

const Warning = React.lazy(() => import("./Warning"))

class App extends Component {
  state = {
    count: 0,
  }

  render() {
    console.log("rendering ")
    return (
      <>
        <div>Hey there Akki !!!</div>
        <img src="as" />
        <h2 className={this.state.count > 12 ? "warning" : ""}>
          Count is : {this.state.count}
        </h2>
        <button
          type="button"
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
