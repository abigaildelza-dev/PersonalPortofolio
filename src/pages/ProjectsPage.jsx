import { useEffect, useState } from 'react';

const projects = [
  {
    name: 'NEXA',
    subtitle: 'Navigate, Experience, Excel, Achieve.',
    category: 'Campus Web Prototype / Group Project',
    mockup: 'nexa.png',
    theme: 'nexa',
    link: 'https://www.figma.com/proto/cKjdRgxcHFWTlMI3oG1nrV/NEXA?node-id=0-1&t=43Ec3WDXEOIgGndt-1',
    description: 'NEXA is a smart campus app concept created for a UI/UX competition, designed to make campus life easier through an interactive campus map, nearby-friend discovery, and an AI assistant for student questions. The concept focuses on helping students navigate campus life more independently by connecting practical needs with a simple digital experience.',
    role: 'Idea Contributor · UI/UX Designer · Visual Development',
    impact: 'I helped shape NEXA from an initial concept into a student-centered digital experience focused on problems students actually face rather than simply adding another campus app.',
    learned: 'Good design starts with understanding the user, not the interface. I learned how to turn an idea into a visual concept, use AI thoughtfully during ideation, and balance creativity with practical problem-solving.',
    images: ['NEXA1.png', 'NEXA2.png', 'NEXA3.png', 'NEXA4.png', 'NEXA5.png', 'NEXA6.png', 'NEXA7.png'],
  },
  {
    name: 'Aizette',
    subtitle: 'Learning that adapts to you.',
    category: 'Learning Web Prototype / Group Project',
    mockup: 'aizette.png',
    theme: 'aizette',
    link: 'https://www.figma.com/proto/wnPWIJJ4U2kSIgJtq4Xy0P/Aizette-Techfest?node-id=0-1&t=t2ZvKvTs5PI9fmDX-1',
    description: 'Aizette is a learning platform concept designed for students and teachers, exploring how visual, auditory, and kinesthetic learning styles can be supported through one adaptive experience. The concept focuses on making learning more personal, accessible, and engaging by giving users flexible ways to understand and interact with the material.',
    role: 'Idea Contributor · UI/UX Designer',
    impact: 'I helped shape the product concept and visual experience, focusing on how personalization could become a simple, accessible, and engaging interface. I also explored how design choices could support different learning preferences without making the experience feel complicated.',
    learned: 'Good UX is not about creating one solution for everyone. It is about understanding differences between users and designing experiences that meet them where they are while keeping the interface intuitive and easy to use.',
    images: ['AIZETTE.png', 'AIZETTE2.png', 'AIZETTA3.png'],
  },
  {
    name: 'Twinkle Talk',
    subtitle: 'Every little voice can find its way.',
    category: 'Health Care App Prototype / Group Project',
    mockup: 'twinkle.png',
    theme: 'twinkle',
    link: 'https://www.figma.com/proto/c6VkmjxZkkrBzpEgI5A1YA/Twinkle-Talk?node-id=0-1&t=0mpGF9eGkp0dpPi1-1',
    description: 'Twinkle Talk is a digital platform designed to support children experiencing speech delay through an engaging and accessible learning experience focused on speech development. The project combines educational content with a friendly interface so children can practice communication in a way that feels encouraging, simple, and motivating.',
    role: 'Idea Creator · UI/UX Designer',
    impact: 'I helped turn the initial problem into a complete product concept by connecting the user need, business idea, and digital experience. I also focused on making the experience approachable for young users while remaining useful for their families and caregivers.',
    learned: 'I learned to connect social problems with technology, develop an idea into a business concept, and collaborate with a team around a meaningful purpose. The project also strengthened my ability to design for users with different needs and create solutions that feel supportive rather than overwhelming.',
    images: ['TWINKLE1.png', 'TWINKLE2.png', 'TWINKLE3.png', 'TWINKLE4.png', 'TWINKLE5.png'],
  },
  {
    name: 'CoDingo',
    subtitle: 'Learning gamified.',
    category: 'Learning App Prototype / Group Project',
    mockup: 'codingo.png',
    theme: 'codingo',
    link: 'https://www.figma.com/proto/dbFcCse7yAhjYWvwZ0tngo/CoDingo-Final?node-id=0-1&t=NpqDNoylaU63iymD-1',
    description: 'CoDingo is a personal knowledge management platform that makes learning more engaging by combining structured knowledge management with gamification and community interaction. The concept helps users organize information, stay motivated through progress-based features, and learn together with others in a more connected environment.',
    role: 'Idea Contributor · UI/UX Designer',
    impact: 'I helped transform the concept into a cohesive learning experience that connects knowledge organization, motivation, and social interaction. I focused on making the platform feel useful for everyday learning while still being engaging and visually appealing.',
    learned: 'I learned to design beyond individual screens and think about the entire user journey and feature ecosystem. The project also taught me how motivation, content structure, and community features can work together to support a more meaningful learning experience.',
    images: ['CODINGO1.png', 'CODINGO2.png', 'COINDGO3.png', 'CODINGO4.png', 'CODINGO5.png'],
  },
  {
    name: 'Dine Reserve',
    subtitle: 'A smoother way to serve and be served.',
    category: 'Food Service Web / Individual Project',
    mockup: 'dinereserve.png',
    theme: 'dineserve',
    link: 'https://github.com/abigaildelza-dev/DineReserveFull',
    linkLabel: 'View GitHub repository',
    description: 'DineReserve is a self-developed restaurant reservation platform designed to make discovering and booking restaurants simple and convenient. The application allows users to explore restaurants, find places based on their preferences, make reservations, manage their booking data, and cancel reservations when needed. The project covers the complete application flow, from building the frontend experience to developing the backend system using Object-Oriented Programming (OOP), including user authentication, data management, reservation handling, and persistent storage.',
    role: 'Full-Stack Developer · Backend Developer · Frontend Developer',
    impact: 'As a solo developer, I built DineReserve from frontend to backend, creating the complete experience for restaurant discovery and reservation management. I developed the backend using OOP principles and implemented authentication, user data management, reservation storage, and cancellation functionality.',
    learned: 'This project strengthened my understanding of full-stack development by challenging me to connect frontend interfaces with backend logic and persistent data. I gained hands-on experience with OOP, authentication, database management, CRUD operations, and building complete user flows independently.',
    images: ['projects/dine1.jpg', 'projects/dine2.jpg', 'projects/dine3.jpg', 'projects/dine4.jpg'],
  },
  {
    name: 'EnVision',
    subtitle: 'Vision redefined.',
    category: 'Glasses Store Web Prototype / Individual Project',
    mockup: 'envision.png',
    theme: 'envision',
    link: 'https://www.figma.com/proto/IF7mUNdV3SIVS1Xa2tSpMS/HCI-Lab-eNVision?node-id=601-75&t=NpqDNoylaU63iymD-1',
    description: 'EnVision is a self-initiated e-commerce concept for discovering and purchasing eyewear through thoughtful visual design, clear navigation, and a strong brand identity. The project explores how online shopping can feel more personal and inspiring by combining product discovery, brand storytelling, and a smooth purchasing journey.',
    role: 'Concept Creator · UI/UX Designer · Visual Director',
    impact: 'As a solo designer, I shaped the entire experience from the product feeling to the final interface. I developed the concept across branding, product presentation, navigation, and visual direction to create a more cohesive shopping experience.',
    learned: 'Working independently pushed me to make decisions across branding, UX, visual design, and product flow. The project strengthened my ability to turn a personal idea into a complete, consistent digital experience with a clear identity.',
    images: ['ENVISION1.png', 'ENVISION2.png', 'ENVISION3.png', 'ENVISION4.png'],
  },
];

