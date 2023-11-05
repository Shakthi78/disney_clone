import React, { useEffect, useRef, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'
const screenWidth = window.innerWidth
const Slider = () => {
    const [movieList, setMovieList] = useState([])
    const elementRef = useRef()

    useEffect(()=>{
        getTrendingMovies()
    },[])

    const getTrendingMovies = async ()=>{
        const a = await fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=bc6dede044dc8ffe150106dd53551658')
        const ans = await a.json()
        setMovieList(ans.results)
        console.log(ans.results);
    } 

    const sliderRight = (element) => {
        element.scrollLeft+=screenWidth-130
    }
    const sliderleft = (element) => {
        element.scrollLeft-=screenWidth-130
    }

  return (
    <div>
        <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[160px] cursor-pointer bg-transparent' onClick={()=>sliderleft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute right-4 my-8 mt-[160px] cursor-pointer bg-transparent' onClick={()=>sliderRight(elementRef.current)}/>

        <div className='flex overflow-x-auto w-100% px-16 py-4 scrollbar-none scroll-smooth ' ref={elementRef}>
            {movieList.map((item, i)=>(
                <img src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[3px] border-gray-400 transition-all duration-100 ease-in'/>
            ))}
        </div>

    </div>
  )
}

export default Slider