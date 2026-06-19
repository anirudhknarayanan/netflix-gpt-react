import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
 
console.log("Now Playing:", movies.nowPlayingMovies?.[4]?.title);
console.log("Popular:", movies.popularMovies?.[4]?.title);

  return (
    <div className="relative z-20 bg-black -mt-52 md:-mt-64 pl-6">
      <MovieList
        title="Now Playing"
        movies={movies.nowPlayingMovies}
      />
       <MovieList
        title="poppular movies"
        movies={movies.popularMovies}
      />
      
    </div>
  );
};

export default SecondaryContainer
