import React from "react";
import portfolio from "../utils/portfolio";
import Card from "./ProjCard";

function Projects() {
  // console.log(portfolio);
  return (
    <div className="projects">
      {portfolio.map((info) => {
        return <Card portfolio={info} key={info._id} />;
      })}
    </div>
  );
}

export default Projects;
