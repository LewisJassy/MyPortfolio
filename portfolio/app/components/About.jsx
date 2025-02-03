import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

const About = (isDarkMode) => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt="user" className="w-ful rounded-3xl"/>
        </div>
        <div className="flex-1">
          <p className='mb-10 max-w-2xl font-Ovo'>
            Hello! I'm a passionate software engineer with a love for creating applications and solving problems that improve people's lives. With a strong foundation in JavaScript, Python, and C, I enjoy building user-friendly interfaces and bringing ideas to life through code.
            My journey in Software Engineering started a few years ago, and since then, I've been continuously learning and improving my skills. I have experience working with various frameworks and technologies, including AI, machine learning, and web development. When I'm not coding, I enjoy exploring new technologies, reading tech blogs, and contributing to open-source projects. Let's build something amazing together!
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon, iconDark, title, description}, index)=>(
              <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                <Image src={isDarkMode ? iconDark : icon} alt='title' className='w-7 mt-3'/>
                <h3 className='my-4 font-semibold text-gray-700 dark:text:white'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
              </li>
            ))}
          </ul>

          <h4 className='my-6 text-gray-700 font-Ovo dark:text-white/50'>Tool I use</h4>
          <ul className='flex item-center gap-3 sm:gap-5'>
              {toolsData.map((tool, index)=>(
                <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                  <Image src={tool} alt='tool' className='w-10 mr-2 sm:w-7'/>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
