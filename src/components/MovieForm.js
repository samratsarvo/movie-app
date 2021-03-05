import React,{useState} from 'react'
import {v4 as uuid} from 'uuid'
import {useDispatch} from 'react-redux'
import {addMovie} from '../actions/movieAction'

export default function MovieForm(){
    const dispatch = useDispatch()
    const [movieName , setMovieName] = useState('')
    const [rating , setRating] = useState('') 

    const handleChanges =(e)=>{
        const input = e.target.name
        if(input === "movieName"){
            setMovieName(e.target.value)
        } else if(input === 'rating'){
            setRating(e.target.value)
        }
    }
    const handleForm =(e)=>{
        e.preventDefault()
        const formData = {
            id:uuid(),
            MovieName: movieName,
            Rating : Number(rating)
        }
        //console.log(formData)
        dispatch(addMovie(formData))
        
        setMovieName('')
        setRating('')

    }
    return(
        <div>
            <h2 className = 'display-3'>Add Movie</h2>
            <form onSubmit ={handleForm}>
                <input type ="text" placeholder = 'Enter Movie Name' className ="form-control" onChange ={handleChanges} value ={movieName} name = 'movieName'/><br/>

                <input type ="number" placeholder = 'IMDB Ranking' className= "form-control" onChange ={handleChanges} value ={rating} name ='rating'/><br/>

                <button type="submit" className="btn btn-primary">ADD</button>
                {/* <input type ='submit' className ="" value= 'ADD'/> */}
            </form>
        </div>
    )
}