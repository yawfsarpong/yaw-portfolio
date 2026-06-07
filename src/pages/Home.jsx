import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getPrimary, getSecondary } from '../data/projects'
import './Home.css'

/* ── Reusable reveal wrapper ──────────────────────────────────── */
function Reveal({ children, delay = 0, y = 24, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ── Scene 1: Hero ───────────────────────────────────────────── */
function HeroScene() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="hero">
      <motion.div className="hero__inner" style={{ y, opacity }}>
        <motion.div
          className="hero__eyebrow-wrap"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/media/profile.jpg"
            alt="Yaw Sarpong"
            className="hero__avatar"
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
          <span className="label">Programme Manager  ·  Environmental Systems  ·  Sustainability</span>
        </motion.div>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          Yaw
          <br />
          <span className="hero__name--outline">Sarpong</span>
        </motion.h1>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Programme delivery and systems thinking
          <br />
          applied to zero emission infrastructure.
        </motion.p>

        <motion.div
          className="hero__accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>

      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <div className="hero__scroll-line" />
        <span className="hero__scroll-label label label--muted">Scroll</span>
      </motion.div>
    </section>
  )
}

/* ── Project Card ────────────────────────────────────────────── */
function ProjectCard({ project, index, size = 'primary' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={`card card--${size}`}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/project/${project.id}`} className="card__link">
        <div className="card__inner">
          <div className="card__media">
            <div
              className="card__placeholder"
              style={{ '--accent': project.accentColor }}
            >
              <span className="card__num">{project.num}</span>
            </div>
          </div>
          <div className="card__body">
            <div className="card__meta">
              <span className="label label--muted">{project.year}</span>
              <span className="label label--muted" style={{ color: project.accentColor }}>
                {project.tags[0]}
              </span>
            </div>
            <h3 className="card__title">{project.title}</h3>
            <p className="card__tagline">{project.tagline}</p>
            <div className="card__discipline">{project.discipline}</div>
            <div className="card__arrow">View project →</div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

/* ── Scene 2: Featured Projects ──────────────────────────────── */
function FeaturedScene() {
  const primary = getPrimary()
  return (
    <section className="section featured">
      <div className="container">
        <Reveal className="section__header">
          <div className="label">Featured Projects</div>
          <h2 className="section__title">Three deep systems,<br />three different scales.</h2>
        </Reveal>
        <div className="featured__grid">
          {primary.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} size="primary" />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Scene 3: Secondary Projects ─────────────────────────────── */
function SecondaryScene() {
  const secondary = getSecondary()
  return (
    <section className="section secondary">
      <div className="container">
        <Reveal className="section__header">
          <div className="label">More Projects</div>
          <h2 className="section__title">Four more projects<br />across the same territory.</h2>
        </Reveal>
        <div className="secondary__grid">
          {secondary.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} size="secondary" />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Scene 4: About Teaser ───────────────────────────────────── */
function AboutTeaser() {
  return (
    <section className="section about-teaser">
      <div className="container">
        <div className="about-teaser__inner">
          <Reveal className="about-teaser__text" delay={0}>
            <div className="label">About</div>
            <p className="about-teaser__body">
              Environmental physicist by training. Programme manager by practice.
              My work sits at the intersection of zero emission transport, clean
              maritime infrastructure, and operational programme delivery.
            </p>
            <p className="about-teaser__body about-teaser__body--secondary">
              MSc Environmental Physics, University of Bremen. Four years leading
              infrastructure delivery programmes across the UK. Based in Greater Portsmouth.
            </p>
            <Link to="/about" className="about-teaser__link">
              More about me →
            </Link>
          </Reveal>
          <Reveal className="about-teaser__tags" delay={0.15}>
            {[
              'Zero Emission Transport',
              'Clean Maritime',
              'EV Infrastructure',
              'Science Communication',
              'Systems Design',
              'Accessible Transport',
              'Palaeoclimate',
              'Geospatial Analysis',
            ].map(tag => (
              <span key={tag} className="about-teaser__tag">{tag}</span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ── Scene 5: Contact Form ───────────────────────────────────── */
function ContactScene() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent('Portfolio enquiry from ' + form.name)
    const body = encodeURIComponent(
      'Name: ' + form.name + '\n' +
      'Email: ' + form.email + '\n\n' +
      form.message
    )
    window.location.href = 'mailto:yawfsarpong@gmail.com?subject=' + subject + '&body=' + body
    setSent(true)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="contact__inner">
          <div className="label">Contact</div>
          <h2 className="contact__heading">
            Working on something<br />at the intersection of<br />science and infrastructure?
          </h2>

          {sent ? (
            <p className="contact__thanks">
              Your email client should have opened. If not, reach out directly at{' '}
              <a href="mailto:yawfsarpong@gmail.com" className="contact__inline-link">
                yawfsarpong@gmail.com
              </a>
            </p>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__label" htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    className="contact__input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    className="contact__input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="contact__textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or enquiry..."
                  rows={5}
                  required
                />
              </div>
              <div className="contact__actions">
                <button type="submit" className="contact__submit">
                  Send message
                </button>
              </div>
            </form>
          )}

          <div className="contact__links">
            <a
              href="https://linkedin.com/in/yawfsarpong"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <svg className="contact__li-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ── Page ────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main>
      <HeroScene />
      <FeaturedScene />
      <SecondaryScene />
      <AboutTeaser />
      <ContactScene />
    </main>
  )
}
