
"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    name: "Quick Hotel",
    category: "HOTEL BOOKING",
    description: "Mehmonxonalarni ko‘rish va bron qilish uchun yaratilgan zamonaviy web loyiha.",
    technologies: ["Web", "UI/UX"],
    symbol: "⌂",
    url: "https://quick-hotel.lovable.app/",
  },
  {
    number: "02",
    name: "ZiyoAI",
    category: "ARTIFICIAL INTELLIGENCE",
    description: "O‘zbek tiliga yo‘naltirilgan sun’iy intellekt platformasi.",
    technologies: ["AI", "Web"],
    symbol: "✳",
    url: "https://ziyoai-uzbek-ai.lovable.app/",
  },
  {
    number: "03",
    name: "Shifokorga qabul",
    category: "HEALTHCARE",
    description: "Shifokor qabuliga yozilish uchun yaratilgan web platforma.",
    technologies: ["Web", "UI/UX"],
    symbol: "+",
    url: "https://shifokogaqabulyozish.lovable.app/",
  },
];

const skills = [
  { name: "HTML", level: "90%", symbol: "H" },
  { name: "CSS", level: "85%", symbol: "C" },
  { name: "JavaScript", level: "75%", symbol: "JS" },
  { name: "React", level: "70%", symbol: "R" },
  { name: "Next.js", level: "60%", symbol: "N" },
  { name: "Node.js", level: "50%", symbol: "B" },
];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="home">
      <nav className="navbar">
        <a className="logo" href="#home" onClick={closeMenu}>M<span>.</span></a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menyuni ochish"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Bosh sahifa</a>
          <a href="#about" onClick={closeMenu}>Men haqimda</a>
          <a href="#skills" onClick={closeMenu}>Ko‘nikmalar</a>
          <a href="#projects" onClick={closeMenu}>Loyihalar</a>
          <a href="#certificates" onClick={closeMenu}>Sertifikatlar</a>
          <a href="#contact" onClick={closeMenu}>Bog‘lanish</a>

          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={theme === "dark" ? "Kunduzgi rejimga o‘tish" : "Tungi rejimga o‘tish"}
            title={theme === "dark" ? "Kunduzgi rejim" : "Tungi rejim"}
          >
            {theme === "dark" ? "☀ Kunduzgi" : "☾ Tungi"}
          </button>
        </div>
      </nav>

      <section className="hero section">
        <div className="hero-content">
          <div className="status">
            <span className="status-dot" />
            Dasturlashni rivojlantiryapman
          </div>

          <p className="eyebrow">SALOM, MEN</p>
          <h1>Mirzaakbarov<br /><span className="gradient-text">Mehrullo.</span></h1>
          <h2>Frontend Developer <span className="blue-text">in progress</span></h2>

          <p className="hero-description">
            Zamonaviy web saytlar va foydali raqamli mahsulotlar yaratishga
            qiziqaman. G‘oyalarni chiroyli va ishlaydigan loyihalarga aylantirishni o‘rganyapman.
          </p>

          <div className="hero-buttons">
            <a className="button button-primary" href="#projects">Loyihalarimni ko‘rish ↗</a>
            <a className="button button-secondary" href="#contact">Men bilan bog‘lanish</a>
            <a className="button button-cv" href="/mehrullo-cv.pdf" download="Mehrullo-Mirzaakbarov-CV.pdf">
              ↓ CV yuklab olish
            </a>
          </div>

          <div className="social-line">
            <span>ASOSIY YO‘NALISHIM</span>
            <span>Frontend</span><span className="social-divider">/</span><span>Backend</span>
          </div>
        </div>

        <div className="hero-art">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          <div className="floating-card card-top">
            <span className="card-icon">{"</>"}</span>
            <div><strong>Clean Code</strong><small>Har kuni o‘sish</small></div>
          </div>

          <div className="developer-card">
            <div className="window-controls">
              <span /><span /><span /><p>developer.tsx</p>
            </div>
            <div className="code-lines">
              <p><span className="code-purple">const</span> developer = {"{"}</p>
              <p className="indent">name: <span className="code-green">"Mehrullo"</span>,</p>
              <p className="indent">role: <span className="code-green">"Developer"</span>,</p>
              <p className="indent">learning: <span className="code-orange">true</span>,</p>
              <p className="indent">building: <span className="code-blue">"ideas"</span></p>
              <p>{"}"}</p>
              <p className="code-comment">// Keep creating.</p>
            </div>
            <div className="code-glow" />
          </div>

          <div className="floating-card card-bottom">
            <span className="sparkle">✳</span>
            <div><strong>Creative Mind</strong><small>Ideas into reality</small></div>
          </div>
        </div>

        <a href="#about" className="scroll-indicator"><span /> Pastga aylantiring</a>
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 — MEN HAQIMDA</p>
          <h2>Kod yozishdan ko‘ra,<br /><span className="gradient-text">yechim yaratish muhim.</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Men Mirzaakbarov Mehrullo. Web dasturlashga qiziqaman va zamonaviy
              texnologiyalar yordamida foydali loyihalar yaratishga harakat qilaman.
            </p>
            <p>
              Hozir frontend bilimlarimni mustahkamlab, backend yo‘nalishida ham
              rivojlanyapman. Har bir loyiha men uchun yangi tajriba.
            </p>
            <a className="text-link" href="#contact">Birgalikda loyiha qilamizmi? ↗</a>
          </div>

          <div className="about-stats">
            <div className="stat-card"><strong>03<span>+</span></strong><p>Portfolio loyihalari</p></div>
            <div className="stat-card"><strong>06<span>+</span></strong><p>Texnologiyalar</p></div>
            <div className="stat-card stat-wide"><strong>∞</strong><p>O‘rganish va rivojlanish</p></div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">02 — KO‘NIKMALAR</p>
          <h2>Men foydalanadigan<br /><span className="gradient-text">texnologiyalar.</span></h2>
          <p className="section-description">Bilimlarimni doimiy ravishda rivojlantirib boryapman.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-top">
                <span className="skill-number">0{index + 1}</span>
                <span className="skill-symbol">{skill.symbol}</span>
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-track">
                <div className="skill-progress" style={{ width: skill.level }} />
              </div>
              <p className="skill-level">{skill.level} — o‘rganish darajasi</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading projects-heading">
          <div>
            <p className="eyebrow">03 — TANLANGAN ISHLAR</p>
            <h2>Mening <span className="gradient-text">loyihalarim.</span></h2>
          </div>
          <p className="section-description">G‘oyalar, tajriba va amaliyot natijalari.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <a
                className={`project-art art-${project.number}`}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} loyihasini ochish`}
              >
                <div className="project-art-top">
                  <span>PROJECT / {project.number}</span><span>↗</span>
                </div>
                <div className="project-symbol">{project.symbol}</div>
                <div className="project-art-bottom">
                  <span>{project.category}</span><span>2026</span>
                </div>
              </a>

              <div className="project-info">
                <div className="project-title-row">
                  <h3>{project.name}</h3>
                  <a className="project-arrow" href={project.url} target="_blank" rel="noopener noreferrer">↗</a>
                </div>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">
                  Loyihani ko‘rish <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section certificates-section" id="certificates">
        <div className="section-heading">
          <p className="eyebrow">04 — SERTIFIKATLAR</p>
          <h2>O‘rganish — bu<br /><span className="gradient-text">doimiy jarayon.</span></h2>
        </div>

        <div className="certificate-card">
          <div className="certificate-icon">✦</div>
          <div className="certificate-content">
            <h3>Frontend Development</h3>
            <p>Frontend dasturlash bo‘yicha sertifikat</p>
          </div>
          <span className="certificate-label">CERTIFICATE 01</span>
        </div>

        <div className="certificate-card">
          <div className="certificate-icon">✧</div>
          <div className="certificate-content">
            <h3>Savodxonlik sertifikati</h3>
            <p>O‘qish va bilimni rivojlantirish bo‘yicha sertifikat</p>
          </div>
          <span className="certificate-label">CERTIFICATE 02</span>
        </div>
        <p className="certificate-note">Sertifikatlaringiz rasmlarini keyinchalik shu bo‘limga qo‘shishingiz mumkin.</p>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-box">
          <div className="contact-orb" />
          <p className="eyebrow">05 — BOG‘LANISH</p>
          <h2>Keling, ajoyib<br /><span className="gradient-text">g‘oya yaratamiz.</span></h2>
          <p className="contact-description">
            Savolingiz yoki loyiha g‘oyangiz bormi? Telegram orqali menga yozishingiz mumkin.
          </p>
          <a className="button button-primary contact-button" href="https://t.me/mehrulloo" target="_blank" rel="noopener noreferrer">
            Telegram orqali yozish ↗
          </a>
          <p className="contact-handle">@mehrulloo</p>
        </div>
      </section>

      <footer className="footer">
        <a className="logo" href="#home">M<span>.</span></a>
        <p>© 2026 Mirzaakbarov Mehrullo. Barcha huquqlar himoyalangan.</p>
        <a href="#home" className="back-to-top">Yuqoriga ↑</a>
      </footer>
    </main>
  );
}
