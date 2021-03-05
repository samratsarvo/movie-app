import React from 'react'
import MovieForm from './MovieForm'
import MovieList from './MovieList'
import MovieStats from './MovieStats'

export default function MovieContainer(){
    return(
        <div className ="row">
            <div className ="col-md-8">
                <MovieList/>
            </div>
            <div className ="col-md-4 mb-3">
                <MovieForm/>  
                <MovieStats/>
            </div>
        </div>
    )
}