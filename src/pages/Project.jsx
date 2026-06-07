import { useRef, useEffect, useState, useCallback } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { getById, PROJECTS } from '../data/projects'
import './Project.css'

function Reveal({ children, delay = 0, y = 28, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  )
}

function ProjectHero({ project }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  return (
    <section ref={ref} className="cs-hero" style={{ '--accent': project.accentColor }}>
      <motion.div className="cs-hero__inner" style={{ y, opacity }}>
        <div className="container">
          <motion.div className="cs-hero__eyebrow"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
            <Link to="/" className="cs-hero__back">All projects</Link>
            <span className="label" style={{ color: project.accentColor }}>{project.heroEyebrow}</span>
          </motion.div>
          <motion.h1 className="cs-hero__title"
            initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}>
            {project.title}
          </motion.h1>
          <motion.p className="cs-hero__tagline"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}>
            {project.tagline}
          </motion.p>
          <motion.div className="cs-hero__meta"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}>
            <div className="cs-hero__meta-item">
              <span className="label label--muted">Year</span>
              <span className="cs-hero__meta-val">{project.year}</span>
            </div>
            <div className="cs-hero__meta-item">
              <span className="label label--muted">Discipline</span>
              <span className="cs-hero__meta-val">{project.discipline}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="cs-hero__watermark">{project.num}</div>
    </section>
  )
}

