import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo1} alt='' className='w-36 mx-auto mb-2'/>

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='logo' className='w-6'/>
          jassylewis70@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&copy; {currentYear} Lewis Njaci. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href="https://github.com/LewisJassy">GitHub</a></li>
          <li><a target='_blank' href="www.linkedin.com/in/lewis-jassy-3ba224264">LinkedIn</a></li>
          <li><a target='_blank' href="https://x.com/lewis_jassy">Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
