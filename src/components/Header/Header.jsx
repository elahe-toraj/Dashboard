import { useState, useRef, useEffect } from 'react';
import { FaUser, FaSearch, FaBell, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import './Header.css';

function Header({ isSidebarOpen }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // بستن منو وقتی کاربر کلیک بیرون انجام میده
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={`header ${isSidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
      <div className="header-left" ref={dropdownRef}>
        <div
          className="user-info"
          onClick={() => setDropdownOpen(prev => !prev)}
          tabIndex={0}
          role="button"
          onKeyDown={e => { if (e.key === 'Enter') setDropdownOpen(prev => !prev); }}
        >
          <FaUser className="icon user-icon" />
          <span className="username">کاربر باترفلایلی</span>
        </div>

        {dropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item">
              <FaUserCircle className="dropdown-icon" />
              <span>صفحه پروفایل</span>
            </div>
            <div className="dropdown-item logout">
              <FaSignOutAlt className="dropdown-icon" />
              <span>خروج</span>
            </div>
          </div>
        )}

        <FaSearch className="icon" />
        <FaBell className="icon" />
      </div>

      <div className="header-right">{/* اگر لازم شد */}</div>
    </header>
  );
}

export default Header;
