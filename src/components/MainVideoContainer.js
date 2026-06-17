import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const MainVideoContainer = ({ movieId }) => {
  

  const trailerVideo = useSelector(
    (store) => store.movies?.trailerVideo
  );

 useMovieTrailer(movieId)

  if (!trailerVideo) return null;

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
        title="Movie Trailer"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default MainVideoContainer;