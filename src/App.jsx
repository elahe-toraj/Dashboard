import React, { useState } from 'react';
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
      <div style={{ position: 'fixed', top: 0, right: 0, left: 0, zIndex: 1000 }}>
        <Header isSidebarOpen={isSidebarOpen} />
      </div>

      <div
        style={{
          position: 'fixed',
          top: 60,
          right: 0,
          width: sidebarWidth,
          height: 'calc(100vh - 60px)',
          transition: 'width 0.3s ease',
          zIndex: 900,
        }}
      >
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      <div
        style={{
          paddingTop: '60px',
          paddingRight: isSidebarOpen ? '200px' : '60px',
          transition: 'all 0.3s ease',
          minHeight: '100vh',
          boxSizing: 'border-box',
          backgroundColor: '#f8f9fa',
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
    </Router>
  );
}

export default App;
