import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div 
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}>
        <Image src={assets.profile_img} alt="Profile Image" className='rounded-full w-32 h-32 mx-auto' /> 
      </motion.div>
      <motion.h3
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.3}}
       className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! I'm Lewis Njaci <Image src={assets.hand_icon} alt='Hand Icon' className='w-6' />
      </motion.h3>
    
      <motion.h1
      initial={{y: -30, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay: 0.5}}
       className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Software engineer based in Kenya.
      </motion.h1>
      <motion.p
      initial={{y: -30, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.7}}
       className='max-w-2xl mx-auto font-Ovo'>
        I am a software engineer from Nairobi, Kenya, passionate about building impactful and innovative solutions in software development and artificial intelligence.
        I enjoy leveraging technology to solve real-world problems and explore the potential of AI to shape the future.
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 1.2}}
         href="#contact" className='px-10 py-3 border rounded-full border-white flex items-center gap-2 bg-black text-white dark:bg-transparent'>
          Contact me <Image src={assets.right_arrow_white} alt='Right Arrow' className='w-4' />
        </motion.a>
        <motion.a
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 1}}
         href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2  bg-white dark:text-black'>
          My resume <Image src={assets.download_icon} alt='Download Icon' className='w-4' />
        </motion.a>
      </div>
    </div>
  )
}

export default Header