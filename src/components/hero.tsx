import profileImg from "../assets/images/nick.jpg";
import linkedinIcon from "../assets/images/icons/linkedin.svg";
import githubIcon from "../assets/images/icons/github.svg";
import mediumIcon from "../assets/images/icons/medium.svg";

function Hero() {
  return (
    <main id="about" className="hero bg-base-200">
      <section className="max-w-2xl flex-col lg:flex-row">
        <div className="circle">
          <img
            src={profileImg}
            alt="A picture of Nick, the developer of this site."
          />
        </div>
        <p className="text-lg font-semibold">
          Hello, I'm Nick Johnson.{" "}
          <span className="gradientText">
            I am an Atlanta-based developer, storyteller, and educator.
          </span>{" "}
          My focus is to bring attention to and support the needs of teachers,
          LGBTQ+ folks, and neurodivergent people. My work has been featured at{" "}
          <a href="https://www.dragoncon.org/">Dragon*Con</a>, presented at{" "}
          <a href="https://www.iarslce.org/">IARSLCE</a>, and published in{" "}
          <a href="https://www.wussymag.com/">Wussy Mag</a>. I'd love to add
          your organization's name to this list. Drop me a line at{" "}
          <a href="mailto:jsnicholas@pm.me">jsnicholas@pm.me</a>
        </p>
        {/* <!-- social links --> */}
        <div className="socialLinks columns">
          <a href="https://www.linkedin.com/in/jsnicholas/">
            <img src={linkedinIcon} alt="LinkedIn Profile" />
          </a>
          <a href="http://github.com/jsnicholas">
            <img src={githubIcon} alt="GitHub Page" />
          </a>
          <a href="http://medium.com/@harmoniacodes">
            <img src={mediumIcon} alt="Medium Profile" />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Hero;
