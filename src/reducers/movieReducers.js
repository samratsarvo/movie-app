const movieInitialValue = []

export default function movieReducer(state = movieInitialValue , action){

    switch(action.type){
        case "AddMovie" :{
            return [...state ,{...action.payload}]
        }

        case "REMOVE" : {
            return state.filter( ele=> ele.id !== action.payload)
        }
        
        default :{
            return [...state]
        }
    }
}