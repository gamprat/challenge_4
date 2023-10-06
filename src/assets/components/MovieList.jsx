import React from 'react'
import { Link } from 'react-router-dom'

export const MovieList = (props) => {

  return (
    <div className='flex items-center justify-center pl-[68px]'>
    <Link to={'/Detail Page'}>
      <div className="relative w-[200px] h-[300px] m-4 rounded-lg overflow-hidden cursor-pointer">
        <img className='w-[200px] h-[300px] object-center object-cover items-center justify-center rounded-lg hover:scale-110' src={`https://image.tmdb.org/t/p/original/${props.dataMovie.backdrop_path}`}></img>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-end pb-3 text-white">
          <h3 className='text-center'>{props.dataMovie.title}</h3>
        </div>
      </div>
      </Link>
    </div>
  )
}
