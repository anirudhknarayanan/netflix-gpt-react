import React from 'react'
import MainVideoContainer from './MainVideoContainer'
import MainVideoTitle from './MainVideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return 

const mainMovie = movies[0]



    
    
  return (
    <div className="relative">
        <MainVideoTitle title={mainMovie.original_title} overview={mainMovie.overview}/>
      <MainVideoContainer movieId={mainMovie.id}/>
      
    </div>
  )
}

export default MainContainer
