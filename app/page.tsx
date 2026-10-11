"use client";

import { useState } from "react";

import {
  ArrowDown, ArrowRight, Github, Linkedin, Mail, Menu, X, Code2, Database,
  BarChart3, BriefcaseBusiness, GraduationCap, MapPin, ExternalLink, FileText,
  Sparkles, CheckCircle2
} from "lucide-react";


const EMAIL = "nagorizaid786@gmail.com";
const LINKEDIN =
  "https://www.linkedin.com/in/zaid-nagori-a16275359/";
const GITHUB = "https://github.com/zaidnagori786";

const projects = [
 {
    number: "01",
    title: "AI Virtual Assistant — JARVIS",
    type: "FULL-STACK APPLICATION",
    description:
      "A voice-enabled AI assistant with Gemini integration, user authentication, file uploads, and a responsive interface.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    accent: "violet",
    icon: "✳",
    note: "AI · Authentication · Voice UI",
    link: "https://virtual-assistant-frontend-9imr.onrender.com/signup",
  },
  {
    number: "02",
    title: "MovieHub",
    type: "MOVIE DISCOVERY PLATFORM",
    description:
      "A movie discovery experience with trending titles, genre browsing, search, favorites, trailers, and subscription UI.",
    stack: ["React", "Node.js", "Express", "MongoDB", "TMDB API"],
    accent: "blue",
    icon: "▶",
    note: "Search · Favorites · API integration",
  },
  {
    number: "03",
    title: "Customer Behavior Analysis",
    type: "DATA ANALYTICS",
    description:
      "A data analytics project focused on cleaning customer data, exploring behavior patterns, and communicating insights through dashboards.",
    stack: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "Tableau"],
    accent: "teal",
    icon: "▥",
    note: "Data cleaning · Insights · Dashboards",
    github:"https://github.com/zaidnagori786/customer_behavior_analysis"
  },
 
{
  number: "04",
  title: "Bank Debit & Credit Dashboard",
  type: "BUSINESS INTELLIGENCE",
  description:
    "A dashboard for exploring debit and credit activity, tracking banking KPIs, and presenting financial performance through clear visualizations.",
  stack: ["Tableau", "Excel", "Data Visualization"],
  accent: "gold",
  icon: "↗",
  note: "KPI views · Trends · Reporting",
  github: "https://github.com/zaidnagori786/Debit-and-Credit-Performance-Dashboard",
},

];

const skillGroups = [
  { title: "Frontend", icon: Code2, skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "jQuery"] },
  { title: "Backend", icon: BriefcaseBusiness, skills: ["Node.js", "Express.js", "REST APIs", "PHP", "WordPress", , "Shopify"] },
  { title: "Databases", icon: Database, skills: ["MongoDB", "MySQL", "PostgreSQL"] },
  { title: "Data & Analytics", icon: BarChart3, skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL", "Power BI", "Tableau", "Excel"] },
  { title: "Tools & Workflow", icon: Sparkles, skills: ["Git", "GitHub", "Docker", "Jira", "Linux", "Cloudinary"] },
];

