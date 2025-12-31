import SkipLink from "../components/SkipLink";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";
import styles from "./Home.module.css";
import { experiences } from "../data/experience";
import ExperienceCard from "../components/ExperienceCard";

export default function Home() {
  return (
    <div id="top" className={styles.page}>
      <SkipLink />
      <Header />

      <div className={styles.page}>
    <main id="main" className={styles.main}>
        <section
          className={`${styles.section} ${styles.hero}`}
          aria-labelledby="intro-title"
        >
          <h1 id="intro-title" className={styles.heroTitle}>
            Rohan Bansal
          </h1>
          <p className={styles.heroSubtitle}>
            React focused frontend developer. I build clean, accessible interfaces
            and ship practical projects.
          </p>
        </section>

        <section
          id="projects"
          className={styles.section}
          aria-labelledby="projects-title"
        >
          <h2 id="projects-title" className={styles.sectionTitle}>
            Projects
          </h2>
          <p className={styles.sectionIntro}>
            A few projects that show how I think, build, and ship.
          </p>

          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
            <section id="experience" className={styles.section} aria-labelledby="experience-title">
        <h2 id="experience-title" className={styles.sectionTitle}>
          Experience
        </h2>
        <p className={styles.sectionIntro}>
          Roles that shaped how I build, collaborate, and ship.
        </p>

        <div className={styles.experienceList}>
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </section>
        <section
          id="skills"
          className={styles.section}
          aria-labelledby="skills-title"
        >
          
          <h2 id="skills-title" className={styles.sectionTitle}>
            Skills
          </h2>

          <div className={styles.skillsGrid}>
            {skillGroups.map((group) => (
              <section key={group.title} className={styles.skillGroup}>
                <h3 className={styles.skillTitle}>{group.title}</h3>
                <ul className={styles.skillList}>
                  {group.items.map((item) => (
                    <li key={item} className={styles.skillItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section
          id="about"
          className={styles.section}
          aria-labelledby="about-title"
        >
          <h2 id="about-title" className={styles.sectionTitle}>
            About
          </h2>
          <p className={styles.aboutText}>
            I am a Perth based developer with a Master of Computer Science from
            Curtin University. I enjoy building clean, accessible interfaces and
            shipping practical products. Recently I have worked on OCR powered
            workflows, dashboards, and client websites.
          </p>
        </section>

        <section
          id="contact"
          className={styles.section}
          aria-labelledby="contact-title"
        >
          <h2 id="contact-title" className={styles.sectionTitle}>
            Contact
          </h2>

          <ul className={styles.contactList}>
            <li>
              <a href="mailto:bnsl.rohan@gmail.com">bnsl.rohan@gmail.com</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rohanbnsl"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </section>
      </main>

       <footer className={styles.footer}>
    <small>© {new Date().getFullYear()} Rohan Bansal</small>
  </footer>
</div>
    </div>
  );
}
