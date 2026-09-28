import { useState } from 'react';

export default function OpeningPage({ onConnect }) {
  const [isOpen, setIsOpen] = useState(false);

  return <main className={`opening-page${isOpen ? ' is-open' : ''}`}>
    <div className="background" aria-hidden="true" /><div className="grain" aria-hidden="true" /><div className="backdrop" aria-hidden="true" />
    <section className="intro" aria-label="Pembuka portfolio">
      <p className="eyebrow">A personal portfolio</p><h1>Something thoughtful<br /><em>is about to unfold.</em></h1>
      <button className="open-trigger" type="button" onClick={() => setIsOpen(true)} aria-label="Buka kartu portfolio"><span className="trigger-glow" /><img src="assets/open2.jpeg" alt="Buka portfolio" /><span className="trigger-label">open</span></button>
      <p className="hint">klik untuk membuka</p>
    </section>
    <section className="reveal" aria-hidden={!isOpen}>
      <button className="close-trigger" type="button" aria-label="Tutup portfolio" onClick={() => setIsOpen(false)}>×</button>
      <div className="letter-frame"><img src="assets/open1.png" alt="Portfolio" /></div>
      <section className="profile-card" aria-label="Tentang Delza"><div className="profile-photo"><span className="photo-shadow" /><img src="assets/me1.png" alt="Delza Abigail Suryono" /></div><div className="profile-copy"><p className="profile-kicker">Hello, I&apos;m Delza.</p><h2>Designing with<br /><em>curiosity &amp; care.</em></h2><p className="profile-text">I&apos;m a Computer Science student specializing in Software Engineering at BINUS University. I enjoy exploring the space between technology, creativity, people, and meaningful experiences.</p><p className="profile-text">From UI/UX and AI concepts to event management, mentoring, and teaching, I believe creating something valuable is not only about making it work. It is also about understanding people, communicating ideas clearly, and finding creative ways to solve problems.</p><button className="profile-link" type="button" onClick={onConnect}>let&apos;s connect <span>↗</span></button></div></section><p className="reveal-caption">welcome in</p>
    </section><button className="replay" type="button" aria-label="Ulangi pembuka" onClick={() => setIsOpen(false)}>↻ <span>replay</span></button>
  </main>;
}
