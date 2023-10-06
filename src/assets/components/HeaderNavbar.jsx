import React from 'react'

export const HeaderNavbar = () => {

  return (
    <div className='flex justify-between px-4 py-4 items-center'>
        <div>
            <h1 className='text-[40px] font-bold text-[red]'>Movielist</h1>
        </div>
        <div className='flex flex-row justify-between items-center'>
            <input className='text-white rounded-2xl border-[red] border-[2px] bg-transparent w-[350px] p-2 placeholder-[white]' type='text' placeholder='What do you want to watch?'></input> 
            <button type='submit' className='absolute text-white items-center ml-[300px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </button>
        </div>
        <div className='flex space-x-2 items-center'>
            <a className='border-[red] border-[2px] bg-transparent  px-[10px] py-[5px] rounded-xl text-[red] cursor-pointer' href='#'>Login</a>
            <a className='border-[red] border-[2px] bg-[red]  px-[10px] py-[5px] rounded-xl text-[white] cursor-pointer' href='#'>Register</a>
        </div>
    </div>
  )
}
