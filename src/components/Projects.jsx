
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import "../styles/Projects.css";

const projects = [
  {
    number: "01",
    title: "Mentora",
    subtitle: "Skill Exchange Platform",
    description:
      "A platform where users can share their skills, discover learning opportunities, and exchange knowledge through skill requests and real-time communication.",
    technologies: ["React", "Spring Boot", "MySQL", "Spring Data JPA", "REST API", "JWT"],
    status: "In Development",
    github: "https://github.com/sinchana1404/mentora_react.git",
    demo: null
  },
  {
    number: "02",
    title: "Weather Application",
    subtitle: "Real-Time Weather Updates",
    description:
      "A responsive weather application that fetches and displays real-time weather information using an external weather API.",
    technologies: ["HTML", "CSS", "JavaScript", "Axios", "REST API"],
    status: "Completed",
    github: "https://github.com/sinchana1404",
    demo: "https://sinch-weatherapp.netlify.app"
  },
  {
    number: "03",
    title: "Simon Says",
    subtitle: "Character-Based Memory Game",
    description:
      "An interactive memory game featuring Chhota Bheem characters. Players memorize and repeat an increasing sequence to test their memory and concentration.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    github: "https://github.com/sinchana1404/Simons.git",
    demo: "https://coruscating-lokum-2470cc.netlify.app/"
  }
];

function Projects() {
  return (
    <section className="projects section-padding" id="projects">
      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-tag">WHAT I'VE BUILT</p>
        <h2>Featured <span>Projects</span></h2>
        <p>Some of the projects I've developed while learning and exploring web development.</p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <span className="project-status">{project.status}</span>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
              <p>{project.description}</p>
            </div>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>

              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo <ExternalLink size={16} />
                </a>
              )}

              <ArrowUpRight className="project-arrow" size={22} />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
