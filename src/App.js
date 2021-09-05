import React, { Component } from "react"
import "./App.css"
import { Footer } from "./Footer"
import { Main } from "./Main"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{}}>
          <h1 className="title">Howdy 👋</h1>
          <h2>
            I'm Ellie Keen, a Front End Devleoper{" "}
            <span
              style={{ marginRight: 10 }}
              role="img"
              aria-labelledby="jsx-a11y/accessible-emoji"
            >
              👩‍💻
            </span>
            working in London{" "}
            <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
              🇬🇧
            </span>
          </h2>
          <p
            style={{
              color: "#999",
              lineHeight: 1.5,
              marginTop: "40px",
              marginBottom: "40px",
              maxWidth: 600,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Working on React & Redux Web Applications -
            <a
              href="https://www.thetrainline.com/"
              rel="noopener noreferrer"
              target="_blank"
              style={{ marginLeft: 4 }}
            >
              @Trainline
            </a>
          </p>
        </header>
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App

// WEBPACK FOOTER //
// ./src/App.js
