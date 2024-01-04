import React from 'react'

const BottomMost = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-center'>
  <div className="social-media flex space-x-4 mb-4">
    <a href="https://github.com/c-o-d-e-y-o-d-a"><img src="/github.png" alt="Github" id="social-media" className='w-10 h-10'/></a>
    <a href="https://www.instagram.com/n_g_2021/"><img src="/insta.png" alt="Instagram" id="social-media" className='w-10 h-10'/></a>
    <a href="https://twitter.com/Nischal7171"><img src="/twitter.png" alt="Twitter" id="social-media" className='w-10 h-10'/></a>
    <a href="https://leetcode.com/nischal_gautam/"><img src="/leetcode.png" alt="LeetCode" id="social-media" className='w-10 h-10'/></a>
    <a href="https://www.linkedin.com/in/nischal-gautam-786887194/"><img src="/linkedin.png" alt="Linkedin" id="social-media" className='w-10 h-10'/></a>
  </div>
  <p className='text-white font-bold flex'>
   Copyright © 2023 Nischal Gautam. All Rights Reserved.
  </p>
</div>

  )
}

export default BottomMost
