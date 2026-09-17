import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

const iconPaths = {
  arrow: <path d="M5 12h13m-6-6 6 6-6 6" />,
  github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4c.1-1.1.1-2.2-.1-3.2 0 0-1.2-.4-4 1.5a13.5 13.5 0 0 0-7.2 0C5.2.4 4  .8 4 .8a5.4 5.4 0 0 0-.1 3.2A5.4 5.4 0 0 0 2.4 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8.2 18v4" /><path d="M8 19c-3 .9-3-1.4-4.2-1.8" /></>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  external: <><path d="M14 3h7v7" /><path d="m10 14 11-11" /><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></>,
  menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  spark: <><path d="m12 3-1.4 5.6L5 10l5.6 1.4L12 17l1.4-5.6L19 10l-5.6-1.4L12 3Z" /><path d="m19 16-.7 2.3L16 19l2.3.7L19 22l.7-2.3L22 19l-2.3-.7L19 16Z" /></>,
}

function Icon({ name, size = 18 }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{iconPaths[name]}</svg>
}

const projects = [
  { number: '01', title: 'Arcane Area', type: 'Java / Maven game', description: 'A Java-based game project focused on applying object-oriented programming and software structure.', tags: ['Java', 'Maven'], tone: 'purple' },
  { number: '02', title: 'SAGIP', type: 'Public healthcare platform concept', description: 'A concept for a more accessible public healthcare experience, shaped around community needs and practical digital tools.', tags: ['Product concept', 'Research'], tone: 'orange' },
  { number: '03', title: 'AI Studio Data Analytics', type: 'Data mining / analysis', description: 'Hands-on exploration of data preparation, analysis, and pattern discovery using AI Studio.', tags: ['AI Studio', 'Data mining'], tone: 'blue' },
  { number: '04', title: 'Campus Social App', type: 'Mobile application', description: 'A Flutter and Dart concept designed to help students connect, share, and participate in campus life.', tags: ['Flutter', 'Dart'], tone: 'green' },
  { number: '05', title: 'School Website', type: 'Web development', description: 'A structured website project built from the fundamentals of HTML and CSS.', tags: ['HTML', 'CSS'], tone: 'pink' },
]

const skills = {
  'Languages': ['Python', 'Java', 'Dart', 'JavaScript', 'HTML/CSS', 'SQL'],
  'Frameworks': ['Flutter', 'Spring Boot'],
  'Tools': ['Git / GitHub', 'VS Code', 'IntelliJ', 'Android Studio', 'RapidMiner / AI Studio'],
}

