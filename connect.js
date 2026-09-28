const modal = document.querySelector('#folder-modal');
const modalPanel = document.querySelector('.modal-panel');
const modalKicker = document.querySelector('#modal-kicker');
const modalTitle = document.querySelector('#modal-title');
const modalContent = document.querySelector('#modal-content');
const modalFolderArt = document.querySelector('#modal-folder-art');
const folderButtons = document.querySelectorAll('.folder');
const closeButtons = document.querySelectorAll('[data-close-modal]');
let activeFolder = null;
const modalThemes = ['theme-skills', 'theme-journey', 'theme-experience', 'theme-information'];

const folderDetails = {
  information: {
    kicker: '01 / profile',
    title: 'Information',
    content: `
      <p class="modal-lead">Hi, I'm Delza Abigail Suryono.</p>
      <p>A Computer Science student specializing in Software Engineering at BINUS University. Beyond technology, I am passionate about creativity, design, teaching, people, and turning ideas into meaningful experiences.</p>
      <div class="detail-grid">
        <div><span>Education</span><strong>Bina Nusantara University Bekasi</strong><small>Computer Science - Software Engineering<br />July 2022 - Present</small></div>
        <div><span>Based in</span><strong>Bogor, Jawa Barat</strong><small>Open to meaningful collaborations and creative projects.</small></div>
      </div>
      <div class="contact-links"><a href="mailto:abigaildelza12@gmail.com">abigaildelza12@gmail.com</a><a href="tel:+6281918413071">+62 819 184 130 71</a></div>
    `
  },
  experience: {
    kicker: '02 / selected work',
    title: 'Experience',
    content: `
      <p class="modal-lead">Projects shaped by curiosity, empathy, and visual thinking.</p>
      <div class="project-list">
        <article><span>NEXA</span><p>Smart campus app concept for navigating campus life, discovering nearby friends, and getting help from an AI assistant. 3rd Place Winner, UI/UX Design Competition.</p></article>
        <article><span>CoDingo</span><p>Personal knowledge management platform that combines structured learning, gamification, progress tracking, and community interaction.</p></article>
        <article><span>Aizette</span><p>Adaptive learning platform exploring visual, auditory, and kinesthetic learning experiences for students and teachers.</p></article>
        <article><span>Twinkle Talk</span><p>Accessible learning concept supporting children experiencing speech delay through a focused and engaging digital experience.</p></article>
        <article><span>EnVision</span><p>Self-initiated eyewear e-commerce concept focused on clear navigation, thoughtful visual design, and a strong brand identity.</p></article>
      </div>
    `
  },
  journey: {
    kicker: '03 / beyond the screen',
    title: 'Journey',
    content: `
      <p class="modal-lead">Building experiences also means building communities.</p>
      <div class="timeline">
        <article><time>2025 - 2026</time><div><strong>Seni Tari Mahasiswa Bina Nusantara</strong><p>Vice Head of Event Division, Human Resources Development Coordinator, Head of Event Division, and Project Manager for STAMANARA programs.</p></div></article>
        <article><time>2025 - 2026</time><div><strong>Freshmen Chaperone BINUS</strong><p>Freshman Leader and Freshman Partner, guiding students through orientation, campus life, academic systems, and BINUS culture.</p></div></article>
        <article><time>2026 - Present</time><div><strong>Ruangguru English Academy</strong><p>English teacher for kindergarten to adult learners, including IELTS preparation, adapting lessons to different needs and learning styles.</p></div></article>
      </div>
    `
  },
  skills: {
    kicker: '04 / toolkit',
    title: 'My Skill',
    content: `
      <p class="modal-lead">A mix of design, technology, communication, and creative problem solving.</p>
      <div class="skill-groups">
        <div><span>Design</span><p>UI/UX Design, Prototyping, Design Thinking, Product Ideation, Visual Development</p></div>
        <div class="technology-group"><span>Technology</span><div class="tech-icons" aria-label="Technology skills">
          <span class="tech-icon" tabindex="0" data-label="HTML5"><img src="assets/HTML5.png" alt="HTML5" /></span>
          <span class="tech-icon" tabindex="0" data-label="CSS3"><img src="assets/CSS3.png" alt="CSS3" /></span>
          <span class="tech-icon" tabindex="0" data-label="Figma"><img src="assets/Figma.png" alt="Figma" /></span>
          <span class="tech-icon" tabindex="0" data-label="GitHub Copilot"><img src="assets/copilot-icon.png" alt="GitHub Copilot" /></span>
          <span class="tech-icon" tabindex="0" data-label="Microsoft Office 365"><img src="assets/office-365-icon.png" alt="Microsoft Office 365" /></span>
          <span class="tech-icon" tabindex="0" data-label="Canva"><img src="assets/canva-icon.png" alt="Canva" /></span>
          <span class="tech-icon" tabindex="0" data-label="Google Docs"><img src="assets/google-docs-icon.png" alt="Google Docs" /></span>
          <span class="tech-icon" tabindex="0" data-label="Cisco Packet Tracer"><img src="assets/icons8-cisco-packet-tracer-100.png" alt="Cisco Packet Tracer" /></span>
        </div></div>
        <div><span>People</span><p>Leadership, project management, time management, collaboration, presentation, adaptability, critical thinking</p></div>
        <div><span>Language</span><p>Indonesian (Native), English (Intermediate), Mandarin (Elementary)</p></div>
      </div>
    `
  }
};

function openModal(folderKey, folderButton) {
  const detail = folderDetails[folderKey];
  if (!detail) return;

  activeFolder = folderButton;
  modalFolderArt.src = folderButton.querySelector('img').src;
  modalFolderArt.alt = `${detail.title} folder`;
  folderButton.classList.add('is-selected');
  modal.classList.remove(...modalThemes);
  modal.classList.add(`theme-${folderKey}`);
  modalKicker.textContent = detail.kicker;
  modalTitle.textContent = detail.title;
  modalContent.innerHTML = detail.content;
  modal.classList.add('is-visible');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modalPanel.focus();
}

function closeModal() {
  modal.classList.remove('is-visible');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  modal.classList.remove(...modalThemes);
  if (activeFolder) activeFolder.classList.remove('is-selected');
  activeFolder = null;
}

folderButtons.forEach((folder) => {
  folder.addEventListener('click', () => openModal(folder.dataset.folder, folder));
});

closeButtons.forEach((button) => button.addEventListener('click', closeModal));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-visible')) closeModal();
});
