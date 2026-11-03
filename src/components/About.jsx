
import { motion } from "framer-motion";
import { GraduationCap, Code2, MapPin } from "lucide-react";
import "../styles/About.css";

function About() {
  return (
    <section className="about section-padding" id="about">
      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-tag">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3>Passionate about building meaningful digital experiences.</h3>

          <p>
            I'm Sinchana R., an aspiring Java Full Stack Developer
            with a strong interest in building responsive and
            user-friendly web applications.
          </p>

          <p>
            I enjoy working with Java, Spring Boot, React and MySQL.
            I continuously explore new technologies and improve my
            problem-solving skills by building practical projects.
          </p>

          <div className="about-location">
            <MapPin size={18} />
            Bengaluru, India
          </div>
        </motion.div>

        <motion.div
          className="about-details"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-card">
            <GraduationCap size={25} />
            <div>
              <h4>Education</h4>
              <p>B.E. Computer Science and Engineering</p>
              <span>2022 – 2026 · CGPA: 8.81</span>
              <span>Govt. Sri Krishnarajendra Silver Jubilee Technological Institute</span>
            </div>
          </div>

          <div className="about-card">
            <Code2 size={25} />
            <div>
              <h4>Training</h4>
              <p>Java Full Stack Development</p>
              <span>Dhee Coding Lab · Jan 2026 – Present</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
