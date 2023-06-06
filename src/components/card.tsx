function Card(props) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={props.imageURL} alt={props.imageAlt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.cardTitle}</h2>
        <p>{props.cardDesc}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-sm btn-primary" href={props.githubLink}>
            Github
          </a>
          <a className="btn btn-sm btn-primary" href={props.demoLink}>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
