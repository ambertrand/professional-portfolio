import React from "react";
import { PortfolioItem } from "../types/portfolio";

type ProjCardProps = {
  portfolio: PortfolioItem;
};

const Card: React.FC<ProjCardProps> = ({ portfolio }) => {
  const { id, image, title, description, tech, deployed, github } = portfolio;
  const hasDeployed = Boolean(deployed);

  return (
    <article className="projCard" aria-labelledby={`proj-title-${id}`}>
      {/* <img className="projImg" src={image} alt={`${title} screenshot`} loading="lazy" /> */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-header" id={`proj-title-${id}`}>
            {title}
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <strong>Tech Used:</strong> {tech}
          </p>
          {hasDeployed ? (
            <a
              className="projLink"
              href={deployed}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed App
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <button className="projLink projLink--disabled" type="button" disabled>
              Deployed App
            </button>
          )}
          {/* <a
            className="projLink"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
            <span className="sr-only"> (opens in a new tab)</span>
          </a> */}
        </div>
      </div>
    </article>
  );
};

export default React.memo(Card);
