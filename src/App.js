import React from "react";
import { ListStableKeys, ListUnstableKeys, ListNoKeys } from "./components";

function App() {
  return (
    <div className="App">
      <ListNoKeys />
      <ListUnstableKeys />
      <ListStableKeys />
    </div>
  );
}

export default App;
