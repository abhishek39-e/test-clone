import React from 'react';

const Content = () => {
  return (
    <div>
      <div className='xclone-content-post '>
        <div className='xclone-post-form-container p-6 border border-gray-700 border-solid'>
          <div className='post-show-profile'></div>
          <div className='post-from'>
            <input
              type='text'
              placeholder='What is happening?!'
              className='text-gray-200 border-0 outline-0'
            />
            <input
              type='submit'
              value='post'
              className='bg-sky-500 m-2 px-5 py-2 border rounded-4xl border-0 cursor-pointer'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
