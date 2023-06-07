import Card from "./card";
import shortlyImg from "../assets/images/shortly-desktop.png";
import laborhubImg from "../assets/images/LaborHub.png";
import fitmixImg from "../assets/images/fitmix_screenshot.png";
import adviceImg from "../assets/images/adviceproj.png";
import socialnetworkImg from "../assets/images/socialnetwork.jpg";
import gymImg from "../assets/images/gym_desktop.png";

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
          cardDesc={[
            "Shortly is a URL shortening service that uses the ",
            <a href="https://shrtco.de">shrtco.de</a>,
            " API.",
            <br />,
            "Built with Vite, React, TailwindCSS, and DaisyUI.",
          ]}
          githubLink="https://github.com/jsnicholas/shortly-url-shortener"
          demoLink="https://url-shortener-qk6r.vercel.app/"
        />
        <Card
          imageURL={laborhubImg}
          imageAlt="A screenshot of the laborhub site."
          cardTitle="LaborHub"
          cardDesc="LaborHub is a member management system for local unions. It allows members to check the due date for union dues, see organizational demographics, and contact their union representative. It can also be used by employees who wish to discreetly share and compare salaries and demographics.
        Built with ExpressJS, Node, Handlebars, MySQL."
          githubLink="https://github.com/jsnicholas/LaborHub"
          demoLink="https://laborhub.herokuapp.com/"
        />
        <Card
          imageURL={gymImg}
          imageAlt="A screenshot of the gym web app."
          cardTitle="Gym App"
          cardDesc="This React app was built as an example template page for an imagined gym. The client wanted to refresh their web presence with a new look that was elegant and easy to use on both mobile and desktop. By utilizing typescript, responsive and semantic page elements, and implementing @EdRoh's Figma design, this web app intends to fulfill the client's use case while also upgrading the project codebase to industry standards."
          githubLink="https://github.com/jsnicholas/gym-app-typescript"
          demoLink="https://gym-app-typescript-sage.vercel.app/"
        />
        <Card
          imageURL={fitmixImg}
          imageAlt="A screenshot of the fitmix app."
          cardTitle="FitMix"
          cardDesc="FitMix is a workout motivation app that leverages Spotify's music API and wger's
          workout API to provide the user with energetic music and exercises.
          Built with VanillaJS, HTML, CSS."
          githubLink="https://github.com/jsnicholas/FitMix"
          demoLink="https://jsnicholas.github.io/FitMix/"
        />
        <Card
          imageURL={adviceImg}
          imageAlt="A screenshot of the advice site."
          cardTitle="Advice Generator"
          cardDesc={[
            "This web app uses the ",
            <a href="http://api.adviceslip.com/">AdviceSlip API</a>,
            " to fetch a random piece of advice.",
            <br />,
            " Built with vanilla JS, HTML, and CSS.",
          ]}
          githubLink="https://github.com/jsnicholas/advice-generator-app-main"
          demoLink="https://advice-generator-app-main-kohl.vercel.app/"
        />
        <Card
          imageURL={socialnetworkImg}
          imageAlt="A screenshot of the social network API calls."
          cardTitle="Social Network API"
          cardDesc="An API for a social network back end that allows users to create microblog posts, add friends, and react to other posts. Built with Node, Express, MongoDB, and Mongoose."
          githubLink="https://github.com/jsnicholas/social-network-api"
          demoLink="https://drive.google.com/file/d/1ZfotZ_siCJhdO9lUIshrYeVigMn7smTF/view?usp=sharing"
        />
      </section>
    </>
  );
}
export default Projects;
