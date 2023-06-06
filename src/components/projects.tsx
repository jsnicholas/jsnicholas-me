import Card from "./card";
import shortlyImg from "../assets/images/shortly-desktop.png";

function Projects() {
  return (
    <section id="projects">
      <Card
        imageURL={shortlyImg}
        imageAlt="A screenshot of the Shortly site."
        cardTitle="Shortly"
        cardDesc="A link shortening service"
        githubLink="https://google.com"
        demoLink=""
      />
      <Card
        imageURL={shortlyImg}
        imageAlt="A screenshot of the Shortly site."
        cardTitle="Shortly"
        cardDesc="A link shortening service"
        githubLink="https://google.com"
        demoLink=""
      />
    </section>
  );
}
export default Projects;
