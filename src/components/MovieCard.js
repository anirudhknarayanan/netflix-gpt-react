import React from 'react'
import { POSTER_URL } from '../utils/constants'

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 flex-shrink-0 transition-all duration-300 hover:scale-110 hover:z-30">
      <img
        src={POSTER_URL + posterPath}
        alt={title}
        className="rounded-md"
      />
    </div>
  );
};

export default MovieCard
