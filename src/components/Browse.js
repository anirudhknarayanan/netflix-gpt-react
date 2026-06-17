import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'

const Browse = () => {
  const getnowPlayingMovies = async()=>{
    let data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    let json = await data.json()
    console.log(json);
    
  }

  useEffect(()=>{
    getnowPlayingMovies()

  },[])
  return (
    <div>
    <Header/>
    </div>
  )
}

export default Browse
