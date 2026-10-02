import { useEffect, useState } from 'react';

const projects = [
  {
    name: 'NEXA',
    subtitle: 'Navigate, Experience, Excel, Achieve.',
    category: 'Campus App Competition / Group Project',
    mockup: 'nexa.png',
    theme: 'nexa',
    description: 'A smart campus app concept designed to make campus life easier through an interactive campus map, nearby-friend discovery, and an AI assistant for student questions.',
    role: 'Idea Contributor / UI/UX Designer / Visual Development',
    impact: 'I helped shape NEXA from an initial concept into a student-centered digital experience focused on problems students actually face.',
    learned: 'Good design starts with understanding the user, not the interface. I learned to turn an idea into a visual concept and balance creativity with practical problem-solving.',
    images: ['NEXA1.png', 'NEXA2.png', 'NEXA3.png', 'NEXA4.png', 'NEXA5.png', 'NEXA6.png', 'NEXA7.png'],
  },
  {
    name: 'Aizette',
    subtitle: 'Learning that adapts to you.',
    category: 'Learning Adapt App Competition / Group Project',
    mockup: 'aizette.png',
    theme: 'aizette',
    description: 'A learning platform designed for students and teachers, exploring visual, auditory, and kinesthetic learning experiences.',
    role: 'Idea Contributor / UI/UX Designer',
    impact: 'I helped shape the product concept and visual experience, focusing on how personalization could become a simple, accessible, and engaging interface.',
    learned: 'Good UX is not about creating one solution for everyone. It is about understanding differences between users and designing experiences that meet them where they are.',
    images: ['AIZETTE.png', 'AIZETTE2.png', 'AIZETTA3.png'],
  },
  {
    name: 'Twinkle Talk',
    subtitle: 'Every little voice can find its way.',
    category: 'Health Care App / Class Assignment / Group Project',
    mockup: 'twinkle.png',
    theme: 'twinkle',
    description: 'A digital platform supporting children experiencing speech delay through an engaging and accessible learning experience focused on speech development.',
    role: 'Idea Creator / UI/UX Designer',
    impact: 'I helped turn the initial problem into a complete product concept, connecting the user problem, business idea, and digital experience.',
    learned: 'I learned to connect social problems with technology, develop an idea into a business concept, and collaborate with a team around a meaningful purpose.',
    images: ['TWINKLE1.png', 'TWINKLE2.png', 'TWINKLE3.png', 'TWINKLE4.png', 'TWINKLE5.png'],
  },
  {
    name: 'CoDingo',
    subtitle: 'Learning gamified.',
    category: 'Class Assignment / Group Project',
    mockup: 'codingo.png',
    theme: 'codingo',
    description: 'A personal knowledge management platform that makes learning more engaging by combining structured knowledge management with gamification and community interaction.',
    role: 'Idea Contributor / UI/UX Designer',
    impact: 'I helped transform the concept into a cohesive learning experience connecting learning, motivation, and social interaction.',
    learned: 'I learned to design beyond individual screens and think about the entire user journey and feature ecosystem.',
    images: ['CODINGO1.png', 'CODINGO2.png', 'COINDGO3.png', 'CODINGO4.png', 'CODINGO5.png'],
  },
  {
    name: 'DineServe',
    subtitle: 'A smoother way to serve and be served.',
    category: 'Food Service App Concept',
    mockup: 'dinereserve.png',
    theme: 'dineserve',
    description: 'A food service experience designed to help customers discover menu options and make ordering more convenient.',
    role: 'UI/UX Designer',
    impact: 'I explored a clear digital flow for browsing food and completing a service interaction with less friction.',
    learned: 'I learned to balance visual appetite appeal with practical navigation and clear ordering steps.',
    images: ['projects/dine1.jpg', 'projects/dine2.jpg', 'projects/dine3.jpg', 'projects/dine4.jpg'],
  },
  {
    name: 'EnVision',
    subtitle: 'Vision redefined.',
    category: 'Glasses Store App / Individual Project',
    mockup: 'envision.png',
    theme: 'envision',
    description: 'A self-initiated e-commerce concept for discovering and purchasing eyewear through thoughtful visual design, clear navigation, and a strong brand identity.',
    role: 'Concept Creator / UI/UX Designer / Visual Director',
    impact: 'As a solo designer, I shaped the entire experience from the product feeling to the final interface.',
    learned: 'Working independently pushed me to make decisions across branding, UX, visual design, and product flow.',
    images: ['ENVISION1.png', 'ENVISION2.png', 'ENVISION3.png', 'ENVISION4.png'],
  },
];

