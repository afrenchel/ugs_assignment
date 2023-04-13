import React from "react";
import "./App.css";
import BlogList from "./components/BlogList";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>List of posts</h1>
      </header>
      <BlogList />
    </div>
  );
};

export default App;
