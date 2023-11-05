import React from 'react'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

const HrMovieCard = ({movie}) => {
  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in p-2 '>
      <img src={IMAGE_BASE_URL+movie.backdrop_path} className='w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer
        ' />
        <h2 className='text-white w-[110px] md:w-[260px] pt-[20px]'>{movie.title}</h2>
    </section>
  )
}

export default HrMovieCard