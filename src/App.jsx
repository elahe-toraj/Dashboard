import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Apps from './pages/Apps';
import Schedule from './pages/Schedule';
import Finance from './pages/Finance';
import Teammates from './pages/Teammates';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', direction: 'rtl' }}>
        {/* Sidebar سمت راست */}
        <Sidebar />

        {/* محتوای اصلی شامل Header و صفحات */}
        <div style={{ flex: 1 }}>
          <Header />
          <div style={{ padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/apps" element={<Apps />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/teammates" element={<Teammates />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