export default function ProjectsPage({ onBack, onInformation }) {
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
            <div className="catalogue-entry-copy"><p className="catalogue-entry-number">01.{String(index + 1).padStart(2, '0')} <span>{project.category}</span></p><h3>{project.name}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p><p className="catalogue-entry-role">{project.role}</p>{project.link && <a className="catalogue-entry-project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel || 'Open Figma prototype'} <span aria-hidden="true">↗</span></a>}</div>
          </article>)}</div>
        </section>
        <section className="catalogue-collection catalogue-collection--board" aria-labelledby="board-title">
          <header className="catalogue-collection-heading"><p>Collection 02 <span> / 03 entries</span></p><h2 id="board-title">Spatial archive</h2><span className="catalogue-collection-index">II</span></header>
          <div className="catalogue-grid catalogue-grid--board">{projects.slice(3).map((project, index) => <article className={`catalogue-entry catalogue-entry--board${index === 2 ? ' is-featured' : ''}`} id={`project-${index + 4}`} key={project.name}>
            <button className="catalogue-entry-visual" type="button" onClick={() => openCarousel(project)} aria-label={`Lihat galeri gambar ${project.name}`}><img src={`assets/projects/${project.mockup}`} alt={`${project.name} project presentation`} /><span>Open project file <span aria-hidden="true">↗</span></span></button>
            <div className="catalogue-entry-copy"><p className="catalogue-entry-number">02.{String(index + 1).padStart(2, '0')} <span>{project.category}</span></p><h3>{project.name}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p><p className="catalogue-entry-role">{project.role}</p>{project.link && <a className="catalogue-entry-project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel || 'Open Figma prototype'} <span aria-hidden="true">↗</span></a>}</div>
          </article>)}</div>
        </section>
      </div>
      <section className="projects-cta" aria-labelledby="projects-cta-title"><p className="eyebrow">Have a project in mind?</p><h2 id="projects-cta-title">Let&apos;s Work Together!</h2><p>I&apos;d love to hear about your next idea, collaboration, or creative challenge.</p><button type="button" onClick={onInformation}>Let&apos;s connect <span aria-hidden="true">↗</span></button></section>
    </section>
  </main>{activeProject && <div className="project-modal" role="presentation"><div className="project-modal-backdrop" onClick={closeCarousel} /><section className="project-modal-panel" role="dialog" aria-modal="true" aria-labelledby="project-modal-title"><button className="project-modal-close" type="button" onClick={closeCarousel} aria-label="Close project gallery">×</button><p className="project-modal-kicker">{activeProject.category}</p><h2 id="project-modal-title">{activeProject.name}</h2><div className="project-carousel"><button className="project-carousel-arrow" type="button" onClick={showPrevious} aria-label="Previous image">←</button><img src={`assets/${activeProject.images[activeImage]}`} alt={`${activeProject.name} project view ${activeImage + 1}`} /><button className="project-carousel-arrow" type="button" onClick={showNext} aria-label="Next image">→</button></div><div className="project-carousel-thumbnails">{activeProject.images.map((image, index) => <button className={index === activeImage ? 'is-active' : ''} type="button" onClick={() => setActiveImage(index)} key={image} aria-label={`View image ${index + 1}`}><img src={`assets/${image}`} alt="" /></button>)}</div></section></div>}</>;
}