function SectionHeading({ eyebrow, title, copy }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-section')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)
  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#top" onClick={closeMenu}><span className="brand-mark" aria-hidden="true"><i>&lt;</i>NS<i>/&gt;</i></span><span>Nicolas Santos</span></a>
          <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name="menu" /></button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#contact" className="nav-cta" onClick={closeMenu}>Let&apos;s connect <Icon name="arrow" size={15} /></a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy reveal">
            <div className="availability"><span className="pulse-dot" /> Open to learning &amp; building</div>
            <h1>Building with<br /><span>curiosity.</span></h1>
            <p className="hero-title">Aspiring Software Engineer <span className="slash">/</span> AI Engineer</p>
            <p className="hero-intro">I&apos;m Nicolas — a Computer Science student exploring how thoughtful software and emerging AI can turn complex problems into useful, human-centered experiences.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View projects <Icon name="arrow" size={17} /></a>
              <a className="button button-ghost" href="#contact">Let&apos;s connect <Icon name="arrow" size={17} /></a>
            </div>
            <div className="social-row" aria-label="Social links">
              <a href="https://github.com/Ninjalas" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
              <a href="https://www.linkedin.com/in/nicolas-santos-2bb289372/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
              <a href="mailto:nicsnicsantos@gmail.com" aria-label="Email"><Icon name="mail" /></a>
            </div>
          </div>
          <div className="hero-visual reveal reveal-delay" aria-label="Portrait and code visualization">
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="portrait-card"><img src="https://avatars.githubusercontent.com/u/178625583?v=4" alt="Nicolas Santos" /><span>nicolas.santos<br /><small>building in public</small></span></div>
            <div className="visual-card">
              <div className="window-bar"><span /><span /><span /><small>nicolas.py</small></div>
              <div className="code-lines">
                <div><b>01</b><span><i>class</i> <em>Engineer</em>:</span></div>
                <div><b>02</b><span>&nbsp;&nbsp;<i>def</i> <em>build</em>(<strong>self</strong>):</span></div>
                <div><b>03</b><span>&nbsp;&nbsp;&nbsp;&nbsp;<strong>return</strong> curiosity</span></div>
                <div><b>04</b><span /></div>
                <div><b>05</b><span><i># always learning</i></span></div>
                <div><b>06</b><span>focus = [<mark>software</mark>,</span></div>
                <div><b>07</b><span>&nbsp;&nbsp;<mark>ai</mark>, <mark>impact</mark>]</span></div>
              </div>
              <div className="code-cursor" />
            </div>
            <div className="visual-label label-top">/ 01 — explore</div>
            <div className="visual-label label-bottom">systems in progress<span>↗</span></div>
          </div>
        </section>

        <div className="ticker" aria-label="Areas of interest"><div className="ticker-track"><span>SOFTWARE ENGINEERING</span><b>✳</b><span>AI / MACHINE LEARNING</span><b>✳</b><span>DATA SCIENCE</span><b>✳</b><span>BACKEND &amp; MOBILE</span><b>✳</b><span>SOFTWARE ENGINEERING</span><b>✳</b><span>AI / MACHINE LEARNING</span></div></div>

        <section id="about" className="section container about-section reveal-section">
          <SectionHeading eyebrow="01 / About" title={<>The work is just<br /><span>getting started.</span></>} />
          <div className="about-grid"><div className="about-lead"><p>I&apos;m a Computer Science student interested in the space where <span>software engineering, AI/ML, and real-world problem solving</span> meet.</p></div><div className="about-detail"><p>Right now, I&apos;m building my foundation across backend and mobile development while learning how data and intelligent systems can create better experiences.</p><p className="muted">No shortcuts — just consistent practice, thoughtful projects, and a genuine curiosity about how things work.</p></div></div>
          <div className="learning-strip"><span className="strip-label">Currently learning</span><div className="learning-items"><span>Python</span><span>AI / ML</span><span>Flutter / Dart</span><span>Spring Boot</span><span>SQL</span></div></div>
          <div className="build-board" aria-label="Current learning board">
            <div className="build-board-heading"><span className="strip-label">Build log</span><span className="board-status">in progress <i /></span></div>
            <div className="build-board-grid"><div><strong>01</strong><span>Learn the fundamentals</span><b>done</b></div><div><strong>02</strong><span>Turn ideas into projects</span><b>active</b></div><div><strong>03</strong><span>Explore intelligent systems</span><b>next</b></div></div>
          </div>
        </section>

        <section id="skills" className="section container skills-section reveal-section">
          <SectionHeading eyebrow="02 / Toolkit" title={<>Tools for turning<br /><span>ideas into systems.</span></>} copy="A growing toolkit, built through coursework, experimentation, and projects." />
          <div className="skills-grid">{Object.entries(skills).map(([category, items], index) => <div className="skill-group" key={category}><div className="skill-number">0{index + 1}</div><h3>{category}</h3><div className="skill-list">{items.map(item => <span key={item}><i />{item}</span>)}</div></div>)}</div>
        </section>

        <section id="projects" className="section projects-section reveal-section">
          <div className="container"><SectionHeading eyebrow="03 / Selected work" title={<>Learning by<br /><span>making.</span></>} copy="A selection of concepts and projects from my journey so far." /><div className="project-list">{projects.map(project => <article className={`project-card ${project.tone}`} key={project.number}><div className="project-number">{project.number}</div><div className="project-main"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><span className="project-arrow"><Icon name="arrow" /></span></article>)}</div></div>
        </section>

        <section id="experience" className="section container experience-section reveal-section">
          <SectionHeading eyebrow="04 / Experience & education" title={<>A foundation for<br /><span>what&apos;s next.</span></>} />
          <div className="timeline">
            <div className="timeline-block"><div className="timeline-meta"><span>2025 — 2026</span><span className="meta-dot" /></div><div><h3>Vice President</h3><p className="role">Computer Science Society</p><p className="timeline-copy">Contributing to a student community through collaboration, organization, and shared interest in technology.</p></div></div>
            <div className="timeline-block"><div className="timeline-meta"><span>Work immersion</span><span className="meta-dot" /></div><div><h3>Work Immersion</h3><p className="role">Torres Technology Center Corp.</p><p className="timeline-copy">A first look at a professional technology environment and the practices that support it.</p><div className="award-list"><span>Best Advertisement Campaign</span><span>Demand Planner Award</span><span>Product Design Concept Award</span><span>Outstanding Presenter Award</span></div></div></div>
            <div className="timeline-block"><div className="timeline-meta"><span>Competition</span><span className="meta-dot" /></div><div><h3>National Programming Contest</h3><p className="role">CodeChum</p><p className="timeline-copy">Participated in a national programming contest and reached finalist standing.</p><div className="award-list"><span>Finalist</span></div></div></div>
          </div>
          <div className="education"><div className="education-title"><p className="eyebrow">Education</p><h3>Saint Michael&apos;s<br />College of Laguna</h3></div><div className="education-list"><div><span>2026 — Present</span><strong>BSCS</strong><small>Bachelor of Science in Computer Science</small></div><div><span>2024 — 2026</span><strong>Associate in CS</strong><small>Associate in Computer Science</small></div><div><span>2022 — 2024</span><strong>STEM</strong><small>Science, Technology, Engineering &amp; Mathematics</small></div></div></div>
        </section>

        <section className="focus-section reveal-section"><div className="container"><div className="focus-heading"><p className="eyebrow">05 / Current focus</p><h2>One step at a time.<br /><span>Always forward.</span></h2></div><div className="focus-path"><div className="path-line" />{['Computer Science', 'Software Engineering', 'AI / ML', 'AI Engineering'].map((item, index) => <div className={`path-step ${index === 3 ? 'active' : ''}`} key={item}><span>{String(index + 1).padStart(2, '0')}</span><div className="path-node" /><strong>{item}</strong>{index < 3 && <small>→</small>}</div>)}</div></div></section>

        <section id="contact" className="section container contact-section reveal-section">
          <div className="contact-intro"><SectionHeading eyebrow="06 / Contact" title={<>Let&apos;s build<br /><span>something useful.</span></>} /><p>Have a project idea, a question, or just want to say hello? Find me through any of the links below.</p><div className="contact-links"><a href="mailto:nicsnicsantos@gmail.com"><Icon name="mail" /><span>Email me<small>nicsnicsantos@gmail.com</small></span><Icon name="arrow" size={16} /></a><a href="https://github.com/Ninjalas" target="_blank" rel="noreferrer"><Icon name="github" /><span>GitHub<small>github.com/Ninjalas</small></span><Icon name="external" size={15} /></a><a href="https://www.linkedin.com/in/nicolas-santos-2bb289372/" target="_blank" rel="noreferrer"><Icon name="linkedin" /><span>LinkedIn<small>Connect professionally</small></span><Icon name="external" size={15} /></a></div></div>
          <div className="contact-note"><div className="note-grid" /><p className="eyebrow">Open channel</p><h3>Good work starts<br /><span>with a conversation.</span></h3><p className="contact-note-copy">Whether it&apos;s software, data, or an early idea worth exploring, I&apos;m always open to learning from the next challenge.</p><a className="button button-primary" href="mailto:nicsnicsantos@gmail.com">Send an email <Icon name="arrow" size={17} /></a></div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-main">
            <a className="footer-name" href="#top">Nicolas Santos</a>
            <p>Building, learning, and engineering what comes next.</p>
          </div>
          <div className="footer-nav" aria-label="Footer navigation">
            <span>Explore</span>
            <a href="#about">About</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
          </div>
          <div className="footer-connect">
            <span>Connect</span>
            <div className="footer-socials">
              <a href="https://github.com/Ninjalas" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={16} /></a>
              <a href="https://www.linkedin.com/in/nicolas-santos-2bb289372/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={16} /></a>
              <a href="mailto:nicsnicsantos@gmail.com" aria-label="Email"><Icon name="mail" size={16} /></a>
            </div>
          </div>
          <div className="footer-bottom"><span>© 2026 Nicolas Santos</span><span>Designed &amp; built with curiosity.</span></div>
        </div>
      </footer>
      <Analytics />
    </div>
  )
}

export default App
