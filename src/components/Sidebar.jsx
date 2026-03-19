import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import toast from 'react-hot-toast';

// Import all icon images
import dashboardIcon from '../assets/dahboard.svg';
import revenue from '../assets/Report.svg';
import profit from '../assets/manage store.svg';
import cost from '../assets/settings.svg';
import purchase from '../assets/Suppliers.svg';
import cost1 from '../assets/Log Out.svg';
import cancel from '../assets/Order.svg';
import quantity from '../assets/Quantity.svg';
import logo from '../assets/logosidebar.svg';

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 fixed h-full z-20 flex flex-col">
   
    
<div className="p-6 flex items-center gap-3  ">
  <img 
    src={logo} 
    alt="Kanban Logo" 
    className="w-25 object-cover"
  />
</div>

      <nav className="flex-1 px-4 space-y-1 mt-">
   
        <a
          href="/dashboard"
          onClick={(e) => {
            e.preventDefault();
            navigate('/dashboard');
          }}
          className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
            window.location.pathname === '/dashboard'
              ? 'text-blue-600 bg-blue-50'
              : 'text-slate-500 hover:bg-slate-50'
          }`}
        >
          <img src={dashboardIcon} alt="Dashboard" className="w-5 h-5 object-contain" />
          <span>Dashboard</span>
        </a>

        {/* Inventory */}
        <a
          href="/inventory"
          onClick={(e) => {
            e.preventDefault();
            navigate('/inventory');
          }}
          className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
            window.location.pathname === '/inventory'
              ? 'text-blue-600 bg-blue-50'
              : 'text-slate-500 hover:bg-slate-50'
          }`}
        >
          <img src={profit} alt="Inventory" className="w-5 h-5 object-contain" />
          <span>Inventory</span>
        </a>

        {/* Reports */}
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50 rounded-lg transition-colors"
        >
          <img src={revenue} alt="Reports" className="w-5 h-5 object-contain" />
          <span>Reports</span>
        </a>

        {/* Suppliers */}
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50 rounded-lg transition-colors"
        >
          <img src={purchase} alt="Suppliers" className="w-5 h-5 object-contain" />
          <span>Suppliers</span>
        </a>

        {/* Orders */}
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50 rounded-lg transition-colors"
        >
          <img src={cancel} alt="Orders" className="w-5 h-5 object-contain" />
          <span>Orders</span>
        </a>

        {/* Manage Store */}
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50 rounded-lg transition-colors"
        >
          <img src={profit} alt="Manage Store" className="w-5 h-5 object-contain" />
          <span>Manage Store</span>
        </a>
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-slate-100 space-y-1">
        {/* Settings Link */}
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50 rounded-lg transition-colors"
        >
          <img src={cost} alt="Settings" className="w-5 h-5 object-contain" />
          <span>Settings</span>
        </a>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50 rounded-lg transition-colors text-left"
        >
          <img src={cost1} alt="Log Out" className="w-5 h-5 object-contain" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;