import { useEffect, useState } from 'react';
import { folderDetails } from './folderDetails.jsx';

export default function EditorialPage({ section, onBack }) {
  const detail = folderDetails[section];

  useEffect(() => {
    document.title = `${detail.title} | Delza Abigail Suryono`;
    window.scrollTo(0, 0);
  }, [detail.title]);

  if (section === 'information') return <main className="information-scroll-page">
    <section className="information-image-page" aria-label="Information introduction">
      <button className="back-link" type="button" onClick={onBack} aria-label="Kembali ke folder"><span aria-hidden="true">←</span> back to folders</button>
      <img className="information-intro-image" src="/assets/intro/introInformation.jpg" alt="Black-and-white portrait collage of Delza Abigail Suryono" />
    </section>
    <section className="folder-page editorial-page editorial-page--information information-details-page" aria-labelledby="information-details-title">
      <div className="background" aria-hidden="true" /><div className="shade" aria-hidden="true" /><div className="grain" aria-hidden="true" />
      <article className="editorial-page-shell">
        <header className="editorial-masthead"><span>DELZA</span><span>THE PORTFOLIO ISSUE</span><span>VOL. 01 / 2026</span></header>
        <header className="editorial-page-heading"><p>{detail.kicker}</p><h1 id="information-details-title">{detail.title}</h1><div className="editorial-page-deck editorial-page-deck--left"><p>{detail.deck}</p></div></header>
        <div className="editorial-page-content editorial-page-content--information">{detail.content}</div>
        <footer className="editorial-page-footer"><span>Delza Abigail Suryono</span><span>{detail.kicker}</span></footer>
      </article>
    </section>
  </main>;

  return <main className={`folder-page editorial-page editorial-page--${section}`}>
    <div className="background" aria-hidden="true" /><div className="shade" aria-hidden="true" /><div className="grain" aria-hidden="true" />
    <button className="back-link" type="button" onClick={onBack} aria-label="Kembali ke folder"><span aria-hidden="true">←</span> back to folders</button>
    <article className="editorial-page-shell">
      <header className="editorial-masthead"><span>DELZA</span><span>THE PORTFOLIO ISSUE</span><span>VOL. 01 / 2026</span></header>
      <header className="editorial-page-heading"><p>{detail.kicker}</p><h1>{detail.title}</h1><div className="editorial-page-deck editorial-page-deck--left"><p>{detail.deck}</p></div></header>
      <div className={`editorial-page-content editorial-page-content--${section}`}>{['experience', 'journey'].includes(section) ? <ExperienceGallery entries={detail.entries} interactive={section === 'experience'} /> : detail.content}</div>
      <footer className="editorial-page-footer"><span>Delza Abigail Suryono</span><span>{detail.kicker}</span></footer>
    </article>
  </main>;
}

function ExperienceGallery({ entries, interactive }) {
  const [activeEntry, setActiveEntry] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const openGallery = (entry) => {
    setActiveEntry(entry);
    setActiveSlide(0);
  };
  const closeGallery = () => setActiveEntry(null);
  const showPrevious = () => setActiveSlide((current) => (current - 1 + activeEntry.gallery.length) % activeEntry.gallery.length);
  const showNext = () => setActiveSlide((current) => (current + 1) % activeEntry.gallery.length);

  useEffect(() => {
    if (!activeEntry) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeGallery();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeEntry]);

  return <>
    <div className="editorial-experience-list">{entries.map((entry) => <article className="editorial-experience-entry" key={entry.title}>
      {interactive ? <button className={`editorial-experience-cover${entry.coverText ? ' editorial-experience-cover--type' : ''}`} type="button" onClick={() => openGallery(entry)} aria-label={`Open gallery for ${entry.title}`}><span className="editorial-experience-cover-art">{entry.coverText ? <><span>{entry.kicker}</span><strong>{entry.coverText}</strong></> : entry.coverVideo ? <video src={`/assets/${entry.coverVideo}`} autoPlay muted loop playsInline preload="auto" aria-label={entry.coverAlt} /> : <img src={`/assets/${entry.cover}`} alt={entry.coverAlt} />}</span><span className="editorial-experience-cover-action">View gallery <span aria-hidden="true">↗</span></span></button> : <figure className={`editorial-experience-cover editorial-experience-cover--static${entry.coverText ? ' editorial-experience-cover--type' : ''}`}><span className="editorial-experience-cover-art">{entry.coverText ? <><span>{entry.kicker}</span><strong>{entry.coverText}</strong></> : <img src={`/assets/${entry.cover}`} alt={entry.coverAlt} />}</span></figure>}
      <div className="editorial-experience-copy"><p className="catalogue-entry-number">{entry.kicker}</p><h2>{entry.title}</h2><p>{entry.description}</p>{interactive && <div className="editorial-experience-actions"><button className="editorial-experience-link" type="button" onClick={() => openGallery(entry)}>Explore documentation <span aria-hidden="true">↗</span></button>{entry.link && <a className="editorial-experience-link editorial-experience-link--external" href={entry.link} target="_blank" rel="noreferrer">View official achievement <span aria-hidden="true">↗</span></a>}</div>}</div>
    </article>)}</div>
    {interactive && activeEntry && <div className="project-modal experience-gallery-modal" role="presentation"><div className="project-modal-backdrop" onClick={closeGallery} /><section className="project-modal-panel" role="dialog" aria-modal="true" aria-labelledby="experience-gallery-title"><button className="project-modal-close" type="button" onClick={closeGallery} aria-label="Close experience gallery">×</button><p className="project-modal-kicker">{activeEntry.kicker}</p><h2 id="experience-gallery-title">{activeEntry.title}</h2><div className="project-carousel"><button className="project-carousel-arrow" type="button" onClick={showPrevious} aria-label="Previous image">←</button>{activeEntry.gallery[activeSlide].type === 'video' ? <video controls preload="metadata" aria-label={activeEntry.gallery[activeSlide].alt}><source src={`/assets/${activeEntry.gallery[activeSlide].src}`} type="video/mp4" />Browser kamu tidak mendukung pemutaran video.</video> : activeEntry.gallery[activeSlide].type === 'text' ? <div className="editorial-gallery-note"><p>{activeEntry.kicker}</p><h3>{activeEntry.gallery[activeSlide].title}</h3><p>{activeEntry.gallery[activeSlide].description}</p></div> : <img src={`/assets/${activeEntry.gallery[activeSlide].src}`} alt={activeEntry.gallery[activeSlide].alt} />}<button className="project-carousel-arrow" type="button" onClick={showNext} aria-label="Next image">→</button></div><div className="project-carousel-thumbnails">{activeEntry.gallery.map((slide, index) => <button className={index === activeSlide ? 'is-active' : ''} type="button" onClick={() => setActiveSlide(index)} key={slide.src || slide.title} aria-label={`View gallery item ${index + 1}`}>{slide.type === 'video' ? <span className="experience-video-thumbnail">VIDEO</span> : slide.type === 'text' ? <span className="experience-video-thumbnail">NOTE</span> : <img src={`/assets/${slide.src}`} alt="" />}</button>)}</div></section></div>}
  </>;
}