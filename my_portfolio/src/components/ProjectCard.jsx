import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  const { title, description, highlights, tech, links, role, year, impact } =
    project;

  return (
    <article className={styles.card}>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.meta}>
          <span>{role}</span>
          {year ? <span aria-hidden="true"> • </span> : null}
          {year ? <span>{year}</span> : null}
        </p>

        <p className={styles.description}>{description}</p>

        {impact ? <p className={styles.impact}>{impact}</p> : null}

        <ul className={styles.highlights}>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <ul className={styles.tech} aria-label="Technologies used">
          {tech.map((t) => (
            <li key={t} className={styles.techItem}>
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.links}>
        {links?.live ? (
          <a
            className={styles.link}
            href={links.live}
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        ) : (
          <span className={styles.linkMuted} aria-label="Live link not available">
            Live
          </span>
        )}

        {links?.repo ? (
          <a
            className={styles.link}
            href={links.repo}
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        ) : (
          <span className={styles.linkMuted} aria-label="Code link not available">
            Code
          </span>
        )}
      </div>
    </article>
  );
}
