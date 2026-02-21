import React, { useState } from 'react';
import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  Users,
  MoreHorizontal,
  User,
  Crown,
} from 'lucide-react';
const Navbar = () => {
  const [active, setActive] = useState('home');
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore', icon: Search },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'messages', label: 'Messages', icon: Mail },
    { id: 'grok', label: 'Grok', icon: Crown },
    { id: 'lists', label: 'Lists', icon: Mail },
    { id: 'bookmarks', label: 'Bookmarks', icon: Bookmark },
    { id: 'communities', label: 'Communities', icon: Users },
    { id: 'premium', label: 'Premium', icon: Crown },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'more', label: 'More', icon: MoreHorizontal },
  ];
  return (
    <div className='h-screen bg-black border-r border-gray-700 flex flex-col p-4 fixed overflow-y-auto'>
      {/* X Logo */}
      <div className='mb-8'>
        <div className='text-3xl font-black text-white'>𝕏</div>
      </div>

      {/* Navigation join */}
      <nav className='flex-1 space-y-4'>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={` flex items-center space-x-4 px-4 py-3 rounded-full transition-all duration-200 group ${
                isActive
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-900/50'
              }`}
            >
              <Icon
                size={20}
                className={`transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-gray-300 group-hover:text-white'
                }`}
              />
              <span className='text-xl font-semibold hidden'>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Post Button */}
      <button className='w-full bg-blue-500 text-white font-bold py-3 rounded-full text-lg transition-all duration-200 hover:bg-blue-600 active:bg-blue-700 mb-4'>
        Post
      </button>

      {/* User Profile Section */}
      <div className='border-t border-gray-700 pt-4'>
        <button className='w-full flex items-center space-x-3 px-4 py-3 rounded-full hover:bg-gray-900/50 transition-all duration-200 group'>
          <div className='w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-all'>
            <User size={20} className='text-white' />
          </div>
          <div className='text-left flex-1'>
            <p className='text-white font-bold text-sm'>User Name</p>
            <p className='text-gray-600 text-xs'>@username</p>
          </div>
          <MoreHorizontal
            size={18}
            className='text-gray-600 group-hover:text-white transition-all'
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
