import React from "react";
import "./App.scss";
import SearchInput from "./components/SearchInput/SearchInput";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <SearchInput />
      <Hero />
    </div>
  );
}

export default App;
