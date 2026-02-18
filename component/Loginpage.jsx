import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Loginpage = () => {
  const [focused, setFocused] = useState(null);
  return (
    <>
      <div className='min-h-screen bg-black flex justify-center items-center p-4'>
        {/* Sign In Card */}
        <div className='w-full max-w-md'>
          <div className='bg-black border border-gray-700 rounded-2xl p-8 space-y-6'>
            {/* X Logo / Headerr */}
            <div className='text-center space-y-4'>
              <div className='text-4xl font-black text-white'>𝕏</div>
              <h1 className='text-2xl font-bold text-white'>Sign in to X</h1>
            </div>

            {/* Form */}
            <form className='space-y-4'>
              {/* Email Input */}
              <div>
                <input
                  type='email'
                  placeholder='Email or username'
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

              {/* Forgot Password Link */}
              <div className='text-right'>
                <a
                  href='#'
                  className='text-blue-500 hover:text-blue-400 text-sm font-medium transition-colors'
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full mt-6 bg-white text-black font-bold py-3 rounded-full transition-all duration-200 hover:bg-gray-200 active:bg-gray-300'
              >
                Sign in
              </button>
            </form>

            {/* Divider */}
            <div className='flex items-center space-x-4'>
              <div className='flex-1 h-px bg-gray-700'></div>
              <span className='text-gray-600 text-sm'>or</span>
              <div className='flex-1 h-px bg-gray-700'></div>
            </div>

            {/* Social Sign In Options */}
            <div className='space-y-3'>
              <button
                type='button'
                className='w-full border-2 border-gray-700 text-white font-semibold py-3 rounded-full transition-all duration-200 hover:bg-gray-900 hover:border-gray-600'
              >
                Sign in with Google
              </button>
              <button
                type='button'
                className='w-full border-2 border-gray-700 text-white font-semibold py-3 rounded-full transition-all duration-200 hover:bg-gray-900 hover:border-gray-600'
              >
                Sign in with Apple
              </button>
            </div>

            {/* Footer */}
            <div className='text-center pt-4 border-t border-gray-700'>
              <p className='text-gray-600 text-sm'>
                Don't have an account?
                <Link to='/register'>
                  <a
                    href='#'
                    className='text-blue-500 font-bold hover:text-blue-400 transition-colors'
                  >
                    Sign up
                  </a>{' '}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
