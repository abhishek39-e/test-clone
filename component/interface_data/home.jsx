import React from 'react';
import Navbar from '../Navbar/Navbar';
import Content from '../Content/content';

const Home = () => {
  return (
    <>
      <div className='x_clone_container-x1 flex h-screen w-full justify-around bg-black text-white'>
        <div className='x_clone_nav '>
          <Navbar />
        </div>
        <div className='xclone_content'>
          <Content />
        </div>
        //h
        <div className='xclone_following'>Following</div>
      </div>
    </>
  );
};
export default Home;
