import React from 'react';
import { NavLink } from 'react-router-dom';
const LoginSuff = () => {
  return (
    <div className='text-white flex flex-col min-[768px]:min-w-2xs'>
      <NavLink to='/loginpage'>
        <button className='block cursor-pointer border border-solid rounded-full border-white-700 px-16 py-3'>
          Sign In
        </button>
      </NavLink>
      <div class='flex items-center my-6'>
        <div class='flex-grow border-t border-gray-700'></div>
        <span class='mx-4 text-sm font-semibold text-white uppercase tracking-widest'>
          OR
        </span>
        <div class='flex-grow border-t border-gray-700'></div>
      </div>
      <p>Don't have Account?</p>
      <NavLink to='/register'>
        <button className=' cursor-pointer block border border-solid my-5 rounded-full border-white-700 px-16 py-3'>
          Sign Up
        </button>
      </NavLink>
    </div>
  );
};

export default LoginSuff;
