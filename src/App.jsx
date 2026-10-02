import { useEffect, useState } from 'react';
import ConnectPage from './pages/ConnectPage.jsx';
import EditorialPage from './pages/EditorialPage.jsx';
import OpeningPage from './pages/OpeningPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';

function getPageFromPath() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (['/projects', '/skills', '/experience', '/information', '/journey'].includes(path)) return path.slice(1);
  if (path.endsWith('connect.html') || path === '/connect') return 'connect';
  return 'opening';
}

export default function App() {
  const [page, setPage] = useState(getPageFromPath);

  useEffect(() => {
    window.history.replaceState({}, '', ['projects', 'skills', 'experience', 'information', 'journey'].includes(page) ? `/${page}` : page === 'connect' ? '/connect' : '/');
  }, [page]);

  if (['skills', 'experience', 'information', 'journey'].includes(page)) return <EditorialPage section={page} onBack={() => setPage('connect')} />;
  if (page === 'projects') return <ProjectsPage onBack={() => setPage('connect')} />;
  return page === 'connect'
    ? <ConnectPage onBack={() => setPage('opening')} onProjects={() => setPage('projects')} />
    : <OpeningPage onConnect={() => setPage('connect')} />;
}
