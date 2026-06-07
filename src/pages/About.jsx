import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import './About.css'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

const EXPERIENCE = [
  {
    role: 'Programme Manager, Infrastructure Delivery',
    org: 'Zero Emission Vehicle Infrastructure Sector',
    period: '2022 – 2026',
    detail: 'Led programme delivery and lifecycle management across large-scale zero-emission infrastructure rollouts in the UK. Accountable for cross-functional stakeholder coordination, risk and change management, programme planning, and performance governance across multi-site projects. Managed delivery teams, third-party contractor performance, and reporting to senior leadership.',
  },
  {
    role: 'MSc Researcher, Environmental Physics',
    org: 'University of Bremen',
    period: '2017 – 2020',
    detail: 'Thesis: ocean circulation modelling using MITgcm to constrain deep Pacific radiocarbon ages across pre-industrial and Last Glacial Maximum climate states. Python analysis of GLODAP radiocarbon datasets and AMOC transport diagnostics.',
  },
  {
    role: 'BSc Mathematical / Engineering Physics',
    org: 'University of Cape Coast',
    period: '2009 – 2013',
    detail: 'Quantitative modelling, mathematical methods, and applied physics fundamentals. Foundation in numerical analysis and physical systems.',
  },
]

const SKILLS = [
  {
    category: 'Programme Management',
    items: [
      'Programme Delivery',
      'Stakeholder Management',
      'Risk and Change Management',
      'Cross-functional Leadership',
      'Lifecycle Management',
      'Operational Planning',
      'Governance and Reporting',
    ],
  },
  {
    category: 'Scientific',
    items: [
      'Ocean Circulation Modelling (MITgcm)',
      'Radiocarbon Geochemistry (δ14C)',
      'Environmental Physics',
      'Carbon Footprinting',
      'Solar Energy Systems',
      'ESG Frameworks',
      'Transport Emissions Analysis',
    ],
  },
  {
    category: 'Tools & Software',
    items: [
      'Python (pandas, NumPy, matplotlib)',
      'SQL',
      'Power BI',
      'Tableau',
      'Microsoft Project',
      'Excel / Power Query',
      'ArcGIS / QGIS',
      'MATLAB',
    ],
  },
  {
    category: 'Domains',
    items: [
      'Zero Emission Transport Infrastructure',
      'Clean Maritime',
      'EV Charging Networks',
      'Accessible Transport Systems',
      'Palaeoclimate Systems',
      'Geospatial Analysis',
    ],
  },
]


function AboutContact() {
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
    <section className="section about-contact">
      <div className="container">
        <Reveal className="about-contact__inner">
          <div className="label">Contact</div>
          <h2 className="about-contact__heading">
            Working on something<br />at the intersection of<br />science and infrastructure?
          </h2>

          {sent ? (
            <p className="about-contact__thanks">
              Your email client should have opened. If not, reach me directly at{' '}
              <a href="mailto:yawfsarpong@gmail.com" className="about-contact__inline">
                yawfsarpong@gmail.com
              </a>
            </p>
          ) : (
            <form className="about-contact__form" onSubmit={handleSubmit}>
              <div className="about-contact__row">
                <div className="about-contact__field">
                  <label className="about-contact__label" htmlFor="ac-name">Name</label>
                  <input
                    id="ac-name"
                    className="about-contact__input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="about-contact__field">
                  <label className="about-contact__label" htmlFor="ac-email">Email</label>
                  <input
                    id="ac-email"
                    className="about-contact__input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="about-contact__field">
                <label className="about-contact__label" htmlFor="ac-msg">Message</label>
                <textarea
                  id="ac-msg"
                  className="about-contact__textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or enquiry..."
                  rows={5}
                  required
                />
              </div>
              <div className="about-contact__actions">
                <button type="submit" className="about-contact__submit">
                  Send message
                </button>
              </div>
            </form>
          )}

          <div className="about-contact__links">
            <a
              href="https://linkedin.com/in/yawfsarpong"
              target="_blank"
              rel="noreferrer"
              className="about-contact__link"
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

export default function About() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero__inner"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/" className="about-back">← Back</Link>
            <h1 className="about-hero__name">Yaw<br />Sarpong</h1>
            <p className="about-hero__role">
              Programme Manager  ·  Environmental Systems  ·  Sustainability
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section className="section about-bio">
        <div className="container">
          <div className="about-bio__inner">
            <Reveal className="about-bio__text">
              <div className="label">About</div>
              <p className="about-bio__p">
                My background starts in physics. An MSc in Environmental Physics at the
                University of Bremen, working on deep ocean carbon systems and how glacial
                climate states changed the way the ocean stores CO₂. The methodology was
                computational: MITgcm ocean circulation modelling, radiocarbon age analysis,
                Python-generated model outputs across two climate states separated by twenty
                thousand years.
              </p>
              <p className="about-bio__p">
                That scientific foundation runs alongside four years leading programme delivery
                across large-scale zero-emission infrastructure rollouts in the UK. Managing
                cross-functional teams, third-party contractors, risk registers, and performance
                governance at scale. Both tracks inform the same question: when a system
                produces data that matters, who reads it, and what changes because of what
                they learn?
              </p>
              <p className="about-bio__p">
                The portfolio applies that question across different contexts. From palaeoclimate
                science communication to zero emission freight corridors. From port
                decarbonisation planning to accessible transport infrastructure. The projects
                change. The method stays the same: understand the system, define the problem
                clearly, and deliver something that actually works.
              </p>
            </Reveal>
            <div className="about-bio__aside">
              <Reveal delay={0.05}>
                <div className="about-photo-wrap">
                  <img
                    src="/media/profile.jpg"
                    alt="Yaw Frimpong Sarpong"
                    className="about-photo"
                    onError={e => { e.currentTarget.style.display = 'none' }}
                  />
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="label label--muted">Based in</div>
                <p className="about-aside__val">Greater Portsmouth, UK</p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="label label--muted">Education</div>
                <p className="about-aside__val">MSc Environmental Physics, University of Bremen<br />BSc Mathematical Physics, University of Cape Coast</p>
              </Reveal>
              <Reveal delay={0.28}>
                <div className="label label--muted">Looking for</div>
                <p className="about-aside__val">
                  Programme management and project delivery roles in zero emission transport,
                  clean maritime, and sustainable infrastructure, where both analytical rigour
                  and operational delivery experience count.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section about-skills">
        <div className="container">
          <Reveal>
            <div className="label">Skills</div>
          </Reveal>
          <div className="about-skills__grid">
            {SKILLS.map((group, i) => (
              <Reveal key={group.category} delay={0.08 * i} className="about-skills__group">
                <div className="about-skills__category">{group.category}</div>
                <div className="about-skills__items">
                  {group.items.map(item => (
                    <span key={item} className="about-skills__item">{item}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section about-experience">
        <div className="container">
          <Reveal>
            <div className="label">Experience</div>
          </Reveal>
          <div className="about-exp__list">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={i} delay={0.1 * i} className="about-exp__item">
                <div className="about-exp__header">
                  <div className="about-exp__role">{e.role}</div>
                  <div className="about-exp__period">{e.period}</div>
                </div>
                <div className="about-exp__org">{e.org}</div>
                <p className="about-exp__detail">{e.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <AboutContact />
    </main>
  )
}
