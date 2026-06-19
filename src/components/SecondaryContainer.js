import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
 


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

      <MovieList
        title="Top Rated"
        movies={movies.topRatedMovies}
      />

      <MovieList
        title="Upcoming Movies"
        movies={movies.upcomingMovies}
      />

      
    </div>
  );
};

export default SecondaryContainer
