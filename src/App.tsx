import React from "react";
import AllEmployees from "./components/AllEmployees";
import AllProjects from "./components/AllProjects";
import Salaries from "./components/Salaries";

function App() {
  return (
    <div>
      <h1>Projects mangement</h1>
      <hr />
      <AllProjects />
      <hr />
      <AllEmployees />
      <hr />
      <Salaries />
    </div>
  );
}

export default App;
