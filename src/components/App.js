import React from 'react' ;

import NavBar from './Navbar' ;
import MovieCard from './MovieCard' ;
import { addMovies, setshowfavourites } from '../actions' ;
import {connect} from 'react-redux' ;
import { data as moviesList } from '../data';

class App extends React.Component { 
  

  componentDidMount() {
    this.props.dispatch(addMovies(moviesList));
  }

  isMoviefavourite = (movie) => {
    const { movies } = this.props ;
    const index = movies.favourites.indexOf(movie) ;
    
    if(index !== -1)
    {
      //found the movie in fav list ; 
      return true ;
    }
    return false ;
    
  } 


  onChangeTab = (val) => {
 
    this.props.dispatch(setshowfavourites(val))
  }
  render(){

  const {movies , search } = this.props; ;
  const { list , favourites , showfavourites } = movies ; 
  console.log("Rendering") ;
  const displayMovies = showfavourites ? favourites : list ; 

  return (
    <div className="App">
        <NavBar search={search}/>


        <div className = "main">
           <div className = "tabs">
             <div className = "tab" onClick = {()=> this.onChangeTab(false)}>Movies</div>
             <div className = "tab" onClick = {()=> this.onChangeTab(true)}>Favourites</div>
           </div>
           <div className = "list">
               {displayMovies.map((movie,index) => (
                 < MovieCard 
                 movie={movie} 
                 key = {index} 
                 dispatch = {this.props.dispatch}
                 isfavourite = {this.isMoviefavourite(movie)}/>
                ))}
           </div>
         {displayMovies.length === 0 ? <div className = "no-movies"> No Movies to display !</div> : null }
        </div>
    </div>
  );
  
  }
}



function callback(state){
  return {
    movies : state.movies , 
    search : state.movies 
  }
}

const connectedAppComponent = connect(callback)(App) ;
export default connectedAppComponent ;