export default function ProjectsPage({ onBack }) {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const openCarousel = (project) => {
    setActiveProject(project);
    setActiveImage(0);
  };

  const closeCarousel = () => setActiveProject(null);
  const showPrevious = () => setActiveImage((current) => (current - 1 + activeProject.images.length) % activeProject.images.length);
  const showNext = () => setActiveImage((current) => (current + 1) % activeProject.images.length);

  useEffect(() => {
    if (!activeProject) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeCarousel();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  return <><main className="folder-page projects-page vogue-projects">
    <div className="background" aria-hidden="true" /><div className="shade" aria-hidden="true" /><div className="grain" aria-hidden="true" />
    <button className="back-link" type="button" onClick={onBack} aria-label="Kembali ke folder"><span aria-hidden="true">←</span> back</button>
    <section className="projects-shell" aria-labelledby="projects-title">
      <div className="editorial-masthead"><span>DELZA</span><span>THE PORTFOLIO ISSUE</span><span>VOL. 01 / 2026</span></div>
      <div className="projects-heading"><div className="projects-title-group"><p className="eyebrow">Selected work / archive 01—06</p><h1 id="projects-title">Selected Work</h1></div><p className="projects-count">Six projects · two collections</p></div>
      <div className="catalogue-collections">
        <section className="catalogue-collection catalogue-collection--folio" aria-labelledby="folio-title">
          <header className="catalogue-collection-heading"><p>Collection 01 <span> / 03 entries</span></p><h2 id="folio-title">Material archive</h2><span className="catalogue-collection-index">I</span></header>
          <div className="catalogue-grid catalogue-grid--folio">{projects.slice(0, 3).map((project, index) => <article className={`catalogue-entry catalogue-entry--folio${index === 0 ? ' is-featured' : ''}`} id={`project-${index + 1}`} key={project.name}>
            <button className="catalogue-entry-visual" type="button" onClick={() => openCarousel(project)} aria-label={`Lihat galeri gambar ${project.name}`}><img src={`assets/projects/${project.mockup}`} alt={`${project.name} project presentation`} /><span>Open project file <span aria-hidden="true">↗</span></span></button>
            <div className="catalogue-entry-copy"><p className="catalogue-entry-number">01.{String(index + 1).padStart(2, '0')} <span>{project.category}</span></p><h3>{project.name}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p><p className="catalogue-entry-role">Designed by / {project.role}</p></div>
          </article>)}</div>
        </section>
        <section className="catalogue-collection catalogue-collection--board" aria-labelledby="board-title">
          <header className="catalogue-collection-heading"><p>Collection 02 <span> / 03 entries</span></p><h2 id="board-title">Spatial archive</h2><span className="catalogue-collection-index">II</span></header>
          <div className="catalogue-grid catalogue-grid--board">{projects.slice(3).map((project, index) => <article className={`catalogue-entry catalogue-entry--board${index === 2 ? ' is-featured' : ''}`} id={`project-${index + 4}`} key={project.name}>
            <button className="catalogue-entry-visual" type="button" onClick={() => openCarousel(project)} aria-label={`Lihat galeri gambar ${project.name}`}><img src={`assets/projects/${project.mockup}`} alt={`${project.name} project presentation`} /><span>Open project file <span aria-hidden="true">↗</span></span></button>
            <div className="catalogue-entry-copy"><p className="catalogue-entry-number">02.{String(index + 1).padStart(2, '0')} <span>{project.category}</span></p><h3>{project.name}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p><p className="catalogue-entry-role">Designed by / {project.role}</p></div>
          </article>)}</div>
        </section>
      </div>
      <section className="projects-cta" aria-labelledby="projects-cta-title"><p className="eyebrow">Have a project in mind?</p><h2 id="projects-cta-title">Let&apos;s Work Together!</h2><p>I&apos;d love to hear about your next idea, collaboration, or creative challenge.</p><button type="button" onClick={onBack}>Let&apos;s connect <span aria-hidden="true">↗</span></button></section>
    </section>
  </main>{activeProject && <div className="project-modal" role="presentation"><div className="project-modal-backdrop" onClick={closeCarousel} /><section className="project-modal-panel" role="dialog" aria-modal="true" aria-labelledby="project-modal-title"><button className="project-modal-close" type="button" onClick={closeCarousel} aria-label="Close project gallery">×</button><p className="project-modal-kicker">{activeProject.category}</p><h2 id="project-modal-title">{activeProject.name}</h2><div className="project-carousel"><button className="project-carousel-arrow" type="button" onClick={showPrevious} aria-label="Previous image">←</button><img src={`assets/${activeProject.images[activeImage]}`} alt={`${activeProject.name} project view ${activeImage + 1}`} /><button className="project-carousel-arrow" type="button" onClick={showNext} aria-label="Next image">→</button></div><div className="project-carousel-thumbnails">{activeProject.images.map((image, index) => <button className={index === activeImage ? 'is-active' : ''} type="button" onClick={() => setActiveImage(index)} key={image} aria-label={`View image ${index + 1}`}><img src={`assets/${image}`} alt="" /></button>)}</div></section></div>}</>;
}
