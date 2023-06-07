import { ReactNode } from "react";

// define types for each value
type CardProps = {
  imageURL: string;
  imageAlt: string;
  cardTitle: string;
  cardDesc: string | ReactNode;
  githubLink: string;
  demoLink: string;
};
// describe which parameters to expect
// ensure that we are receiving correct data
const Card = (props: CardProps) => {
  const { imageURL, imageAlt, cardTitle, cardDesc, githubLink, demoLink } =
    props;
  // card template
  return (
    <div className="card w-responsive bg-base-100 shadow-xl">
      <figure>
        <img src={imageURL} alt={imageAlt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardDesc}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-sm btn-outline btn-secondary" href={githubLink}>
            Github
          </a>
          <a className="btn btn-sm btn-outline btn-secondary" href={demoLink}>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
