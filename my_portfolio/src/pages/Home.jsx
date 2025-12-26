export default function Home() {
  return (
    <>
      <header>
        <nav aria-label="Primary navigation">
          {/* later: logo/name and links */}
        </nav>
      </header>

      <main>
        <section aria-labelledby="intro-title">
          <h1 id="intro-title">Rohan Bansal</h1>
          <p>React focused frontend developer.</p>
        </section>

        <section aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
          {/* later: project cards */}
        </section>

        <section aria-labelledby="skills-title">
          <h2 id="skills-title">Skills</h2>
          {/* later: grouped skills */}
        </section>

        <section aria-labelledby="about-title">
          <h2 id="about-title">About</h2>
          {/* later: short bio */}
        </section>

        <section aria-labelledby="contact-title">
          <h2 id="contact-title">Contact</h2>
          {/* later: links */}
        </section>
      </main>

      <footer>
        <small>© {new Date().getFullYear()} Rohan Bansal</small>
      </footer>
    </>
  );
}
