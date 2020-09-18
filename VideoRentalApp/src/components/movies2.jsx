import React, { Component } from 'react';
import {getMovies } from '../services/fakeMovieService';
class Movies extends Component {
    state = { 
        movies : getMovies()
     };
     handleDelete = (movie) =>{
     console.log(movie)
     const movies = this.state.movies.filter(m =>  m._id !== movie._id );
     this.setState({movies});
     };
    render() { 
       if( this.state.movies.length === 0) return  <h1><p>there are no movies in database..!</p></h1>
        return ( 
            <React.Fragment>
        <h1><p>showing {this.state.movies.length}  movies in the database...!</p></h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rent</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie =>
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button onClick={() =>this.handleDelete(movie)} className="btn btn-danger btn-sm">terminate</button></td>
                    </tr> )}
                    
                </tbody>
            </table></React.Fragment>
         );
    }
}
 
export default Movies;