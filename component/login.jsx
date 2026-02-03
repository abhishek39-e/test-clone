import React from 'react';
// import Logo from '../public/xx-icon.svg';
import Logo from '../public/svgviewer-output.svg';

import LoginStuff from './loginSuff';

function Login() {
  return (
    <div className='login_page flex justify-between items-center w-full bg-black max-[767px]:flex-col'>
      <div className=' p-12 svg_images border-none border-solid border-sky-700 w-full flex justify-center items-center'>
        <img src={Logo} alt='' />
      </div>
      <div className='p-12 login_right border-none flex-col border-solid border-sky-700 w-full flex justify-center items-start'>
        <h1 className='my-9 text-gray-400 text-5xl font-semibold'>
          Hello Developers!!
        </h1>
        <LoginStuff />
      </div>
    </div>
  );
}

export default Login;
