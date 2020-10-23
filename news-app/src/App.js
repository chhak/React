import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

function App() {
  return (
    <div>
      <Categories />
      <NewsList />
    </div>
  );
}

export default App;
