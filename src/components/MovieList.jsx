import React, { useEffect, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard'

function MovieList({genreId}) {
    const [movieList, setMovieList ]= useState([])

    useEffect(()=> {
        getMovieByGenreId()
    }, [])


    const  getMovieByGenreId = () =>{
        GlobalApi.getMovieByGenreId(genreId).then(res => {
            // console.log(res.data.results)
            setMovieList(res.data.results)
        })
    }
  return (
    <div className='flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-10'>
        {movieList.map((item, index) => (
            <MovieCard item={item} key={index}/>
        ))}
    </div>
  )
}

export default MovieList