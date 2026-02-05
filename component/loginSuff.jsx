import React from 'react';
import { Link } from 'react-router-dom';
const LoginSuff = () => {
  return (
    // for navlink for path and this login page nothing else

    <div className='text-white flex flex-col min-[768px]:min-w-2xs'>
      <Link to='/loginpage'>
        <button className='block cursor-pointer border border-solid rounded-full border-white-700 px-16 py-3'>
          Sign In
        </button>
      </Link>
      <div class='flex items-center my-6'>
        <div class='flex-grow border-t border-gray-700'></div>
        <span class='mx-4 text-sm font-semibold text-white uppercase tracking-widest'>
          OR
        </span>
        <div class='flex-grow border-t border-gray-700'></div>
      </div>
      <p>Don't have Account?</p>
      <Link to='/register'>
        <button className=' cursor-pointer block border border-solid my-5 rounded-full border-white-700 px-16 py-3'>
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default LoginSuff;
