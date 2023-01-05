import React from 'react'
import { AiFillHome, AiFillCompass, AiOutlineHistory, AiOutlineFlag } from "react-icons/ai"
import { MdSubscriptions, MdVideoLibrary, MdLibraryMusic, MdSportsBasketball, MdVideogameAsset, MdLocalMovies, MdOutlineLiveTv, MdHelpOutline, MdOutlineLightMode, MdSettings } from "react-icons/md"
import { BiNews } from "react-icons/bi"

const Menu = () => {
    return (
        <div className='flex-1 bg-zinc-800 max-h-[100vh] text-white text-sm sticky top-0 z-50'>
            <div className='py-4 px-6'>
                <div className='flex items-center gap-2 font-bold mb-6'>
                    <img src="https://source.unsplash.com/random?logo" alt="logo" className='h-7 ' />
                    MeTube2
                </div>
                <div className='flex items-center gap-5 cursor-pointer py-2 px-0'>
                    <AiFillHome size={20}></AiFillHome>
                    Home
                </div>
                <div className='flex items-center gap-5 cursor-pointer py-2 px-0'>
                    <AiFillCompass size={20}></AiFillCompass>
                    Explore
                </div>
                <div className='flex items-center gap-5 cursor-pointer py-2 px-0'>
                    <MdSubscriptions size={20}></MdSubscriptions>
                    Subscriptions
                </div>
                <hr className='my-4 mx-0 border-gray-200 ' />
                <div className='flex items-center gap-5 cursor-pointer py-2 px-0'>
                    <MdVideoLibrary size={20}></MdVideoLibrary>
                    Library
                </div>
                <div className='flex items-center gap-5 cursor-pointer py-2 px-0'>
                    <AiOutlineHistory size={20}></AiOutlineHistory>
                    History
                </div>
                <hr className='my-4 mx-0 border-gray-200 ' />
                <div className='flex flex-col gap-2 items-center'>
                    Sign in to enjoy
                    <button className='py-1 px-4 bg-transparent border-blue-400 text-blue-400 border-[1px] font-medium mt-2 cursor-pointer'>Sign In</button>
                </div>
                <hr className='my-4 mx-0 border-gray-200 ' />
                <div className='flex items-center gap-5 cursor-pointer py-2 px-0'>
                    <MdLibraryMusic size={20}></MdLibraryMusic>
                    Music
                </div>
                <div className='flex items-center gap-5 cursor-pointer py-2 px-0'>
                    <MdSportsBasketball size={20}></MdSportsBasketball>
                    Sports
                </div>
                <div className='flex items-center gap-5 cursor-pointer py-2 px-0'>
                    <MdVideogameAsset size={20}></MdVideogameAsset>
                    Games
                </div>
                <div className='flex items-center gap-5 cursor-pointer py-2 px-0'>
                    <MdLocalMovies size={20}></MdLocalMovies>
                    Movies
                </div>
                <div className='flex items-center gap-5 cursor-pointer py-2 px-0'>
                    <BiNews size={20}></BiNews>
                    News
                </div>
                <div className='flex items-center gap-5 cursor-pointer py-2 px-0'>
                    <MdOutlineLiveTv size={20}></MdOutlineLiveTv>
                    Live
                </div>
                <hr className='my-4 mx-0 border-gray-200 ' />
                <div className='flex items-center gap-5 cursor-pointer py-2 px-0'>
                    <MdSettings size={20}></MdSettings>
                    Settings
                </div>
                <div className='flex items-center gap-5 cursor-pointer py-2 px-0'>
                    <AiOutlineFlag size={20}></AiOutlineFlag>
                    Report
                </div>
                <div className='flex items-center gap-5 cursor-pointer py-2 px-0'>
                    <MdHelpOutline size={20}></MdHelpOutline>
                    Help
                </div>
                <div className='flex items-center gap-5 cursor-pointer py-2 px-0'>
                    <MdOutlineLightMode size={20}></MdOutlineLightMode>
                    Light Mode
                </div>
            </div>
        </div>
    )
}

export default Menu