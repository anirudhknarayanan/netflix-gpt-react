import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import {addPopularMovies } from "../utils/moviesSlice"

const usePopularMovies = ()=>{

    const dispatch = useDispatch()
    
  const getpopularMovies = async()=>{
    let data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    let json = await data.json()
    

   dispatch(addPopularMovies(json.results));

    
  }

  useEffect(()=>{
    getpopularMovies()

  },[])
}


  export default usePopularMovies