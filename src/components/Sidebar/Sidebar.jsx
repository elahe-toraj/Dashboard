import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const { pathname } = useLocation();

  const menuItems = [
    { path: '/', label: 'خانه' },
    { path: '/apps', label: 'برنامه‌ها' },
    { path: '/schedule', label: 'برنامه کاری' },
    { path: '/finance', label: 'مدیریت مالی' },
    { path: '/teammates', label: 'همکاران' },
  ];

  return (
    <div className="sidebar">
      <div className="logo">باترفلایلی</div>
      <ul>
        {menuItems.map(item => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={pathname === item.path ? 'active' : ''}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
