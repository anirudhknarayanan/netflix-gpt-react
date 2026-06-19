import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="mb-8">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-3">
        {title}
      </h2>

     <div className="flex overflow-x-scroll scrollbar-hide gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;