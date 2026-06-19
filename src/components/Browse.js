
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies()
  return (
    <div className="bg-black overflow-x-hidden min-h-screen">
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  )
}

export default Browse
