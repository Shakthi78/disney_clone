import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'

const GenreMovieList = () => {
   
  return (
    <div>
        {GenresList.genre.map((item, i)=>{
            return i<=5 && <div className='p-4 px-8 md:px-16'>
                <h2 className='text-[25px] font-bold '>{item.name}</h2>
                <MovieList genreId={item.id} index_={i} />
            </div>
        })}
    </div>
  )
}

export default GenreMovieList