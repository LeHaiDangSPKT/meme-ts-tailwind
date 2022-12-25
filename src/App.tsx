import "./App.css";
import React from "react";

import Header from "./components/Header";
import ListMeme from "./components/ListMeme";

function App() {
  return (
    <div className="text-secondary">
      <Header />
      <div className="m-4">
        <ListMeme />
      </div>
    </div>
  );
}

export default App;
