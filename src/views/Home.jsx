import * as React from 'react';
import MovieCard from '../components/MovieCard';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import axios from '../config/axiosBase';

function Home() {
  const[movieList, setMovieList] = useState([])
  

  useEffect(() => {
    async function fetchData(){
      let moviesArray = []
      let request = await axios.get('movie/popular'+process.env.REACT_APP_API_KEY);
      moviesArray.push(request.data.results);

      request = await axios.get('movie/top_rated'+process.env.REACT_APP_API_KEY);
      moviesArray.push(request.data.results);

      // ENDPOINT NOT WORKING
      // request = await axios.get('movie/latest'+process.env.REACT_APP_API_KEY);
      // movies.push(request.data.results);


      let movies = []
      for (var i = 0; i < moviesArray.length; i++) {
        for (var j = 0; j < moviesArray[0].length; j++) {
          movies.push(moviesArray[i][j])
          
        }
      }
    
      setMovieList(movies);

      return request;
    }

    fetchData();
    
  }, []);



  const renderMovies = () => {

    return movieList.map((movie) => (
      <MovieCard movie={movie} key={movie.id}/>
    ));
  };
  
  
 console.log(movieList);
  const styleGrid = {
    maxWidth:'100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)' ,
    textAlign:'center'
  }
  return (
    
      <Box 
        direction="column"
        alignItems="center"
        justifyContent="center" 
        sx={styleGrid}
      >
        {renderMovies()}
      </Box>
    
  )
}

export default Home