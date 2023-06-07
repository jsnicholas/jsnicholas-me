import Card from "./card";
import shortlyImg from "../assets/images/shortly-desktop.png";
import laborhubImg from "../assets/images/LaborHub.png";

function Projects() {
  return (
    <>
      <p id="projects" className="mb-6 text-3xl font-bold mx-4">
        Coding Projects
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 content-stretch">
        <Card
          imageURL={shortlyImg}
          imageAlt="A screenshot of the Shortly site."
          cardTitle="Shortly"
          cardDesc="A link shortening service"
          githubLink="https://google.com"
          demoLink=""
        />
        <Card
          imageURL={laborhubImg}
          imageAlt="A screenshot of the laborhub site."
          cardTitle="LaborHub"
          cardDesc="LaborHub is a member management system for local unions. It allows members to check the due date for union dues, see organizational demographics, and contact their union representative. It can also be used by employees who wish to discreetly share and compare salaries and demographics.
        Built with ExpressJS, Node, Handlebars"
          githubLink="https://github.com/jsnicholas/LaborHub"
          demoLink="https://laborhub.herokuapp.com/"
        />
      </section>
    </>
  );
}
export default Projects;
