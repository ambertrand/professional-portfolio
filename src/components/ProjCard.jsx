const Card = ({ portfolio }) => {
  const { key, image, title, description, tech, deployed, github } = portfolio;

  return (
    <div className="projCard" key={key}>
      <img variant="top" className="projImg" src={image} alt={title} />
      <div className="card">
        <div className="card-body">
          <h5 className="card-header">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <strong>Tech Used:</strong> {tech}
          </p>
          <a
            className="projLink"
            href={deployed}
            target="_blank"
            rel="noreferrer"
          >
            Deployed App
          </a>
          <a
            className="projLink"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
