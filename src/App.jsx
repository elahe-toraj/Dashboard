import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Apps from './pages/Apps';
import Schedule from './pages/Schedule';
import Finance from './pages/Finance';
import Teammates from './pages/Teammates';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const sidebarWidth = isSidebarOpen ? 200 : 60;

  return (
    <Router>
      <Header isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div style={{ display: 'flex', direction: 'rtl', paddingTop: '60px' }}>
        <div
          style={{
            flex: 1,
            paddingRight: `${sidebarWidth}px`,
            padding: '20px',
            height: 'calc(100vh - 60px)',
            overflowY: 'auto',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/teammates" element={<Teammates />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
