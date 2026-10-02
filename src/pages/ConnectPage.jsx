const folders = [['skills', 'folder4last2.png', 'My Skill'], ['journey', 'folder3last2.png', 'Journey'], ['experience', 'folder2last2.png', 'Experience'], ['information', 'folder1last2.png', 'Information']];

export default function ConnectPage({ onBack, onProjects }) {
  return <><main className="folder-page"><div className="background" aria-hidden="true" /><div className="shade" aria-hidden="true" /><div className="grain" aria-hidden="true" />
    <button className="back-link" type="button" onClick={onBack} aria-label="Kembali ke portfolio utama"><span aria-hidden="true">←</span> back</button>
    <section className="folder-picker" aria-labelledby="folder-title"><p className="eyebrow">A little more to explore</p><h1 id="folder-title">Choose a folder</h1><button className="projects-link" type="button" onClick={onProjects}>See my projects? <span aria-hidden="true">↗</span></button><div className="folder-stack" aria-label="Pilihan folder portfolio">{folders.map(([key, src, alt], index) => <a className={`folder folder--${['one', 'two', 'three', 'four'][index]}`} href={`/${key}`} aria-label={`Buka folder ${alt}`} key={key}><img src={`assets/${src}`} alt="" /></a>)}</div></section>
  </main></>;
}
