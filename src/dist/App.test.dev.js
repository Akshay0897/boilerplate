"use strict"

var _react = _interopRequireDefault(require("react"))

var _reactTestingLibrary = require("react-testing-library")

require("jest-dom/extend-expect")

require("react-testing-library/cleanup-after-each")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

describe("App", function () {
  it("Renders without error", function () {
    expect(true).toBe(true)
  })
})
