import React from 'react'

const Card = () => {
    return (
        <div className='cursor-pointer mb-11 w-[360px]'>
            <img src="https://source.unsplash.com/random?video" alt="video" className='w-full h-52 bg-slate-600' />
            <div className='flex mt-4 gap-3'>
                <img src='https://source.unsplash.com/random?channel' alt='channel' className='w-9 h-9 rounded-full bg-slate-600'></img>
                <div>
                    <h1 className='text-xl font-bold'>Testing Video...</h1>
                    <h2 className='text-sm my-2 mx-0 font-semibold text-gray-600'>Metube2</h2>
                    <p>69,999 views &#9679; 1 day ago</p>
                </div>
            </div>
        </div>
    )
}

export default Card