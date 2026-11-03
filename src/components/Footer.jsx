
import { Github, Mail, ArrowUp } from "lucide-react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#home" className="footer-logo">
          Sinchana<span>.</span>
        </a>

        <p>Building digital experiences, one line of code at a time.</p>

        <div className="footer-socials">
          <a
            href="https://github.com/sinchana1404"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={19} />
          </a>

          <a
            href="mailto:sinchanagowda1404@gmail.com"
            aria-label="Email"
          >
            <Mail size={19} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Sinchana R. All rights reserved.</span>

        <a href="#home" className="back-to-top">
          Back to top <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
