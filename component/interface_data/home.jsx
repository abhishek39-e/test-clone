import React from 'react';
import Navbar from '../Navbar/Navbar';
import Content from '../Content/content';

const Home = () => {
  return (
    <>
      <div className='x_clone_container-x1 flex h-screen w-full bg-black text-white'>
        <div className='x_clone_nav grow max-w-100px'>
          <Navbar />
        </div>
        <div className='xclone_content grow-2'>
          <Content />
        </div>
        <div className='xclone_following grow-2'>Following</div>
      </div>
    </>
  );
};
export default Home;
