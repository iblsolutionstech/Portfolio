import { useState } from 'react'
import profile from './assets/mauro-profile.jpg'
import certificate from './assets/javascript-coderhouse.jpg'

const github = 'https://github.com/iblsolutionstech'
const linkedin = 'https://www.linkedin.com/in/mauro-lopez-77b551209/'

const professionalCases = [
  {
    number: '01',
    label: 'SQL / Performance',
    title: 'Optimización de procesos SQL críticos',
    text: 'Análisis de consultas, Stored Procedures, bloqueos y lógica de negocio para mejorar estabilidad, mantenibilidad y tiempos de respuesta en procesos operativos.',
    tags: ['SQL Server', 'T-SQL', 'Stored Procedures', 'Troubleshooting']
  },
  {
    number: '02',
    label: 'WMS / ERP',
    title: 'Procesos e integraciones operativas',
    text: 'Análisis funcional de flujos de recepción, stock, picking, embalaje y despacho, conectando necesidades del negocio con soluciones sobre WMS y ERP.',
    tags: ['WMS', 'ERP', 'Integraciones', 'Logística']
  },
  {
    number: '03',
    label: 'Reporting / Data',
    title: 'Información para la operación',
    text: 'Diseño de consultas y reportes para seguimiento operativo, análisis de incidencias y toma de decisiones en entornos con múltiples procesos y fuentes de datos.',
    tags: ['SSRS', 'Reporting', 'SQL', 'Análisis de datos']
  }
]

