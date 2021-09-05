import React from "react"

const label = {
  fontSize: 12,
  color: "#999",
  textAlign: "left",
}

const column = {
  flex: 1,
  listStyleType: "none",
  textAlign: "left",
}

const item = {
  margin: "10px 0px",
}

const wrapper = {
  margin: "10px",
}

export const Main = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: 600,
      flex: "1",
      marginTop: 20,
      margin: "auto",
      borderTop: "1px solid #f2f2f2",
    }}
  >
    <div style={wrapper}>
      <h2 style={label}>Skills:</h2>
      <ul style={column}>
        <li style={item}>React (functional components, modern hooks, routing)</li>
        <li style={item}>HTML, CSS</li>
        <li style={item}>Javascript (ES6)</li>
        <li style={item}>TypeScript</li>
        <li style={item}>Github</li>
        <li style={item}>NextJS</li>
        <li style={item}>TeamCity</li>
        <li style={item}>Github</li>
        <li style={item}>New Relic</li>
      </ul>
    </div>
    <div style={wrapper}>
      <h2 style={label}>Previous Experience:</h2>
      <ul style={column}>
        <li style={item}>
          <a rel="noopener noreferrer" href="https://makers.tech/" target="_blank">
            Makers - 12 Week Software Development Bootcamp
          </a>
        </li>
        <li style={item}>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/makerclub/about/"
            target="_blank"
          >
            MakerClub - Working with a Startup teaching kids to code, make and create
          </a>
        </li>
        <li style={item}>
          <a
            rel="noopener noreferrer"
            href="https://teamtogether.io/freeformers-redirect"
            target="_blank"
          >
            FreeFormers - Digital skills training for corporate clients
          </a>
        </li>
      </ul>
    </div>
    <div style={wrapper}>
      <h2 style={label}>Interests</h2>
      <ul style={column}>
        <li style={item}>
          Music 🎹 5-a-side football ⚽ walking my Staffy, Manny 🐕
        </li>
      </ul>
    </div>
  </div>
)

// WEBPACK FOOTER //
// ./src/Main.js
