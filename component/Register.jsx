import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [focused, setFocused] = useState(null);

  return (
    <div className='min-h-screen bg-black flex justify-center items-center p-4'>
      {/* Register Card */}
      <div className='w-full max-w-md'>
        <div className='bg-black border border-gray-700 rounded-2xl p-8 space-y-6'>
          {/* X Logo / Header */}
          <div className='text-center space-y-4'>
            <div className='text-4xl font-black text-white'>𝕏</div>
            <h1 className='text-2xl font-bold text-white'>Sign up now</h1>
          </div>

          {/* Form */}
          <form className='space-y-4'>
            {/* Full Name Input */}
            <div>
              <input
                type='text'
                placeholder='Full Name'
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                className={`w-full px-4 py-3 bg-black border-2 rounded-xl text-white placeholder-gray-600 transition-all duration-200 focus:outline-none ${
                  focused === 'name'
                    ? 'border-white'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type='email'
                placeholder='Email'
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                className={`w-full px-4 py-3 bg-black border-2 rounded-xl text-white placeholder-gray-600 transition-all duration-200 focus:outline-none ${
                  focused === 'email'
                    ? 'border-white'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type='password'
                placeholder='Password'
                onFocus={() => setFocused('password')}
                onBlur={() => setFocused(null)}
                className={`w-full px-4 py-3 bg-black border-2 rounded-xl text-white placeholder-gray-600 transition-all duration-200 focus:outline-none ${
                  focused === 'password'
                    ? 'border-white'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              />
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full mt-6 bg-white text-black font-bold py-3 rounded-full transition-all duration-200 hover:bg-gray-200 active:bg-gray-300'
            >
              Sign up
            </button>
          </form>

          {/* Footer */}
          <div className='text-center pt-4 border-t border-gray-700'>
            <p className='text-gray-600 text-sm'>
              Already have an account?{' '}
              <Link to='/loginpage'>
                {' '}
                <a href='#' className='text-white font-bold hover:underline'>
                  Sign in
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
