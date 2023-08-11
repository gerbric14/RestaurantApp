import React from 'react'
import ImgFondo from '../assets/hamburguesaFondo.webp'

const Hero = () => {
  return (
    <div className='max-w-screen-2xl mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center'>
                <h1 className='px-4 w-full text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-4 w-full text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>Foods</span> Devlivered</h1>
            </div>

            <img src={ImgFondo} alt="fondo" 
                className='w-full max-h-[500px] object-cover'
            />
            </div>
    </div>
  )
}

export default Hero