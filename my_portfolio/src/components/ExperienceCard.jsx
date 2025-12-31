import styles from "./ExperienceCard.module.css";

export default function ExperienceCard({ experience }) {
  const { company, title, location, dates, bullets, tech } = experience;

  return (
    <article className={styles.card}>
      <div className={styles.left}>
        <p className={styles.company}>{company}</p>
        <p className={styles.role}>{title}</p>
        <p className={styles.meta}>
          {location} • {dates}
        </p>
      </div>

      <div className={styles.right}>
        <ul className={styles.bullets}>
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        {tech?.length ? (
          <ul className={styles.tech} aria-label="Technologies used">
            {tech.map((t) => (
              <li key={t} className={styles.techItem}>
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
