
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight, Mail } from "lucide-react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-glow"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <div className="availability">
          <span className="status-dot"></span>
          Open to opportunities
        </div>

        <p className="hero-intro">HELLO, I'M</p>

        <h1>
          Sinchana <span>R.</span>
        </h1>

        <h2>
          Java Full Stack <span>Developer</span>
        </h2>

        <p className="hero-description">
          I build responsive web applications and love turning
          ideas into practical digital experiences. Passionate
          about Java, Spring Boot, React and problem solving.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore My Work <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="secondary-btn">
            <Mail size={17} /> Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/sinchana1404"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/sinchana-r-973473282/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>

      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >

        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <div className="hero-card">
          <span className="code-symbol">{"< />"}</span>
          <h3>Building</h3>
          <h3 className="gradient-text">Digital Experiences</h3>
          <p>One line of code at a time.</p>
        </div>

      </motion.div>

      <div className="scroll-indicator">
        <span></span>
        Scroll to explore
      </div>

    </section>
  );
}

export default Hero;
