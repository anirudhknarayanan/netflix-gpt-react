import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { addMovies } from "../utils/moviesSlice"

const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch()
    
  const getnowPlayingMovies = async()=>{
    let data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    let json = await data.json()
    
console.log("TMDB Response:", json);
console.log("Results:", json.results);
   dispatch(addMovies(json.results));

    
  }

  useEffect(()=>{
    getnowPlayingMovies()

  },[])
}


  export default useNowPlayingMovies