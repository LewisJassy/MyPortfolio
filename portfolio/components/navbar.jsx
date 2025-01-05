import React from 'react'

const navbar = () => {
  return (
    <>
      <nav>
        <a href="">
            <image src={assets.logo} className='w-28 cursor-pointer mr-14' />
        </a>
        <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">My Work</a></li>
            <li><a href="#contact">Contact Me</a></li>
        </ul>

        <div>
            <a href="#contact">Contact <image src={assets.arrow_icon} className='w-3'/></a>
        </div>
      </nav>
    </>
  )
}

export default navbar
