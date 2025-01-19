import React from 'react'
import Image from 'next/image'
import { serviceData, assets } from '@/assets/assets'

const Services = () => {
  return (
    <div id="Services" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>What I Offer</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Services</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I am a software engineer from Nairobi, Kenya with 2 years of experience in personal and open source software.
        </p>

        <div className="grid grid-cols-auto gap-6 gap-6 my-10">
            {serviceData.map(({icon, title, descritpion, link}, index)=>(
                <div key={index} 
                className='border border-gray-400 rounded-lg px-6 py-8 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black hover: bg-lightHover'>
                    <Image src={icon} alt="" className='w-10'/>
                    <h3 className='text-lg my 4 text-gray-700'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5'>{descritpion}</p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read more <Image src={assets.right_arrow} className='w-4' alt='right arrow' />
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services
