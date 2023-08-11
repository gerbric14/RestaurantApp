import React from 'react'
import {categories} from '../data/data.js'

const Category = () => {
    console.log(categories)
  return (
    <div className='max-w-screen-2xl m-auto px-4 py-12 '>
        <h1 className='text-orange-500 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/* Categories */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
            {categories.map((item, index) => (
                <div key={index} className='bg-gray-200 rounded-lg flex justify-between items-center'>
                    <h2 className='font-bold sm:text-xl pl-2'>{item.name}</h2>
                    <img src={item.image} alt={item.name}  className='w-20'/>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Category