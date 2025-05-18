// src/components/Header.jsx
import { Bell, Search, User } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* سمت چپ: آیکون کاربر */}
      <div className="header-left">
        <Search size={20} className="icon" />
        <Bell size={20} className="icon" />
        
      </div>

      {/* سمت راست: نام کاربر + آیکون‌ها */}
      <div className="header-right">
        <span className="username">محمدی</span>
        <User size={20} />
      </div>
    </header>
  );
};

export default Header;
