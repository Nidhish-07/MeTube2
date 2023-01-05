import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"

const NavBar = () => {
    return (
        <div className='sticky top-0 bg-white h-14 '>
            <div className='flex justify-end relative items-center h-full py-0 px-5'>
                <div className='absolute left-0 right-0 mx-auto flex w-1/2 items-center justify-between p-1 border-[1px] border-solid border-gray-400'>
                    <input placeholder='Search' className='border-none bg-transparent'></input>
                    <AiOutlineSearch size={24} fontWeight={"bold"}></AiOutlineSearch>
                </div>
                <button className='py-1 px-4 bg-transparent border-blue-400 text-blue-400 border-[1px] font-medium cursor-pointer'>Sign In</button>
            </div>

        </div>
    )
}

export default NavBar