import { Home, AppWindow, Calendar, DollarSign, Users, Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="logo-section">
        <Menu onClick={toggleSidebar} className="menu-toggle" />
        {isOpen && <span className="logo-text">باترفلایلی</span>}
      </div>
      <ul className="nav-list">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <li><Home /> {isOpen && 'خانه'}</li>
        </NavLink>
        <NavLink to="/apps" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <li><AppWindow /> {isOpen && 'برنامه‌ها'}</li>
        </NavLink>
        <NavLink to="/schedule" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <li><Calendar /> {isOpen && 'برنامه‌کاری'}</li>
        </NavLink>
        <NavLink to="/finance" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <li><DollarSign /> {isOpen && 'مدیریت مالی'}</li>
        </NavLink>
        <NavLink to="/teammates" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <li><Users /> {isOpen && 'همکاران'}</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
