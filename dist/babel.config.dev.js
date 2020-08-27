"use strict"

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: ["last 2 versions", "not dead", "not < 2%", "not ie 11"],
        useBuiltIns: "entry",
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    "react-hot-loader/babel",
    "@babel/plugin-proposal-class-properties",
  ],
  env: {
    test: {
      plugins: ["dynamic-import-node"],
    },
  },
}
