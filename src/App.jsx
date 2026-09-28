import { useEffect, useState } from 'react';
import ConnectPage from './pages/ConnectPage.jsx';
import OpeningPage from './pages/OpeningPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';

function getPageFromPath() {
  if (window.location.pathname === '/projects') return 'projects';
  if (window.location.pathname.endsWith('connect.html') || window.location.pathname === '/connect') return 'connect';
  return 'opening';
}

export default function App() {
  const [page, setPage] = useState(getPageFromPath);

  useEffect(() => {
    window.history.replaceState({}, '', page === 'connect' ? '/connect' : page === 'projects' ? '/projects' : '/');
  }, [page]);

  if (page === 'projects') return <ProjectsPage onBack={() => setPage('connect')} />;
  return page === 'connect'
    ? <ConnectPage onBack={() => setPage('opening')} onProjects={() => setPage('projects')} />
    : <OpeningPage onConnect={() => setPage('connect')} />;
}
