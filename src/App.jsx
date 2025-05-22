import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="app-container" style={{ display: "flex", height: "100vh" }}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div
          className="main-content"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#f8f9fa",
            transition: "all 0.3s ease"
          }}
        >
          <Header />
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "20px"
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
      </div>
    </Router>
  );
}

export default App;