const experience = [
  {
    company: "Boonware",
    role: "Full-Stack Developer Intern",
    period: "Jan 2026 – Apr 2026",
    points: [
      "•Built and maintained front-end features using HTML, CSS, JavaScript, and React.js with a focus on responsive and user-friendly interfaces.",
      "•Developed and integrated back-end functionality using Node.js and Express.js to support application features.",
      "•Contributed to API development and integration activities across the full-stack application environment.",
      "•Assisted with database operations by writing queries and managing application data in MySQL and MongoDB.",
      "•Supported application feature development by connecting front-end interfaces, back-end services, and database functionality.",
     "•Collaborated with development activities to deliver maintainable web application features across front-end, back-end, and database layers.",
    ],
  },
  {
    company: "KartBuddy",
    role: "Full-Stack Developer Intern",
    period: "Oct 2025 – Dec 2025",
    points: [
      "•Built responsive user interfaces using HTML, CSS, JavaScript, and React.js with a focus on platform usability and user experience.",
      "•Developed and shipped RESTful APIs using Node.js and Express.js to support core platform features.",
      "•Managed and optimized MySQL and MongoDB database operations to support reliable application data handling.",
      "•Delivered end-to-end feature work across the software development lifecycle, from design through deployment.",
      "•Integrated front-end components with back-end services and database operations to support complete application functionality.",
      "•Contributed to full-stack development activities with emphasis on responsive design, API delivery, database reliability, and application usability."
    ],
  },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("nagorizaid786@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:";
    }
  }

  return (
    <main>
      <header className="site-header">
        <nav className="nav shell" aria-label="Main navigation">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-mark">Z</span>
            <span>Zaid<span className="brand-light"> Nagori</span></span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            {[
              ["About", "#about"], ["Experience", "#experience"], ["Projects", "#projects"],
              ["Skills", "#skills"], ["Contact", "#contact"]
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-cta" href="#projects" onClick={closeMenu}>Explore work <ArrowRight size={15} /></a>
          </div>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot" /> OPEN TO OPPORTUNITIES</div>
            <p className="hero-kicker">Hello, I’m</p>
            <h1>Zaid <span>Nagori.</span></h1>
            <h2>Software Developer <span>&</span><br className="desktop-break" /> Data Analyst</h2>
            <p className="hero-description">
              I build thoughtful web experiences and turn raw data into useful insights.
              I enjoy solving practical problems with clean code, modern tools, and a learning mindset.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">View my projects <ArrowRight size={17} /></a>
              <a href="#contact" className="button button-ghost">Let’s connect <Mail size={16} /></a>
            </div>
            <div className="hero-highlights">
              <span><Code2 size={17} /> Full-stack development</span>
              <span><BarChart3 size={17} /> Data analytics</span>
              <span><Sparkles size={17} /> Problem solving</span>
            </div>
          </div>
        
<div className="hero-visual">
  <div className="portrait-halo" />

  <div className="portrait-card">
    <img
      src="/zaid.jpg"
      alt="Zaid Nagori"
    />
  </div>

  <div className="hero-visual-caption">
    <span className="caption-line" />
    Curious by nature. Developer by practice.
  </div>
</div>

        </div>
        <a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
      </section>

      <section className="about section shell" id="about">
        <div className="about-intro">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Building useful things, learning every day." />
          <p className="body-copy">
            I’m a software developer with hands-on internship and project experience in full-stack web development.
            I work across responsive frontend interfaces, backend APIs, and databases. I also enjoy data analytics,
            where I use Python, SQL, and visualization tools to make information easier to understand.
          </p>
          <p className="body-copy">
            I value clear communication, practical problem-solving, and writing maintainable code. I’m looking for
            opportunities to contribute to a team, keep improving, and build products that help people.
          </p>
          <div className="about-facts">
            <div className="fact"><GraduationCap size={19} /><div><span>Education</span><strong>BE, Artificial Intelligence & Machine Learning</strong><small> M. H. Saboo Siddik College of Engineering · University of Mumbai · Graduated 2026</small></div></div>
            <div className="fact"><MapPin size={19} /><div><span>Based in</span><strong>Mumbai, India</strong></div></div>
          </div>
        </div>
        <div className="about-side">
          <div className="quote-card">
            <div className="quote-mark">“</div>
            <p>Good software is more than code. It’s about understanding a problem and making the solution feel simple.</p>
            <span>MY APPROACH</span>
          </div>
          <div className="focus-card">
            <p className="eyebrow">CURRENT FOCUS</p>
            <div className="focus-item"><CheckCircle2 size={17} /><span>Full-stack web development</span></div>
            <div className="focus-item"><CheckCircle2 size={17} /><span>Data analysis & visualization</span></div>
            <div className="focus-item"><CheckCircle2 size={17} /><span>Learning, shipping, improving</span></div>
          </div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="shell">
          <SectionHeading eyebrow="WHERE I’VE LEARNED" title="Internship experience" description="Practical experience building interfaces, integrating APIs, and working with databases." />
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-card" key={item.company}>
                <div className="experience-index">0{index + 1}</div>
                <div className="experience-main">
                  <div className="experience-top"><div><h3>{item.role}</h3><p>{item.company}</p></div><span className="period">{item.period}</span></div>
                  <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


<section className="projects section shell" id="projects">
  <SectionHeading
    eyebrow="SELECTED WORK"
    title="Projects that bring ideas to life."
    description="A selection of full-stack builds and analytics work."
  />

  <div className="project-grid">
    {projects.map((project) => (
      <article
        className={`project-card accent-${project.accent}`}
        key={project.number}
      >
        <div className="project-card-top">
          <span className="project-number">{project.number}</span>
          <span className="project-icon">{project.icon}</span>
        </div>

        <p className="project-type">{project.type}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="tag-list">
          {project.stack.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="project-footer">
          <span>{project.note}</span>
          <span className="project-arrow">
            <ArrowRight size={17} />
          </span>
        </div>

        {"link" in project && project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project <span aria-hidden="true">↗</span>
          </a>
        )}

      
      {"github" in project && project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    View on GitHub <span aria-hidden="true">↗</span>
  </a>
)}
        
      </article>
    ))}
  </div>
</section>


      <section className="skills section" id="skills">
        <div className="shell">
          <SectionHeading eyebrow="MY TOOLKIT" title="Skills & technologies" description="Tools I’ve used in projects, internships, or learning." />
          <div className="skills-grid">
            {skillGroups.map(({ title, icon: Icon, skills }) => (
              <article className="skill-card" key={title}>
                <div className="skill-title"><span><Icon size={18} /></span><h3>{title}</h3></div>
                <div className="tag-list">{skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

    
<section className="contact section shell" id="contact">
  <div className="contact-panel">
    <div className="contact-orb" />

    <div className="contact-content">
      <p className="eyebrow">HAVE A ROLE OR PROJECT IN MIND?</p>

      <h2>
        Let’s build something <span>meaningful.</span>
      </h2>

      <p>
        I’m interested in junior software development, full-stack
        development, and data analytics opportunities. I’d be happy
        to connect and discuss how I can contribute to your team.
      </p>

      <div className="contact-actions">
    
       <a
  className="button button-primary"
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(
    "Job Opportunity - Full Stack Developer"
  )}&body=${encodeURIComponent(
    "Hi Zaid,\n\nI came across your portfolio and would like to discuss a potential opportunity with you.\n\nRegards,"
  )}`}
  target="_blank"
  rel="noreferrer"
>
  Contact Me <Mail size={16} />
</a>

        <a
          className="button button-ghost"
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <Linkedin size={16} />
        </a>

        <a
          className="button button-ghost"
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
        >
          GitHub <Github size={16} />
        </a>
      </div>

      <p className="contact-note">
        Open to junior developer, full-stack, and data analytics
        opportunities.
      </p>
    </div>
  </div>
</section>
```

      <footer className="footer shell">
        <a href="#home" className="brand"><span className="brand-mark">Z</span><span>Zaid<span className="brand-light"> Nagori</span></span></a>
        <p>Designed to grow with the work I do.</p>
        <a href="#home" className="back-top">Back to top ↑</a>
        <small>© {new Date().getFullYear()} Zaid Nagori</small>
      </footer>
    </main>
  );
}
