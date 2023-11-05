import React, { useEffect, useRef, useState } from 'react'
import MovieCard from './MovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';

const MovieList = ({genreId, index_}) => {
    const [movieById, setMovieById] = useState([])

    const elementRef = useRef(null)

    useEffect(()=>{
        getMovieByGenreId(genreId)
    },[])
    
    const getMovieByGenreId = async (id)=>{
        const a = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=bc6dede044dc8ffe150106dd53551658&with_genres='+id)
        const data = await a.json()
        setMovieById(data.results)
        console.log(data.results)
    }

    const sliderLeft = (element)=>{
      element.scrollLeft-=500
    }
    const sliderRight = (element)=>{
      element.scrollLeft+=500
    }

  return (
    <div className='relative'>
        <IoChevronBackOutline className={`hidden md:block text-white text-[30px] absolute mx-8  cursor-pointer bg-transparent z-[1] ${index_%3==0?'mt-[80px]':'mt-[160px]'}`}onClick={()=>sliderLeft(elementRef.current)}/>
      <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-10'>
          {movieById.map((item, i)=>(
            <>
              {index_%3 == 0?<HrMovieCard movie={item}/> : <MovieCard movie={item}/>}      
            </>
          ))}
      </div>
        <IoChevronForwardOutline className={`hidden md:block text-white text-[30px] absolute top-0 right-0 my-8 cursor-pointer bg-transparent z-[10] ${index_%3==0?'mt-[80px]':'mt-[160px]'}`} onClick={()=>sliderRight(elementRef.current)}/>
        
    </div>
  )
}

export default MovieList