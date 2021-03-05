export const addMovie =(data)=>{
    return{
        type:"AddMovie",
        payload : data
    }
}

//Remove action 

export const remove =(id)=>{
    return{
        type : "REMOVE",
        payload : id
    }
}