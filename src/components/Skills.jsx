
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench
} from "lucide-react";
import "../styles/Skills.css";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Java", "JavaScript", "OOP", "Collections", "Java 8", "Streams", "Lambda"]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Spring Boot", "Spring MVC", "Spring Data JPA", "REST APIs", "JDBC", "Servlets", "JSP"]
  },
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["HTML5", "CSS3", "React.js", "Bootstrap", "Tailwind CSS"]
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "SQL", "Stored Procedures", "Indexing"]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "Maven", "Swagger", "postman","Docker", "Linux", "AWS EC2 Basics"]
  }
];

function Skills() {
  return (
    <section className="skills section-padding" id="skills">
      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-tag">MY TECHNICAL EXPERTISE</p>
        <h2>Skills & <span>Technologies</span></h2>
        <p className="skills-subtitle">
          Technologies and tools I use to build web applications.
        </p>
      </motion.div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-card-heading">
                <Icon size={24} />
                <h3>{group.title}</h3>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
