import React from 'react';
import navbar from '../Navbar/navbar';

const Home = () => {
  return (
    <>
      <div className='x_clone_container-x1 flex h-screen w-full justify-around'>
        <div className='x_clone_nav '>
          <navbar />
        </div>
        <div className='xclone_content'>Content</div>
        <div className='xclone_following'>Following</div>
      </div>
    </>
  );
};
export default Home;