function ProblemScene({ project }) {
  return (
    <section className="cs-section cs-problem" style={{ '--accent': project.accentColor }}>
      <div className="container">
        <div className="cs-two-col">
          <Reveal className="cs-two-col__left">
            <div className="label">The Problem</div>
            <p className="cs-body-lg">{project.problemStatement}</p>
          </Reveal>
          <Reveal className="cs-two-col__right" delay={0.12}>
            <div className="cs-metrics">
              {project.problemMetrics.map((m, i) => (
                <Reveal key={i} className="cs-metric" delay={0.08 * i}>
                  <div className="cs-metric__value" style={{ color: project.accentColor }}>{m.value}</div>
                  <div className="cs-metric__label">{m.label}</div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ResearchScene({ project }) {
  return (
    <section className="cs-section cs-research" style={{ '--accent': project.accentColor }}>
      <div className="container">
        <Reveal>
          <div className="label">Research</div>
          <h2 className="cs-h2">{project.researchTitle}</h2>
        </Reveal>
        <div className="cs-two-col cs-two-col--research">
          <Reveal className="cs-two-col__left" delay={0.1}>
            <p className="cs-body">{project.researchBody}</p>
          </Reveal>
          <Reveal className="cs-two-col__right" delay={0.2}>
            <div className="cs-methods">
              {project.researchMethods.map((m, i) => (
                <div key={i} className="cs-method">
                  <span className="cs-method__dot" style={{ background: project.accentColor }} />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ProcessScene({ project }) {
  return (
    <section className="cs-section cs-process" style={{ '--accent': project.accentColor }}>
      <div className="container">
        <Reveal>
          <div className="label">Process</div>
          <h2 className="cs-h2">How it came together.</h2>
        </Reveal>
        <div className="cs-process__steps">
          {project.process.map((step, i) => {
            const hasSlide = project.slides && step.slideIdx !== undefined
            return (
              <Reveal key={step.step} className="cs-step" delay={0.08 * i}>
                <div className="cs-step__num" style={{ color: project.accentColor }}>{step.step}</div>
                <div className="cs-step__content">
                  <div className="cs-step__label">{step.label}</div>
                  <p className="cs-step__body">{step.body}</p>
                  {hasSlide ? (
                    <img src={project.slides[step.slideIdx]}
                      alt={step.label}
                      className="cs-step__slide-img"
                      loading="lazy" />
                  ) : (
                    <div className="cs-step__img-placeholder">
                      <span className="label label--muted">{step.img}</span>
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function SolutionScene({ project }) {
  return (
    <>
      <section className="cs-section cs-solution" style={{ '--accent': project.accentColor }}>
        <div className="container">
          <div className="cs-two-col">
            <Reveal className="cs-two-col__left">
              <div className="label">The Solution</div>
              <h2 className="cs-h2">{project.solutionTitle}</h2>
              <p className="cs-body">{project.solutionBody}</p>
            </Reveal>
            <Reveal className="cs-two-col__right" delay={0.15}>
              <div className="cs-solution__media">
                {project.video ? (
                  <video className="cs-solution__video"
                    src={project.video}
                    autoPlay muted loop playsInline controls />
                ) : (
                  <div className="cs-solution__video-placeholder">
                    <span className="label label--muted">Solution Demo</span>
                  </div>
                )}
              </div>
              <div className="cs-solution__metrics">
                {project.solutionMetrics.map((m, i) => (
                  <Reveal key={i} className="cs-solution__metric" delay={0.08 * i}>
                    <div className="cs-solution__metric-value" style={{ color: project.accentColor }}>{m.value}</div>
                    <div className="cs-solution__metric-label">{m.label}</div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {project.slides && (
        <SlidesGallery slides={project.slides} accentColor={project.accentColor} />
      )}
    </>
  )
}

/* ── Slides Gallery + Lightbox ───────────────────────────────── */
function SlidesGallery({ slides, accentColor }) {
  const [active, setActive] = useState(null)

  const open  = useCallback(i => setActive(i), [])
  const close = useCallback(() => setActive(null), [])
  const prev  = useCallback(() => setActive(i => (i - 1 + slides.length) % slides.length), [slides.length])
  const next  = useCallback(() => setActive(i => (i + 1) % slides.length), [slides.length])

  useEffect(() => {
    if (active === null) return
    const onKey = e => {
      if (e.key === 'Escape')      close()
      if (e.key === 'ArrowLeft')   prev()
      if (e.key === 'ArrowRight')  next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, close, prev, next])

  return (
    <>
      <section className="cs-section cs-slides-gallery" style={{ '--accent': accentColor }}>
        <div className="container">
          <Reveal>
            <div className="label">Presentation Slides</div>
            <h2 className="cs-h2">Full slide deck — click any slide to expand.</h2>
          </Reveal>
        </div>
        <div className="cs-slides-scroll">
          {slides.map((src, i) => (
            <motion.button key={i} className="cs-slide-item cs-slide-item--btn"
              onClick={() => open(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}>
              <img src={src} alt={'Slide ' + (i + 1)} className="cs-slide-img" loading="lazy" />
              <span className="cs-slide-num label label--muted">{(i + 1 < 10 ? '0' : '') + (i + 1)}</span>
              <span className="cs-slide-expand-hint" aria-hidden="true">⤢</span>
            </motion.button>
          ))}
        </div>
      </section>

      {active !== null && (
        <div className="cs-lightbox" role="dialog" aria-modal="true">
          <button className="cs-lightbox__close" onClick={close} aria-label="Close">✕</button>
          <button className="cs-lightbox__nav cs-lightbox__nav--prev" onClick={prev} aria-label="Previous">‹</button>
          <div className="cs-lightbox__img-wrap" onClick={close}>
            <img
              src={slides[active]}
              alt={'Slide ' + (active + 1)}
              className="cs-lightbox__img"
              onClick={e => e.stopPropagation()}
            />
          </div>
          <button className="cs-lightbox__nav cs-lightbox__nav--next" onClick={next} aria-label="Next">›</button>
          <span className="cs-lightbox__counter label label--muted">
            {(active + 1 < 10 ? '0' : '') + (active + 1)} / {(slides.length < 10 ? '0' : '') + slides.length}
          </span>
        </div>
      )}
    </>
  )
}

function ReflectionScene({ project }) {
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id)
  const next = PROJECTS[(currentIndex + 1) % PROJECTS.length]
  return (
    <section className="cs-section cs-reflection">
      <div className="container">
        <Reveal className="cs-reflection__inner">
          <div className="label">Reflection</div>
          <blockquote className="cs-reflection__quote">
            "{project.reflectionQuote}"
          </blockquote>
          <p className="cs-body cs-reflection__body">{project.reflectionBody}</p>
          <div className="cs-reflection__divider" />
          <div className="cs-reflection__next">
            <span className="label label--muted">Next project</span>
            <Link to={'/project/' + next.id} className="cs-reflection__next-link"
              style={{ '--accent': next.accentColor }}>
              {next.title} &rarr;
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Project() {
  const { id } = useParams()
  const project = getById(id)
  useEffect(() => { window.scrollTo(0, 0) }, [id])
  if (!project) return <Navigate to="/" replace />
  return (
    <main>
      <ProjectHero project={project} />
      <ProblemScene project={project} />
      <ResearchScene project={project} />
      <ProcessScene project={project} />
      <SolutionScene project={project} />
      <ReflectionScene project={project} />
    </main>
  )
}
