import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaWallet, FaUserFriends} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false);

  return (
    <div className='max-w-screen-2xl mx-auto flex justify-between items-center p-4'>
        {/* Left side */}
        <div className='flex items-center'>
            <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30} />
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Best <span className='font-bold'>Eats</span>{' '}
            </h1>
            <div className='hidden md:flex items-center bg-gray-200 rounded-full p-1 text-sm' >
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>

        {/* Search Input */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-52 sm:w-80 lg:w-[500px]'>
            <AiOutlineSearch size={25}/>
            <input type="text" placeholder='Search foods'
                className='bg-transparent p-2 w-full focus:outline-none'
            />
        </div>

        {/* Cart button */}
        <button className='rounded-full bg-black text-white hidden md:flex items-center py-2'>
            <BsFillCartFill size={20} className='mr-2'/> Cart
        </button>

    {/* Mobile Menu */}
    {/* Overlay */}
    {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
    

    {/* Side drawer menu */}
    <div className={nav ? 'fixed top-0 left-0 w-80 h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-80 h-screen bg-white z-10 duration-300'} >
        <AiOutlineClose onClick={() => setNav(!nav)} size={25} className='absolute right-4 top-4 cursor-pointer'/>
        <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-3 flex border-b-2 border-gray-300'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-xl py-3 flex border-b-2 border-gray-300'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li className='text-xl py-3 flex border-b-2 border-gray-300'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-3 flex border-b-2 border-gray-300'><MdHelp size={25} className='mr-4' /> Helps</li>
                <li className='text-xl py-3 flex border-b-2 border-gray-300'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-3 flex border-b-2 border-gray-300'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-3 flex border-b-2 border-gray-300'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
        </nav>
    </div>
    </div>

  )
}

export default Navbar