const devProjects = [
  {
    title: 'Cotizador de Agencia Digital',
    type: 'JavaScript',
    url: 'https://github.com/iblsolutionstech/cotizador-agencia-digital',
    text: 'Aplicación de cotización desarrollada para practicar lógica de negocio e interacción con usuarios.',
    tags: ['JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Atelier Yanina Cattadori',
    type: 'React',
    url: 'https://github.com/iblsolutionstech/Proyecto-React-Atelier-Yanina-Cattadori',
    text: 'Proyecto web enfocado en componentes, presentación visual y experiencia de usuario.',
    tags: ['React', 'JavaScript', 'CSS']
  },
  {
    title: 'Proyecto CoderHouse',
    type: 'Desarrollo Web',
    url: 'https://github.com/iblsolutionstech/Curso-Coder-House-',
    text: 'Proyecto académico con maquetado responsive, CSS/SASS, Bootstrap, Git y despliegue.',
    tags: ['HTML', 'CSS', 'SASS', 'Git']
  }
]

const timeline = [
  ['2022 — Actualidad', 'Coordinador de Soporte de Sistemas', 'Cromosol', 'Análisis funcional y técnico, SQL Server, WMS/ERP, incidentes productivos, integraciones y coordinación de requerimientos.'],
  ['2013 — 2022', 'Coordinador de Logística', 'Cromosol', 'Coordinación de operaciones y equipos, mejora de procesos y análisis de información para la toma de decisiones.'],
  ['2006 — 2013', 'Supervisor de Recepción de Mercadería', 'Cromosol', 'Supervisión de recepción, almacenamiento, operación y gestión de personas.'],
  ['2003 — 2006', 'Operaciones Logísticas', 'Cromosol', 'Preparación de pedidos y abastecimiento, construyendo conocimiento del negocio desde la operación.']
]

const skills = ['SQL Server','T-SQL','Stored Procedures','Análisis Funcional','WMS Cygnus','ERP Softland','SSRS','Integraciones','Troubleshooting','Procesos Logísticos','JavaScript','React','Git']

export default function App(){
  const [menu,setMenu] = useState(false)
  const go = (id) => { document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); setMenu(false) }

  return <main>
    <header className="header">
      <div className="nav-shell">
        <a className="brand" href="#top">MAURO<span>LOPEZ</span></a>
        <nav className="desktop-nav">
          <button onClick={()=>go('perfil')}>Perfil</button>
          <button onClick={()=>go('experiencia')}>Experiencia</button>
          <button onClick={()=>go('trabajo')}>Trabajo</button>
          <button onClick={()=>go('formacion')}>Formación</button>
        </nav>
        <a className="nav-cta" href={linkedin} target="_blank">Conectar ↗</a>
        <button className="menu" onClick={()=>setMenu(!menu)}>{menu?'×':'☰'}</button>
        {menu && <div className="mobile-nav">
          <button onClick={()=>go('perfil')}>Perfil</button>
          <button onClick={()=>go('experiencia')}>Experiencia</button>
          <button onClick={()=>go('trabajo')}>Trabajo</button>
          <button onClick={()=>go('formacion')}>Formación</button>
        </div>}
      </div>
    </header>

    <section id="top" className="hero shell">
      <div className="hero-copy">
        <div className="status"><i></i> SYSTEMS · SQL · BUSINESS PROCESSES · DEVELOPMENT</div>
        <p className="hello">Hola, soy Mauro.</p>
        <h1>Conozco la <em>operación</em>.<br/>Diseño la <em>solución</em>.</h1>
        <p className="lead">Coordinador de Sistemas y Analista Funcional Técnico con experiencia en procesos logísticos, SQL Server, WMS/ERP, integraciones y mejora continua. Hoy amplío ese recorrido hacia el desarrollo de aplicaciones.</p>
        <div className="actions">
          <button className="btn primary" onClick={()=>go('trabajo')}>Ver mi trabajo ↓</button>
          <a className="btn" href={github} target="_blank">GitHub ↗</a>
          <a className="btn" href={linkedin} target="_blank">LinkedIn ↗</a>
        </div>
        <div className="metrics">
          <div><strong>20+</strong><span>años entendiendo procesos reales</span></div>
          <div><strong>SQL</strong><span>como eje técnico principal</span></div>
          <div><strong>WMS / ERP</strong><span>visión funcional + técnica</span></div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="grid-bg"></div>
        <div className="photo-card"><img src={profile} alt="Mauro Lopez"/></div>
        <div className="float-card fc1"><small>CORE</small><b>SQL Server · T-SQL</b></div>
        <div className="float-card fc2"><small>VALUE</small><b>Business ↔ Technology</b></div>
        <div className="terminal">
          <div className="terminal-top"><span></span><span></span><span></span><b>process.sql</b></div>
          <pre>{`SELECT\n  problema,\n  impacto,\n  solucion\nFROM negocio\nJOIN tecnologia\n  ON objetivo = resultado;`}</pre>
        </div>
      </div>
    </section>

    <div className="ticker"><div>
      {['SQL SERVER','T-SQL','ANÁLISIS FUNCIONAL','WMS CYGNUS','ERP SOFTLAND','INTEGRACIONES','SSRS','JAVASCRIPT','REACT','GIT','SQL SERVER','T-SQL','ANÁLISIS FUNCIONAL','WMS CYGNUS','ERP SOFTLAND','INTEGRACIONES','SSRS','JAVASCRIPT','REACT','GIT'].map((x,i)=><span key={i}>{x}<b>•</b></span>)}
    </div></div>

    <section id="perfil" className="section shell">
      <div className="section-head"><span>01</span><b>PERFIL</b></div>
      <div className="split">
        <h2>Mi diferencial está en haber vivido el proceso antes de digitalizarlo.</h2>
        <div className="body-copy"><p>Mi carrera comenzó en operaciones logísticas y evolucionó hacia Sistemas. Ese recorrido me permite entender la necesidad del usuario, el impacto operativo y la lógica técnica detrás de una solución.</p><p>Hoy trabajo combinando análisis funcional, SQL Server, WMS/ERP, integraciones, reporting, incidentes productivos y coordinación de requerimientos.</p></div>
      </div>
      <div className="value-grid">
        <article><div>01</div><h3>Datos & SQL</h3><p>Consultas complejas, Stored Procedures, reporting y análisis de performance.</p></article>
        <article><div>02</div><h3>Procesos</h3><p>Relevamiento y transformación de necesidades operativas en soluciones sostenibles.</p></article>
        <article><div>03</div><h3>Sistemas</h3><p>WMS, ERP, integraciones, incidentes y coordinación con usuarios y proveedores.</p></article>
        <article><div>04</div><h3>Desarrollo</h3><p>JavaScript, React y Git como evolución de mi perfil técnico.</p></article>
      </div>
      <div className="skills">{skills.map(s=><span key={s}>{s}</span>)}</div>
    </section>

    <section id="experiencia" className="section alt">
      <div className="shell">
        <div className="section-head"><span>02</span><b>EXPERIENCIA</b></div>
        <div className="section-intro"><h2>Una carrera que conecta operación, liderazgo y tecnología.</h2><p>No son etapas separadas. Cada rol suma contexto para entender mejor los sistemas y los procesos de hoy.</p></div>
        <div className="timeline">{timeline.map((t,i)=><article key={t[1]}>
          <div className="n">0{i+1}</div><div className="years">{t[0]}</div><div className="role"><h3>{t[1]}</h3><span>{t[2]}</span></div><p>{t[3]}</p>
        </article>)}</div>
      </div>
    </section>

    <section id="trabajo" className="section shell">
      <div className="section-head"><span>03</span><b>TRABAJO SELECCIONADO</b></div>
      <div className="section-intro"><h2>Lo que resuelvo en Sistemas y lo que construyo con código.</h2><p>La idea del portfolio es mostrar experiencia profesional sin exponer información confidencial y, al mismo tiempo, sumar proyectos públicos de desarrollo.</p></div>

      <h4 className="subhead">CASOS PROFESIONALES · ANONIMIZADOS</h4>
      <div className="cases">{professionalCases.map(c=><article key={c.number} className="case-card">
        <div className="case-top"><span>{c.number}</span><b>{c.label}</b></div><h3>{c.title}</h3><p>{c.text}</p><div className="tags">{c.tags.map(t=><span key={t}>{t}</span>)}</div>
      </article>)}</div>

      <h4 className="subhead dev-title">PROYECTOS DE DESARROLLO · GITHUB</h4>
      <div className="dev-grid">{devProjects.map((p,i)=><a className={i===0?'dev-card featured':'dev-card'} href={p.url} target="_blank" key={p.title}>
        <div className="dev-visual"><span>{p.type}</span><div className="fake-ui"><i></i><i></i><i></i><strong></strong><em></em></div></div>
        <div className="dev-copy"><div className="dev-top"><b>0{i+1}</b><span>Repositorio ↗</span></div><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div>
      </a>)}</div>
    </section>

    <section id="formacion" className="section alt">
      <div className="shell">
        <div className="section-head"><span>04</span><b>FORMACIÓN</b></div>
        <div className="education">
          <div><h2>Aprendizaje continuo con foco práctico.</h2><p>La formación en desarrollo complementa mi experiencia en Sistemas, SQL y procesos. El objetivo es ampliar mi capacidad de pensar y construir soluciones de punta a punta.</p>
            <div className="edu-list"><div><b>JavaScript · CoderHouse</b><span>Finalizado en agosto de 2026</span></div><div><b>Desarrollo Web · CoderHouse</b><span>Proyecto final aprobado con 95%</span></div><div><b>EducacionIT</b><span>Formación técnica complementaria</span></div></div>
          </div>
          <div className="cert-card"><img src={certificate} alt="Certificado JavaScript CoderHouse"/><div><span>ÚLTIMA CERTIFICACIÓN</span><b>JavaScript · CoderHouse</b><small>22.08.2026</small></div></div>
        </div>
      </div>
    </section>

    <section className="cta shell"><div className="cta-card"><span>NEXT STEP</span><h2>¿Buscás alguien que entienda el negocio y también pueda meterse en la solución?</h2><p>Estoy abierto a conectar con profesionales, recruiters y equipos vinculados a Sistemas, SQL, WMS/ERP, procesos y transformación tecnológica.</p><div className="actions"><a className="btn primary" href={linkedin} target="_blank">Conectar en LinkedIn ↗</a><a className="btn" href={github} target="_blank">Ver GitHub ↗</a></div></div></section>

    <footer className="shell"><div className="brand">MAURO<span>LOPEZ</span></div><p>Systems · SQL · Business Processes · Development</p><p>© 2026</p></footer>
  </main>
}
