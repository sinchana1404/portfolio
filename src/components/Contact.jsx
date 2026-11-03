
import { motion } from "framer-motion";
import { Mail, Github, MapPin, Send, ArrowUpRight } from "lucide-react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact section-padding" id="contact">
      <motion.div
        className="contact-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-tag">LET'S CONNECT</p>
        <h2>Get In <span>Touch</span></h2>
        <p>
          Have an opportunity or want to discuss a project?
          I'd love to hear from you.
        </p>
      </motion.div>

      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="contact-message">
          <h3>Let's build something great together.</h3>
          <p>
            I'm currently open to entry-level Java Full Stack Developer
            opportunities and collaborations.
          </p>

          <a
            href="mailto:sinchanagowda1404@gmail.com"
            className="contact-email"
          >
            <Mail size={19} />
            sinchanagowda1404@gmail.com
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="contact-details">
          <a
            href="mailto:sinchanagowda1404@gmail.com"
            className="contact-item"
          >
            <Mail size={21} />
            <div>
              <span>Email</span>
              <p>Send me an email</p>
            </div>
          </a>

          <a
            href="https://github.com/sinchana1404"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <Github size={21} />
            <div>
              <span>GitHub</span>
              <p>Explore my repositories</p>
            </div>
          </a>

          <div className="contact-item">
            <MapPin size={21} />
            <div>
              <span>Location</span>
              <p>Bengaluru, India</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
