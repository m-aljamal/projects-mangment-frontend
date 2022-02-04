import React from "react";
import AllEmployees from "./components/AllEmployees";
import AllProjects from "./components/AllProjects";

function App() {
  return (
    <div>
      <h1>Projects mangement</h1>
      <hr />
      <AllProjects />
      <hr />
      <AllEmployees />
      <hr />
    </div>
  );
}

export default App;
