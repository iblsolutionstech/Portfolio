import { useEffect, useState } from 'react'
import profile from './assets/mauro-profile.png'
import certificate from './assets/javascript-coderhouse.jpg'

const github = 'https://github.com/iblsolutionstech'
const linkedin = 'https://www.linkedin.com/in/mauro-lopez-77b551209/'

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.25H3.25V20H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.88 6.75 1.88 1.88 0 0 0 4.88 3ZM20.75 13.15c0-3.55-1.9-5.2-4.43-5.2-2.04 0-2.95 1.12-3.46 1.9v-1.6H9.6V20h3.26v-5.82c0-1.53.29-3.01 2.18-3.01 1.86 0 1.88 1.74 1.88 3.11V20h3.26l.57-6.85Z" fill="currentColor"/></svg>
)

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.66.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.92a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"/></svg>
)

const IconExternal = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M13 11l6-6M19 13v6H5V5h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const IconGlobe = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M3 12h18M12 3c2.2 2.45 3.3 5.45 3.3 9S14.2 18.55 12 21M12 3C9.8 5.45 8.7 8.45 8.7 12S9.8 18.55 12 21" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
)

const copy = {
  es: {
    nav: ['Perfil','Experiencia','Trabajo','Formación'],
    connect: 'Conectar',
    status: 'SYSTEMS · SQL · BUSINESS PROCESSES · DEVELOPMENT',
    hello: 'Hola, soy Mauro.',
    heroBefore: 'Conozco la ',
    heroAccent1: 'operación',
    heroMid: '.\nDiseño la ',
    heroAccent2: 'solución',
    lead: 'Coordinador de Sistemas y Analista Funcional Técnico con experiencia en procesos logísticos, SQL Server, WMS/ERP, integraciones y mejora continua. Hoy amplío ese recorrido hacia el desarrollo de aplicaciones.',
    seeWork: 'Ver mi trabajo',
    metrics: [
      ['20+','años entendiendo procesos reales'],
      ['SQL','como eje técnico principal'],
      ['WMS / ERP','visión funcional + técnica']
    ],
    sectionProfile: 'PERFIL',
    profileTitle: 'Mi diferencial está en haber vivido el proceso antes de digitalizarlo.',
    profileP1: 'Mi carrera comenzó en operaciones logísticas y evolucionó hacia Sistemas. Ese recorrido me permite entender la necesidad del usuario, el impacto operativo y la lógica técnica detrás de una solución.',
    profileP2: 'Hoy trabajo combinando análisis funcional, SQL Server, WMS/ERP, integraciones, reporting, incidentes productivos y coordinación de requerimientos.',
    valueCards: [
      ['Datos & SQL','Consultas complejas, Stored Procedures, reporting y análisis de performance.'],
      ['Procesos','Relevamiento y transformación de necesidades operativas en soluciones sostenibles.'],
      ['Sistemas','WMS, ERP, integraciones, incidentes y coordinación con usuarios y proveedores.'],
      ['Desarrollo','JavaScript, React y Git como evolución de mi perfil técnico.']
    ],
    sectionExperience: 'EXPERIENCIA',
    experienceTitle: 'Una carrera que conecta operación, liderazgo y tecnología.',
    experienceText: 'No son etapas separadas. Cada rol suma contexto para entender mejor los sistemas y los procesos de hoy.',
    timeline: [
      ['2022 — Actualidad', 'Coordinador de Soporte de Sistemas', 'Cromosol', 'Análisis funcional y técnico, SQL Server, WMS/ERP, incidentes productivos, integraciones y coordinación de requerimientos.'],
      ['2013 — 2022', 'Coordinador de Logística', 'Cromosol', 'Coordinación de operaciones y equipos, mejora de procesos y análisis de información para la toma de decisiones.'],
      ['2006 — 2013', 'Supervisor de Recepción de Mercadería', 'Cromosol', 'Supervisión de recepción, almacenamiento, operación y gestión de personas.'],
      ['2003 — 2006', 'Operaciones Logísticas', 'Cromosol', 'Preparación de pedidos y abastecimiento, construyendo conocimiento del negocio desde la operación.']
    ],
    sectionWork: 'TRABAJO SELECCIONADO',
    workTitle: 'Lo que resuelvo en Sistemas y lo que construyo con código.',
    workText: 'La idea del portfolio es mostrar experiencia profesional sin exponer información confidencial y, al mismo tiempo, sumar proyectos públicos de desarrollo.',
    casesLabel: 'CASOS PROFESIONALES · ANONIMIZADOS',
    cases: [
      ['SQL / Performance','Optimización de procesos SQL críticos','Análisis de consultas, Stored Procedures, bloqueos y lógica de negocio para mejorar estabilidad, mantenibilidad y tiempos de respuesta en procesos operativos.',['SQL Server','T-SQL','Stored Procedures','Troubleshooting']],
      ['WMS / ERP','Procesos e integraciones operativas','Análisis funcional de flujos de recepción, stock, picking, embalaje y despacho, conectando necesidades del negocio con soluciones sobre WMS y ERP.',['WMS','ERP','Integraciones','Logística']],
      ['Reporting / Data','Información para la operación','Diseño de consultas y reportes para seguimiento operativo, análisis de incidencias y toma de decisiones en entornos con múltiples procesos y fuentes de datos.',['SSRS','Reporting','SQL','Análisis de datos']]
    ],
    devLabel: 'PROYECTOS DE DESARROLLO · GITHUB',
    projects: [
      ['Cotizador de Agencia Digital','JavaScript','https://github.com/iblsolutionstech/cotizador-agencia-digital','Aplicación de cotización orientada a lógica de negocio e interacción con usuarios.',['JavaScript','HTML','CSS']],
      ['Atelier Yanina Cattadori','React','https://github.com/iblsolutionstech/Proyecto-React-Atelier-Yanina-Cattadori','Proyecto web enfocado en componentes, presentación visual y experiencia de usuario.',['React','JavaScript','CSS']],
      ['Atelier Yanina Cattadori · Web','Desarrollo Web','https://github.com/iblsolutionstech/Curso-Coder-House-','Sitio responsive desarrollado con HTML, SASS, Bootstrap y Git.',['HTML','CSS','SASS','Git']]
    ],
    repo: 'Repositorio',
    sectionEducation: 'FORMACIÓN',
    educationTitle: 'Aprendizaje continuo con foco práctico.',
    educationText: 'La formación en desarrollo complementa mi experiencia en Sistemas, SQL y procesos. El objetivo es ampliar mi capacidad de pensar y construir soluciones de punta a punta.',
    education: [
      ['JavaScript · CoderHouse','Finalizado en agosto de 2026'],
      ['Desarrollo Web · CoderHouse','Proyecto final aprobado con 95%'],
      ['EducacionIT','Formación técnica complementaria']
    ],
    latestCert: 'ÚLTIMA CERTIFICACIÓN',
    sectionFocus: 'ÁREAS DE ENFOQUE',
    focus: [
      ['Sistemas & Operación','Comprensión de procesos reales y análisis funcional de soluciones que acompañan la operación.'],
      ['SQL & Datos','Consultas, Stored Procedures, troubleshooting, performance, reporting y análisis de información.'],
      ['WMS / ERP','Procesos logísticos, integraciones y visión funcional sobre sistemas críticos del negocio.'],
      ['Automatización & Desarrollo','JavaScript, React y nuevas herramientas para ampliar la capacidad de construir soluciones.']
    ],
    ctaLabel: 'CONECTEMOS',
    ctaTitle: 'Compartir experiencia también es una forma de seguir aprendiendo.',
    ctaText: 'Este portfolio reúne parte de mi recorrido en Sistemas, SQL, procesos logísticos y desarrollo. Si compartimos intereses profesionales, podés encontrarme en LinkedIn y GitHub.',
    langButton: 'EN'
  },
  en: {
    nav: ['Profile','Experience','Work','Education'],
    connect: 'Connect',
    status: 'SYSTEMS · SQL · BUSINESS PROCESSES · DEVELOPMENT',
    hello: 'Hi, I’m Mauro.',
    heroBefore: 'I understand the ',
    heroAccent1: 'operation',
    heroMid: '.\nI design the ',
    heroAccent2: 'solution',
    lead: 'Systems Coordinator and Senior Functional Technical Analyst with experience in logistics processes, SQL Server, WMS/ERP, integrations and continuous improvement. I am now expanding that background into application development.',
    seeWork: 'View my work',
    metrics: [
      ['20+','years understanding real business processes'],
      ['SQL','as my main technical foundation'],
      ['WMS / ERP','functional + technical perspective']
    ],
    sectionProfile: 'PROFILE',
    profileTitle: 'My advantage is having worked inside the process before helping digitalize it.',
    profileP1: 'My career started in logistics operations and evolved into Systems. That background helps me understand user needs, operational impact and the technical logic behind a solution.',
    profileP2: 'Today I work across functional analysis, SQL Server, WMS/ERP, integrations, reporting, production incidents and requirement coordination.',
    valueCards: [
      ['Data & SQL','Complex queries, Stored Procedures, reporting and performance analysis.'],
      ['Processes','Understanding operational needs and turning them into sustainable solutions.'],
      ['Systems','WMS, ERP, integrations, incidents and coordination with users and vendors.'],
      ['Development','JavaScript, React and Git as the next step in my technical profile.']
    ],
    sectionExperience: 'EXPERIENCE',
    experienceTitle: 'A career connecting operations, leadership and technology.',
    experienceText: 'These are not separate stages. Each role adds context to better understand today’s systems and processes.',
    timeline: [
      ['2022 — Present', 'Systems Support Coordinator', 'Cromosol', 'Functional and technical analysis, SQL Server, WMS/ERP, production incidents, integrations and requirement coordination.'],
      ['2013 — 2022', 'Logistics Coordinator', 'Cromosol', 'Operations and team coordination, process improvement and information analysis for decision-making.'],
      ['2006 — 2013', 'Goods Receiving Supervisor', 'Cromosol', 'Supervision of receiving, storage, operations and people management.'],
      ['2003 — 2006', 'Logistics Operations', 'Cromosol', 'Order preparation and replenishment, building business knowledge directly from day-to-day operations.']
    ],
    sectionWork: 'SELECTED WORK',
    workTitle: 'What I solve in Systems and what I build with code.',
    workText: 'This portfolio shows professional experience without exposing confidential information, while also presenting public development projects.',
    casesLabel: 'PROFESSIONAL CASES · ANONYMIZED',
    cases: [
      ['SQL / Performance','Optimization of critical SQL processes','Analysis of queries, Stored Procedures, locking and business logic to improve stability, maintainability and response times in operational processes.',['SQL Server','T-SQL','Stored Procedures','Troubleshooting']],
      ['WMS / ERP','Operational processes and integrations','Functional analysis of receiving, stock, picking, packing and dispatch flows, connecting business needs with WMS and ERP solutions.',['WMS','ERP','Integrations','Logistics']],
      ['Reporting / Data','Information for operations','Design of queries and reports for operational monitoring, incident analysis and decision-making across multiple processes and data sources.',['SSRS','Reporting','SQL','Data Analysis']]
    ],
    devLabel: 'DEVELOPMENT PROJECTS · GITHUB',
    projects: [
      ['Digital Agency Quoting Tool','JavaScript','https://github.com/iblsolutionstech/cotizador-agencia-digital','Quoting application focused on business logic and user interaction.',['JavaScript','HTML','CSS']],
      ['Atelier Yanina Cattadori','React','https://github.com/iblsolutionstech/Proyecto-React-Atelier-Yanina-Cattadori','Web project focused on components, visual presentation and user experience.',['React','JavaScript','CSS']],
      ['Atelier Yanina Cattadori · Web','Web Development','https://github.com/iblsolutionstech/Curso-Coder-House-','Responsive website built with HTML, SASS, Bootstrap and Git.',['HTML','CSS','SASS','Git']]
    ],
    repo: 'Repository',
    sectionEducation: 'EDUCATION',
    educationTitle: 'Continuous learning with a practical focus.',
    educationText: 'Development training complements my experience in Systems, SQL and business processes. The goal is to expand my ability to think through and build complete solutions end to end.',
    education: [
      ['JavaScript · CoderHouse','Completed in August 2026'],
      ['Web Development · CoderHouse','Final project approved with 95%'],
      ['EducacionIT','Additional technical training']
    ],
    latestCert: 'LATEST CERTIFICATION',
    sectionFocus: 'FOCUS AREAS',
    focus: [
      ['Systems & Operations','Understanding real processes and providing functional analysis for solutions that support operations.'],
      ['SQL & Data','Queries, Stored Procedures, troubleshooting, performance, reporting and information analysis.'],
      ['WMS / ERP','Logistics processes, integrations and a functional view of business-critical systems.'],
      ['Automation & Development','JavaScript, React and new tools to expand my ability to build solutions.']
    ],
    ctaLabel: 'LET’S CONNECT',
    ctaTitle: 'Sharing experience is also a way to keep learning.',
    ctaText: 'This portfolio brings together part of my background in Systems, SQL, logistics processes and development. If we share professional interests, you can find me on LinkedIn and GitHub.',
    langButton: 'ES'
  }
}

