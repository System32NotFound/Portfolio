import styles from "./Header.module.css";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a
          href="#top"
          className={styles.brand}
          aria-label="Go to top of page"
        >
          RB
        </a>

        <nav aria-label="Primary navigation">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a className={styles.navLink} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
