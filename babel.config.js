module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  plugins: [
    ["babel-plugin-auto-import", {
      declarations: [
        { default: "React", "path": "react" }
      ]
    }]
  ]
}