const skills = ['SQL Server','T-SQL','Stored Procedures','Análisis Funcional','WMS Cygnus','ERP Softland','SSRS','Integraciones','Troubleshooting','Procesos Logísticos','JavaScript','React','Git']

function SocialLink({ href, label, icon }) {
  return <a className="social-link" href={href} target="_blank" rel="noreferrer">
    <span className="social-icon">{icon}</span>
    <span>{label}</span>
    <span className="external-icon"><IconExternal /></span>
  </a>
}

export default function App(){
  const [menu,setMenu] = useState(false)
  const [lang,setLang] = useState('es')
  const t = copy[lang]
  const go = (id) => { document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); setMenu(false) }

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = lang === 'es' ? 'Mauro Lopez | Systems · SQL · Business Processes' : 'Mauro Lopez | Systems · SQL · Business Processes'
  }, [lang])

  return <main>
    <header className="header">
      <div className="nav-shell">
        <a className="brand" href="#top">MAURO<span>LOPEZ</span></a>
        <nav className="desktop-nav">
          <button onClick={()=>go('perfil')}>{t.nav[0]}</button>
          <button onClick={()=>go('experiencia')}>{t.nav[1]}</button>
          <button onClick={()=>go('trabajo')}>{t.nav[2]}</button>
          <button onClick={()=>go('formacion')}>{t.nav[3]}</button>
        </nav>
        <div className="nav-tools">
          <button className="language-toggle" onClick={()=>setLang(lang === 'es' ? 'en' : 'es')} aria-label="Cambiar idioma">
            <IconGlobe /><span>{t.langButton}</span>
          </button>
          <a className="nav-cta" href={linkedin} target="_blank" rel="noreferrer">{t.connect} ↗</a>
          <button className="menu" onClick={()=>setMenu(!menu)}>{menu?'×':'☰'}</button>
        </div>
        {menu && <div className="mobile-nav">
          <button onClick={()=>go('perfil')}>{t.nav[0]}</button>
          <button onClick={()=>go('experiencia')}>{t.nav[1]}</button>
          <button onClick={()=>go('trabajo')}>{t.nav[2]}</button>
          <button onClick={()=>go('formacion')}>{t.nav[3]}</button>
        </div>}
      </div>
    </header>

    <section id="top" className="hero shell">
      <div className="hero-copy">
        <div className="status"><i></i> {t.status}</div>
        <p className="hello">{t.hello}</p>
        <h1>{t.heroBefore}<em>{t.heroAccent1}</em>.<br/>{lang === 'es' ? 'Diseño la ' : 'I design the '}<em>{t.heroAccent2}</em>.</h1>
        <p className="lead">{t.lead}</p>
        <div className="actions">
          <button className="btn primary" onClick={()=>go('trabajo')}>{t.seeWork} ↓</button>
        </div>
        <div className="social-links hero-socials">
          <SocialLink href={linkedin} label="LinkedIn" icon={<IconLinkedIn />} />
          <SocialLink href={github} label="GitHub" icon={<IconGitHub />} />
        </div>
        <div className="metrics">
          {t.metrics.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </div>

      <div className="hero-visual">
        <div className="grid-bg"></div>
        <div className="photo-card"><img src={profile} alt="Mauro Lopez"/></div>
        <div className="float-card fc1"><small>CORE</small><b>SQL Server · T-SQL</b></div>
        <div className="float-card fc2"><small>VALUE</small><b>Business ↔ Technology</b></div>
        <div className="terminal">
          <div className="terminal-top"><span></span><span></span><span></span><b>business_process.sql</b></div>
          <pre>{`SELECT
  problema,
  impacto,
  prioridad,
  solucion
FROM proceso_negocio
WHERE requiere_mejora = 1;`}</pre>
        </div>
      </div>
    </section>

    <div className="ticker"><div>
      {['SQL SERVER','T-SQL','ANÁLISIS FUNCIONAL','WMS CYGNUS','ERP SOFTLAND','INTEGRACIONES','SSRS','JAVASCRIPT','REACT','GIT','SQL SERVER','T-SQL','ANÁLISIS FUNCIONAL','WMS CYGNUS','ERP SOFTLAND','INTEGRACIONES','SSRS','JAVASCRIPT','REACT','GIT'].map((x,i)=><span key={i}>{x}<b>•</b></span>)}
    </div></div>

    <section id="perfil" className="section shell">
      <div className="section-head"><span>01</span><b>{t.sectionProfile}</b></div>
      <div className="split">
        <h2>{t.profileTitle}</h2>
        <div className="body-copy"><p>{t.profileP1}</p><p>{t.profileP2}</p></div>
      </div>
      <div className="value-grid">
        {t.valueCards.map(([title,text],i)=><article key={title}><div>0{i+1}</div><h3>{title}</h3><p>{text}</p></article>)}
      </div>
      <div className="skills">{skills.map(s=><span key={s}>{s}</span>)}</div>
    </section>

    <section id="experiencia" className="section alt">
      <div className="shell">
        <div className="section-head"><span>02</span><b>{t.sectionExperience}</b></div>
        <div className="section-intro"><h2>{t.experienceTitle}</h2><p>{t.experienceText}</p></div>
        <div className="timeline">{t.timeline.map((item,i)=><article key={item[1]}>
          <div className="n">0{i+1}</div><div className="years">{item[0]}</div><div className="role"><h3>{item[1]}</h3><span>{item[2]}</span></div><p>{item[3]}</p>
        </article>)}</div>
      </div>
    </section>

    <section id="trabajo" className="section shell">
      <div className="section-head"><span>03</span><b>{t.sectionWork}</b></div>
      <div className="section-intro"><h2>{t.workTitle}</h2><p>{t.workText}</p></div>

      <h4 className="subhead">{t.casesLabel}</h4>
      <div className="cases">{t.cases.map((c,i)=><article key={c[1]} className="case-card">
        <div className="case-top"><span>0{i+1}</span><b>{c[0]}</b></div><h3>{c[1]}</h3><p>{c[2]}</p><div className="tags">{c[3].map(tag=><span key={tag}>{tag}</span>)}</div>
      </article>)}</div>

      <h4 className="subhead dev-title">{t.devLabel}</h4>
      <div className="dev-grid">{t.projects.map((p,i)=><a className={i===0?'dev-card featured':'dev-card'} href={p[2]} target="_blank" rel="noreferrer" key={p[0]}>
        <div className="dev-visual"><span>{p[1]}</span><div className="fake-ui"><i></i><i></i><i></i><strong></strong><em></em></div></div>
        <div className="dev-copy"><div className="dev-top"><b>0{i+1}</b><span>{t.repo} ↗</span></div><h3>{p[0]}</h3><p>{p[3]}</p><div className="tags">{p[4].map(tag=><span key={tag}>{tag}</span>)}</div></div>
      </a>)}</div>
    </section>

    <section id="formacion" className="section alt">
      <div className="shell">
        <div className="section-head"><span>04</span><b>{t.sectionEducation}</b></div>
        <div className="education">
          <div><h2>{t.educationTitle}</h2><p>{t.educationText}</p>
            <div className="edu-list">{t.education.map(([title,text])=><div key={title}><b>{title}</b><span>{text}</span></div>)}</div>
          </div>
          <div className="cert-card"><img src={certificate} alt="Certificado JavaScript CoderHouse"/><div><span>{t.latestCert}</span><b>JavaScript · CoderHouse</b><small>22.08.2026</small></div></div>
        </div>
      </div>
    </section>

    <section className="section roles-section">
      <div className="shell">
        <div className="section-head"><span>05</span><b>{t.sectionFocus}</b></div>
        <div className="roles-grid">
          {t.focus.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="cta shell">
      <div className="cta-card">
        <span>{t.ctaLabel}</span>
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaText}</p>
        <div className="social-links cta-socials">
          <SocialLink href={linkedin} label="LinkedIn" icon={<IconLinkedIn />} />
          <SocialLink href={github} label="GitHub" icon={<IconGitHub />} />
        </div>
      </div>
    </section>

    <footer className="shell"><div className="brand">MAURO<span>LOPEZ</span></div><p>Systems · SQL · Business Processes · Development</p><p>© 2026</p></footer>
  </main>
}
