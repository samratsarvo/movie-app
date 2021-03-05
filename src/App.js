import React from 'react'
import MovieContainer from './components/MovieContainer'

export default function App(){
  return (
    <div className = "container">
      <h2 className ='display-3'>My Big Movie List </h2>
      <MovieContainer/>
    </div>
  )
}