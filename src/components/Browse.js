
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import { useSelector } from 'react-redux'
import GtpSearch from './GtpSearch'



const Browse = () => {
 useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const showGptSearch = useSelector(store=> store.gpt.showGptSearch)
  return (
    <div className="bg-black overflow-x-hidden min-h-screen">
    <Header/>
  {showGptSearch ?  <GtpSearch/> :
  <>
  <MainContainer/>
    <SecondaryContainer/>
  </>
    
    }
    </div>
  )
}

export default Browse
