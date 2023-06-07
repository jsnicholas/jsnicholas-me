import linkedinIcon from "../assets/images/icons/linkedin.svg";
import githubIcon from "../assets/images/icons/github.svg";
import mediumIcon from "../assets/images/icons/medium.svg";

function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
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
        <p>
          copyright 2023
          <br />
          nick johnson
        </p>
      </div>
    </footer>
  );
}

export default Footer;
