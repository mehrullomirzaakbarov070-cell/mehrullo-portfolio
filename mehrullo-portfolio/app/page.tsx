
"use client";

import { useState } from "react";
import Link from "next/link";

const github = "https://github.com/mehrullomirzaakbarov070-cell";
const phone = "+998 92 153 50 02";

const projects = [
  {
    number: "01",
    name: "Quick Hotel",
    description: "Mehmonxona xizmatlari uchun zamonaviy veb-loyiha.",
    url: "https://quick-hotel.lovable.app/",
    tech: "Web Development",
  },
  {
    number: "02",
    name: "ZiyoAI",
    description: "Sun’iy intellekt asosidagi yordamchi loyiha.",
    url: "https://ziyoai-uzbek-ai.lovable.app/",
    tech: "Artificial Intelligence",
  },
  {
    number: "03",
    name: "Shifokorga qabulyozish",
    description: "Shifokor qabuliga yozilish uchun veb-loyiha.",
    url: "https://shifokogaqabulyozish.lovable.app",
    tech: "Web Application",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

function GitHubIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02z" />
    </svg>
  );
}

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  const page = darkMode
    ? {
      bg: "bg-[#080812] text-white",
      header: "border-white/10 bg-[#080812]/90",
      muted: "text-slate-400",
      card: "border-cyan-400/20 bg-[#111324] hover:border-cyan-300/60",
      button: "border-white/20 hover:bg-white/10",
      grid: "rgba(0,217,255,0.045)",
    }
    : {
      bg: "bg-slate-50 text-slate-900",
      header: "border-slate-200 bg-white/90",
      muted: "text-slate-600",
      card: "border-slate-200 bg-white hover:border-blue-400 shadow-sm",
      button: "border-slate-300 hover:bg-slate-100",
      grid: "rgba(37,99,235,0.055)",
    };

  return (
    <main
      className={`min-h-screen overflow-hidden transition-colors duration-300 ${page.bg}`}
      style={{
        backgroundImage: `linear-gradient(${page.grid} 1px, transparent 1px), linear-gradient(90deg, ${page.grid} 1px, transparent 1px)`,
        backgroundSize: "42px 42px",
      }}
    >
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-xl ${page.header}`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4">
          <Link href="#home" className="text-xl font-black tracking-wide">
            <span className="text-cyan-500">M</span>EH
            <span className="text-purple-500">RULLO.</span>
          </Link>

          <div className="hidden items-center gap-5 text-sm md:flex">
            <Link href="#about" className="hover:text-cyan-500">
              Men haqimda
            </Link>
            <Link href="#skills" className="hover:text-cyan-500">
              Ko‘nikmalar
            </Link>
            <Link href="#projects" className="hover:text-cyan-500">
              Loyihalar
            </Link>
            <Link href="#contact" className="hover:text-cyan-500">
              Aloqa
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`rounded-xl border px-3 py-2 text-sm font-medium transition ${page.button}`}
              aria-label={
                darkMode
                  ? "Kunduzgi rejimga o'tish"
                  : "Tungi rejimga o'tish"
              }
            >
              {darkMode ? "☀️ Kunduzgi" : "🌙 Tungi"}
            </button>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profilim"
              className={`hidden items-center gap-2 rounded-xl border px-3 py-2 sm:flex ${page.button}`}
            >
              <GitHubIcon size={20} />
              GitHub
            </a>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.3fr_0.7fr] md:py-28"
      >
        <div
          className={`pointer-events-none absolute left-1/4 top-20 -z-0 h-64 w-64 rounded-full blur-[100px] ${darkMode ? "bg-blue-600/20" : "bg-cyan-400/15"
            }`}
        />

        <div className="relative z-10">
          <p className="mb-5 text-xs font-bold tracking-[0.22em] text-cyan-600">
            &gt; DEVELOPER PORTFOLIO
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Mirzaakbarov
            <span className="mt-2 block bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Mehrullo
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-bold">
            Frontend <span className="text-cyan-500">Developer</span>
          </h2>

          <p className={`mt-5 max-w-xl leading-7 ${page.muted}`}>
            Zamonaviy, tezkor va chiroyli veb-saytlar yarataman.
            G‘oyalarni foydalanuvchilar uchun qulay raqamli
            mahsulotlarga aylantiraman.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl border border-cyan-500 bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 font-semibold text-white transition hover:brightness-110"
            >
              Loyihalarimni ko‘rish ↗
            </a>


            <a
              href="/mehrullo-cv.pdf"
              download="Mehrullo-CV.pdf"
              className="rounded-xl border px-5 py-3"
            >
              ↓ CV yuklab olish
            </a>

          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 rounded-xl border px-4 py-3 transition ${page.button}`}
            >
              <GitHubIcon />
              GitHub profilim
            </a>

            <a
              href="tel:+998921535002"
              className={`flex items-center gap-2 rounded-xl border px-4 py-3 transition ${page.button}`}
            >
              <PhoneIcon />
              {phone}
            </a>
          </div>

          <div className={`mt-7 flex items-center gap-3 text-sm ${page.muted}`}>
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
            Veb-loyihalar va yangi texnologiyalar
          </div>
        </div>

        <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
          <div className="absolute inset-0 rounded-full border border-cyan-400/60 shadow-[0_0_45px_rgba(0,217,255,0.14)]" />
          <div className="absolute inset-4 rounded-full border border-purple-500/50" />
          <div className="absolute inset-8 rounded-full border border-dashed border-cyan-400/50" />

          <div className="flex h-40 w-40 items-center justify-center rounded-full border border-cyan-400/50 bg-gradient-to-br from-blue-950 to-purple-950 text-5xl font-black text-cyan-300 shadow-[0_0_55px_rgba(0,217,255,0.2)] sm:h-48 sm:w-48">
            MM
          </div>

          <span className="absolute right-5 top-7 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#00d9ff]" />
          <span className="absolute bottom-10 left-1 h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_20px_#a855f7]" />

          <div className={`absolute -bottom-3 rounded-lg border px-4 py-2 text-xs tracking-widest ${darkMode
              ? "border-cyan-400/30 bg-[#0b1020] text-cyan-200"
              : "border-blue-300 bg-white text-blue-700"
            }`}>
            DEVELOPER // MM
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-bold tracking-[0.22em] text-cyan-600">
          01 / PROFIL
        </p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">
          Men haqimda
        </h2>

        <div className={`mt-7 rounded-2xl border p-6 sm:p-8 ${page.card}`}>
          <p className={`max-w-3xl leading-8 ${page.muted}`}>
            Men Mehrullo Mirzaakbarovman. Frontend dasturlash bilan
            shug‘ullanaman va zamonaviy veb-loyihalar yarataman.
            Har bir loyihada dizayn, qulaylik va sifatga e’tibor
            beraman hamda yangi texnologiyalarni o‘rganishda davom etaman.
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-bold tracking-[0.22em] text-cyan-600">
          02 / TEXNOLOGIYALAR
        </p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">
          Ko‘nikmalarim
        </h2>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className={`rounded-xl border p-5 transition hover:-translate-y-1 ${page.card}`}
            >
              <p className="text-xs tracking-widest text-purple-500">
                TECH_0{index + 1}
              </p>
              <h3 className="mt-3 font-bold">{skill}</h3>
              <div className={`mt-4 h-1 overflow-hidden rounded-full ${darkMode ? "bg-white/10" : "bg-slate-200"
                }`}>
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-bold tracking-[0.22em] text-cyan-600">
          03 / PORTFOLIO
        </p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">
          Loyihalarim
        </h2>
        <p className={`mt-3 ${page.muted}`}>
          Men yaratgan loyihalar bilan tanishing.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`flex flex-col rounded-2xl border p-6 transition hover:-translate-y-1 ${page.card}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-cyan-500">
                  {project.number}
                </span>
                <span className="text-xs tracking-widest text-purple-500">
                  PROJECT
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold">{project.name}</h3>
              <p className={`mt-3 flex-1 leading-7 ${page.muted}`}>
                {project.description}
              </p>
              <p className="mt-4 text-xs text-cyan-600">{project.tech}</p>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-3 text-center font-medium text-cyan-700 transition hover:bg-cyan-500/20 dark:text-cyan-300"
              >
                Loyihani ochish ↗
              </a>
            </article>
          ))}
        </div>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-flex items-center gap-2 rounded-xl border px-5 py-3 transition ${page.button}`}
        >
          <GitHubIcon />
          Boshqa loyihalar — GitHub
        </a>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-bold tracking-[0.22em] text-cyan-600">
          04 / BOG‘LANISH
        </p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">
          Aloqa
        </h2>
        <p className={`mt-4 max-w-xl leading-7 ${page.muted}`}>
          Loyihalar, hamkorlik yoki savollaringiz bo‘lsa,
          quyidagi aloqa kanallari orqali bog‘lanishingiz mumkin.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="tel:+998921535002"
            className={`flex items-center gap-2 rounded-xl border px-5 py-3 transition ${page.button}`}
          >
            <PhoneIcon />
            {phone}
          </a>

          <a
            href="https://t.me/mehrulloo"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-xl border px-5 py-3 transition ${page.button}`}
          >
            Telegram ↗
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 rounded-xl border px-5 py-3 transition ${page.button}`}
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </section>

      <footer className={`border-t px-5 py-7 text-center text-sm ${page.muted} ${darkMode ? "border-cyan-300/10" : "border-slate-200"
        }`}>
        <p>© {new Date().getFullYear()} Mehrullo Mirzaakbarov</p>
        <p className="mt-2 tracking-widest text-cyan-600">
          DESIGNED FOR THE FUTURE_
        </p>
      </footer>
    </main>
  );
}
