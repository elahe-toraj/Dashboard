// src/components/Header.jsx
import { Bell, Search, User } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">

      <div className="header-left">
        <Search size={20} className="icon" />
        <Bell size={20} className="icon" />
        
      </div>

      <div className="header-right">
        <span className="username">محمدی</span>
        <User size={20} />
      </div>
    </header>
  );
};

export default Header;
