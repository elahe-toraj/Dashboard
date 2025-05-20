import { FaUser, FaSearch, FaBell } from 'react-icons/fa';
import './Header.css';

function Header({ isSidebarOpen }) {
  return (
    <header className={`header ${isSidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
      <div className="header-left">
        {/* این بخش الان در چپ صفحه قرار می‌گیرد */}
        <FaUser className="icon" />
        <span>کاربر باترفلایلی</span>
        <FaSearch className="icon" />
        <FaBell className="icon" />
      </div>
      <div className="header-right">
        {/* اگر چیزی خواستی در راست قرار بگیره بعداً اینجا بذار */}
      </div>
    </header>
  );
}

export default Header;
