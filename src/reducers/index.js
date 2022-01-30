import { ADD_MOVIES, ADD_MOVIE_TO_LIST } from '../actions'   ;
import { ADD_FAVOURITE } from '../actions' ;
import { REMOVE_FAVOURITE } from '../actions' ;
import { SET_SHOW_FAVOURITES } from '../actions' ;
import { combineReducers } from 'redux' ;
import { ADD_SEARCH_RESULT } from '../actions' ;




const initialMoviesState = {
    list : [] ,
    favourites : [] , 
    showfavourites : false 
}
export function movies (state = initialMoviesState , action) {

  
    switch(action.type){
        case ADD_MOVIES : 
                return {
                    ...state ,
                    list : action.movies
                }
        
        
        case ADD_FAVOURITE : 
        
                return {
                    ...state ,
                    favourites : [action.movie , ...state.favourites]
                }
        
        case REMOVE_FAVOURITE : 
                 const filteredArray = state.favourites.filter(
                     movie => movie.Title !== action.movie.Title
                 ) ;

                 return {
                     ...state ,
                     favourites : filteredArray 
                 };
        
        case SET_SHOW_FAVOURITES :
           
            return {
                ...state , 
                showfavourites : action.val
            }
        
        case ADD_MOVIE_TO_LIST : 
        return {
            ...state ,
            list : [action.movie , ...state.list]
        }
        default : 
            return  state  ;
    }

}


const initialSearchState = {
    result : {} , 
    showSearchResults : false 
}
export function search (state = initialSearchState , action)
{
    //ADD_SEARCH_RESULT
   if(action.type === ADD_SEARCH_RESULT)
   {
       return {
           ...state , 
           result : action.movie ,
           showSearchResults : true 
       }
   }
   if(action.type == ADD_MOVIE_TO_LIST)
   {  
         return {
        ...state ,
        showSearchResults : false  
        }
   }
   return state ;
}




// export default function rootReducers (state = initialRootState, action){
//     return {
//         movies : movies(state.movies, action) ,
//         search : search(state.search  , action)
//     }
// }


export default combineReducers({
    movies : movies , 
    search : search 
})

