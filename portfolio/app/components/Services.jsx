import React from 'react'
import Image from 'next/image'
import { serviceData, assets } from '@/assets/assets'
import { motion } from 'motion/react'

const Services = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id="Services" className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo'>What I Offer</motion.h4>

      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-Ovo'>My Services</motion.h2>

        <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I am a software engineer from Nairobi, Kenya with 2 years of experience in personal and open source software.
        </motion.p>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.9, delay: 0.6}}
        className="grid grid-cols-auto gap-6 gap-6 my-10">
            {serviceData.map(({icon, title, description, link}, index)=>(
                <motion.div 
                whileHover={{scale: 1.05}}
                key={index} 
                className='border border-gray-400 rounded-lg px-6 py-8 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black hover: bg-lightHover dark:hover:bg-darkHover dark:hover:shadow-white'>
                    <Image src={icon} alt="" className='w-10'/>
                    <h3 className='text-lg my 4 text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white/50'>{description}</p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read more <Image src={assets.right_arrow} className='w-4' alt='right arrow' />
                    </a>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services
