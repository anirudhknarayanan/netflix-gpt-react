import React from 'react'
import Header from './Header'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'

const GtpSearch = () => {
  return (
    <div>
     
      <div className="relative h-screen">
      <img
        className="absolute h-screen w-full object-cover"
        src={BG_URL}
        alt="background"
      />
      
       <GptSearchBar/>

      </div>

    </div>
  )
}

export default GtpSearch
