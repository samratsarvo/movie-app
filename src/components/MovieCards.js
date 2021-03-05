import React from 'react'
import {useDispatch} from 'react-redux'
import { remove } from '../actions/movieAction'

export default function Moviecards({id , MovieName , Rating }){
    const dispatch = useDispatch()
    const handleRemove =(id)=>{
        dispatch(remove(id))
    }
    
    return( 
            <div className ="row col-md-6 mb-3">
                <div className="card" style={{width: "18rem"}}>
                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                    <div className="card-body">
                        <h5 className="card-title">{MovieName}</h5>
                        <p className="card-text" style={{color:'orange'}}>IMDB_Rating # {Rating}</p>
                        <img  onClick ={()=>{handleRemove(id)}}
                        src="https://img.icons8.com/material-rounded/24/fa314a/delete-trash.png" alt ="remove icon"/>
                    </div>
                </div>   
            </div>
    )
}