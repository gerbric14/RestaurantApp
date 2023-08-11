import React from 'react'
import ImgH1 from '../assets/h1.jpeg'
import ImgH2 from '../assets/h2.jpeg'
import ImgH3 from '../assets/h3.jpeg'

const HeadlineCards = () => {
  return (
    <div className='max-w-screen-2xl mx-auto  p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Cards */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Hamburger & French Fries</p>
                <p className='px-2 '>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img src={ImgH1} alt="Imagen1"
                className='max-h-40 md:max-h-[200px] w-full object-cover rounded-xl'
            />
        </div>

                {/* Cards */}
                <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Hamburger & French Fries</p>
                <p className='px-2 '>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img src={ImgH2} alt="Imagen1"
                className='max-h-40 md:max-h-[200px] w-full object-cover rounded-xl'
            />
        </div>


                {/* Cards */}
                <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Hamburger & French Fries</p>
                <p className='px-2 '>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img src={ImgH3} alt="Imagen1"
                className='max-h-40 md:max-h-[200px] w-full object-cover rounded-xl'
            />
        </div>

    </div>
  )
}

export default HeadlineCards