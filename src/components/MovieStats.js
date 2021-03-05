import React from 'react'
import {useSelector} from 'react-redux'

export default function MovieStats(){
    const list  = useSelector((state)=>{
        return(
            state.movie
        )
    })
    
    const sortedArray = list.map(element=>element.Rating)
    const result = Math.min(...sortedArray)
    // const result = sortedArray.sort((a,b)=>{
    //     return a - b // 
    // }) //  ascending order 
     const rank = list.filter(ele=> ele.Rating === result)
     //console.log('expacted array',rank)

    return(
        <div className = 'row' >
            <h2 className  = 'display-3' style={{color:"GrayText"}}>Movie stats</h2>
            <div class="card w-100">
                <div class="card-body">
                    <h3 class="card-title">Totalmovies - {list.length}</h3>
                    <h3 class="card-title">Top Movie - {rank.length}</h3>
                    <div>
                            <ul>
                                {rank.map((ele,i)=>{
                                    return (
                                        <li key={i}><p>{ele.MovieName}</p></li>
                                    )
                                })}
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}