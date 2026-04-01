import React from "react";
import portfolio from "../utils/portfolio";
import Card from "./ProjCard";

const Projects: React.FC = () => {
  return (
    <section className="projects" aria-label="Portfolio projects">
      {portfolio.map((info) => (
        <Card portfolio={info} key={info.id} />
      ))}
    </section>
  );
};

export default React.memo(Projects);
