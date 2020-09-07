import React from "react";
import "./App.css";
import Posts from "./Posts";
import Invoice from "./Invoice";

function App() {
  return (
    <div className="App">
      <p>Testing PDF generation</p>
      <Posts />
      <Invoice />
    </div>
  );
}

export default App;
